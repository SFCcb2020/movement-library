// Vercel serverless function (auto-detected from the /api folder -- no extra
// config needed). This is the ONE place your Gemini API key is allowed to
// live: as a Vercel "Environment Variable" named GEMINI_API_KEY, read here
// on the server, never shipped to the browser. If it were in any file under
// src/ or public/ instead, it would end up inside the JS bundle that anyone
// visiting the site can view -- and from there, anyone could run up your
// (free-tier) usage or, worse, use it themselves. This function is the only
// thing standing between the button in the app and your key.
//
// Uses Google's Gemini API (a free tier, no credit card needed, via
// aistudio.google.com) rather than a paid one, since Auto-Build here is
// low-volume enough that the free tier comfortably covers it.
//
// Called by src/main.js's window.claude.use("sample") shim, which is what
// app.js's Auto-Build feature was already written against (see
// runAutoBuild() in app.js) -- this endpoint's job is just to BE that
// capability for real, so nothing in app.js needed to change.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Require a real, currently-valid Supabase sign-in before spending any API
  // quota -- otherwise anyone who finds the URL could call this directly
  // (bypassing the app's UI entirely). This only checks "is this a genuine
  // signed-in session", the same as any of the app's other coach-only
  // actions -- it doesn't need to know WHICH account, since only your own
  // coach sign-in can ever produce a valid one.
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) {
    res.status(401).json({ error: "Sign in required." });
    return;
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    res.status(500).json({ error: "Server is missing its Supabase configuration." });
    return;
  }

  try {
    const verifyRes = await fetch(supabaseUrl.replace(/\/$/, "") + "/auth/v1/user", {
      headers: { apikey: supabaseAnonKey, Authorization: "Bearer " + token },
    });
    if (!verifyRes.ok) {
      res.status(401).json({ error: "Your sign-in has expired -- refresh and sign in again." });
      return;
    }
  } catch (e) {
    res.status(401).json({ error: "Couldn't verify your sign-in right now." });
    return;
  }

  const prompt = req.body && req.body.prompt;
  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "Missing prompt." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // The exact situation before this key is added in Vercel -- a clear
    // message instead of a generic crash.
    res.status(500).json({
      error: "Auto-build isn't set up yet -- add a GEMINI_API_KEY environment variable in Vercel and redeploy.",
    });
    return;
  }

  try {
    // Google confirmed (via a real error message from this exact key) that
    // the whole "gemini-2.5-*" family is retired for newer accounts, and
    // recommended "gemini-3.5-flash-lite" instead. Rather than hardcode any
    // single name and risk this breaking AGAIN next time Google renames
    // something, "gemini-flash-latest" is Google's own always-current alias
    // -- it stays pointed at whatever their current recommended Flash model
    // is, so it's listed first. The rest are concrete fallbacks in case that
    // alias is ever unavailable; only moves to the next candidate on a 404
    // (model not found/retired) or 503 (temporarily overloaded) -- any other
    // error (bad key, real rate limit, etc) stops immediately, since
    // retrying with a different model wouldn't fix those anyway.
    const modelCandidates = ["gemini-flash-latest", "gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-3.1-flash-lite"];
    let geminiRes;
    let lastErrText = "";
    for (const model of modelCandidates) {
      geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseMimeType: "application/json",
            },
          }),
        }
      );
      if (geminiRes.ok) break;
      lastErrText = await geminiRes.text();
      console.error("[auto-build] Gemini API error for model", model, geminiRes.status, lastErrText);
      // Keep trying the next candidate only for "this specific model isn't
      // usable right now" cases -- 404 (model name doesn't exist for this
      // key) or 503 (that model is temporarily overloaded on Google's end,
      // common for their newest/most in-demand models). Anything else (a
      // bad key, a real rate limit, a malformed request) would fail the
      // same way for every model, so stop immediately instead of wasting
      // four calls to find that out.
      if (geminiRes.status !== 404 && geminiRes.status !== 503) break;
    }

    if (!geminiRes.ok) {
      if (geminiRes.status === 429) {
        res.status(429).json({ error: "Hit the free-tier rate limit for a moment -- wait a bit and try again." });
        return;
      }
      // Pass the real upstream status code AND Google's own explanation text
      // through (instead of a generic message) so it's visible in the app's
      // error popup without needing access to the server's own logs -- the
      // status number alone wasn't enough to diagnose this one.
      const passthroughStatus = geminiRes.status >= 400 && geminiRes.status < 600 ? geminiRes.status : 502;
      let detail = "";
      try {
        const parsedErr = JSON.parse(lastErrText);
        detail = (parsedErr && parsedErr.error && parsedErr.error.message) || "";
      } catch (e) {
        detail = (lastErrText || "").slice(0, 200);
      }
      res.status(passthroughStatus).json({
        error: "Gemini error " + geminiRes.status + (detail ? ": " + detail.slice(0, 220) : " (no detail returned)."),
      });
      return;
    }

    const data = await geminiRes.json();
    const text =
      data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts.map((p) => p.text || "").join("");

    if (!text) {
      console.error("[auto-build] Empty/blocked response from Gemini", JSON.stringify(data).slice(0, 500));
      res.status(502).json({ error: "The draft came back empty. Try adjusting the details and generate again." });
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(extractJson(text));
    } catch (e) {
      console.error("[auto-build] Couldn't parse model output as JSON", text.slice(0, 500));
      res.status(502).json({ error: "The draft came back in an unexpected format. Try again." });
      return;
    }

    res.status(200).json(parsed);
  } catch (e) {
    console.error("[auto-build] unexpected error", e);
    res.status(500).json({ error: "Couldn't generate a program right now. Try again in a moment." });
  }
}

function extractJson(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  return (fenced ? fenced[1] : text).trim();
}
