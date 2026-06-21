import Link from "next/link";
import { services } from "@/lib/service-data";

export default function Services() {
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
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4.5vw, 54px)",
              color: "#0A1628",
              marginTop: "12px",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
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
            <Link key={s.slug} href={`/services/${s.slug}`} className="service-card group block">
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
                {s.shortDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
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
              <span
                style={{
                  color: "#1E6FFF",
                  fontSize: "13px",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}