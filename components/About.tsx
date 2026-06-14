export default function About() {
  const whyUs = [
    {
      num: "01",
      title: "24/7 Availability",
      desc: "Our transportation services operate around the clock, ensuring you always have a reliable ride whenever you need it.",
    },
    {
      num: "02",
      title: "Professional Chauffeurs",
      desc: "All our drivers are experienced, licensed, and committed to providing a safe, comfortable, and professional travel experience.",
    },
    {
      num: "03",
      title: "On-Time Pickups",
      desc: "We value your time. Whether it's an airport transfer or corporate trip, punctuality is our top priority.",
    },
    {
      num: "04",
      title: "Clean & Comfortable Vehicles",
      desc: "Our fleet is regularly maintained and cleaned to ensure a premium travel experience for every passenger.",
    },
  ];

  return (
    <>
      {/* About section */}
      <section id="about" className="py-16 sm:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Visual side */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0A1628, #0E1F3D)",
                  padding: "clamp(24px, 5vw, 40px)",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10 rounded-2xl"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(30,111,255,1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-block px-3 py-1 rounded-full mb-5 sm:mb-6"
                    style={{
                      background: "rgba(30,111,255,0.2)",
                      border: "1px solid rgba(30,111,255,0.3)",
                    }}
                  >
                    <span style={{ color: "#4D91FF", fontSize: "11px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
                      PREMIUM TRANSPORTATION SERVICE
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(20px, 3.5vw, 28px)",
                      color: "white",
                      lineHeight: 1.2,
                      marginBottom: "14px",
                    }}
                  >
                    Reliable Transportation You Can Count On
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.7, fontFamily: "Inter, sans-serif" }}>
                    Providing dependable airport transfers, corporate transportation, and long-distance travel solutions. Our mission is simple: deliver safe, comfortable, and punctual transportation for every customer.
                  </p>
                </div>

                {/* Stats row */}
                <div
                  className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "24px" }}
                >
                  {[
                    { n: "5000+", l: "Trips Completed" },
                    { n: "1000+", l: "Happy Clients" },
                    { n: "15+", l: "Years Experience" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 4vw, 28px)", color: "#1E6FFF" }}>
                        {s.n}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", fontFamily: "Inter, sans-serif", marginTop: "4px" }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge – repositioned on mobile */}
              <div
                className="absolute -bottom-4 right-2 sm:-right-4 bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3"
                style={{ border: "1px solid #C8D8FF", maxWidth: "calc(100% - 16px)" }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dcfce7" }}
                >
                  <svg viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5" fill="#16a34a">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(12px, 2.5vw, 14px)", color: "#0A1628" }}>
                    Trusted Transportation Service
                  </div>
                  <div style={{ color: "#6B7A99", fontSize: "12px", fontFamily: "Inter, sans-serif" }}>
                    Licensed & Insured
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="mt-8 sm:mt-10 lg:mt-0">
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
                About Us
              </span>
              <h2
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  color: "#0A1628",
                  marginTop: "12px",
                  lineHeight: 1.15,
                  marginBottom: "18px",
                }}
              >
                Your Trusted Transportation Partner
              </h2>
              <p
                style={{
                  color: "#6B7A99",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "14px",
                }}
              >
                Whether you&apos;re travelling for business, catching a flight, attending an event, or simply need dependable transportation, our experienced chauffeurs and modern fleet are ready to serve you.
              </p>
              <p
                style={{
                  color: "#6B7A99",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "28px",
                }}
              >
                We&apos;re committed to making every ride comfortable, timely, and stress-free — because your journey matters to us from start to finish.
              </p>

              <a href="#contact" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex" }}>
                Start a Conversation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us section */}
      <section id="why-us" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              Why Ride With Us
            </span>
            <h2
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                color: "#0A1628",
                marginTop: "12px",
              }}
            >
              What Makes Us Different
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            {whyUs.map((w) => (
              <div
                key={w.num}
                className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl"
                style={{ border: "1.5px solid #C8D8FF", background: "white" }}
              >
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(26px, 4vw, 36px)",
                    color: "#C8D8FF",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {w.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(15px, 2vw, 18px)",
                      color: "#0A1628",
                      marginBottom: "8px",
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      color: "#6B7A99",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}