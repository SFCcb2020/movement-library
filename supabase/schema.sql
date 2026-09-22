-- ============================================================================
-- Movement Library / Strong Friends Club coaching app -- Supabase schema
-- ============================================================================
-- Run this once in your Supabase project's SQL Editor (Dashboard -> SQL
-- Editor -> New query -> paste this whole file -> Run). It's safe to re-run:
-- everything is IF NOT EXISTS / CREATE OR REPLACE.
--
-- Design choice: each "document" (a client, a program, a rehab case, a
-- nutrition plan) is stored as ONE jsonb column (`doc`) holding the same
-- nested shape the app already uses (client.tasks, client.weeklyGoals, etc).
-- This is deliberate -- it means the existing 5,000+ line app can talk to
-- this real database through a small compatibility shim (see
-- src/firestoreShim.js) with almost no changes to its own logic, instead of
-- a full rewrite into normalized tables. You can always normalize specific
-- fields into real columns later without touching the rest.
-- ============================================================================

-- ---------------------------------------------------------------- extensions
create extension if not exists "pgcrypto"; -- gen_random_uuid()

-- ---------------------------------------------------------------- profiles
-- One row per person who can actually log in (right now: just you, the
-- coach). Clients do NOT get a Supabase Auth account in this design -- they
-- log in with an access code instead (see the RPC functions below), so they
-- never need to sign up, verify an email, or manage a password. If you later
-- want other coaches to use this as a product, each of them gets a profiles
-- row with role = 'coach' and only ever sees their own clients (enforced by
-- the RLS policies below) -- the schema already supports that; it's UI/signup
-- flow work, not a database change.
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'coach' check (role in ('coach')),
  name text,
  email text,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

drop policy if exists "profiles: read own" on profiles;
create policy "profiles: read own" on profiles
  for select using (id = auth.uid());

drop policy if exists "profiles: update own" on profiles;
create policy "profiles: update own" on profiles
  for update using (id = auth.uid());

-- Auto-create a profile row the moment someone signs up via Supabase Auth.
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'name', new.email));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ---------------------------------------------------------------- clients
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  access_code text unique not null,
  name text not null default '',
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists clients_coach_id_idx on clients (coach_id);
create index if not exists clients_access_code_idx on clients (access_code);

alter table clients enable row level security;

-- The coach can do anything to their own clients. Clients themselves never
-- hold a Supabase session, so they never match auth.uid() here at all --
-- their entire access path is the two SECURITY DEFINER functions below,
-- which intentionally bypass RLS after checking the access code by hand.
drop policy if exists "clients: coach full access" on clients;
create policy "clients: coach full access" on clients
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

-- Coach-side partial update, mirroring Firestore's doc.update(payload)
-- behavior: a shallow top-level merge into the jsonb doc, not a full
-- replace. `patch` only overwrites the keys it names (client.tasks,
-- client.weeklyGoals, etc.) -- everything else already in `doc` stays.
create or replace function update_client_doc(p_client_id uuid, p_patch jsonb)
returns void
language sql
security invoker
as $$
  update clients
  set doc = doc || p_patch, updated_at = now()
  where id = p_client_id and coach_id = auth.uid();
$$;

-- ---------------------- client-portal access (no Supabase Auth account) ---
-- A client logs in with just the access code you generate for them (exactly
-- like today). These two functions are SECURITY DEFINER, meaning they run
-- with the table owner's privileges and can see past RLS -- but only after
-- verifying the access code themselves, so a client can only ever reach
-- their OWN row, never anyone else's or the coach's other data.
create or replace function login_with_access_code(p_code text)
returns table (id uuid, name text, doc jsonb)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
    select clients.id, clients.name, clients.doc
    from clients
    where clients.access_code = p_code;
end;
$$;

