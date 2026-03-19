import { createClient } from '@supabase/supabase-js';

// We default to throwing an error if keys are missing to enforce setup.
// Users must add these to their .env file.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
