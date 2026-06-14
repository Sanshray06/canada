import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabase";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "octopus2024";

function readLeads() {
  if (!fs.existsSync(LEADS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeLeads(leads: unknown[]) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await supabase
  .from("leads")
  .delete()
  .eq("id", params.id);

if (error) {
  return NextResponse.json(
    { error: error.message },
    { status: 500 }
  );
}

return NextResponse.json({
  success: true,
});
}
