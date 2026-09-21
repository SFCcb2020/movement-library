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

// A second, optional way in, alongside the magic link -- useful once you're
// switching back and forth (e.g. testing a client's view) and don't want to
// wait on an email each time. No password exists until you set one (see
// setCoachPassword below), so this will simply fail with "invalid login
// credentials" until then -- that's expected, not a bug.
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
