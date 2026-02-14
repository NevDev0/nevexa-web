// B2C PAGE CONTENT — ENGLISH VERSION

// Section 1 — Hero
export const b2cHeroCopy = {
  title: "Premium vehicles, from Canada to Africa.",
  badge: "2021-2026 Models Only",
  ctaPrimary: "Explore catalog",
  ctaSecondary: "Speak with advisor",
  disclaimer: "Sample configurations shown. Availability and pricing vary by destination and model.",
};

// Section 2 — Brand Model Gallery (Porsche-style)
export const brandModelGallery = {
  title: "INSPIRATIONAL CATALOG",
  badge: "2021-2026 MODELS ONLY",
  disclaimer: "Sample configurations shown. Availability and pricing vary by destination and model.",
  customSourcingCta: {
    text: "Don't see the exact model you're looking for?",
    buttonLabel: "Request custom sourcing",
  },
  brands: [
    { id: "land-rover", name: "Land Rover" },
    { id: "bmw", name: "BMW" },
    { id: "mercedes", name: "Mercedes-Benz" },
    { id: "lexus", name: "Lexus" },
    { id: "toyota", name: "Toyota" },
  ],
  models: {
    // ============================================
    // LAND ROVER - 3 Models
    // ============================================
    "land-rover": [
      {
        id: "autobiography",
        name: "Range Rover Autobiography",
        displayName: "Range Rover",
        subtitle: "Autobiography",
        fullName: "Range Rover Autobiography P530",
        year: "2024",
        price: "From $130,000",
        category: "Luxury",
        horsepower: "530 HP",
        engineType: "Twin-Turbo V8",
        exteriorCount: 4,
        interiorCount: 3,
        description: "The pinnacle of luxury SUV refinement",
      },
      {
        id: "defender-110",
        name: "Defender 110",
        displayName: "Defender",
        subtitle: "110",
        fullName: "Land Rover Defender 110",
        year: "2024",
        price: "From $90,000",
        category: "Off-Road",
        horsepower: "395 HP",
        engineType: "Mild Hybrid I6",
        exteriorCount: 3,
        interiorCount: 3,
        description: "Iconic capability meets modern luxury",
      },
      {
        id: "sport-p530",
        name: "Range Rover Sport",
        displayName: "Sport",
        subtitle: "P530",
        fullName: "Range Rover Sport P530",
        year: "2024",
        price: "From $95,000",
        category: "Performance",
        horsepower: "530 HP",
        engineType: "Twin-Turbo V8",
        exteriorCount: 4,
        interiorCount: 4,
        description: "Dynamic performance with refined elegance",
      },
    ],

    // ============================================
    // BMW - 3 Models (removed X5)
    // ============================================
    bmw: [
      {
        id: "i7-m70",
        name: "i7 M70",
        displayName: "i7 M70",
        subtitle: "xDrive",
        fullName: "BMW i7 M70 xDrive",
        year: "2024",
        price: "From $165,000",
        category: "Electric",
        horsepower: "650 HP",
        engineType: "Dual Electric Motors",
        exteriorCount: 4,
        interiorCount: 5,
        description: "Electric luxury meets M performance",
      },
      {
        id: "x6-m",
        name: "X6 M",
        displayName: "X6 M",
        subtitle: "Competition",
        fullName: "BMW X6 M Competition",
        year: "2024",
        price: "From $125,000",
        category: "Performance",
        horsepower: "617 HP",
        engineType: "Twin-Turbo V8",
        exteriorCount: 4,
        interiorCount: 4,
        description: "Sports Activity Coupé with M power",
      },
      {
        id: "i5-edrive40",
        name: "i5 eDrive40",
        displayName: "i5",
        subtitle: "eDrive40",
        fullName: "BMW i5 eDrive40",
        year: "2024",
        price: "From $75,000",
        category: "Electric",
        horsepower: "335 HP",
        engineType: "Electric Motor",
        exteriorCount: 4,
        interiorCount: 3,
        description: "Electric executive sedan redefined",
      },
    ],

    // ============================================
    // MERCEDES-BENZ - 3 Models (removed G-Class)
    // ============================================
    mercedes: [
      {
        id: "gle-53",
        name: "GLE 53 AMG",
        displayName: "GLE 53",
        subtitle: "AMG",
        fullName: "Mercedes-AMG GLE 53 4MATIC+",
        year: "2024",
        price: "From $95,000",
        category: "Performance",
        horsepower: "429 HP",
        engineType: "Turbo I6 + EQ Boost",
        exteriorCount: 3,
        interiorCount: 3,
        description: "Performance SUV with AMG engineering",
      },
      {
        id: "glc-300",
        name: "GLC 300",
        displayName: "GLC",
        subtitle: "300",
        fullName: "Mercedes-Benz GLC 300 4MATIC",
        year: "2024",
        price: "From $60,000",
        category: "Luxury",
        horsepower: "255 HP",
        engineType: "Turbo I4",
        exteriorCount: 3,
        interiorCount: 3,
        description: "Compact luxury with refined capability",
      },
      {
        id: "gls-580",
        name: "GLS 580",
        displayName: "GLS",
        subtitle: "580",
        fullName: "Mercedes-Benz GLS 580 4MATIC",
        year: "2024",
        price: "From $110,000",
        category: "Flagship",
        horsepower: "483 HP",
        engineType: "Twin-Turbo V8",
        exteriorCount: 4,
        interiorCount: 4,
        description: "The S-Class of SUVs with commanding luxury",
      },
    ],

    // ============================================
    // LEXUS - 3 Models
    // ============================================
    lexus: [
      {
        id: "lx-600",
        name: "LX 600",
        displayName: "LX",
        subtitle: "600",
        fullName: "Lexus LX 600",
        year: "2024",
        price: "From $105,000",
        category: "Flagship",
        horsepower: "409 HP",
        engineType: "Twin-Turbo V6",
        exteriorCount: 4,
        interiorCount: 5,
        description: "Flagship luxury with legendary reliability",
      },
      {
        id: "gx-550",
        name: "GX 550",
        displayName: "GX",
        subtitle: "550",
        fullName: "Lexus GX 550 Overtrail+",
        year: "2024",
        price: "From $75,000",
        category: "Off-Road",
        horsepower: "349 HP",
        engineType: "Twin-Turbo V6",
        exteriorCount: 4,
        interiorCount: 4,
        description: "Off-road capability meets refined luxury",
      },
      {
        id: "rx-500h",
        name: "RX 500h",
        displayName: "RX",
        subtitle: "500h",
        fullName: "Lexus RX 500h F SPORT Performance",
        year: "2024",
        price: "From $70,000",
        category: "Hybrid",
        horsepower: "366 HP",
        engineType: "Hybrid V6",
        exteriorCount: 4,
        interiorCount: 4,
        description: "Hybrid performance with sporty elegance",
      },
    ],

    // ============================================
    // TOYOTA - 3 Placeholders
    // ============================================
    toyota: [
      {
        id: "land-cruiser",
        name: "Land Cruiser",
        displayName: "Land Cruiser",
        subtitle: "",
        fullName: "Toyota Land Cruiser",
        year: "2024",
        price: "From $85,000",
        category: "Off-Road",
        horsepower: "TBD",
        engineType: "TBD",
        exteriorCount: 0,
        interiorCount: 0,
        description: "Legendary durability meets modern luxury",
      },
      {
        id: "sequoia",
        name: "Sequoia",
        displayName: "Sequoia",
        subtitle: "",
        fullName: "Toyota Sequoia Capstone",
        year: "2024",
        price: "From $75,000",
        category: "Luxury",
        horsepower: "TBD",
        engineType: "TBD",
        exteriorCount: 0,
        interiorCount: 0,
        description: "Full-size luxury with renowned reliability",
      },
      {
        id: "4runner",
        name: "4Runner",
        displayName: "4Runner",
        subtitle: "",
        fullName: "Toyota 4Runner TRD Pro",
        year: "2024",
        price: "From $55,000",
        category: "Off-Road",
        horsepower: "TBD",
        engineType: "TBD",
        exteriorCount: 0,
        interiorCount: 0,
        description: "Off-road capability with timeless design",
      },
    ],
  },
};

