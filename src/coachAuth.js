// Coach-side authentication: a real Supabase Auth account, using magic
// links (an emailed sign-in link) instead of a password. No password to
// forget, reset, or leak, and it's the lowest-friction option for someone
// who's the *only* person signing in this way for now.
import { supabase } from "./supabaseClient.js";

// Where Supabase redirects back to after the coach clicks the emailed link.
// Must also be added to Supabase Dashboard -> Authentication -> URL
// Configuration -> Redirect URLs (see the setup README) or the link will
// fail with "redirect not allowed".
const REDIRECT_TO = window.location.origin + window.location.pathname;

export async function sendCoachMagicLink(email) {
  const { error } = await supabase.auth.signInWithOtp({
    email: (email || "").trim(),
    options: { emailRedirectTo: REDIRECT_TO },
  });
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
