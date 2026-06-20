export default function About() {
  const whyUs = [
    {
      num: "01",
      title: "Dedicated Support",
      desc: "We operate as an extension of your company, representing your business professionally in every interaction with drivers, brokers, and customers.",
    },
    {
      num: "02",
      title: "Proactive Communication",
      desc: "We stay in regular contact with drivers, brokers, and customers to keep shipments moving and address issues before they become larger problems.",
    },
    {
      num: "03",
      title: "Accuracy & Organization",
      desc: "We maintain detailed records, update systems promptly, and ensure all operational information is current and easy to access.",
    },
    {
      num: "04",
      title: "Scalable to Your Business",
      desc: "Whether you run a small fleet or a large operation, we can expand our team of dispatchers and support staff to match your requirements.",
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
                      DISPATCH SUPPORT - NORTH AMERICA
                    </span>
                  </div>
                  <h3
                    style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  color: "#d9e1e9",
                  marginTop: "12px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  marginBottom: "14px"
                }}
                  >
                    Back-Office Support You Can Count On
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.7, fontFamily: "Inter, sans-serif" }}>
                    Founded in 2022, our team was built with one goal: providing reliable, professional, and responsive dispatch and back-office solutions for trucking companies across North America.
                  </p>
                </div>

                {/* Stats row */}
                <div
                  className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "24px" }}
                >
                  {[
                    { n: "4+", l: "Core Dispatchers" },
                    { n: "2022", l: "Founded" },
                    { n: "24/7", l: "Coverage" },
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

              {/* Floating badge */}
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
                    Trusted Dispatch Partner
                  </div>
                  <div style={{ color: "#6B7A99", fontSize: "12px", fontFamily: "Inter, sans-serif" }}>
                    Calgary, AB · Canada
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
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  color: "#051423",
                  marginTop: "12px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  marginBottom: "18px"
                }}
              >
                Your Trusted Trucking Dispatch Partner
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
                We currently have a core team of four experienced dispatchers, supported by administrative staff who assist with documentation, tracking, customer communication, and operational tasks. This structure allows us to provide consistent coverage and respond quickly to time-sensitive situations.
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
                Our team is trained to work with carriers, brokers, drivers, and customers in a fast-paced environment - maintaining clear communication and attention to detail so your fleet keeps moving.
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
              Why Work With Us
            </span>
            <h2
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
              How We Work
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