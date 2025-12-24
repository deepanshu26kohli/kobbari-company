import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uretrizkgtvadhqypgmw.supabase.co"
const supabaseAnonKey = "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZXRyaXprZ3R2YWRocXlwZ213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NzY0NDYsImV4cCI6MjA4MjE1MjQ0Nn0.ZcmV0YI_WTjMJhnR0n_shI2uaKHhWAw5iMPacWW3zxU"

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
