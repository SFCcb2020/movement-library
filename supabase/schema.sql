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
  name text not null default '',
  doc jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists programs_coach_id_idx on programs (coach_id);
create index if not exists programs_client_id_idx on programs (client_id);

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

-- A client can read (never write) the programs their coach has assigned to
-- them, via the same access-code check pattern as clients above.
create or replace function get_programs_for_code(p_code text)
returns table (id uuid, name text, client_id uuid, doc jsonb)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
    select programs.id, programs.name, programs.client_id, programs.doc
    from programs
    join clients on clients.id = programs.client_id
    where clients.access_code = p_code;
end;
$$;

grant execute on function get_programs_for_code(text) to anon, authenticated;

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

-- ============================================================================
-- That's the whole schema. Next: Supabase Dashboard -> Settings -> API to
-- grab your Project URL and anon public key for the app's .env file -- see
-- the main README for exactly where those go.
-- ============================================================================
