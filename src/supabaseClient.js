// Thin wrapper around the official Supabase JS client. The URL and anon key
// below are meant to be public -- they identify WHICH Supabase project to
// talk to, not a secret credential. Every request is still checked against
// the Row Level Security policies in supabase/schema.sql, so shipping these
// two values in your frontend bundle is the normal, safe way Supabase apps
// work. Never put your `service_role` key here or in any frontend code --
// that one really is secret and bypasses RLS entirely.
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly and early rather than letting every later call throw a
  // confusing "fetch failed" -- this is almost always a missing .env file
  // (see .env.example) or a Vercel project missing its environment
  // variables.
  console.error(
    "[supabaseClient] Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. " +
      "Copy .env.example to .env and fill in your Supabase project's values " +
      "(Supabase Dashboard -> Settings -> API), or add them as Environment " +
      "Variables in your Vercel project settings."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
