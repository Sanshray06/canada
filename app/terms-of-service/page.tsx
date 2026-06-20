import type { Metadata } from "next";
import PageHeroBg from "@/components/PageHeroBgProps";

export const metadata: Metadata = {
  title: "Terms of Service | CargoSync",
  description: "Terms and conditions for using CargoSync' website and services.",
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

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeroBg title="Terms of Service" subtitle="CargoSync" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          style={{ fontFamily: "Inter, sans-serif", color: "#334155", fontSize: "15px", lineHeight: 1.8 }}
          className="space-y-10"
        >
          <p>Welcome to CargoSync (&ldquo;CargoSync&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).</p>
          <p>
            By accessing our website, requesting information, or engaging our services, you agree to be bound by these
            Terms of Service. If you do not agree with these terms, please discontinue use of our website and
            services.
          </p>

          <Section title="1. Company Overview">
            <p className="mb-3">
              CargoSync provides dispatch support, back-office administration, shipment monitoring,
              customer communication, documentation assistance, and related operational support services for
              transportation and logistics companies.
            </p>
            <p>CargoSync acts solely as a service provider and operational support partner.</p>
          </Section>

          <Section title="2. No Transportation Services">
            <p className="mb-3">CargoSync is not a motor carrier and does not transport freight or vehicles.</p>
            <p className="mb-3">
              CargoSync does not own, operate, or control commercial motor vehicles and is not responsible for the
              physical transportation of freight, cargo, or vehicles.
            </p>
            <p>Transportation services are performed solely by licensed carriers and their drivers.</p>
          </Section>

          <Section title="3. No Brokerage Services">
            <p className="mb-3">
              Unless specifically stated in a separate written agreement, CargoSync does not act as a freight broker.
            </p>
            <p className="mb-3">
              CargoSync does not assume responsibility for freight transactions between carriers, brokers, shippers,
              consignees, or customers.
            </p>
            <p>All load acceptance decisions remain the responsibility of the carrier.</p>
          </Section>

          <Section title="4. Client Responsibilities">
            <p className="mb-3">Clients agree to:</p>
            <List
              items={[
                "Provide accurate and current information",
                "Maintain all required operating authorities, licenses, permits, and insurance",
                "Comply with all applicable transportation laws and regulations",
                "Verify information before making operational decisions",
                "Review load details prior to accepting freight",
              ]}
            />
            <p className="mt-4">
              CargoSync shall not be responsible for losses resulting from inaccurate, incomplete, or outdated
              information provided by clients or third parties.
            </p>
          </Section>

          <Section title="5. Dispatch and Administrative Services">
            <p className="mb-3">Services may include:</p>
            <List
              items={[
                "Freight dispatch support",
                "Load sourcing and coordination",
                "Broker communication",
                "Documentation management",
                "Driver communication",
                "Shipment monitoring",
                "Back-office administration",
                "Cross-border documentation assistance",
                "Operational support services",
              ]}
            />
            <p className="mt-4">Specific services provided will depend on the agreement between CargoSync and the client.</p>
          </Section>

          <Section title="6. Service Availability">
            <p className="mb-3">
              While we strive to provide continuous support, CargoSync does not guarantee uninterrupted availability of
              services, website functionality, communication systems, or third-party platforms.
            </p>
            <p>
              Temporary interruptions may occur due to maintenance, technical issues, internet outages, or
              circumstances beyond our control.
            </p>
          </Section>

          <Section title="7. Third-Party Information">
            <p className="mb-3">CargoSync frequently relies on information provided by:</p>
            <List
              items={[
                "Freight brokers",
                "Load boards",
                "Shippers",
                "Consignees",
                "Government agencies",
                "Customs authorities",
                "Drivers",
                "Carrier representatives",
              ]}
            />
            <p className="mt-4 mb-3">We do not guarantee the accuracy, completeness, or reliability of information obtained from third parties.</p>
            <p>Clients are responsible for independently verifying information before acting upon it.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p className="mb-3">To the maximum extent permitted by applicable law, CargoSync shall not be liable for:</p>
            <List
              items={[
                "Lost profits",
                "Lost business opportunities",
                "Revenue losses",
                "Shipment delays",
                "Missed appointments",
                "Detention charges",
                "Cargo damage",
                "Cargo loss",
                "Regulatory penalties",
                "Customs delays",
                "Mechanical failures",
                "Driver shortages",
                "Service interruptions",
                "Consequential, incidental, indirect, or special damages",
              ]}
            />
            <p className="mt-4">
              Our total liability for any claim shall not exceed the amount paid to CargoSync for services during the
              thirty (30) days preceding the event giving rise to the claim.
            </p>
          </Section>

          <Section title="9. Indemnification">
            <p className="mb-3">
              Clients agree to defend, indemnify, and hold harmless CargoSync, its owners, employees, contractors, and
              affiliates from any claims, liabilities, damages, losses, costs, or expenses arising from:
            </p>
            <List
              items={[
                "Transportation operations",
                "Regulatory violations",
                "Driver conduct",
                "Carrier actions",
                "Client negligence",
                "Breach of these Terms",
              ]}
            />
          </Section>

          <Section title="10. Confidentiality">
            <p className="mb-3">
              CargoSync will make reasonable efforts to maintain the confidentiality of operational and business
              information received from clients.
            </p>
            <p>
              Clients also agree not to disclose proprietary information, internal processes, pricing structures,
              software systems, or confidential business information belonging to CargoSync.
            </p>
          </Section>

          <Section title="11. Intellectual Property">
            <p className="mb-3">
              All website content, branding, logos, graphics, text, designs, and materials are the property of
              CargoSync unless otherwise stated.
            </p>
            <p>No content may be copied, reproduced, distributed, or used without prior written permission.</p>
          </Section>

          <Section title="12. Payments and Fees">
            <p className="mb-3">Clients agree to pay all agreed service fees according to the applicable service agreement.</p>
            <p className="mb-3">Late payments may result in:</p>
            <List items={["Service suspension", "Delayed support", "Additional administrative charges", "Termination of services"]} />
          </Section>

          <Section title="13. Termination">
            <p className="mb-3">CargoSync may suspend or terminate services at any time if:</p>
            <List
              items={[
                "A client violates these Terms",
                "Required payments are not made",
                "Fraudulent activity is suspected",
                "Continued service presents legal or operational risks",
              ]}
            />
            <p className="mt-4">Termination does not eliminate any outstanding payment obligations.</p>
          </Section>

          <Section title="14. Governing Law">
            <p className="mb-3">
              These Terms shall be governed and interpreted under the laws of the Province of Alberta and the
              applicable laws of Canada, without regard to conflict of law principles.
            </p>
            <p>Any disputes arising from these Terms shall be resolved in the courts located within Alberta, Canada.</p>
          </Section>

          <Section title="15. Modifications">
            <p className="mb-3">CargoSync reserves the right to modify these Terms at any time.</p>
            <p>Updated versions will be posted on this website with a revised effective date.</p>
          </Section>

          <Section title="16. Contact Information">
            <p className="mb-3">For questions regarding these Terms of Service, please contact:</p>
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