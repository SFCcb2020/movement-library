// ============================================================================
// Client-side portal adapter. A client never gets a Supabase Auth account in
// this design -- they log in with the same short access code you already
// generate for them today, no email/password signup required on their end.
//
// That means they hold no Supabase session/JWT, so normal Row Level Security
// (which checks auth.uid()) can't recognize them at all. Instead, the two
// SECURITY DEFINER functions in supabase/schema.sql (login_with_access_code,
// update_client_by_code) check the access code themselves, server-side, and
// only then touch the row -- so a client genuinely cannot read or write
// anyone else's data no matter what they do in their browser's devtools,
// even though they're not "authenticated" in the Supabase Auth sense.
// ============================================================================
import { supabase } from "./supabaseClient.js";

const STORAGE_KEY = "sfc_client_access_code";

export function getSavedAccessCode() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch (e) {
    return ""; // Private browsing / blocked storage -- just ask again.
  }
}

function saveAccessCode(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch (e) {
    /* non-fatal -- they'll just need to re-enter the code next visit */
  }
}

export function clearSavedAccessCode() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
}

// Returns { id, name, doc } on success, or null if the code doesn't match
// any client. Does NOT throw on a bad code -- that's an expected, common
// case (typo), not an error condition.
export async function loginWithAccessCode(code) {
  const trimmed = (code || "").trim().toUpperCase();
  if (!trimmed) return null;
  const { data, error } = await supabase.rpc("login_with_access_code", { p_code: trimmed });
  if (error) {
    console.error("[clientPortal] login RPC failed", error);
    throw error;
  }
  if (!data || !data.length) return null;
  saveAccessCode(trimmed);
  return data[0];
}

// Same shallow-merge semantics as the coach-side shim's doc.update(payload):
// only the top-level keys named in `patch` are overwritten.
export async function saveClientPatch(code, patch) {
  const { error } = await supabase.rpc("update_client_by_code", {
    p_code: (code || "").trim().toUpperCase(),
    p_patch: patch,
  });
  if (error) throw error;
}

async function callForCode(rpcName, code) {
  const { data, error } = await supabase.rpc(rpcName, {
    p_code: (code || "").trim().toUpperCase(),
  });
  if (error) throw error;
  // clientId has to survive this round-trip as a real top-level field --
  // the app's own rendering code does things like `programsCache.filter(p
  // => p.clientId === client.id)` to work out which records belong to
  // whoever's logged in, exactly like it already does on the coach's side.
  return (data || []).map((row) =>
    Object.assign({ id: row.id, clientId: row.client_id, name: row.name }, row.doc)
  );
}

export async function getProgramsForCode(code) {
  return callForCode("get_programs_for_code", code);
}

// Persists a client's own logged sets (reps/weight per set, for progressive
// overload carry-over) back to their program. Previously a client could
// only READ their program -- whatever they logged lived in the browser tab
// only and vanished on reload. Scoped server-side to just the `days` tree,
// and only for a program that's confirmed to belong to this access code.
export async function saveProgramActualsForCode(code, programId, days) {
  const { error } = await supabase.rpc("update_program_actuals_for_code", {
    p_code: (code || "").trim().toUpperCase(),
    p_program_id: programId,
    p_days: days,
  });
  if (error) throw error;
}

export async function getRehabCasesForCode(code) {
  return callForCode("get_rehab_cases_for_code", code);
}

export async function getNutritionPlansForCode(code) {
  return callForCode("get_nutrition_plans_for_code", code);
}

// Messages don't fit callForCode's generic shape (no `name` column, and the
// ordering created_at needs to survive the round-trip as createdAt) so this
// gets its own small mapper instead.
export async function getMessagesForCode(code) {
  const { data, error } = await supabase.rpc("get_messages_for_code", {
    p_code: (code || "").trim().toUpperCase(),
  });
  if (error) throw error;
  return (data || []).map((row) =>
    Object.assign({ id: row.id, clientId: row.client_id, createdAt: row.created_at }, row.doc)
  );
}

// Sends a message as the client and hands back the row that was actually
// inserted (server-generated id/timestamp), so the UI can show it
// immediately without waiting on the next poll.
export async function sendMessageForCode(code, body) {
  const { data, error } = await supabase.rpc("send_message_for_code", {
    p_code: (code || "").trim().toUpperCase(),
    p_body: body,
  });
  if (error) throw error;
  const row = data && data[0];
  if (!row) return null;
  return Object.assign({ id: row.id, clientId: row.client_id, createdAt: row.created_at }, row.doc);
}

// Marks every message the COACH sent in this client's thread as read --
// called when the client opens their Messages pill.
export async function markCoachMessagesReadForCode(code) {
  const { error } = await supabase.rpc("mark_coach_messages_read_for_code", {
    p_code: (code || "").trim().toUpperCase(),
  });
  if (error) throw error;
}
