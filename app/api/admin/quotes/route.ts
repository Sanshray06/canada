import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Failed to fetch quotes." }, { status: 500 });
  }

  return NextResponse.json(
    { quotes: data },
    { headers: { "Cache-Control": "no-store, max-age=0" } } // 👈 stops browser/CDN caching too
  );
}