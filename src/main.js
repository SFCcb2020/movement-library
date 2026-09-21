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
  watchAuthState,
  signOutCoach,
  signInWithAccessCode,
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
// actual login. This mirrors the client access-code card right above it on
// the same screen: one input, one button, no email, no link to wait on.
// Under the hood it's still a real Supabase sign-in (see coachAuth.js) --
// the "access code" IS the account's password, just presented the same way
// a client's access code is. If this code is ever lost, ask Claude to reset
// it directly in the database (no separate self-serve reset flow exists).
function mountCoachLoginUI() {
  const gateCard = document.querySelector("#gateScreen .gatecard");
  if (!gateCard || document.getElementById("coachLoginToggle")) return;

  const wrap = document.createElement("div");
  wrap.style.marginTop = "18px";
  wrap.style.paddingTop = "16px";
  wrap.style.borderTop = "1px solid var(--line)";
  wrap.innerHTML = `
    <button type="button" id="coachLoginToggle" style="background:none;border:none;color:var(--ink-dim);font-family:inherit;font-size:12.5px;cursor:pointer;text-decoration:underline;">
      Coach? Sign in here
    </button>
    <div id="coachLoginForm" hidden style="margin-top:12px;">
      <input type="password" id="coachCodeInput" class="gatecode" placeholder="Access code" maxlength="16" autocomplete="current-password"
        style="margin-bottom:8px;">
      <button type="button" id="coachPasswordSubmitBtn" class="gatesubmit" style="width:100%;">Sign in</button>
      <div id="coachLoginStatus" style="font-size:12.5px;color:var(--ink-dim);margin-top:8px;"></div>
    </div>
  `;
  gateCard.appendChild(wrap);

  document.getElementById("coachLoginToggle").addEventListener("click", () => {
    document.getElementById("coachLoginForm").hidden = false;
    document.getElementById("coachLoginToggle").hidden = true;
    document.getElementById("coachCodeInput").focus();
  });

  async function submitCode() {
    const code = document.getElementById("coachCodeInput").value;
    const status = document.getElementById("coachLoginStatus");
    const btn = document.getElementById("coachPasswordSubmitBtn");
    if (!code) {
      status.textContent = "Enter your access code.";
      return;
    }
    btn.disabled = true;
    status.textContent = "Signing in...";
    try {
      await signInWithAccessCode(code);
      status.textContent = "";
    } catch (e) {
      console.error("[coachLogin] sign-in failed", e);
      status.textContent = "That code didn't work -- double check it, or ask Claude to reset it.";
    } finally {
      btn.disabled = false;
    }
  }

  document.getElementById("coachPasswordSubmitBtn").addEventListener("click", submitCode);
  document.getElementById("coachCodeInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitCode();
  });
}

// Lets you change your own access code any time, right from inside the
// app -- no need to ask Claude unless you're locked out and can't sign in
// at all.
function mountPasswordSetter() {
  const tabbar = document.querySelector(".tabbar");
  if (!tabbar || document.getElementById("coachSetPasswordToggle")) return;

  const toggle = document.createElement("button");
  toggle.id = "coachSetPasswordToggle";
  toggle.type = "button";
  toggle.textContent = "Change access code";
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
  // Deliberately controlled with overlay.style.display (below), never the
  // `hidden` attribute -- an inline `display` value always overrides the
  // browser's built-in `[hidden] { display: none }` rule, so mixing the two
  // (as this used to) means toggling `hidden` silently does nothing and the
  // box either never closes or, on some loads, is visible from the start.
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,0.4);display:none;align-items:center;justify-content:center;z-index:1000;";
  overlay.innerHTML = `
    <div style="background:var(--surface);border-radius:12px;padding:22px;width:min(340px,90vw);box-sizing:border-box;">
      <h3 style="margin:0 0 6px;font-size:16px;">Change your access code</h3>
      <p style="margin:0 0 14px;font-size:12.5px;color:var(--ink-dim);">This replaces your current code. Use something you'll remember -- there's no email reset for this yet, so if you forget it you'll need to ask Claude to reset it.</p>
      <input type="password" id="newPasswordInput" placeholder="New access code" autocomplete="new-password"
        style="font-family:inherit;font-size:14px;border:1px solid var(--line);border-radius:8px;padding:9px 12px;width:100%;box-sizing:border-box;background:var(--bg);color:var(--ink);margin-bottom:8px;">
      <input type="password" id="confirmPasswordInput" placeholder="Confirm new access code" autocomplete="new-password"
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
    overlay.style.display = "flex";
  });
  document.getElementById("cancelSetPasswordBtn").addEventListener("click", () => {
    overlay.style.display = "none";
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
    btn.textContent = "Saving...";
    status.textContent = "";
    status.style.color = "var(--ink-dim)";
    try {
      await setCoachPassword(pw);
      status.style.color = "#1a7a3c";
      status.textContent = "✓ Saved. That's your new access code from now on.";
      btn.textContent = "Saved ✓";
      // Leave the confirmation up long enough to actually notice, then close
      // and reset the form so it's ready fresh next time.
      setTimeout(() => {
        overlay.style.display = "none";
        document.getElementById("newPasswordInput").value = "";
        document.getElementById("confirmPasswordInput").value = "";
        status.textContent = "";
        btn.textContent = "Save";
        btn.disabled = false;
      }, 2600);
    } catch (e) {
      console.error("[setCoachPassword]", e);
      // Supabase's own wording for "you typed the same code you already
      // have" -- worth calling out specifically, since otherwise it just
      // looks like saving silently failed and invites retrying forever.
      const isSamePassword =
        (e && e.code === "same_password") ||
        (e && typeof e.message === "string" && e.message.toLowerCase().includes("different from the old password"));
      if (isSamePassword) {
        status.textContent = "That's already your current code -- nothing to change. Pick a different one, or just close this.";
      } else {
        status.textContent = "Couldn't save that -- check your connection and try again.";
      }
      btn.textContent = "Save";
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
  // Same idea for custom exercises / clients: app.js loads those once at
  // startup, and if there was no session yet at that exact moment (e.g.
  // she'd just signed out and signed back in with a new code, with no full
  // page reload in between) it shows a "preview, won't be saved" warning
  // and never retries on its own. Nudge it to try again on every session
  // change -- it's a no-op if it already succeeded.
  if (session && window.retryDbInit) window.retryDbInit();
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
