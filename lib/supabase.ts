import { createClient } from "@supabase/supabase-js";


console.log("ENV KEYS:", Object.keys(process.env));
console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);