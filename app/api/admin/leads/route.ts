import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Converts a raw Supabase row (snake_case) into the shape page.tsx expects (camelCase)
function mapLead(row: any) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    company: row.company,
    service: row.service,
    message: row.message,
    preferredContact: row.preferred_contact,
    status: row.status,
    submittedAt: row.submitted_at,
    updatedAt: row.updated_at,
  };
}

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) {
    console.error("Supabase fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch leads." }, { status: 500 });
  }

  const leads = data.map(mapLead);
  return NextResponse.json({ leads, total: leads.length });
}

export async function PATCH(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, status } = body;

  const { data, error } = await supabase
    .from("leads")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Supabase update error:", error);
    return NextResponse.json({ error: "Failed to update lead." }, { status: 500 });
  }

  return NextResponse.json({ success: true, lead: mapLead(data) });
}