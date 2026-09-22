// Vercel Cron Job (see vercel.json's "crons" entry -- runs once a day).
// Checks every client's stored birthday (the "Contact & Personal Info"
// pill on their profile) against today's date, and for anyone whose
// birthday it is, drops an automatic message into your existing Messages
// tab, exactly as if you'd typed it yourself -- they'll see it (and can
// reply) next time they open the app. No manual sending required.
//
// This is the one other place (besides api/stripe-webhook.js) that's
// allowed to use the Supabase service-role key: it needs to look across
// EVERY client to find today's birthdays, which the normal coach-session
// access (RLS, scoped to whoever's logged in) can't do from a scheduled
// job with no one logged in.
//
// Needs these Vercel Environment Variables:
//   SUPABASE_SERVICE_ROLE_KEY  Supabase Dashboard -> Settings -> API -> service_role secret key
//                              (same one api/stripe-webhook.js already needs)
//   CRON_SECRET                any random string of 16+ characters. Vercel
//                              automatically sends this back as this
//                              request's Authorization header when IT is
//                              the one invoking this endpoint on schedule,
//                              which is how this function tells "really
//                              Vercel's own scheduler" apart from a
//                              stranger who found this URL and is trying
//                              to spam every client with a fake message.
// VITE_SUPABASE_URL is reused from the app's own existing configuration.
import { createClient } from "@supabase/supabase-js";

const COACH_EMAIL = "cb@strongfriendsclub.com"; // matches coachAuth.js's COACH_EMAIL exactly

// True when `birthdayStr` (an "YYYY-MM-DD" <input type=date> value, same
// format app.js's own isBirthdayToday reads) falls on today's UTC
// month/day -- birth year doesn't matter, only "is it their birthday
// today". Uses UTC explicitly since that's what a Vercel serverless
// function always runs in, regardless of anyone's local timezone.
function isBirthdayToday(birthdayStr) {
  if (!birthdayStr) return false;
  const parts = String(birthdayStr).split("-");
  if (parts.length !== 3) return false;
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (!month || !day) return false;
  const now = new Date();
  return now.getUTCMonth() + 1 === month && now.getUTCDate() === day;
}

function birthdayMessageText(doc) {
  const first = ((doc && (doc.firstName || doc.name)) || "").trim().split(/\s+/)[0] || "there";
  return `Happy birthday, ${first}! \u{1F389} Hope you have a brilliant day — so glad to have you as part of Strong Friends Club!`;
}

export default async function handler(req, res) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.authorization;
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("[send-birthday-messages] missing required environment variables");
    res.status(500).json({ error: "This isn't fully set up yet on the server." });
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const year = new Date().getUTCFullYear();

  const { data: coach, error: coachErr } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", COACH_EMAIL)
    .maybeSingle();
  if (coachErr || !coach) {
    console.error("[send-birthday-messages] coach account not found", coachErr);
    res.status(500).json({ error: "Coach account not found" });
    return;
  }

  const { data: clients, error: clientsErr } = await supabase
    .from("clients")
    .select("id, doc")
    .eq("coach_id", coach.id);
  if (clientsErr) {
    console.error("[send-birthday-messages] couldn't load clients", clientsErr);
    res.status(500).json({ error: "Couldn't load clients" });
    return;
  }

  // birthdayMsgSentYear guards against sending twice -- Vercel's own docs
  // warn that a cron invocation can occasionally be delivered more than
  // once, and this makes a re-run a no-op instead of a duplicate message.
  const todaysBirthdays = (clients || []).filter(
    (c) => isBirthdayToday(c.doc && c.doc.birthday) && (c.doc && c.doc.birthdayMsgSentYear) !== year
  );

  let sent = 0;
  for (const client of todaysBirthdays) {
    const body = birthdayMessageText(client.doc || {});
    const { error: msgErr } = await supabase.from("messages").insert({
      coach_id: coach.id,
      client_id: client.id,
      doc: { sender: "coach", body, readByCoach: true, readByClient: false, auto: "birthday" },
    });
    if (msgErr) {
      console.error("[send-birthday-messages] couldn't send to client", client.id, msgErr);
      continue;
    }
    const { error: ackErr } = await supabase.rpc("mark_birthday_message_sent", {
      p_client_id: client.id,
      p_year: year,
    });
    if (ackErr) {
      console.error("[send-birthday-messages] couldn't record send for client", client.id, ackErr);
    }
    sent++;
  }

  res.status(200).json({ checked: (clients || []).length, sent });
}
