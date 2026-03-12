// B2C PAGE CONTENT — ENGLISH VERSION

// Section 1 — Hero
export const b2cHeroCopy = {
  title: "Verified History. Total Transparency.",
  badge: "we import 2021-2026 Models Only",
  ctaPrimary: "Explore catalog",
  ctaSecondary: "Speak with advisor",
  impactText: "Official dealerships only. No auctions. No doubts.",
  disclaimer: "*Cadillac Escalade ESV 2026, V8*",
};

// Section 2 — Brand Model Gallery (Porsche-style)
export const brandModelGallery = {
  title: "CURATED INSPIRATION",
  badge: "UNLIMITED ACCESS",
  disclaimer: "Vehicles shown for illustration purposes to demonstrate our quality standards. We source any make or model based on your exact specifications.",
  customSourcingCta: {
    text: "Looking for a different make or model?",
    buttonLabel: "Start custom sourcing",
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
        price: "From $120,000 USD",
        category: "Luxury",
        horsepower: "523 HP",
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
        price: "From $90,000 USD",
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
        price: "From $110,000 USD",
        category: "Performance",
        horsepower: "523 HP",
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
        price: "From $150,000 USD",
        category: "Electric",
        horsepower: "650 HP",
        engineType: "Dual Electric Motors",
        exteriorCount: 4,
        interiorCount: 5,
        description: "Electric luxury meets M performance",
        exceptions: {

        }
      },
      {
        id: "x6-m",
        name: "X6 M",
        displayName: "X6 M",
        subtitle: "Competition",
        fullName: "BMW X6 M Competition",
        year: "2024",
        price: "From $120,000 USD",
        category: "Performance",
        horsepower: "617 HP",
        engineType: "Twin-Turbo V8",
        exteriorCount: 4,
        interiorCount: 4,
        description: "Sports Activity Coupé with M power",
      },
      {
        id: "i5-edrive40",
        name: "i5 xDrive40",
        displayName: "i5",
        subtitle: "xDrive40",
        fullName: "BMW i5 xDrive40",
        year: "2024",
        price: "From $65,000 USD",
        category: "Electric",
        horsepower: "295 HP",
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
        name: "GLE 53 Coupe AMG",
        displayName: "GLE 53",
        subtitle: "AMG",
        fullName: "Mercedes-AMG GLE 53 Coupe 4MATIC+",
        year: "2024",
        price: "From $90,000 USD",
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
        price: "From $45,000 USD",
        category: "Luxury",
        horsepower: "258 HP",
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
        price: "From $140,000 USD",
        category: "Flagship",
        horsepower: "510 HP",
        engineType: "Twin-Turbo V8",
        exteriorCount: 4,
        interiorCount: 4,
        description: "The S-Class of SUVs",
      },
    ],

    // ============================================
    // LEXUS - 3 Models
    // ============================================
    lexus: [
      {
        id: "lx-600",
        name: "LX 600 Luxury Package",
        displayName: "LX",
        subtitle: "600",
        fullName: "Lexus LX 600 Luxury Package",
        year: "2024",
        price: "From $120,000 USD",
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
        fullName: "Lexus GX 550 Overtrail",
        year: "2024",
        price: "From $90,000 USD",
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
        price: "From $60,000 USD",
        category: "Hybrid",
        horsepower: "366 HP",
        engineType: "Turbo Hybrid I4",
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
        subtitle: "250 Series",
        fullName: "Toyota Land Cruiser 250 Series",
        year: "2025",
        price: "From $75,000 USD",
        category: "Off-Road",
        horsepower: "326 HP",
        engineType: "Twin-Turbo V6 Hybrid",
        exteriorCount: 4,
        interiorCount: 5,
        description: "Legendary durability meets modern luxury",
      },
      {
        id: "grand-highlander",
        name: "Grand Highlander",
        displayName: "Grand Highlander",
        subtitle: "XLE",
        fullName: "Toyota Grand Highlander XLE AWD",
        year: "2024",
        price: "From $45,000 USD",
        category: "Family SUV",
        horsepower: "245 HP",
        engineType: "Hybrid I4",
        exteriorCount: 4,
        interiorCount: 4,
        description: "Premium family SUV with hybrid performance",
      },
      {
        id: "camry",
        name: "Camry XSE",
        displayName: "Camry",
        subtitle: "XSE",
        fullName: "Toyota Camry XSE Hybrid AWD",
        year: "2025",
        price: "From $40,000 USD",
        category: "Sedan",
        horsepower: "225 HP",
        engineType: "Hybrid I4",
        exteriorCount: 3,
        interiorCount: 5,
        description: "Modern elegance with hybrid efficiency",
      },
    ],
  },
};

