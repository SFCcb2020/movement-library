// Coach-side authentication: a real Supabase Auth account. Since there's
// only ever one coach signing in this way, the sign-in box just asks for
// your access code -- your email is fixed here so you never have to type
// or see it. Under the hood this is still normal Supabase email+password
// auth (signInWithPassword below), which is what makes it secure: the
// "access code" IS the account's password, checked by Supabase itself.
import { supabase } from "./supabaseClient.js";

// The one coach account this app has. If you ever need a second coach
// login, this becomes a small list instead of a single constant -- not
// needed for now.
export const COACH_EMAIL = "cb@strongfriendsclub.com";

// Where a sign-in link (if one is ever sent again) redirects back to.
// Kept only because sendCoachMagicLink below still exists as a fallback
// you can ask Claude to re-enable if you're ever fully locked out.
const REDIRECT_TO = window.location.origin + window.location.pathname;

export async function sendCoachMagicLink(email) {
  const { error } = await supabase.auth.signInWithOtp({
    email: (email || "").trim(),
    options: { emailRedirectTo: REDIRECT_TO },
  });
  if (error) throw error;
}

// The everyday way in: your access code, checked against the one coach
// account above. No email typed, no link to wait on.
export async function signInWithAccessCode(code) {
  const { error } = await supabase.auth.signInWithPassword({
    email: COACH_EMAIL,
    password: code || "",
  });
  if (error) throw error;
}

// Back-compat alias -- older code in this file/app may still import this
// name. Same behavior as signInWithAccessCode, but takes an email too.
export async function signInWithPassword(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email: (email || "").trim(),
    password: password || "",
  });
  if (error) throw error;
}

// Sets (or changes) the password on the CURRENTLY SIGNED IN account. You
// have to already be signed in (e.g. via a magic link) to call this once --
// after that, signInWithPassword above works going forward. This never
// leaves your browser -- it's a direct call to your own Supabase project,
// the same as everything else here.
export async function setCoachPassword(password) {
  const { error } = await supabase.auth.updateUser({ password });
  if (error) throw error;
}

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("[coachAuth] getSession failed", error);
    return null;
  }
  return data.session;
}

export async function signOutCoach() {
  await supabase.auth.signOut();
}

// Calls `onChange(session | null)` immediately with the current state, then
// again every time it changes (sign-in, sign-out, token refresh, magic-link
// callback landing). Returns an unsubscribe function.
export function watchAuthState(onChange) {
  getCurrentSession().then(onChange);
  const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
    onChange(session);
  });
  return () => sub.subscription.unsubscribe();
}