// Helper functions for gallery paths
export function getModelGallery(
  brandId: string,
  modelId: string,
  exteriorCount: number,
  interiorCount: number
): string[] {
  const gallery: string[] = [];
  
  // Add exterior photos
  for (let i = 1; i <= exteriorCount; i++) {
    gallery.push(`/catalog/${brandId}/${modelId}/exte-${i}.jpg`);
  }
  
  // Add interior photos
  for (let i = 1; i <= interiorCount; i++) {
    gallery.push(`/catalog/${brandId}/${modelId}/inte-${i}.jpg`);
  }
  
  return gallery;
}

export function getModelThumbnail(brandId: string, modelId: string): string {
  return `/catalog/${brandId}/${modelId}/exte-1.jpg`;
}

export function hasPhotos(exteriorCount: number, interiorCount: number): boolean {
  return exteriorCount > 0 || interiorCount > 0;
}

// Section 3 — Numbers / Import Advantage
export const importAdvantageCopy = {
  title: "NEVEXA BY THE NUMBERS",
  stats: [
    {
      id: "model-year",
      number: 2021,
      numberFrom: 2000,
      suffix: "+",
      label: "Minimum model year",
      sublabel: "No outdated inventory.\nEvery vehicle is recent.",
      barWidth: "85%",
    },
    {
      id: "dealerships",
      number: 100,
      numberFrom: 0,
      suffix: "%",
      label: "Official dealerships",
      sublabel: "Zero auctions.\nVerified sources only.",
      barWidth: "100%",
    },
    {
      id: "delivery",
      number: 6,
      numberFrom: 0,
      suffix: "–8 wks",
      label: "Average delivery",
      sublabel: "From Canadian dealer\nto your port.",
      barWidth: "60%",
    },
    {
      id: "fees",
      number: 0,
      numberFrom: 0,
      prefix: "$",
      suffix: "",
      label: "Hidden fees",
      sublabel: "Full transparency.\nNo surprises on delivery.",
      barWidth: "0%",
    },
  ],
  badge: "On-demand sourcing",
  disclaimer: "Delivery timelines\n vary by destination",
};