// Helper functions for gallery paths
export function getModelGallery(
  brandId: string,
  modelId: string,
  exteriorCount: number,
  interiorCount: number,
  defaultExt: string = "webp",
  exceptions: Record<string, string> = {} // Le dictionnaire des exceptions
): string[] {
  const gallery: string[] = [];
  
  // Add exterior photos
  for (let i = 1; i <= exteriorCount; i++) {
    const key = `exte-${i}`;
    const ext = exceptions[key] || defaultExt; // Si exception existe, prend 'jpg', sinon 'webp'
    gallery.push(`/catalog/${brandId}/${modelId}/${key}.${ext}`);
  }
  
  // Add interior photos
  for (let i = 1; i <= interiorCount; i++) {
    const key = `inte-${i}`;
    const ext = exceptions[key] || defaultExt;
    gallery.push(`/catalog/${brandId}/${modelId}/${key}.${ext}`);
  }
  
  return gallery;
}

export function getModelThumbnail(
  brandId: string, 
  modelId: string, 
  defaultExt: string = "webp",
  exceptions: Record<string, string> = {}
): string {
  const ext = exceptions["exte-1"] || defaultExt;
  return `/catalog/${brandId}/${modelId}/exte-1.${ext}`;
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

// Section 4 — What Others Won't Tell You (B2C Edition)
export const b2cWhatOthersWontTellYou = {
  title: "The Industry Secrets",
  subtitle: "Your safety is not optional. Neither is your investment.",
  dossierItems: [
    {
      num: "01",
      title: "Auction Salvage — A Danger to Your Family",
      problem:
        "Many importers buy cheap, flood-damaged or severely crashed cars at North American auctions. They apply cheap cosmetic fixes and sell them as 'clean'. In a collision, a compromised chassis fails to protect your loved ones.",
      solution:
        "We source exclusively from official Canadian dealerships. No auctions. Every vehicle has a flawless, verified history. We never gamble with your family's safety. Ever.",
    },
    {
      num: "02",
      title: "The Mileage Rollback Epidemic",
      problem:
        "Odometer fraud is rampant. Unscrupulous sellers roll back the miles to artificially inflate the car's price. You end up draining your hard-earned savings on unexpected engine and transmission repairs.",
      solution:
        "Every Nevexa vehicle includes a certified CARFAX report upfront. Verified mileage and a complete maintenance history. If a car has a single red flag, we refuse to source it. Period.",
    },
    {
      num: "03",
      title: "The 'Port Ransom' (Hidden Fees)",
      problem:
        "Standard industry practice: quote a low price upfront, then hold your export documents hostage demanding extra 'processing fees'. Without these docs, your car is stuck accruing fines.",
      solution:
        "Our Landed-at-Port (CIF) price is final and binding. No hidden charges from Nevexa. You receive your original documents (Bill of Lading) via DHL before the ship arrives, empowering your agent to clear customs immediately.",
    },
    {
      num: "04",
      title: "The Disappearing Broker",
      problem:
        "You wire the funds for your dream car, and suddenly the broker stops answering calls. You spend weeks stressed and in the dark, wondering if your money is gone and if your car will ever arrive.",
      solution:
        "You get a dedicated human advisor, regular photo updates of your vehicle, and live tracking of your ocean shipment. We treat your investment with the absolute respect it deserves.",
    },
  ],
};


// Section 5 — FAQ
export const faqCopy = {
  title: "Your Questions",
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
        "We specialize in West Africa (Nigeria, Côte d'Ivoire, Senegal, Benin, Togo, Ghana), but our logistics allow us to export worldwide. Contact us for any global destination.",
    },
    {
      id: 4,
      question: "What is the actual delivery timeline?",
      answer:
        "Typical delivery takes 6–8 weeks from order confirmation to port arrival. This includes vehicle sourcing, inspection, export documentation, and ocean freight. For the Turnkey option (where available), add 1–2 weeks for customs clearance.",
    },
    {
      id: 5,
      question: "Why import instead of buying locally?",
      answer:
        "Importing from Canada gives you access to recent 2021–2026 models with verified history and competitive pricing. Local markets often have limited recent inventory with inflated prices, especially for premium vehicles.",
    },
  ],
};
// Section 6 — Referral
export const referralCopy = {
    title: "Satisfied with Nevexa?",
    description: "Introduce a friend looking for a premium vehicle. If they complete a purchase, you receive up to 1000 USD",
    submitButton: "Submit referral",
    successMessage: "Referral received. We'll reach out if they're interested.",
  };