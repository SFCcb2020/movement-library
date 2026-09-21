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
import {
  sendCoachMagicLink,
  watchAuthState,
  signOutCoach,
  signInWithPassword,
  setCoachPassword,
} from "./coachAuth.js";
import {
  loginWithAccessCode,
  saveClientPatch,
  getProgramsForCode,
  getRehabCasesForCode,
  getNutritionPlansForCode,
  getSavedAccessCode,
  clearSavedAccessCode,
} from "./clientPortal.js";

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
      // Deliberately asks Supabase directly (not the `currentSession`
      // variable below) every time this is called. On a fresh page load,
      // watchAuthState's very first check is still an in-flight promise
      // when app.js's own startup code calls this a moment later --
      // reading `currentSession` here would catch it before that promise
      // resolves and wrongly conclude "not signed in" even when a valid
      // session is sitting in local storage. supabase.auth.getSession()
      // waits for the client's own startup to finish before answering, so
      // it's never caught mid-flight the way a plain variable can be.
      const { data } = await supabase.auth.getSession();
      return data.session ? createDbShim(data.session.user.id) : null;
    }
    if (name === "user") {
      return {
        isOwner: async () => {
          const { data } = await supabase.auth.getSession();
          return !!data.session;
        },
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

      <button type="button" id="coachPasswordToggle" style="background:none;border:none;color:var(--ink-dim);font-family:inherit;font-size:12px;cursor:pointer;text-decoration:underline;margin-top:10px;padding:0;">
        Have a password? Sign in directly
      </button>
      <div id="coachPasswordForm" hidden style="margin-top:10px;">
        <input type="password" id="coachPasswordInput" placeholder="Password" autocomplete="current-password"
          style="font-family:inherit;font-size:14px;border:1px solid var(--line);border-radius:8px;padding:9px 12px;width:100%;box-sizing:border-box;background:var(--bg);color:var(--ink);margin-bottom:8px;">
        <button type="button" id="coachPasswordSubmitBtn" class="gatesubmit" style="width:100%;">Sign in</button>
      </div>
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

  document.getElementById("coachPasswordToggle").addEventListener("click", () => {
    document.getElementById("coachPasswordForm").hidden = false;
    document.getElementById("coachPasswordToggle").hidden = true;
  });

  document.getElementById("coachPasswordSubmitBtn").addEventListener("click", async () => {
    const email = document.getElementById("coachEmailInput").value;
    const password = document.getElementById("coachPasswordInput").value;
    const status = document.getElementById("coachLoginStatus");
    const btn = document.getElementById("coachPasswordSubmitBtn");
    if (!email || !email.includes("@")) {
      status.textContent = "Enter your email above too.";
      return;
    }
    if (!password) {
      status.textContent = "Enter your password.";
      return;
    }
    btn.disabled = true;
    status.textContent = "Signing in...";
    try {
      await signInWithPassword(email, password);
      status.textContent = "";
    } catch (e) {
      console.error("[coachLogin] password sign-in failed", e);
      status.textContent = "Incorrect email or password -- or you haven't set one yet (sign in with a link once, then use \"Set a password\" next to Sign out).";
    } finally {
      btn.disabled = false;
    }
  });
}

// A one-time (or change-anytime) step, only visible once already signed in:
// sign in with a magic link, set a password here, and every sign-in after
// that can use the password form on the gate screen above instead of
// waiting on another email.
function mountPasswordSetter() {
  const tabbar = document.querySelector(".tabbar");
  if (!tabbar || document.getElementById("coachSetPasswordToggle")) return;

  const toggle = document.createElement("button");
  toggle.id = "coachSetPasswordToggle";
  toggle.type = "button";
  toggle.textContent = "Set a password";
  toggle.style.marginLeft = "8px";
  toggle.style.alignSelf = "center";
  toggle.style.background = "none";
  toggle.style.border = "1px solid var(--line)";
  toggle.style.borderRadius = "999px";
  toggle.style.padding = "6px 14px";
  toggle.style.fontFamily = "inherit";
  toggle.style.fontSize = "12.5px";
  toggle.style.cursor = "pointer";
  toggle.style.color = "var(--ink-dim)";

  const signOutBtn = document.getElementById("coachSignOutBtn");
  tabbar.insertBefore(toggle, signOutBtn);

  const overlay = document.createElement("div");
  overlay.id = "coachSetPasswordOverlay";
  overlay.hidden = true;
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;z-index:1000;";
  overlay.innerHTML = `
    <div style="background:var(--surface);border-radius:12px;padding:22px;width:min(340px,90vw);box-sizing:border-box;">
      <h3 style="margin:0 0 6px;font-size:16px;">Set a sign-in password</h3>
      <p style="margin:0 0 14px;font-size:12.5px;color:var(--ink-dim);">You'll still be able to use a sign-in link any time -- this just adds a faster option for you.</p>
      <input type="password" id="newPasswordInput" placeholder="New password" autocomplete="new-password"
        style="font-family:inherit;font-size:14px;border:1px solid var(--line);border-radius:8px;padding:9px 12px;width:100%;box-sizing:border-box;background:var(--bg);color:var(--ink);margin-bottom:8px;">
      <input type="password" id="confirmPasswordInput" placeholder="Confirm password" autocomplete="new-password"
        style="font-family:inherit;font-size:14px;border:1px solid var(--line);border-radius:8px;padding:9px 12px;width:100%;box-sizing:border-box;background:var(--bg);color:var(--ink);margin-bottom:8px;">
      <div id="setPasswordStatus" style="font-size:12.5px;color:var(--ink-dim);margin-bottom:10px;"></div>
      <div style="display:flex;gap:8px;">
        <button type="button" id="cancelSetPasswordBtn" style="flex:1;background:none;border:1px solid var(--line);border-radius:8px;padding:9px;font-family:inherit;cursor:pointer;color:var(--ink);">Cancel</button>
        <button type="button" id="saveSetPasswordBtn" class="gatesubmit" style="flex:1;">Save</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  toggle.addEventListener("click", () => {
    overlay.hidden = false;
  });
  document.getElementById("cancelSetPasswordBtn").addEventListener("click", () => {
    overlay.hidden = true;
  });
  document.getElementById("saveSetPasswordBtn").addEventListener("click", async () => {
    const pw = document.getElementById("newPasswordInput").value;
    const confirm = document.getElementById("confirmPasswordInput").value;
    const status = document.getElementById("setPasswordStatus");
    const btn = document.getElementById("saveSetPasswordBtn");
    if (!pw || pw.length < 8) {
      status.textContent = "Use at least 8 characters.";
      return;
    }
    if (pw !== confirm) {
      status.textContent = "Passwords don't match.";
      return;
    }
    btn.disabled = true;
    status.textContent = "Saving...";
    try {
      await setCoachPassword(pw);
      status.textContent = "Saved! You can use this password to sign in from now on.";
      setTimeout(() => { overlay.hidden = true; }, 1800);
    } catch (e) {
      console.error("[setCoachPassword]", e);
      status.textContent = "Couldn't save that -- check your connection and try again.";
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
  mountCoachLoginUI();
  if (session) {
    mountCoachSignOut();
    mountPasswordSetter();
  }
  // app.js's own resolveOwnerStatus() (called at the bottom of app.js, once
  // it has loaded) re-checks window.claude.use("user").isOwner() and shows
  // the right screen. If a session change happens AFTER app.js already
  // resolved once (e.g. the magic-link redirect lands, or she signs out),
  // re-run it so the UI actually reflects the change without a manual
  // refresh.
  if (window.resolveOwnerStatus) window.resolveOwnerStatus();
});

// Supabase turns a magic-link redirect into a real signed-in session
// automatically, the moment the client library above initializes -- either
// the PKCE flow's `?code=...` in the query string (see supabaseClient.js
// for why that's the one actually in use now), or the older implicit
// flow's `#access_token=...` in the hash, in case an already-sent email
// still has an old-style link in it. All that's left to do here is clean
// the address bar up afterward, so a page reload doesn't try to re-process
// a stale code or token that's already been used.
if (window.location.search.includes("code=") || window.location.hash.includes("access_token")) {
  supabase.auth.getSession().then(() => {
    history.replaceState(null, "", window.location.pathname);
  });
}
