// ABOUT PAGE CONTENT — ENGLISH VERSION

// ─────────────────────────────────────────
// Section 1 — Hero
// ─────────────────────────────────────────
export const aboutHeroCopy = {
  statement: "The resale game is rigged. We're not playing it.",
  subline: "We built the exit.",
};

// ─────────────────────────────────────────
// Section 2 — Manifesto (3 Pillars)
// Territory: WHO Nevexa is — origin, method, identity
// No overlap with TheReality (market critique lives there)
// ─────────────────────────────────────────
export const manifestoCopy = {
  pillars: [
    {
      id: "our-origin",
      title: "Our Origin",
      content: [
        "Nevexa was founded after observing two markets side by side — Canada's regulated automotive industry, and West Africa's unstructured resale landscape. The contrast was impossible to ignore.", 
        "So we built the bridge.",
      ],
    },
    {
      id: "our-standard",
      title: "Our Standard",
      content: [
        "We source exclusively from regulated Canadian dealerships. No auctions, no salvage, no gray market. Every vehicle is independently inspected.",
        "Full documentation history, condition report, everything is accessible to the client before any commitment is made.",
      ],
    },
    {
      id: "what-we-are",
      title: "What We Are",
      content: [
        "We're not a marketplace. Not a broker. We don't hold inventory and we don't push stock.", 
        "Every vehicle we move is sourced on demand, for one client, with one goal.",
        "Getting the right vehicle, without compromise.",
      ],
    },
  ],
};

// ─────────────────────────────────────────
// Section 3 — The Reality
// Territory: WHAT'S BROKEN in the market
// 3 distinct hits: hidden damage → price abuse → conclusion
// ─────────────────────────────────────────
export const realityCopy = {
  paragraphs: [
    {
      text: "Every year, thousands of West African buyers pay premium prices for vehicles declared total losses on the other side of the ocean. Clean title on paper. Structural damage underneath.",
      highlights: ["total losses", "Structural damage underneath"],
    },
    {
      text: "When the vehicle arrives, local resellers add their own margin on top — prices already inflated, now marked up again. The buyer pays twice for a product that was compromised from the start.",
      highlights: ["pays twice"],
    },
    {
      text: "The resale system is built on that silence. Nevexa was built to end it.",
      highlights: ["end it"],
    },
  ],
};

// ─────────────────────────────────────────
// Section 4 — Split CTA
// ─────────────────────────────────────────
export const splitCTACopy = {
  title: "Choose your path.",
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