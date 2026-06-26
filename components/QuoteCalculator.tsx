"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { services } from "@/lib/service-data";
import { calculateQuote, pricingServices, termOptions } from "@/lib/quote-pricing";

type FormState = "idle" | "loading" | "success" | "error";

function formatUSD(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function QuoteCalculator() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [trucks, setTrucks] = useState(1);
  const [term, setTerm] = useState("monthly");
  const [contact, setContact] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [savedQuoteId, setSavedQuoteId] = useState<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const calc = useMemo(() => calculateQuote(selectedSlugs, trucks, term), [selectedSlugs, trucks, term]);

  useEffect(() => {
    if (state === "error" && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  const toggleService = (slug: string) => {
    setSelectedSlugs((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlugs.length === 0) {
      setErrorMsg("Select at least one service to get a quote.");
      setState("error");
      return;
    }
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          services: selectedSlugs,
          trucks,
          term,
          monthlyTotal: calc.monthlyTotal,
          contractTotal: calc.contractTotal,
          totalDiscountPct: calc.totalDiscountPct,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setSavedQuoteId(data.quote?.id || null);
        setState("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section id="quote" className="py-16 sm:py-24" style={{ background: "white" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "#dcfce7" }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="#16a34a" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px, 3vw, 26px)",
              color: "#0A1628",
              marginBottom: "12px",
            }}
          >
            Your Estimate Is Saved
          </h3>
          <p style={{ color: "#6B7A99", fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }} className="mb-2">
            Estimated monthly cost: <strong style={{ color: "#0A1628" }}>{formatUSD(calc.monthlyTotal)}/mo</strong>
            {calc.termMonths > 1 && (
              <>
                {" "}
                · {calc.termMonths}-month total: <strong style={{ color: "#0A1628" }}>{formatUSD(calc.contractTotal)}</strong>
              </>
            )}
          </p>
          <p style={{ color: "#6B7A99", fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7 }} className="mb-8">
            This is a preliminary estimate. Our team will follow up within 1-2 Business Days to confirm final pricing for your fleet.
          </p>
          <button
            onClick={() => {
              setState("idle");
              setSelectedSlugs([]);
              setTrucks(1);
              setTerm("monthly");
              setContact({ name: "", email: "", phone: "", company: "", message: "" });
            }}
            className="btn-primary"
            style={{ margin: "0 auto" }}
          >
            Get Another Estimate
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-16 sm:py-24" style={{ background: "#F8FAFC" }}>
      <style>{`
        .qc-no-spinner::-webkit-outer-spin-button,
        .qc-no-spinner::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .qc-no-spinner {
          -moz-appearance: textfield;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-28 lg:pb-0">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            style={{
              color: "#1E6FFF",
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Pricing
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4.5vw, 50px)",
              color: "#0A1628",
              marginTop: "12px",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Build Your Estimate
          </h2>
          <p
            style={{
              color: "#6B7A99",
              fontSize: "clamp(15px, 2vw, 17px)",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
              lineHeight: 1.7,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Select the services you need, your fleet size, and a commitment term, get an instant estimate.
          </p>
        </div>

        <form id="quote-form" onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-6 xl:gap-12 items-start">
          {/* Left: configuration */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-10">
            {/* Services */}
            <div>
              <h3
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "15px", color: "#0A1628" }}
                className="mb-4"
              >
                1. Choose Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {services.map((s) => {
                  const pricing = pricingServices.find((p) => p.slug === s.slug);
                  const checked = selectedSlugs.includes(s.slug);
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => toggleService(s.slug)}
                      className="text-left rounded-xl p-4 transition-colors"
                      style={{
                        border: checked ? "1.5px solid #1E6FFF" : "1.5px solid #E2E8F0",
                        background: checked ? "#F0F4FF" : "white",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: checked ? "#1E6FFF" : "#F0F4FF", color: checked ? "white" : "#1E6FFF" }}
                        >
                          <div className="w-5 h-5">{s.icon}</div>
                        </div>
                        <div
                          className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ border: checked ? "none" : "1.5px solid #CBD5E1", background: checked ? "#1E6FFF" : "white" }}
                        >
                          {checked && (
                            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-white">
                              <path
                                fillRule="evenodd"
                                d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.42 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p
                        style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px", color: "#0A1628" }}
                        className="mt-3 mb-1"
                      >
                        {s.title}
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#6B7A99" }}>
                        from {pricing ? formatUSD(pricing.basePerTruckMonthly) : ""}/truck/mo
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trucks */}
            <div>
              <h3
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "15px", color: "#0A1628" }}
                className="mb-4"
              >
                2. Fleet Size
              </h3>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTrucks((t) => Math.max(1, t - 1))}
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ border: "1.5px solid #E2E8F0", color: "#0A1628", fontSize: "18px" }}
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={trucks}
                  onChange={(e) => setTrucks(Math.max(1, parseInt(e.target.value) || 1))}
                  className="form-input text-center qc-no-spinner"
                  style={{ width: "90px" }}
                />
                <button
                  type="button"
                  onClick={() => setTrucks((t) => t + 1)}
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ border: "1.5px solid #E2E8F0", color: "#0A1628", fontSize: "18px" }}
                >
                  +
                </button>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7A99" }}>
                  {trucks === 1 ? "truck" : "trucks"}
                </span>
              </div>
            </div>

            {/* Term */}
            <div>
              <h3
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "15px", color: "#0A1628" }}
                className="mb-4"
              >
                3. Commitment Term
              </h3>
              <div className="flex flex-wrap gap-2">
                {termOptions.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setTerm(t.value)}
                    className="px-5 py-2.5 rounded-full"
                    style={{
                      border: term === t.value ? "1.5px solid #1E6FFF" : "1.5px solid #E2E8F0",
                      background: term === t.value ? "#1E6FFF" : "white",
                      color: term === t.value ? "white" : "#0A1628",
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 600,
                      fontSize: "13px",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "15px", color: "#0A1628" }}
                className="mb-4"
              >
                4. Your Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={contact.name}
                  onChange={handleContactChange}
                  className="form-input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={contact.phone}
                  onChange={handleContactChange}
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={contact.email}
                  onChange={handleContactChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={contact.company}
                  onChange={handleContactChange}
                  className="form-input"
                />
              </div>
              <textarea
                name="message"
                placeholder="Anything else we should know about your fleet?"
                rows={3}
                value={contact.message}
                onChange={handleContactChange}
                className="form-input mt-4"
                style={{ resize: "vertical", minHeight: "90px" }}
              />
            </div>
          </div>

          {/* Right: sticky summary */}
          <div className="lg:col-span-2">
            <div
              ref={summaryRef}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-6 xl:p-8 lg:sticky lg:top-20 xl:top-24"
              style={{ border: "1.5px solid #C8D8FF", boxShadow: "0 20px 60px rgba(30, 111, 255, 0.08)" }}
            >
              <h3
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "18px", color: "#0A1628" }}
                className="mb-5"
              >
                Your Estimate
              </h3>

              {selectedSlugs.length === 0 ? (
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7A99" }}>
                  Select at least one service to see pricing.
                </p>
              ) : (
                <>
                  <div className="space-y-2 mb-5">
                    {selectedSlugs.map((slug) => {
                      const s = services.find((x) => x.slug === slug);
                      const p = pricingServices.find((x) => x.slug === slug);
                      if (!s || !p) return null;
                      return (
                        <div key={slug} className="flex items-center justify-between">
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#334155" }}>
                            {s.title}
                          </span>
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B7A99" }}>
                            {formatUSD(p.basePerTruckMonthly)}/truck
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 space-y-1.5" style={{ borderTop: "1px solid #EEF2F8" }}>
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B7A99" }}>
                        {trucks} {trucks === 1 ? "truck" : "trucks"} × {formatUSD(calc.baseMonthlyPerTruck)}
                      </span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B7A99" }}>
                        {formatUSD(calc.listMonthly)}
                      </span>
                    </div>
                    {calc.totalDiscountPct > 0 && (
                      <div className="flex items-center justify-between">
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#16a34a" }}>
  Term commitment savings
</span>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#16a34a" }}>
                          −{Math.round(calc.totalDiscountPct * 100)}%
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4" style={{ borderTop: "1.5px solid #0A1628" }}>
                    <div className="flex items-end justify-between mb-1">
                      <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px", color: "#0A1628" }}>
                        Monthly Total
                      </span>
                      <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "26px", color: "#1E6FFF" }}>
                        {formatUSD(calc.monthlyTotal)}
                      </span>
                    </div>
                    {calc.termMonths > 1 && (
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#6B7A99" }}>
                        {formatUSD(calc.contractTotal)} total over {calc.termMonths} months · saving{" "}
                        {formatUSD(calc.savingsVsListPrice)}
                      </p>
                    )}
                  </div>
                </>
              )}

              {state === "error" && (
                <div
                  className="p-3 rounded-xl mt-5"
                  style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", fontSize: "13px", fontFamily: "Inter, sans-serif" }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full justify-center mt-6"
                disabled={state === "loading"}
              >
                {state === "loading" ? "Saving your estimate..." : "Get My Quote"}
              </button>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#94A3B8", textAlign: "center" }} className="mt-3">
                Estimate only. Final pricing confirmed by our team.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Mobile sticky price bar — mirrors live total, submits the same form */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 px-4 sm:px-6"
        style={{
          background: "white",
          borderTop: "1px solid #EEF2F8",
          boxShadow: "0 -8px 24px rgba(10, 22, 40, 0.08)",
          paddingTop: "12px",
          paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div className="min-w-0">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              color: "#6B7A99",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {selectedSlugs.length === 0 ? "Estimate" : "Monthly Total"}
          </p>
          <p
            className="truncate"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "20px",
              color: selectedSlugs.length === 0 ? "#6B7A99" : "#1E6FFF",
            }}
          >
            {selectedSlugs.length === 0 ? "Select a service" : formatUSD(calc.monthlyTotal)}
          </p>
        </div>
        <button
          type="submit"
          form="quote-form"
          disabled={state === "loading"}
          className="btn-primary whitespace-nowrap flex-shrink-0"
        >
          {state === "loading" ? "Saving..." : "Get My Quote"}
        </button>
      </div>
    </section>
  );
}