import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://abugeeejgopsxlcvqfte.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidWdlZWVqZ29wc3hsY3ZxZnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDc3NjEsImV4cCI6MjAyMDQ4Mzc2MX0.04vFluzyGUGLdQcGKtG8ZzBNmPKJWjAazFULsHtTV0M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
