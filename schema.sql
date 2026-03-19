-- Create user profiles table
-- Supabase automatically has an 'auth.users' table. We link our 'profiles' to it.
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  role text check (role in ('user', 'business')),
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security) for profiles
alter table public.profiles enable row level security;

-- Policy to allow users to read their own profile
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);

-- Policy to allow users to update their own profile
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);

-----------------------------------------------------------------------------------

-- Create topics table
create table public.topics (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price numeric(10, 2) not null check (price >= 0),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Note: We might want businesses to 'subscribe' or 'buy' a topic, 
-- but for simplicity now, let's just let businesses fetch leads by topic.

-- Allow read access to topics for authenticated and anon users
alter table public.topics enable row level security;
create policy "Anyone can view topics" on topics for select using (true);

-----------------------------------------------------------------------------------

-- Create leads table
create table public.leads (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  topic_id uuid references public.topics(id) not null,
  target_business_id uuid references public.profiles(id), -- Nullable if open market, required if targeted
  name text not null,
  email text not null,
  phone text,
  details text, -- Any specific answers or info from the user
  status text default 'available' check (status in ('available', 'sold', 'pending')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.leads enable row level security;

-- Users can insert their own leads
create policy "Users can create leads" on leads
  for insert with check (auth.uid() = user_id);

-- Users can view their own leads
create policy "Users can view own leads" on leads
  for select using (auth.uid() = user_id);

-- Businesses can view available leads directed at them or the open market
create policy "Businesses can view available leads" on leads
  for select using (
    status = 'available' 
    and exists (
      select 1 from public.profiles where id = auth.uid() and role = 'business'
    )
    and (target_business_id is null or target_business_id = auth.uid())
  );

-----------------------------------------------------------------------------------

-- Create purchased_leads table (keeps track of what businesses bought what lead)
create table public.purchased_leads (
  id uuid default uuid_generate_v4() primary key,
  business_id uuid references public.profiles(id) not null,
  lead_id uuid references public.leads(id) not null,
  purchased_at timestamp with time zone default timezone('utc'::text, now()) not null,
  price_paid numeric(10, 2) not null,
  unique(business_id, lead_id)
);

alter table public.purchased_leads enable row level security;

-- Businesses can view leads they purchased
create policy "Businesses can view their purchased leads" on purchased_leads
  for select using (auth.uid() = business_id);

-----------------------------------------------------------------------------------

-- Automate profile creation via a trigger on auth.users (Supabase standard practice)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'full_name',
    COALESCE(new.raw_user_meta_data->>'role', 'user') -- Default to 'user' if not specified
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-----------------------------------------------------------------------------------

-- Insert some dummy data for topics
insert into public.topics (name, description, price) values
  ('Life Insurance', 'General life insurance inquiries', 15.00),
  ('Auto Insurance', 'Looking for car insurance quotes', 10.00),
  ('Home Renovations', 'Kitchen and bathroom remodels', 25.00),
  ('Solar Panels', 'Residential solar panel installation', 30.00);

