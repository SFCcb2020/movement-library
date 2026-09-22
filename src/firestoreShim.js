// ============================================================================
// Compatibility shim: makes a set of Supabase tables LOOK like the
// Firestore-ish `db` capability the app was originally written against
// (window.claude.use("db")) -- collection(name).orderBy().limit().onSnapshot(cb),
// doc(id).update(payload)/.delete(), collection.add(data).
//
// Why bother, instead of rewriting the app's data calls directly against
// Supabase? The existing app (ported from generate_artifact.py) is ~5,500
// lines and already battle-tested against exactly this API shape -- dozens
// of Playwright tests exist for it. Reproducing that same interface here
// means the app's own code barely changes, which is a much smaller, much
// safer diff than rewriting every call site.
//
// This is the COACH-side adapter: every call here runs as the logged-in
// Supabase Auth user, and Row Level Security (see supabase/schema.sql)
// enforces that a coach only ever sees their own rows. The client-facing
// portal uses a different adapter (clientPortal.js) since a client never
// holds a Supabase session at all -- see that file for why.
// ============================================================================
import { supabase } from "./supabaseClient.js";

// Maps a collection name (as the app calls it, e.g. "clients") to the real
// Postgres table, the RPC used for partial (merge) updates, and which jsonb
// fields are ALSO mirrored onto their own real columns (for fast filtering/
// sorting/lookup without unpacking jsonb -- e.g. finding a client by access
// code, or a coach's clients ordered by name). `appField` is the name the
// app's own JS objects use (e.g. client.accessCode); `column` is the actual
// Postgres column name.
const TABLE_CONFIG = {
  clients: {
    table: "clients",
    updateRpc: "update_client_doc",
    idParam: "p_client_id",
    mirrors: [
      { appField: "name", column: "name" },
      { appField: "accessCode", column: "access_code" },
    ],
  },
  programs: {
    table: "programs",
    updateRpc: "update_program_doc",
    idParam: "p_program_id",
    mirrors: [
      { appField: "name", column: "name" },
      { appField: "clientId", column: "client_id" },
      // A program can now be assigned to several clients at once (a group
      // program) -- clientIds is the array of everyone assigned, mirrored
      // onto its own real column so a client with no Supabase session can
      // find "their" programs (see get_programs_for_code) without
      // unpacking jsonb. clientId above is kept only for any old program
      // saved before this existed; the app itself now always writes
      // clientIds.
      { appField: "clientIds", column: "client_ids" },
    ],
  },
  rehabCases: {
    table: "rehab_cases",
    updateRpc: "update_rehab_doc",
    idParam: "p_case_id",
    mirrors: [
      { appField: "name", column: "name" },
      { appField: "clientId", column: "client_id" },
    ],
  },
  nutritionPlans: {
    table: "nutrition_plans",
    updateRpc: "update_nutrition_doc",
    idParam: "p_plan_id",
    mirrors: [
      { appField: "name", column: "name" },
      { appField: "clientId", column: "client_id" },
    ],
  },
  customExercises: { table: "custom_exercises", updateRpc: null, idParam: null, mirrors: [] },
  messages: {
    table: "messages",
    updateRpc: "update_message_doc",
    idParam: "p_message_id",
    // createdAt is mirrored from the real (DB-generated, clock-skew-proof)
    // created_at column rather than something the app sets itself, so it
    // lines up exactly with what the client-side RPCs already return for
    // messages a client sends (see clientPortal.js's getMessagesForCode).
    mirrors: [
      { appField: "clientId", column: "client_id" },
      { appField: "createdAt", column: "created_at" },
    ],
  },
  // Leads submitted through the public ENQUIRE form on the launch screen
  // (see clientPortal.js's submitEnquiry -- unlike everything else in that
  // file, it isn't access-code-gated, since whoever fills it out isn't a
  // client yet). Rows are inserted by the SECURITY DEFINER submit_enquiry()
  // function, not through this shim's own .add() -- the coach side only
  // ever reads/updates them (status changes) from here.
  enquiries: {
    table: "enquiries",
    updateRpc: "update_enquiry_doc",
    idParam: "p_enquiry_id",
    mirrors: [
      { appField: "createdAt", column: "created_at" },
    ],
  },
};

