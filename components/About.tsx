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
      <section
        id="about"
        className="py-24"
        style={{ background: "#F0F4FF" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual side */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0A1628, #0E1F3D)",
                  padding: "40px",
                  minHeight: "380px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10 rounded-2xl"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(30,111,255,1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-block px-3 py-1 rounded-full mb-6"
                    style={{
                      background: "rgba(30,111,255,0.2)",
                      border: "1px solid rgba(30,111,255,0.3)",
                    }}
                  >
                    <span style={{ color: "#4D91FF", fontSize: "12px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
                      PREMIUM TRANSPORTATION SERVICE
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "28px",
                      color: "white",
                      lineHeight: 1.2,
                      marginBottom: "16px",
                    }}
                  >
                    Reliable Transportation You Can Count On
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.7, fontFamily: "Inter, sans-serif" }}>
                    Providing dependable airport transfers, corporate transportation, and long-distance travel solutions. Our mission is simple: deliver safe, comfortable, and punctual transportation for every customer.
                  </p>
                </div>

                {/* Stats row */}
                <div
                  className="relative z-10 grid grid-cols-3 gap-4 pt-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "32px" }}
                >
                  {[
  { n: "5000+", l: "Trips Completed" },
  { n: "1000+", l: "Happy Clients" },
  { n: "15+", l: "Years Experience" },
].map((s) => (
                    <div key={s.l} className="text-center">
                      <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "28px", color: "#1E6FFF" }}>
                        {s.n}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontFamily: "Inter, sans-serif", marginTop: "4px" }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                style={{ border: "1px solid #C8D8FF" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#dcfce7" }}
                >
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="#16a34a">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px", color: "#0A1628" }}>
                    Trusted Transportation Service
                  </div>
                  <div style={{ color: "#6B7A99", fontSize: "12px", fontFamily: "Inter, sans-serif" }}>
                    Licensed & Insured
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
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
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#0A1628",
                  marginTop: "12px",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                }}
              >
                Your Trusted Transportation Partner
              </h2>
              <p
                style={{
                  color: "#6B7A99",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Whether you're travelling for business, catching a flight, attending an event, or simply need dependable transportation, our experienced chauffeurs and modern fleet are ready to serve you.
              </p>
              <p
                style={{
                  color: "#6B7A99",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "32px",
                }}
              >
                Whether you're travelling for business, catching a flight, attending an event, or simply need dependable transportation, our experienced chauffeurs and modern fleet are ready to serve you.
              </p>

              <a href="#contact" className="btn-primary" style={{ textDecoration: "none" }}>
                Start a Conversation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
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
                fontSize: "clamp(28px, 3.5vw, 42px)",
                color: "#0A1628",
                marginTop: "12px",
              }}
            >
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyUs.map((w) => (
              <div
                key={w.num}
                className="flex gap-6 p-8 rounded-2xl"
                style={{ border: "1.5px solid #C8D8FF", background: "white" }}
              >
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "36px",
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
                      fontSize: "18px",
                      color: "#0A1628",
                      marginBottom: "8px",
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      color: "#6B7A99",
                      fontSize: "15px",
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
