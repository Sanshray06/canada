"use client";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredContact: "callback",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const services = [
    "Freight Dispatch",
    "Back-Office Administration",
    "Cross-Border Coordination",
    "Driver & Customer Communication",
    "Fleet Tracking & Monitoring",
    "Scalable Dispatch Teams",
    "Other / Not Sure",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          preferredContact: "callback",
        });
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

  return (
    <section
      id="contact"
      className="py-16 sm:py-24"
      style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #fff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-16 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
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
              Get In Touch
            </span>
            <h2
              // style={{
              //   fontFamily: "Syne, sans-serif",
              //   fontWeight: 800,
                
              //   color: "#0A1628",
              //   marginTop: "12px",
              //   lineHeight: 1.15,
              //   marginBottom: "18px",
              // }}
              style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              color: "#051423",
              marginTop: "12px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
            >
              Let&apos;s Talk About Your Fleet
            </h2>
            <p
              style={{
                color: "#6B7A99",
                fontSize: "clamp(14px, 2vw, 16px)",
                lineHeight: 1.8,
                fontFamily: "Inter, sans-serif",
                marginBottom: "32px",
              }}
            >
              Fill in the form and we&apos;ll get back to you within 1-2 Business Days. Prefer to call? Reach us directly on either number below.
            </p>

            {/* Contact details */}
            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  label: "Canada",
                  value: "+1 (204) 952-9246",
                  href: "tel:+12049529246",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  label: "India",
                  value: "+91 7428975521",
                  href: "tel:+917428975521",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@cargosync.ca",
                  href: "mailto:hello@cargosync.ca",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                  label: "Office",
                  value: "1307-235 Red Embers Way NE, Calgary AB T3N 1E9, Canada",
                  href: "#",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-3 sm:gap-4"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F0F4FF", color: "#1E6FFF" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#6B7A99",
                        fontSize: "12px",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        color: "#0A1628",
                        fontSize: "15px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Call CTA */}
            <a
              href="tel:+12049529246"
              className="btn-primary mt-8 sm:mt-10 w-full justify-center"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
              style={{
                border: "1.5px solid #C8D8FF",
                boxShadow: "0 20px 60px rgba(30, 111, 255, 0.08)",
              }}
            >
              {state === "success" ? (
                <div className="text-center py-10 sm:py-12">
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
                      fontSize: "clamp(20px, 3vw, 24px)",
                      color: "#0A1628",
                      marginBottom: "12px",
                    }}
                  >
                    We&apos;ve Got Your Message!
                  </h3>
                  <p
                    style={{
                      color: "#6B7A99",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                    }}
                  >
                    Our team will reach out within 1-2 Business Days. Check your inbox for a confirmation email.
                  </p>
                  <button
                    onClick={() => setState("idle")}
                    className="btn-primary"
                    style={{ margin: "0 auto" }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3
                    // style={{
                    //   fontFamily: "Syne, sans-serif",
                    //   fontWeight: 800,
                    //   fontSize: "clamp(18px, 3vw, 22px)",
                    //   color: "#0A1628",
                    //   marginBottom: "20px",
                    // }}
                    style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              color: "#051423",
              marginTop: "12px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
                  >
                    Request a Callback
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 600,
                          color: "#0A1628",
                          marginBottom: "6px",
                        }}
                      >
                        Full Name <span style={{ color: "#1E6FFF" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 600,
                          color: "#0A1628",
                          marginBottom: "6px",
                        }}
                      >
                        Phone Number <span style={{ color: "#1E6FFF" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (204) 952-9246"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 600,
                          color: "#0A1628",
                          marginBottom: "6px",
                        }}
                      >
                        Email Address <span style={{ color: "#1E6FFF" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@yourcompany.com"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 600,
                          color: "#0A1628",
                          marginBottom: "6px",
                        }}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Trucking Company"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 600,
                        color: "#0A1628",
                        marginBottom: "6px",
                      }}
                    >
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 600,
                        color: "#0A1628",
                        marginBottom: "6px",
                      }}
                    >
                      Tell us about your operation
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Fleet size, lanes you run, current challenges, what kind of support you need..."
                      className="form-input"
                      style={{ resize: "vertical", minHeight: "110px" }}
                    />
                  </div>

                  {/* Preferred contact */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 600,
                        color: "#0A1628",
                        marginBottom: "10px",
                      }}
                    >
                      Preferred Response Method
                    </label>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {[
                        { value: "callback", label: "Phone Callback" },
                        { value: "email", label: "Email Response" },
                        { value: "whatsapp", label: "WhatsApp" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-2 cursor-pointer"
                          style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#0A1628" }}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={opt.value}
                            checked={form.preferredContact === opt.value}
                            onChange={handleChange}
                            style={{ accentColor: "#1E6FFF" }}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {state === "error" && (
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        color: "#dc2626",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    disabled={state === "loading"}
                    style={{ marginTop: "4px" }}
                  >
                    {state === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending your request...
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        Send Request - We&apos;ll Call You Back
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      color: "#6B7A99",
                      fontSize: "12px",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    🔒 Your information is private and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}