create or replace function update_client_by_code(p_code text, p_patch jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update clients
  set doc = doc || p_patch, updated_at = now()
  where access_code = p_code;
end;
$$;

-- Both functions are callable by anyone who merely holds the anon API key
-- (i.e. anyone loading the app) -- that's expected and safe, since the
-- access code itself is the real credential being checked inside the
-- function body.
grant execute on function login_with_access_code(text) to anon, authenticated;
grant execute on function update_client_by_code(text, jsonb) to anon, authenticated;

-- ---------------------------------------------------------------- programs
create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  client_id uuid references clients(id) on delete set null,
  -- A program can be assigned to more than one client at once (a group
  -- program): everyone assigned shares the same exercise/sets/reps
  -- prescription (doc.days) but logs their own actual reps/weight
  -- separately (doc.actualsByClient, keyed by client id -- see
  -- save_program_actuals_for_code below). Mirrors doc.clientIds the same
  -- way client_id above mirrors doc.clientId, purely so a client with no
  -- Supabase session can find "their" programs without unpacking jsonb.
  client_ids uuid[] not null default '{}',
  name text not null default '',
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists programs_coach_id_idx on programs (coach_id);
create index if not exists programs_client_id_idx on programs (client_id);
create index if not exists programs_client_ids_idx on programs using gin (client_ids);

alter table programs enable row level security;

drop policy if exists "programs: coach full access" on programs;
create policy "programs: coach full access" on programs
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

create or replace function update_program_doc(p_program_id uuid, p_patch jsonb)
returns void
language sql
security invoker
as $$
  update programs
  set doc = doc || p_patch, updated_at = now()
  where id = p_program_id and coach_id = auth.uid();
$$;

-- A client can read every program they're assigned to (client_ids is an
-- array, so a group program returns once for every member). The shared
-- doc.actualsByClient / doc.swapsByClient / doc.sessionLogsByClient maps
-- each hold every assigned client's own data side by side -- that's fine
-- for the coach (who owns the whole row) but would leak one client's
-- logged reps/weight, exercise swaps, or session notes to another
-- client's browser if returned as-is, so this redacts all three down to
-- just the requesting client's own slice before handing the doc back.
create or replace function get_programs_for_code(p_code text)
returns table (id uuid, name text, client_id uuid, doc jsonb)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_client_id uuid;
begin
  select clients.id into v_client_id from clients where clients.access_code = p_code;
  if v_client_id is null then
    return;
  end if;

  return query
    select
      programs.id,
      programs.name,
      programs.client_id,
      (
        (programs.doc - 'actualsByClient' - 'swapsByClient' - 'sessionLogsByClient')
        || jsonb_build_object(
             'actualsByClient',
             jsonb_build_object(
               v_client_id::text,
               coalesce(programs.doc #> array['actualsByClient', v_client_id::text], '{}'::jsonb)
             )
           )
        || jsonb_build_object(
             'swapsByClient',
             jsonb_build_object(
               v_client_id::text,
               coalesce(programs.doc #> array['swapsByClient', v_client_id::text], '{}'::jsonb)
             )
           )
        || jsonb_build_object(
             'sessionLogsByClient',
             jsonb_build_object(
               v_client_id::text,
               coalesce(programs.doc #> array['sessionLogsByClient', v_client_id::text], '[]'::jsonb)
             )
           )
      ) as doc
    from programs
    where v_client_id = any(programs.client_ids);
end;
$$;

grant execute on function get_programs_for_code(text) to anon, authenticated;

-- A client could already READ their assigned program above but had no way
-- to persist what they actually did against it -- logged reps/weight per
-- set were only ever kept in the client's own browser session and vanished
-- on reload, which breaks progressive-overload carry-over between sessions.
-- Once a program could have several clients on it, overwriting the whole
-- doc.days tree (the original version of this function) stopped being safe:
-- two members saving around the same time would stomp each other's logged
-- sets, and a client could wipe the coach's own prescription edits just by
-- logging a workout. This instead surgically writes only this one client's
-- own slice at doc.actualsByClient.<their-client-id>, after confirming that
-- program really is assigned to the client identified by the access code --
-- the shared prescription and every other member's log are untouched.
create or replace function save_program_actuals_for_code(p_code text, p_program_id uuid, p_actuals jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_client_id uuid;
  v_owns boolean;
begin
  select clients.id into v_client_id from clients where clients.access_code = p_code;
  if v_client_id is null then
    raise exception 'Invalid access code';
  end if;

  select exists(
    select 1 from programs
    where programs.id = p_program_id
      and v_client_id = any(programs.client_ids)
  ) into v_owns;
  if not v_owns then
    raise exception 'That program is not assigned to this client';
  end if;

  update programs
  set doc = jsonb_set(
        case when doc ? 'actualsByClient' then doc else doc || '{"actualsByClient":{}}'::jsonb end,
        array['actualsByClient', v_client_id::text],
        p_actuals,
        true
      ),
      updated_at = now()
  where id = p_program_id;
end;
$$;

grant execute on function save_program_actuals_for_code(text, uuid, jsonb) to anon, authenticated;

-- A client might not have access to whatever's prescribed on a given day
-- (no barbell at the hotel gym, say) -- rather than silently skip it or
-- edit the shared prescription (which every other assigned client would
-- then see too), they can swap just their own copy of one exercise for
-- ONE specific week. Same shape of function as save_program_actuals_for_code
-- above, just writing to doc.swapsByClient.<their-client-id> instead --
-- the shared prescription and every other member's data are untouched, and
-- the very next week reverts to whatever's actually prescribed since
-- there's simply no swap entry for that week until they swap again.
create or replace function save_program_swaps_for_code(p_code text, p_program_id uuid, p_swaps jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_client_id uuid;
  v_owns boolean;
begin
  select clients.id into v_client_id from clients where clients.access_code = p_code;
  if v_client_id is null then
    raise exception 'Invalid access code';
  end if;

  select exists(
    select 1 from programs
    where programs.id = p_program_id
      and v_client_id = any(programs.client_ids)
  ) into v_owns;
  if not v_owns then
    raise exception 'That program is not assigned to this client';
  end if;

  update programs
  set doc = jsonb_set(
        case when doc ? 'swapsByClient' then doc else doc || '{"swapsByClient":{}}'::jsonb end,
        array['swapsByClient', v_client_id::text],
        p_swaps,
        true
      ),
      updated_at = now()
  where id = p_program_id;
end;
$$;

grant execute on function save_program_swaps_for_code(text, uuid, jsonb) to anon, authenticated;

-- A client's own finished-session log: a dated entry per training day they
-- mark done from their own view, holding their overall RPE and any notes
-- (see the app's buildSessionSaveBox). Lives at
-- doc.sessionLogsByClient.<their-client-id> as an ARRAY, replaced whole
-- each time they save a session -- surfaces back to the coach on that
-- client's own profile page.
create or replace function save_program_session_logs_for_code(p_code text, p_program_id uuid, p_session_logs jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_client_id uuid;
  v_owns boolean;
begin
  select clients.id into v_client_id from clients where clients.access_code = p_code;
  if v_client_id is null then
    raise exception 'Invalid access code';
  end if;

  select exists(
    select 1 from programs
    where programs.id = p_program_id
      and v_client_id = any(programs.client_ids)
  ) into v_owns;
  if not v_owns then
    raise exception 'That program is not assigned to this client';
  end if;

  update programs
  set doc = jsonb_set(
        case when doc ? 'sessionLogsByClient' then doc else doc || '{"sessionLogsByClient":{}}'::jsonb end,
        array['sessionLogsByClient', v_client_id::text],
        p_session_logs,
        true
      ),
      updated_at = now()
  where id = p_program_id;
end;
$$;

grant execute on function save_program_session_logs_for_code(text, uuid, jsonb) to anon, authenticated;

-- ---------------------------------------------------------------- rehab_cases (client read)
create or replace function get_rehab_cases_for_code(p_code text)
returns table (id uuid, name text, client_id uuid, doc jsonb)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
    select rehab_cases.id, rehab_cases.name, rehab_cases.client_id, rehab_cases.doc
    from rehab_cases
    join clients on clients.id = rehab_cases.client_id
    where clients.access_code = p_code;
end;
$$;

grant execute on function get_rehab_cases_for_code(text) to anon, authenticated;

-- ---------------------------------------------------------------- nutrition_plans (client read)
create or replace function get_nutrition_plans_for_code(p_code text)
returns table (id uuid, name text, client_id uuid, doc jsonb)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
    select nutrition_plans.id, nutrition_plans.name, nutrition_plans.client_id, nutrition_plans.doc
    from nutrition_plans
    join clients on clients.id = nutrition_plans.client_id
    where clients.access_code = p_code;
end;
$$;

grant execute on function get_nutrition_plans_for_code(text) to anon, authenticated;

-- ---------------------------------------------------------------- rehab_cases
create table if not exists rehab_cases (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  client_id uuid references clients(id) on delete set null,
  name text not null default '',
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists rehab_cases_coach_id_idx on rehab_cases (coach_id);

alter table rehab_cases enable row level security;

drop policy if exists "rehab_cases: coach full access" on rehab_cases;
create policy "rehab_cases: coach full access" on rehab_cases
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

create or replace function update_rehab_doc(p_case_id uuid, p_patch jsonb)
returns void
language sql
security invoker
as $$
  update rehab_cases
  set doc = doc || p_patch, updated_at = now()
  where id = p_case_id and coach_id = auth.uid();
$$;

-- ---------------------------------------------------------------- nutrition_plans
create table if not exists nutrition_plans (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  client_id uuid references clients(id) on delete set null,
  name text not null default '',
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists nutrition_plans_coach_id_idx on nutrition_plans (coach_id);

alter table nutrition_plans enable row level security;

drop policy if exists "nutrition_plans: coach full access" on nutrition_plans;
create policy "nutrition_plans: coach full access" on nutrition_plans
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

create or replace function update_nutrition_doc(p_plan_id uuid, p_patch jsonb)
returns void
language sql
security invoker
as $$
  update nutrition_plans
  set doc = doc || p_patch, updated_at = now()
  where id = p_plan_id and coach_id = auth.uid();
$$;

-- ---------------------------------------------------------------- custom_exercises
-- Exercises a coach adds herself on top of the 300+ built-in library, which
-- ships as static data in the app rather than a table (it never changes per
-- coach, so there's no reason to pay a database round-trip for it).
create table if not exists custom_exercises (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists custom_exercises_coach_id_idx on custom_exercises (coach_id);

alter table custom_exercises enable row level security;

drop policy if exists "custom_exercises: coach full access" on custom_exercises;
create policy "custom_exercises: coach full access" on custom_exercises
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

-- ---------------------------------------------------------------- messages
-- In-app messaging between the coach and her clients, so neither side needs
-- the other's phone number. Same jsonb-doc-per-row shape as everything
-- else, so the coach side is just another firestoreShim collection; a
-- client (no Supabase session) reaches only their own thread through the
-- three SECURITY DEFINER functions below, gated on their access code.
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  client_id uuid not null references clients(id) on delete cascade,
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists messages_coach_id_idx on messages (coach_id);
create index if not exists messages_client_id_idx on messages (client_id);
create index if not exists messages_client_created_idx on messages (client_id, created_at);

alter table messages enable row level security;

drop policy if exists "messages: coach full access" on messages;
create policy "messages: coach full access" on messages
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

create or replace function update_message_doc(p_message_id uuid, p_patch jsonb)
returns void
language sql
security invoker
as $$
  update messages
  set doc = doc || p_patch
  where id = p_message_id and coach_id = auth.uid();
$$;

create or replace function get_messages_for_code(p_code text)
returns table (id uuid, client_id uuid, doc jsonb, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
    select messages.id, messages.client_id, messages.doc, messages.created_at
    from messages
    join clients on clients.id = messages.client_id
    where clients.access_code = p_code
    order by messages.created_at asc;
end;
$$;

grant execute on function get_messages_for_code(text) to anon, authenticated;

create or replace function send_message_for_code(p_code text, p_body text)
returns table (id uuid, client_id uuid, doc jsonb, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_client_id uuid;
  v_coach_id uuid;
  v_row messages%rowtype;
begin
  select clients.id, clients.coach_id into v_client_id, v_coach_id
  from clients where clients.access_code = p_code;

  if v_client_id is null then
    raise exception 'Invalid access code';
  end if;

  if p_body is null or length(trim(p_body)) = 0 then
    raise exception 'Message cannot be empty';
  end if;

  insert into messages (coach_id, client_id, doc)
  values (
    v_coach_id, v_client_id,
    jsonb_build_object('sender', 'client', 'body', left(trim(p_body), 4000), 'readByCoach', false, 'readByClient', true)
  )
  returning * into v_row;

  return query select v_row.id, v_row.client_id, v_row.doc, v_row.created_at;
end;
$$;

grant execute on function send_message_for_code(text, text) to anon, authenticated;

create or replace function mark_coach_messages_read_for_code(p_code text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update messages
  set doc = doc || '{"readByClient": true}'::jsonb
  where client_id = (select id from clients where access_code = p_code)
    and (doc->>'sender') = 'coach'
    and coalesce((doc->>'readByClient')::boolean, false) = false;
end;
$$;

grant execute on function mark_coach_messages_read_for_code(text) to anon, authenticated;

-- ---------------------------------------------------------------- enquiries
-- A public lead-capture form (the ENQUIRE button on the sign-in screen).
-- Unlike every other write path in this schema, there's no access code and
-- no Supabase session to check here at all -- whoever fills out the form is
-- a stranger, not yet a client. submit_enquiry() below is the ONLY way in:
-- it resolves your (single) coach account itself and inserts on your
-- behalf, so no RLS policy ever has to grant the public role direct table
-- access. Field lengths are capped inside the function as a light guard
-- against abuse; the real backstop is that this can only ever INSERT a lead
-- for your own review -- it can't read, modify, or delete anything.
create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references profiles(id) on delete cascade,
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists enquiries_coach_id_idx on enquiries (coach_id);

alter table enquiries enable row level security;

drop policy if exists "enquiries: coach full access" on enquiries;
create policy "enquiries: coach full access" on enquiries
  for all using (coach_id = auth.uid()) with check (coach_id = auth.uid());

create or replace function update_enquiry_doc(p_enquiry_id uuid, p_patch jsonb)
returns void
language sql
security invoker
as $$
  update enquiries
  set doc = doc || p_patch
  where id = p_enquiry_id and coach_id = auth.uid();
$$;

create or replace function submit_enquiry(p_payload jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_coach_id uuid;
begin
  select profiles.id into v_coach_id from profiles where profiles.email = 'cb@strongfriendsclub.com';
  if v_coach_id is null then
    raise exception 'Coach account not found';
  end if;

  insert into enquiries (coach_id, doc)
  values (
    v_coach_id,
    jsonb_build_object(
      'name', left(coalesce(p_payload->>'name', ''), 200),
      'email', left(coalesce(p_payload->>'email', ''), 320),
      'phone', left(coalesce(p_payload->>'phone', ''), 60),
      'instagram', left(coalesce(p_payload->>'instagram', ''), 100),
      'goals', left(coalesce(p_payload->>'goals', ''), 2000),
      'experience', left(coalesce(p_payload->>'experience', ''), 2000),
      'struggle', left(coalesce(p_payload->>'struggle', ''), 2000),
      'priority', left(coalesce(p_payload->>'priority', ''), 200),
      'coachingSetup', case when jsonb_typeof(p_payload->'coachingSetup') = 'array' then p_payload->'coachingSetup' else '[]'::jsonb end,
      'triedCoach', left(coalesce(p_payload->>'triedCoach', ''), 2000),
      'anythingElse', left(coalesce(p_payload->>'anythingElse', ''), 2000),
      'status', 'new',
      'createdAt', now()
    )
  );
end;
$$;

grant execute on function submit_enquiry(jsonb) to anon, authenticated;

-- ---------------------------------------------------------------- processed_stripe_events
-- Pure idempotency guard for the Stripe payment webhook (api/stripe-webhook.js):
-- Stripe retries webhook deliveries that don't respond fast enough or that
-- errored, and without this a retried "payment succeeded" event could create
-- a second client account (and send a second access-code email) for the
-- same purchase. The webhook inserts the Stripe event id here BEFORE doing
-- anything else; a duplicate insert fails on the primary key and the
-- webhook treats that as "already handled, nothing to do." Only ever
-- touched by the webhook's own service-role connection -- RLS is enabled
-- with no policies at all (default-deny) as a pure defense-in-depth
-- backstop, since neither anon nor a signed-in coach session has any
-- legitimate reason to read or write it.
create table if not exists processed_stripe_events (
  event_id text primary key,
  processed_at timestamptz not null default now()
);

alter table processed_stripe_events enable row level security;

-- ============================================================================
-- That's the whole schema. Next: Supabase Dashboard -> Settings -> API to
-- grab your Project URL and anon public key for the app's .env file -- see
-- the main README for exactly where those go.
-- ============================================================================
