import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, services, trucks, term, monthlyTotal, contractTotal, totalDiscountPct, message } = body;

    if (!name || !email || !phone || !services?.length || !trucks || !term) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("quotes")
      .insert([
        {
          name,
          email,
          phone,
          company: company || null,
          services,
          trucks,
          term,
          monthly_total: monthlyTotal,
          contract_total: contractTotal,
          discount_pct: totalDiscountPct,
          message: message || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save quote." }, { status: 500 });
    }

    return NextResponse.json({ success: true, quote: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}