import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeroBg from "@/components/PageHeroBgProps";
import { services } from "@/lib/service-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | CargoSync`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== params.slug);

  return (
    <main className="min-h-screen bg-white">
      <PageHeroBg title={service.title} subtitle={service.shortDesc} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {service.tags.map((t) => (
            <span
              key={t}
              style={{
                background: "#F0F4FF",
                color: "#1E6FFF",
                padding: "5px 14px",
                borderRadius: "99px",
                fontSize: "13px",
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Long description */}
        <div
          style={{ fontFamily: "Inter, sans-serif", color: "#334155", fontSize: "16px", lineHeight: 1.8 }}
          className="space-y-5 mb-12"
        >
          {service.longDesc.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Features */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-12"
          style={{ background: "#F8FAFC", border: "1px solid #EEF2F8" }}
        >
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#0A1628",
              marginBottom: "16px",
            }}
          >
            What's Included
          </h2>
          <ul className="space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="#1E6FFF">
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span style={{ color: "#334155", fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.6 }}>
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{ background: "linear-gradient(135deg, #0A1628 0%, #0A2460 100%)" }}
        >
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px, 3vw, 28px)",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Ready to put this to work for your fleet?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "14px" }} className="mb-6">
            Tell us about your operation and we'll get back to you with next steps.
          </p>
          <a href="/#contact" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex" }}>
            Request a Callback
          </a>
        </div>
      </div>

      {/* Other services */}
      <section style={{ background: "#F8FAFC" }} className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 3vw, 24px)",
              color: "#0A1628",
            }}
            className="mb-6 sm:mb-8"
          >
            Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block bg-white rounded-xl p-5 sm:p-6"
                style={{ border: "1px solid #EEF2F8", textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "#F0F4FF", color: "#1E6FFF" }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#0A1628",
                    marginBottom: "4px",
                  }}
                >
                  {s.title}
                </h3>
                <span style={{ color: "#1E6FFF", fontSize: "13px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}