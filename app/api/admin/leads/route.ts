import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabase";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function readLeads() {
  if (!fs.existsSync(LEADS_FILE)) return [];
  try {
    const raw = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeLeads(leads: unknown[]) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
const { data, error } = await supabase
  .from("leads")
  .select("*")
  .order("submitted_at", {
    ascending: false,
  });

if (error) {
  throw error;
}

const leads = data;
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
  //const idx = leads.findIndex((l: { id: string }) => l.id === id);
  // if (idx === -1) {
  //   return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  // }

  // leads[idx].status = status;
  // leads[idx].updatedAt = new Date().toISOString();
  // writeLeads(leads);

  return NextResponse.json({ success: true});
}
