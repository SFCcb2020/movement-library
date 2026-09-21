// Vercel serverless function (auto-detected from the /api folder -- no extra
// config needed). This is the ONE place your Gemini API key is allowed to
// live: as a Vercel "Environment Variable" named GEMINI_API_KEY, read here
// on the server, never shipped to the browser.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

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
    res.status(500).json({
      error: "Auto-build isn't set up yet -- add a GEMINI_API_KEY environment variable in Vercel and redeploy.",
    });
    return;
  }

  try {
    const model = "gemini-2.5-flash";
    const geminiRes = await fetch(
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

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("[auto-build] Gemini API error", geminiRes.status, errText);
      if (geminiRes.status === 429) {
        res.status(429).json({ error: "Hit the free-tier rate limit for a moment -- wait a bit and try again." });
        return;
      }
      res.status(502).json({ error: "The AI service returned an error. Try again in a moment." });
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
