import { ReactNode } from "react";

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  tags: string[];
  icon: ReactNode;
  longDesc: string[];
  features: string[];
}

export const services: Service[] = [
  {
    slug: "freight-dispatch",
    title: "Freight Dispatch",
    shortDesc:
      "End-to-end load coordination for carriers - from finding and booking loads to confirming pickups, deliveries, and rate negotiations with brokers.",
    tags: ["Load Booking", "Rate Negotiation", "Broker Relations"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
      </svg>
    ),
    longDesc: [
      "Our freight dispatch service handles the day-to-day load management your fleet needs to stay profitable and on schedule. We work load boards, maintain broker relationships, and negotiate rates on your behalf, so your trucks keep moving and your revenue per mile stays where it should be.",
      "From the moment a load is booked to the moment it's delivered, our dispatchers track every detail: pickup windows, delivery appointments, detention time, and any changes that come up along the way. You get a dedicated point of contact who knows your equipment, your preferred lanes, and your business goals.",
    ],
    features: [
      "Daily load sourcing across major load boards",
      "Rate negotiation with brokers and shippers",
      "Pickup and delivery confirmation",
      "Detention and accessorial tracking",
      "Lane and equipment-matched booking",
    ],
  },
  {
    slug: "back-office-administration",
    title: "Back-Office Administration",
    shortDesc:
      "Comprehensive administrative support including documentation management, system updates, record keeping, and operational data accuracy.",
    tags: ["Documentation", "Record Keeping", "System Updates"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    ),
    longDesc: [
      "Running a trucking company involves as much paperwork as it does driving. Our back-office team takes documentation, data entry, and record keeping off your plate, so nothing falls through the cracks and your systems stay accurate and audit ready.",
      "We work inside the tools you already use, TMS platforms, spreadsheets, or whatever system your operation runs on, keeping load files, rate confirmations, and compliance records organized and up to date.",
    ],
    features: [
      "Rate confirmation and BOL processing",
      "TMS and dispatch software data entry",
      "Driver file and compliance record upkeep",
      "Invoice and paperwork organization",
      "Weekly reporting on operational metrics",
    ],
  },
  {
    slug: "cross-border-coordination",
    title: "Cross-Border Coordination",
    shortDesc:
      "Specialized support for US–Canada cross-border shipments, including documentation handling, customs coordination, and compliance assistance.",
    tags: ["US–Canada Border", "Customs Docs", "Compliance"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    longDesc: [
      "Moving freight between the US and Canada adds a layer of documentation and timing that can trip up even experienced fleets. We coordinate the paperwork and communication needed to keep cross-border shipments compliant and on schedule.",
      "Our team works directly with customs brokers and tracks documentation requirements for each crossing, helping you avoid delays at the border that cost time and money.",
    ],
    features: [
      "Customs documentation coordination",
      "PARS and ACE manifest support",
      "Customs broker communication",
      "Border crossing schedule tracking",
      "Compliance checks before departure",
    ],
  },
  {
    slug: "driver-customer-communication",
    title: "Driver & Customer Communication",
    shortDesc:
      "Proactive communication with drivers, brokers, and customers to keep shipments on track and resolve time-sensitive issues quickly.",
    tags: ["Driver Updates", "Customer Liaison", "Issue Resolution"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    longDesc: [
      "Clear communication keeps shipments moving and relationships strong. We stay in regular contact with your drivers throughout their routes, and keep brokers and customers updated on shipment status, especially when something changes unexpectedly.",
      "This means fewer surprise calls for you, faster resolution when issues come up, and a dispatcher your drivers can actually reach when they need support.",
    ],
    features: [
      "Regular driver check-ins and route support",
      "Proactive customer and broker updates",
      "Rapid response to delays or issues",
      "After-hours availability for urgent situations",
      "A single point of contact drivers can rely on",
    ],
  },
  {
    slug: "fleet-tracking-monitoring",
    title: "Fleet Tracking & Monitoring",
    shortDesc:
      "Real-time shipment tracking and fleet monitoring to ensure on-time performance, with prompt updates when schedules change unexpectedly.",
    tags: ["Real-Time Tracking", "On-Time Performance", "24/7 Monitoring"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
      </svg>
    ),
    longDesc: [
      "Knowing where every load stands at any given moment is critical to running a tight operation. We monitor your fleet in real time, flagging delays early and keeping shipments on track for on-time delivery.",
      "If something changes mid-route, traffic, weather, a missed appointment window, we catch it early and adjust, communicating with all parties before it becomes a bigger problem.",
    ],
    features: [
      "Real-time shipment and location tracking",
      "Early flagging of delays or route issues",
      "On-time performance monitoring",
      "24/7 visibility into active loads",
      "Proactive alerts for schedule changes",
    ],
  },
  {
    slug: "scalable-dispatch-teams",
    title: "Scalable Dispatch Teams",
    shortDesc:
      "Need more coverage as your fleet grows? We can expand our team of dispatchers and support staff to match your operational requirements.",
    tags: ["Scalable Support", "Dedicated Dispatchers", "Flexible Staffing"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    longDesc: [
      "As your fleet grows, your dispatch support should grow with it. We build dispatch teams sized to match your operation, so you're never stretched thin during busy seasons or paying for more support than you need during slower ones.",
      "Whether you're adding five trucks or fifty, we scale our team and processes alongside you, keeping the same level of service and attention to detail at any size.",
    ],
    features: [
      "Dispatch capacity that scales with your fleet",
      "Dedicated dispatchers added as you grow",
      "Flexible staffing for seasonal demand",
      "Consistent service quality at any scale",
      "Onboarding support for new equipment and lanes",
    ],
  },
];