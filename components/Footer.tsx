"use client";
export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A1628",
        color: "white",
        paddingTop: "48px",
        paddingBottom: "32px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand – full width on mobile */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#1E6FFF" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-white">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 7c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5H8v-5z" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(16px, 3vw, 20px)",
                  color: "white",
                }}
              >
                CargoSync<span style={{ color: "#1E6FFF" }}>Tech</span>
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                lineHeight: 1.8,
                fontFamily: "Inter, sans-serif",
                maxWidth: "300px",
                marginBottom: "20px",
              }}
            >
              Reliable, professional transportation for every journey. We drive
              so you can focus on what matters.
            </p>
            {/* <div className="flex gap-3">
              {["in", "tw", "gh"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#1E6FFF";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div> */}
          </div>

          {/* Services links */}
          <div>
            <h4
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "white",
                marginBottom: "14px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Freight Dispatch",
                "Back-Office Administration",
                "Cross-Border Coordination",
                "Driver & Customer Communication",
                "Fleet Tracking & Monitoring",
                "Scalable Dispatch Teams"
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#services"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "13px",
                      fontFamily: "Inter, sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "white",
                marginBottom: "14px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li
  style={{
    color: "rgba(255,255,255,0.5)",
    fontSize: "13px",
    fontFamily: "Inter, sans-serif",
    marginBottom: "10px",
  }}
>
  +91 7428975521
</li>

<li
  style={{
    color: "rgba(255,255,255,0.5)",
    fontSize: "13px",
    fontFamily: "Inter, sans-serif",
  }}
>
  +1 (204) 952-9246
</li>
              <li>
                <a
                  href="mailto:hello@octopustech.in"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "13px",
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "none",
                  }}
                >
                  hello@octopustech.in
                </a>
              </li>
              <li
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.6,
                }}
              >
                Calgary, AB, Canada
              </li>
              {/* <li style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontFamily: "Inter, sans-serif" }}>
                Mon–Sat · 9am–7pm IST
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "13px",
              fontFamily: "Inter, sans-serif",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} CargoSync. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "13px",
                  fontFamily: "Inter, sans-serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}