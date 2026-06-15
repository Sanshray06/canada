export default function Services() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
        </svg>
      ),
      title: "Freight Dispatch",
      desc: "End-to-end load coordination for carriers - from finding and booking loads to confirming pickups, deliveries, and rate negotiations with brokers.",
      tags: ["Load Booking", "Rate Negotiation", "Broker Relations"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          <path d="M12 12v4M10 14h4" />
        </svg>
      ),
      title: "Back-Office Administration",
      desc: "Comprehensive administrative support including documentation management, system updates, record keeping, and operational data accuracy.",
      tags: ["Documentation", "Record Keeping", "System Updates"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
      ),
      title: "Cross-Border Coordination",
      desc: "Specialized support for US–Canada cross-border shipments, including documentation handling, customs coordination, and compliance assistance.",
      tags: ["US–Canada Border", "Customs Docs", "Compliance"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Driver & Customer Communication",
      desc: "Proactive communication with drivers, brokers, and customers to keep shipments on track and resolve time-sensitive issues quickly.",
      tags: ["Driver Updates", "Customer Liaison", "Issue Resolution"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
        </svg>
      ),
      title: "Fleet Tracking & Monitoring",
      desc: "Real-time shipment tracking and fleet monitoring to ensure on-time performance, with prompt updates when schedules change unexpectedly.",
      tags: ["Real-Time Tracking", "On-Time Performance", "24/7 Monitoring"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Scalable Dispatch Teams",
      desc: "Need more coverage as your fleet grows? We can expand our team of dispatchers and support staff to match your operational requirements.",
      tags: ["Scalable Support", "Dedicated Dispatchers", "Flexible Staffing"],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
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
            What We Do
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 48px)",
              color: "#0A1628",
              marginTop: "12px",
              lineHeight: 1.15,
            }}
          >
            Services Built for{" "}
            <span style={{ color: "#1E6FFF" }}>Trucking Operations</span>
          </h2>
          <p
            style={{
              color: "#6B7A99",
              fontSize: "clamp(15px, 2vw, 17px)",
              marginTop: "16px",
              maxWidth: "520px",
              margin: "16px auto 0",
              lineHeight: 1.7,
              fontFamily: "Inter, sans-serif",
            }}
          >
            We go beyond dispatch. Every service is built to reduce your administrative burden and keep your fleet running efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card group cursor-default">
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                style={{ background: "#F0F4FF", color: "#1E6FFF" }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 2vw, 18px)",
                  color: "#0A1628",
                  marginBottom: "8px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "#6B7A99",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "14px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#F0F4FF",
                      color: "#1E6FFF",
                      padding: "3px 10px",
                      borderRadius: "99px",
                      fontSize: "12px",
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}