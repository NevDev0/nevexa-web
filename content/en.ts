export const heroCopy = {
  title: "Premium vehicles, from Canada to Africa.",
  subtitle: "Sourcing. Inspection. Delivery.",
  ctaIndividuals: "Individuals",
  ctaProfessionals: "Professionals",
};

// Section 2 — Why Import from Canada (VERSION ACCORDION)
export const whyImportCopy = {
  title: "Why import from Canada?",
  // Phrase intro COURTE (toujours visible, pas dans accordion)
  intro: "Better vehicles. Better process.",
  
  // Accordions (3 items)
  accordions: [
    {
      id: "recent-models",
      title: "Recent Models (2021-2026)", // Titre visible quand fermé
      content: "Nevexa sources exclusively 2021-2026 vehicles from official dealerships. Every vehicle meets modern safety and technology standards, with no older inventory or salvage titles.",
    },
    {
      id: "competitive-pricing",
      title: "Competitive Pricing",
      content: "Canadian market prices often provide better value compared to local markups, especially for recent premium models where supply is limited.",
    },
    {
      id: "verified-history",
      title: "Verified History",
      content: "Recent vehicles mean shorter ownership history to verify. Clean titles, accurate low mileage, with CARFAX and AutoCheck reports included for transparency.",
    },
  ],
};

export const valuePropsCopy = {
  title: "How Nevexa operates",
  trustLine: "Official dealerships only. No auctions.",
  steps: [
    {
      id: 1,
      label: "Sourcing",
      description: "Find and secure 2021-2026 vehicles from verified North American dealerships",
      image: "/process/step-1-sourcing.webp",
    },
    {
      id: 2,
      label: "Inspection",
      description: "Complete pre-delivery inspection with CARFAX and AutoCheck reports",
      image: "/process/step-2-inspection.webp",
    },
    {
      id: 3,
      label: "Logistics",
      description: "Professional shipping coordination from Canada to African ports",
      image: "/process/step-3-logistics.webp",
    },
    {
      id: 4,
      label: "Customs",
      description: "Full documentation and customs clearance assistance",
      image: "/process/step-4-customs.webp",
    },
  ],
};

export const brandsCopy = {
  title: "Brands we source",
  legalNote: "Pilot projects — logos shown for illustration purposes",
  logos: [
    { name: "Mercedes", src: "/brands/mercedes.png", scale: 2.0 },
    { name: "BMW", src: "/brands/bmw.png", scale: 2.0 },
    { name: "Lexus", src: "/brands/lexus.png", scale: 1.6 },
    { name: "Porsche", src: "/brands/porsche.png", scale: 1.9 },
    { name: "Tesla", src: "/brands/tesla.png", scale: 2.1 },
    { name: "Audi", src: "/brands/audi.png", scale: 1.5 },
    { name: "Toyota", src: "/brands/toyota.png", scale: 1.5 },
    { name: "Land Rover", src: "/brands/land-rover.png", scale: 1.6 },
    { name: "Cadillac", src: "/brands/cadillac.png", scale: 1.4 },
    { name: "Hyundai", src: "/brands/hyundai.png", scale: 1.5 },
    { name: "Honda", src: "/brands/honda.png", scale: 1.65 },
    { name: "Dodge", src: "/brands/dodge.png", scale: 2.1 },
  ],
};

// Section 4 — Choose Your Path (AVEC IMAGES)
export const choosePathCopy = {
  label: "Choose your path",
  cards: [
    {
      id: "b2c",
      title: "Individuals",
      badge: null,
      ctaLabel: "Find my vehicle",
      href: "/b2c",
      image: "/paths/individuals.webp",
    },
    {
      id: "b2b",
      title: "Professionals",
      badge: null,
      ctaLabel: "Discover our offer",
      href: "/b2b",
      image: "/paths/professionals.webp",
    },
    {
      id: "financing",
      title: "Financing",
      badge: "EARLY ACCESS",
      ctaLabel: "Learn more",
      href: "/financing",
      image: "/paths/financing.webp",
    },
  ],
};

// Section 5 — Delivery Options
export const deliveryOptionsCopy = {
  label: "Delivery options",
  intro:
    "Two ways to receive your vehicle. Choose the setup that matches how you handle arrival on the ground.",
  options: [
    {
      id: "port-to-port",
      title: "Port-to-Port",
      description:
        "We ship your vehicle from Canada to the main port in your country. You or your local agent handle customs and pickup.",
    },
    {
      id: "port-to-door",
      title: "Port-to-Door",
      description:
        "We coordinate shipping, port handling and last-mile delivery to your address with vetted local partners, where available.",
    },
  ],
};

// Section 6 — Real Results (meta texte, les items restent dans results.json)
export const realResultsCopy = {
  label: "Real results",
  intro: "A few real operations we've already handled between Canada and Africa.",
  // Les images + légendes viennent de src/data/results.json
};

// Section 7 — Final CTA (Contact)
export const finalCtaCopy = {
  label: "Contact",
  title: "Speak with a Nevexa advisor",
  subtitle:
    "No forms. No waiting. Choose how you want to connect and we'll take it from there.",
  ctaLabel: "Get in touch",
  email: "contact@nevexacars.com",
  emailSubject: "New inquiry — Nevexa website",
  whatsappNumber: "+14374842769",
};



// Section 9 — Footer
export const footerCopy = {
  legalNoticeLabel: "Legal Notice",
  contactLabel: "Contact",
  copyrightName: "Nevexa",
};