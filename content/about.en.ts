// ABOUT PAGE CONTENT — ENGLISH VERSION

// Section 1 — Hero "The Exit"
export const aboutHeroCopy = {
    statement: "The resale game is rigged. We're not playing it.",
    subline: "We built the exit.",
  };
  
  // Section 2 — Manifesto (3 Pillars)
  export const manifestoCopy = {
    pillars: [
      {
        id: "why-we-exist",
        title: "Why We Exist",
        content: [
          "The import market operates on information asymmetry. Sellers know the truth. Buyers don't.",
          "We built Nevexa to eliminate that gap entirely.",
        ],
      },
      {
        id: "our-standard",
        title: "Our Standard",
        content: [
          "Canadian dealerships. Regulated market. No auctions. No salvage. No shortcuts.",
          "If it doesn't meet the standard we'd accept for ourselves, we don't offer it.",
        ],
      },
      {
        id: "what-drives-us",
        title: "What Drives Us",
        content: [
          "Every client deserves to know exactly what they're buying before they pay.",
        ],
      },
    ],
  };
  
  // Section 3 — The Reality (split into 2 paragraphs)
  export const realityCopy = {
    paragraphs: [
      {
        text: "Every year, thousands of West African buyers pay premium prices for vehicles with hidden damage. The resale system profits from information asymmetry.",
        highlights: ["thousands", "hidden damage", "information asymmetry"],
      },
      {
        text: "Nevexa was built to eliminate that abuse entirely.",
        highlights: ["eliminate that abuse"],
      },
    ],
  };
  // Section 4 — Split CTA
  export const splitCTACopy = {
    title: "Ready to import?",
    buttons: [
      {
        label: "Individual buyers",
        buttonText: "I'm an individual",
        href: "/b2c",
        variant: "outline" as const,
      },
      {
        label: "Businesses & Dealerships",
        buttonText: "I represent a business",
        href: "/b2b",
        variant: "solid" as const,
      },
    ],
  };