// Section 4 — FAQ
export const faqCopy = {
  title: "Frequently Asked Questions",
  questions: [
    {
      id: 1,
      question: "Can I request a specific model not shown here?",
      answer:
        "Yes. The catalog shows sample configurations, but we can source any 2021–2026 model from official Canadian dealerships. Contact us with your requirements and we'll provide a custom quote within 48 hours.",
    },
    {
      id: 2,
      question: "How do I know the vehicle is in good condition?",
      answer:
        "Every vehicle undergoes a comprehensive pre-shipment inspection by certified technicians. We provide a detailed inspection report with photos. If the vehicle doesn't meet our standards, we don't ship it.",
    },
    {
      id: 3,
      question: "Do you deliver to my country?",
      answer:
        "We currently ship to West African countries including Nigeria, Ivory Coast, Senegal, Benin, Togo, and Ghana. Contact us to confirm availability for your specific destination and discuss delivery options.",
    },
    {
      id: 4,
      question: "What is the actual delivery timeline?",
      answer:
        "Typical delivery takes 6–8 weeks from order confirmation to port arrival. This includes vehicle sourcing, inspection, export documentation, and ocean freight. Door-to-door delivery adds 1–2 weeks depending on your location.",
    },
    {
      id: 5,
      question: "Why import instead of buying locally?",
      answer:
        "Importing from Canada gives you access to recent 2021–2026 models with verified history and competitive pricing. Local markets often have limited recent inventory with inflated prices, especially for premium vehicles.",
    },
  ],
};