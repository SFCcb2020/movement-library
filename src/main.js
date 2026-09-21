// ============================================================================
// Real-app entry point. This file's whole job is to make the existing,
// mostly-unmodified app.js (originally written against the Claude Artifact
// runtime's window.claude.use(...) capabilities) work against a real
// Supabase backend instead -- by installing a `window.claude` shim with the
// exact same shape app.js already expects, plus a small `window.__clientPortal`
// for the access-code client login path app.js calls directly.
//
// Load order matters: this file (a module, so it's deferred) must finish
// running before app.js (a classic script tag with `defer`, so it's in the
// same deferred queue, in document order) executes -- see index.html. Both
// window.claude and window.__clientPortal are assigned synchronously below
// (not inside a later `await`), so there's no race between the two scripts.
// ============================================================================
import { supabase } from "./supabaseClient.js";
import { createDbShim } from "./firestoreShim.js";
import { sendCoachMagicLink, watchAuthState, signOutCoach } from "./coachAuth.js";
import {
  loginWithAccessCode,
  saveClientPatch,
  getProgramsForCode,
  getRehabCasesForCode,
  getNutritionPlansForCode,
  getSavedAccessCode,
  clearSavedAccessCode,
} from "./clientPortal.js";

let currentSession = null; // the coach's Supabase Auth session, or null

window.__clientPortal = {
  loginWithAccessCode,
  saveClientPatch,
  getProgramsForCode,
  getRehabCasesForCode,
  getNutritionPlansForCode,
  getSavedAccessCode,
  clearSavedAccessCode,
};

window.claude = {
  async use(name) {
    if (name === "db") {
      return currentSession ? createDbShim(currentSession.user.id) : null;
    }
    if (name === "user") {
      return {
        isOwner: async () => !!currentSession,
      };
    }
    // "sample" (Claude-powered auto-build) has no equivalent here yet -- the
    // app already treats a null sample capability as "feature unavailable"
    // and degrades gracefully (see getSample()'s call sites). Wiring this up
    // for real would mean adding your own Anthropic API key server-side
    // (never in frontend code) -- worth doing later if you want the
    // auto-build feature back, not required for the app to work.
    return null;
  },
};

// ---------------------------------------------------------------- coach login UI
// The published Artifact had no visible "coach sign in" step at all --
// isOwner() was answered by the Claude platform itself. A real app needs an
// actual login, so this adds a small, unobtrusive toggle to the existing
// access-code gate screen: "Coach? Sign in" reveals an email field, and
// clicking Send emails a magic sign-in link (no password to set or forget).
function mountCoachLoginUI() {
  const gateCard = document.querySelector("#gateScreen .gatecard");
  if (!gateCard || document.getElementById("coachLoginToggle")) return;

  const wrap = document.createElement("div");
  wrap.style.marginTop = "18px";
  wrap.style.paddingTop = "16px";
  wrap.style.borderTop = "1px solid var(--line)";
  wrap.innerHTML = `
    <button type="button" id="coachLoginToggle" style="background:none;border:none;color:var(--ink-dim);font-family:inherit;font-size:12.5px;cursor:pointer;text-decoration:underline;">
      Coach? Sign in
    </button>
    <div id="coachLoginForm" hidden style="margin-top:12px;">
      <input type="email" id="coachEmailInput" placeholder="you@example.com" autocomplete="email"
        style="font-family:inherit;font-size:14px;border:1px solid var(--line);border-radius:8px;padding:9px 12px;width:100%;box-sizing:border-box;background:var(--bg);color:var(--ink);margin-bottom:8px;">
      <button type="button" id="coachSendLinkBtn" class="gatesubmit" style="width:100%;">Send sign-in link</button>
      <div id="coachLoginStatus" style="font-size:12.5px;color:var(--ink-dim);margin-top:8px;"></div>
    </div>
  `;
  gateCard.appendChild(wrap);

  document.getElementById("coachLoginToggle").addEventListener("click", () => {
    document.getElementById("coachLoginForm").hidden = false;
    document.getElementById("coachLoginToggle").hidden = true;
  });

  document.getElementById("coachSendLinkBtn").addEventListener("click", async () => {
    const email = document.getElementById("coachEmailInput").value;
    const status = document.getElementById("coachLoginStatus");
    const btn = document.getElementById("coachSendLinkBtn");
    if (!email || !email.includes("@")) {
      status.textContent = "Enter a valid email address.";
      return;
    }
    btn.disabled = true;
    status.textContent = "Sending...";
    try {
      await sendCoachMagicLink(email);
      status.textContent = "Check your email for a sign-in link.";
    } catch (e) {
      console.error("[coachLogin]", e);
      status.textContent = "Couldn't send the link -- check your connection and try again.";
    } finally {
      btn.disabled = false;
    }
  });
}

// Adds a real "Sign out" control for the coach, alongside the existing
// app's own client-facing "Log out" button (#cmLogoutBtn, which only logs
// out of the CLIENT preview inside her dashboard -- a different thing).
function mountCoachSignOut() {
  const tabbar = document.querySelector(".tabbar");
  if (!tabbar || document.getElementById("coachSignOutBtn")) return;
  const btn = document.createElement("button");
  btn.id = "coachSignOutBtn";
  btn.type = "button";
  btn.textContent = "Sign out";
  btn.style.marginLeft = "auto";
  btn.style.alignSelf = "center";
  btn.style.background = "none";
  btn.style.border = "1px solid var(--line)";
  btn.style.borderRadius = "999px";
  btn.style.padding = "6px 14px";
  btn.style.fontFamily = "inherit";
  btn.style.fontSize = "12.5px";
  btn.style.cursor = "pointer";
  btn.style.color = "var(--ink-dim)";
  btn.addEventListener("click", async () => {
    await signOutCoach();
    window.location.reload(); // simplest correct way back to a clean gate state
  });
  tabbar.appendChild(btn);
}

// ---------------------------------------------------------------- boot
watchAuthState((session) => {
  currentSession = session;
  mountCoachLoginUI();
  if (session) mountCoachSignOut();
  // app.js's own resolveOwnerStatus() (called at the bottom of app.js, once
  // it has loaded) re-checks window.claude.use("user").isOwner() and shows
  // the right screen. If a session change happens AFTER app.js already
  // resolved once (e.g. the magic-link redirect lands, or she signs out),
  // re-run it so the UI actually reflects the change without a manual
  // refresh.
  if (window.resolveOwnerStatus) window.resolveOwnerStatus();
});

// Supabase puts auth tokens in the URL hash after a magic-link redirect;
// clean it up once the session's been picked up so a reload doesn't re-parse
// a stale hash.
if (window.location.hash.includes("access_token")) {
  supabase.auth.getSession().then(() => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  });
}
