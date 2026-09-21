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

export async function getRehabCasesForCode(code) {
  return callForCode("get_rehab_cases_for_code", code);
}

export async function getNutritionPlansForCode(code) {
  return callForCode("get_nutrition_plans_for_code", code);
}
