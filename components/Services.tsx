export default function Services() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 16V8h14v8" />
          <path d="M3 16h18" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      ),
      title: "Airport Transfers",
      desc: "Reliable airport pickup and drop-off services with professional chauffeurs. We monitor flight schedules to ensure timely arrivals and departures.",
      tags: ["24/7 Service", "Flight Tracking", "Fixed Rates"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 20h16" />
          <path d="M7 20V8h10v12" />
          <path d="M9 12h2M13 12h2" />
        </svg>
      ),
      title: "Corporate Transportation",
      desc: "Professional transportation solutions for executives, business meetings, conferences, and corporate events.",
      tags: ["Business Travel", "Executive Service", "Professional Drivers"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 12h18" />
          <path d="M15 6l6 6-6 6" />
        </svg>
      ),
      title: "Long Distance Travel",
      desc: "Comfortable and safe long-distance transportation between cities with experienced drivers and premium vehicles.",
      tags: ["Intercity Travel", "Comfort", "Safe Journey"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Event Transportation",
      desc: "Transportation services for weddings, private events, concerts, sports events, and special occasions.",
      tags: ["Weddings", "Events", "Group Travel"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11z" />
        </svg>
      ),
      title: "Executive Chauffeur Service",
      desc: "Luxury chauffeur services for clients seeking comfort, privacy, and a premium transportation experience.",
      tags: ["Luxury Vehicles", "Professional Chauffeurs", "VIP Service"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 8h16v8H4z" />
          <path d="M8 4v4M16 4v4" />
        </svg>
      ),
      title: "Hotel & Cruise Transfers",
      desc: "Convenient transportation to and from hotels, cruise terminals, train stations, and other travel destinations.",
      tags: ["Hotels", "Cruise Ports", "Travel Assistance"],
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
            <span style={{ color: "#1E6FFF" }}>Real Results</span>
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
            We go beyond rides. Every journey is a partnership focused on your comfort and punctuality.
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