function rowToDoc(config, row) {
  // The app expects data() to return everything EXCEPT id (it merges id back
  // in itself: Object.assign({id: d.id}, d.data())) -- see app.js's
  // clientsCol.onSnapshot handler. `doc` already holds the full nested shape
  // (tasks, weeklyGoals, agendaNotes, ...); mirrored columns get folded back
  // in under their app-side field names in case anything reads them before
  // the jsonb copy is present, or the two ever drift.
  const extra = {};
  for (const { appField, column } of config.mirrors) {
    if (row[column] !== undefined && row[column] !== null) extra[appField] = row[column];
  }
  return Object.assign({}, row.doc, extra);
}

function mirrorColumns(config, payload) {
  const columnSync = {};
  for (const { appField, column } of config.mirrors) {
    if (payload[appField] !== undefined) columnSync[column] = payload[appField];
  }
  return columnSync;
}

export function createDbShim(coachId) {
  return {
    collection(name) {
      const config = TABLE_CONFIG[name];
      if (!config) {
        throw new Error(`[firestoreShim] Unknown collection "${name}" -- add it to TABLE_CONFIG.`);
      }
      return makeCollectionRef(config, coachId, []);
    },
  };
}

function makeCollectionRef(config, coachId, orderRules) {
  return {
    orderBy(field, direction) {
      return makeCollectionRef(config, coachId, orderRules.concat([{ field, direction }]));
    },
    limit(n) {
      return makeCollectionRef(config, coachId, orderRules.concat([{ limitN: n }]));
    },
    onSnapshot(onNext, onError) {
      let cancelled = false;

      async function fetchAndEmit() {
        let query = supabase.from(config.table).select("*").eq("coach_id", coachId);
        for (const rule of orderRules) {
          if (rule.field) {
            query = query.order(mapOrderField(rule.field), { ascending: rule.direction !== "desc" });
          }
          if (rule.limitN) query = query.limit(rule.limitN);
        }
        const { data, error } = await query;
        if (cancelled) return;
        if (error) {
          console.error(`[firestoreShim] ${config.table} query failed`, error);
          if (onError) onError({ code: error.code || "unknown", message: error.message });
          return;
        }
        onNext({
          docs: data.map((row) => ({ id: row.id, data: () => rowToDoc(config, row) })),
        });
      }

      fetchAndEmit();

      // Realtime: re-fetch (simplest correct option for a table this small)
      // whenever any row in this coach's slice of the table changes, so every
      // open tab/device stays in sync -- the same behavior the app's tests
      // already exercise via a manually-fired snapshot.
      const channel = supabase
        .channel(`${config.table}-changes-${coachId}`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: config.table, filter: `coach_id=eq.${coachId}` },
          fetchAndEmit
        )
        .subscribe();

      return () => {
        cancelled = true;
        supabase.removeChannel(channel);
      };
    },
    doc(id) {
      return {
        async update(payload) {
          if (!config.updateRpc) {
            throw new Error(`[firestoreShim] "${config.table}" has no update RPC configured.`);
          }
          const params = { [config.idParam]: id, p_patch: payload };
          const { error } = await supabase.rpc(config.updateRpc, params);
          if (error) throw error;
          // Keep mirrored columns in sync whenever the jsonb patch touches
          // those fields -- the jsonb copy (just written above via the RPC)
          // stays the single source of truth for everything else.
          const columnSync = mirrorColumns(config, payload);
          if (Object.keys(columnSync).length) {
            await supabase.from(config.table).update(columnSync).eq("id", id);
          }
        },
        async delete() {
          const { error } = await supabase.from(config.table).delete().eq("id", id);
          if (error) throw error;
        },
      };
    },
    async add(data) {
      const insertRow = Object.assign({ coach_id: coachId, doc: data }, mirrorColumns(config, data));
      const { data: row, error } = await supabase
        .from(config.table)
        .insert(insertRow)
        .select("id")
        .single();
      if (error) throw error;
      return { id: row.id };
    },
  };
}

// The app orders by application-level field names ("name", "createdAt",
// "updatedAt"); each maps to the real snake_case column since those are
// normal columns here rather than something to pull out of jsonb. Missing
// "updatedAt" here was the bug behind "Couldn't load your saved programs
// (42703)" and the matching rehab/nutrition errors -- 42703 is Postgres for
// "that column doesn't exist," because the literal string "updatedAt" was
// being sent straight through instead of the real column, `updated_at`.
function mapOrderField(field) {
  if (field === "createdAt") return "created_at";
  if (field === "updatedAt") return "updated_at";
  if (field === "name") return "name";
  return field;
}
