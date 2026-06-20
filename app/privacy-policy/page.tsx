import type { Metadata } from "next";
import PageHeroBg from "@/components/PageHeroBgProps";

export const metadata: Metadata = {
  title: "Privacy Policy | CargoSync",
  description: "How CargoSync collects, uses, and protects your information.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
         style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px, 4.5vw, 54px)",
              color: "#04172a",
              marginTop: "12px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              marginBottom: "15px"
            }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeroBg title="Privacy Policy" subtitle="CargoSync" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          style={{ fontFamily: "Inter, sans-serif", color: "#334155", fontSize: "15px", lineHeight: 1.8 }}
          className="space-y-10"
        >
          <p>
            CargoSync (&ldquo;CargoSync&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
            respects your privacy and is committed to protecting the personal information you provide when using our
            website, services, and communications.
          </p>
          <p>This Privacy Policy explains how we collect, use, store, and protect your information.</p>

          <Section title="1. Information We Collect">
            <p className="mb-3 font-semibold" style={{ color: "#0A1628" }}>
              Information You Provide
            </p>
            <List
              items={[
                "Full name",
                "Company name",
                "Phone number",
                "Email address",
                "Preferred contact method",
                "Service inquiries",
                "Business and fleet information submitted through forms",
              ]}
            />
            <p className="mt-5 mb-3 font-semibold" style={{ color: "#0A1628" }}>
              Information Collected Automatically
            </p>
            <p className="mb-3">When you browse our website, we may collect:</p>
            <List items={["IP address", "Browser type", "Device information", "Pages visited", "Date and time of visits", "Website usage analytics"]} />
          </Section>

          <Section title="2. How We Use Your Information">
            <p className="mb-3">We use collected information to:</p>
            <List
              items={[
                "Respond to inquiries and callback requests",
                "Provide dispatch and back-office support services",
                "Communicate regarding services and operations",
                "Improve our website and customer experience",
                "Maintain business records",
                "Comply with legal and regulatory requirements",
                "Prevent fraud and unauthorized activity",
              ]}
            />
          </Section>

          <Section title="3. Communication Records">
            <p className="mb-3">CargoSync may maintain records of communications conducted through:</p>
            <List items={["Telephone calls", "Emails", "SMS messages", "WhatsApp messages", "Website contact forms"]} />
            <p className="mt-4">
              These records may be retained for operational, training, quality assurance, compliance, and dispute
              resolution purposes.
            </p>
          </Section>

          <Section title="4. Client Operational Data">
            <p className="mb-3">
              As part of providing dispatch and administrative support services, we may access operational information
              belonging to carrier companies, including:
            </p>
            <List
              items={[
                "Load information",
                "Driver contact information",
                "Broker communications",
                "Shipment status updates",
                "Dispatch documentation",
                "Delivery records",
              ]}
            />
            <p className="mt-4">Such information is handled confidentially and used solely for providing agreed-upon services.</p>
          </Section>

          <Section title="5. Information Sharing">
            <p className="mb-3">We do not sell, rent, or trade personal information.</p>
            <p className="mb-3">Information may be shared only:</p>
            <List
              items={[
                "With authorized employees and contractors who require access to perform services",
                "When required by law or legal process",
                "To protect our legal rights or property",
                "With service providers that assist us in operating our business",
              ]}
            />
            <p className="mt-4">All third parties are expected to maintain appropriate confidentiality and security standards.</p>
          </Section>

          <Section title="6. Data Security">
            <p className="mb-3">
              We implement reasonable administrative, technical, and organizational safeguards designed to protect
              information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>
              While we take reasonable measures to protect data, no internet transmission or electronic storage method
              can be guaranteed to be completely secure.
            </p>
          </Section>

          <Section title="7. Cookies and Analytics">
            <p className="mb-3">Our website may use cookies and similar technologies to:</p>
            <List items={["Improve website functionality", "Analyze visitor behavior", "Enhance user experience", "Measure website performance"]} />
            <p className="mt-4">
              You may disable cookies through your browser settings; however, certain website features may not function
              properly.
            </p>
          </Section>

          <Section title="8. Data Retention">
            <p className="mb-3">We retain personal and operational information only for as long as necessary to:</p>
            <List items={["Provide services", "Maintain business records", "Meet legal obligations", "Resolve disputes", "Enforce agreements"]} />
            <p className="mt-4">Retention periods may vary depending on the nature of the information.</p>
          </Section>

          <Section title="9. Third-Party Websites">
            <p className="mb-3">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices,
              policies, or content of external websites.
            </p>
            <p>Users should review the privacy policies of any third-party sites they visit.</p>
          </Section>

          <Section title="10. Your Rights">
            <p className="mb-3">Depending on applicable laws, you may have the right to:</p>
            <List
              items={[
                "Request access to your personal information",
                "Request correction of inaccurate information",
                "Request deletion of personal information",
                "Withdraw consent where applicable",
                "Request information regarding how your data is processed",
              ]}
            />
            <p className="mt-4">Requests may be submitted using the contact information below.</p>
          </Section>

          <Section title="11. Children's Privacy">
            <p>
              Our services are intended for businesses and individuals involved in transportation and logistics
              operations. We do not knowingly collect personal information from individuals under the age of 18.
            </p>
          </Section>

          <Section title="12. Changes to This Privacy Policy">
            <p className="mb-3">
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
              effective date.
            </p>
            <p>Continued use of our website after changes are posted constitutes acceptance of the revised policy.</p>
          </Section>

          <Section title="13. Contact Information">
            <p className="mb-3">
              For questions regarding this Privacy Policy or our handling of personal information, please contact:
            </p>
            <p className="font-semibold mb-1" style={{ color: "#0A1628" }}>
              CargoSync
            </p>
            <p>Email: hello@cargosync.ca</p>
            <p>Canada: +1 (204) 952-9246</p>
            <p>India: +91 7428975521</p>
            <p className="mt-3">
              Address:
              <br />
              1307-235 Red Embers Way NE,
              <br />
              Calgary, Alberta T3N 1E9,
              <br />
              Canada
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}