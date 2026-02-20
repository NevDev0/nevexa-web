// B2B PAGE CONTENT — ENGLISH VERSION

import { Subtitles } from "lucide-react";

// Section 1 — Hero
export const b2bHeroCopy = {
  title: "Built for business. Scaled for growth.",
  badge: "B2B Sourcing",
  subtitle: "Dealership-sourced vehicles for resellers, NGOs, and corporate fleets.",
  ctaPrimary: "Discuss your needs",
  ctaSecondary: "View capabilities",
  disclaimer: "Minimum order volumes and payment terms vary by client type and destination.",
};

export const contactModalB2BCopy = {
  heading: "Get in touch",
  subheading: "Choose how you'd like to reach us",
  email: {
    label: "Email",
    description: "Response within 24h on business days",
  },
  whatsapp: {
    label: "WhatsApp",
    description: "Direct line, same-day response",
  },
};

// Section 2 — Built for Scale (NEW - replaces B2BCapabilities + UseCases)
export const builtForScaleCopy = {
  title: "Built for Scale",
  subtitle: "Three industries. One standard.",
  footerNote: "All profiles benefit from dealership-only sourcing, full inspection reports, and customs-ready documentation.",
  
  profiles: [
    {
      id: "resellers",
      name: "Resellers",
      subtitle: "Source 5–15 vehicles/month for local resale",
      capabilities: [
        {
          title: "Volume pricing",
          description: "on recurring orders — no minimum, same standards at any scale",
        },
        {
          title: "WhatsApp coordination",
          description: "for quick sourcing decisions and real-time availability",
        },
        {
          title: "6–8 weeks turnaround",
          description: "from confirmation to port — priority sourcing across dealerships",
        },
        {
          title: "CARFAX included",
          description: "on every vehicle — build trust with your end buyers",
        },
      ],
      volume: {
        label: "10–50 /yr",
        percentage: 55,
      },
    },
    {
      id: "ngos",
      name: "NGOs",
      subtitle: "Equip field teams with reliable 4×4 and utility vehicles",
      capabilities: [
        {
          title: "Donor compliance",
          description: "— procurement documentation that meets international standards",
        },
        {
          title: "Multi-destination shipping",
          description: "— coordinated deliveries across countries for regional programs",
        },
        {
          title: "Complete export package",
          description: "— invoices, bills of lading, customs-ready paperwork",
        },
        {
          title: "Multi-year programs",
          description: "— long-term partnership with consistent sourcing and pricing",
        },
      ],
      volume: {
        label: "5–20 /project",
        percentage: 30,
      },
    },
    {
      id: "corporate",
      name: "Corporate",
      subtitle: "Build or refresh executive fleets with recent models",
      capabilities: [
        {
          title: "Dedicated account manager",
          description: "— single point of contact for all fleet operations",
        },
        {
          title: "Synchronized deliveries",
          description: "— coordinated schedules for multi-vehicle shipments",
        },
        {
          title: "Fleet documentation",
          description: "— monthly summaries, inspection reports, warranty tracking",
        },
        {
          title: "Post-delivery support",
          description: "— warranty coordination and ongoing maintenance tracking",
        },
      ],
      volume: {
        label: "10–50+ /yr",
        percentage: 75,
      },
    },
  ],
};

// Section 3 — What Others Won't Tell You (NEW STRUCTURE - dossier format)
export const whatOthersWontTellYou = {
  title: "What Others Won't Tell You",
  subtitle: "The import game has dirty secrets. We don't play.",
  
  dossierItems: [
    {
      num: "01",
      title: "No Auction Salvage — Even If It Looks Clean",
      problem:
        "Most importers buy cheap at auctions — salvage titles, flood damage, accident history hidden in fine print. You pay less upfront, then thousands in hidden repairs.",
      solution:
        "We source from dealerships only. Higher cost for us, zero risk for you. Every vehicle has a clean title — verified, not assumed.",
    },
    {
      num: "02",
      title: "Real Mileage, Real History",
      problem:
        "Odometer fraud is rampant in import markets. Rolled-back mileage, missing service records, reports available \"upon request\" that never come.",
      solution:
        "Every vehicle comes with CARFAX or AutoCheck — automatically, not upon request. If the report shows red flags, we don't source the vehicle. Period.",
    },
    {
      num: "03",
      title: "Inspection Before Payment, Not After",
      problem:
        "Standard practice elsewhere: wire the money, hope for the best. If something's wrong, you find out at the port — when it's too late.",
      solution:
        "We inspect in Canada before you wire the balance. If it fails, we source another vehicle. Your money moves only when the vehicle is confirmed ready.",
    },
    {
      num: "04",
      title: "Reachable Humans, Not Ticket Systems",
      problem:
        "$60K transaction and you're told to \"open a support ticket.\" Automated replies. No one picks up. Your shipment is somewhere — maybe.",
      solution:
        "Call us, we answer — or call back same day. Account manager for recurring clients, direct WhatsApp line for urgent decisions. You're dealing with a business, not a bot.",
    },
  ],
};

// Section 4 — FAQ
export const faqB2B = {
  title: "Common Questions",
  questions: [
    {
      id: 1,
      question: "What are your minimum order volumes?",
      answer:
        "We don't enforce strict minimums. Resellers typically start with 5–10 vehicles per order. NGOs and corporate clients often place larger, less frequent orders. Volume pricing kicks in at 10+ vehicles per quarter.",
    },
    {
      id: 2,
      question: "Do you offer payment terms?",
      answer:
        "Payment terms depend on client type and order history. New clients typically pay 50% upfront, 50% before shipping. Established corporate and NGO clients may qualify for Net 30 terms after 3 successful orders.",
    },
    {
      id: 3,
      question: "Can you source vehicles outside the 2021–2026 range?",
      answer:
        "We focus exclusively on 2021–2026 models to ensure quality and resale value. Older vehicles carry higher risk of mechanical issues and lower market appeal. If you need specific older models, we can discuss exceptions on a case-by-case basis.",
    },
    {
      id: 4,
      question: "How do you handle customs and import duties?",
      answer:
        "We provide all export documentation and customs-ready paperwork. Import duties and local taxes are the buyer's responsibility and vary by destination country. We can connect you with customs brokers in your region if needed.",
    },
    {
      id: 5,
      question: "What happens if a vehicle arrives damaged?",
      answer:
        "Every vehicle is comprehensively inspected before shipping with photo documentation. If damage occurs during transit, it's covered by marine insurance (which we can arrange). We work with you to resolve any issues quickly.",
    },
  ],
};

// Section 5 — Contact CTA
export const contactCTAB2B = {
  title: "Ready to scale your business?",
  subtitle: "Let's discuss your sourcing needs",
  ctaPrimary: "Email us",
  ctaSecondary: "WhatsApp",
  note: "Response within 24 hours on business days",
};
