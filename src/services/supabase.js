import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cjhrxzpsgdfbnrelymnl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqaHJ4enBzZ2RmYm5yZWx5bW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTYwNDQsImV4cCI6MjA3NzQ5MjA0NH0.l4cYuY31Fv6Dk-tNj3AwAGosihdrZVJ9OExJMUxIXzc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
