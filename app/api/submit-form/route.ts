import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabase";
// Data file path - stored in project root /data folder
// const DATA_DIR = path.join(process.cwd(), "data");
// const LEADS_FILE = path.join(DATA_DIR, "leads.json");

// // Ensure data directory and file exist
// function ensureDataFile() {
//   if (!fs.existsSync(DATA_DIR)) {
//     fs.mkdirSync(DATA_DIR, { recursive: true });
//   }
//   if (!fs.existsSync(LEADS_FILE)) {
//     fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
//   }
// }

// function readLeads() {
//   ensureDataFile();
//   try {
//     const raw = fs.readFileSync(LEADS_FILE, "utf-8");
//     return JSON.parse(raw);
//   } catch {
//     return [];
//   }
// }

// function writeLeads(leads: unknown[]) {
//   ensureDataFile();
//   fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
// }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await supabase
    .from("leads")
    .insert([
      {
        id: uuidv4(),
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone.trim(),
        company: body.company?.trim() || "",
        service: body.service || "Not specified",
        message: body.message?.trim() || "",
        preferred_contact:
          body.preferredContact || "callback",
        status: "new",
        submitted_at: new Date().toISOString(),
        ip: req.headers.get("x-forwarded-for") || "unknown",
      },
    ]);
    if (error) {
      
    console.log(error)
    throw error;
  }
    // const leads = readLeads();
    // leads.unshift(newLead); // Add newest first
    // writeLeads(leads);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch shortly."},
      { status: 201 }
    );
  } catch (err) {
    console.error("Form submission error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
