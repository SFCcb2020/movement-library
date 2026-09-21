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
    if (name === "sample") {
      const { data } = await supabase.auth.getSession();
      if (!data.session) return null;
      const token = data.session.access_token;
      return {
        async json(prompt) {
          const res = await fetch("/api/auto-build", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ prompt }),
          });
          const body = await res.json().catch(() => ({}));
          if (!res.ok) {
            const err = new Error(body.error || "Auto-build request failed.");
            // Packs the real explanation into `code` itself -- app.js's own
            // error popup only ever displays "(" + err.code + ")" and, due
            // to a pre-existing quirk in that code, silently drops `text`
            // whenever it's present. Folding the detail into `code` is the
            // only way to get it on screen without editing that large,
            // otherwise-untouched file.
            err.code = res.status + (body.error ? ": " + body.error : "");
            err.text = body.error;
            throw err;
          }
          return body;
        },
      };
    }
    return null;
  },
};

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
    window.location.reload();
  });
  tabbar.appendChild(btn);
}

watchAuthState((session) => {
  mountCoachLoginUI();
  if (session) {
    mountCoachSignOut();
    mountPasswordSetter();
  }
  if (window.resolveOwnerStatus) window.resolveOwnerStatus();
  if (session && window.retryDbInit) window.retryDbInit();
});

if (window.location.search.includes("code=") || window.location.hash.includes("access_token")) {
  supabase.auth.getSession().then(() => {
    history.replaceState(null, "", window.location.pathname);
  });
}
