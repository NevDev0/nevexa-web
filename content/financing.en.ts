// FINANCING PAGE CONTENT — NEVEXA
// Version: Complete with Geographic Availability
// Last updated: 2026-02-14

// ============================================
// SECTION 1 — HERO FINANCING
// ============================================
export const financingHeroCopy = {
  badges: {
    earlyAccess: "Early Access",
    comingSoon: "Coming 2027",
  },
  title: "Vehicle Financing Coming 2027",
  subtitle:
    "Nevexa is structuring vehicle financing with banking partners in Africa. Join the priority waitlist to be informed when we launch in your country.",
  clarification:
    "This service is not yet available. By joining the waitlist, you help us demonstrate market demand to banking partners and secure priority access when we launch.",
};

// ============================================
// SECTION 2 — HOW IT WORKS
// ============================================
export const howItWorksCopy = {
  title: "How It Works",
  subtitle: "Secure, transparent model. Nevexa facilitates, banks finance, you receive a verified vehicle.",
  
  actors: [
    {
      id: "client",
      initial: "C",
      label: "Client",
      tag: "You",
      description: "Apply & receive your vehicle",
    },
    {
      id: "banking-partner",
      initial: "B",
      label: "Banking Partner",
      tag: "Lender",
      description: "Provides the loan & sets terms",
    },
    {
      id: "nevexa",
      initial: "N",
      label: "Nevexa",
      tag: "Facilitator",
      description: "Sources, inspects & delivers",
    },
  ],
};

// ============================================
// SECTION 3 — FINANCING FOR EVERY NEED
// ============================================
export const financingProfilesCopy = {
  title: "Financing For Every Need",
  
  intro: "Whether you're building a fleet, upgrading your daily drive, or equipping your organization — we're structuring financing that works for you.",
  
  profiles: [
    {
      id: "business",
      title: "Growing Your Business",
      targets: "Fleet operators, corporate buyers, transport companies",
      example: "5+ vehicle fleet financing across multiple destinations",
      range: "$100K+ multi-vehicle orders",
      icon: `<svg class="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px rgba(90, 15, 20, 0.5));">
        <path d="M 8 52 L 8 56 L 56 56 L 56 52" stroke="#5A0F14" stroke-width="2"/>
        <path d="M 8 56 L 8 8" stroke="#5A0F14" stroke-width="2"/>
        <rect x="14" y="44" width="6" height="12" fill="#5A0F14" class="bar-1" style="transform-origin: 17px 56px"/>
        <rect x="24" y="36" width="6" height="20" fill="#5A0F14" class="bar-2" style="transform-origin: 27px 56px"/>
        <rect x="34" y="26" width="6" height="30" fill="#5A0F14" class="bar-3" style="transform-origin: 37px 56px"/>
        <rect x="44" y="14" width="6" height="42" fill="#5A0F14" class="bar-4" style="transform-origin: 47px 56px"/>
        <style>
          .bar-1, .bar-2, .bar-3, .bar-4 {
            animation: growBar 2s ease-in-out infinite;
          }
          .bar-1 { animation-delay: 0s; }
          .bar-2 { animation-delay: 0.2s; }
          .bar-3 { animation-delay: 0.4s; }
          .bar-4 { animation-delay: 0.6s; }
          @keyframes growBar {
            0%, 100% { 
              opacity: 0.7; 
              transform: scaleY(1);
            }
            50% { 
              opacity: 1; 
              transform: scaleY(1.05);
            }
          }
        </style>
      </svg>`,
    },
    {
      id: "personal",
      title: "Your Personal Upgrade",
      targets: "Professionals, entrepreneurs, and salaried employees in Africa",
      example: "2021-2026 premium SUV or sedan",
      range: "$30K-$80K vehicles",
      icon: `<svg class="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px rgba(90, 15, 20, 0.5));">
        <circle cx="20" cy="32" r="8" fill="none" stroke="#5A0F14" stroke-width="3"/>
        <circle cx="20" cy="32" r="3" fill="#5A0F14"/>
        <line x1="28" y1="32" x2="48" y2="32" stroke="#5A0F14" stroke-width="3"/>
        <line x1="40" y1="28" x2="40" y2="32" stroke="#5A0F14" stroke-width="2"/>
        <line x1="44" y1="28" x2="44" y2="32" stroke="#5A0F14" stroke-width="2"/>
        <path class="key-sparkle" d="M 50 20 L 52 22 L 50 24 L 48 22 Z" fill="#5A0F14"/>
        <path class="key-sparkle" d="M 54 28 L 56 30 L 54 32 L 52 30 Z" fill="#5A0F14"/>
        <path class="key-sparkle" d="M 46 18 L 48 20 L 46 22 L 44 20 Z" fill="#5A0F14"/>
        <style>
          .key-sparkle {
            animation: sparkle 1.5s ease-in-out infinite;
          }
          .key-sparkle:nth-child(4) { animation-delay: 0s; }
          .key-sparkle:nth-child(5) { animation-delay: 0.3s; }
          .key-sparkle:nth-child(6) { animation-delay: 0.6s; }
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        </style>
      </svg>`,
    },
    {
      id: "ngo",
      title: "Serving Communities",
      targets: "NGOs, international organizations, health/education",
      example: "Donor-funded 4x4 utility vehicles for NGO",
      range: "$50K+ purpose-built vehicles",
      icon: `<svg class="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px rgba(90, 15, 20, 0.5));">
        <rect class="cross-pulse" x="26" y="16" width="12" height="32" fill="#5A0F14" rx="2"/>
        <rect class="cross-pulse" x="16" y="26" width="32" height="12" fill="#5A0F14" rx="2"/>
        <style>
          .cross-pulse {
            animation: crossPulse 2s ease-in-out infinite;
          }
          @keyframes crossPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
        </style>
      </svg>`,
    },
    {
      id: "diaspora",
      title: "Investing from Abroad",
      targets: "Diaspora, expats, foreign income earners",
      example: "USD/EUR income-based financing",
      range: "$40K-$100K vehicles",
      icon: `<svg class="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px rgba(90, 15, 20, 0.5));">
        <circle cx="32" cy="32" r="20" fill="none" stroke="#5A0F14" stroke-width="3"/>
        <ellipse class="globe-rotate" cx="32" cy="32" rx="8" ry="20" fill="none" stroke="#5A0F14" stroke-width="2"/>
        <line x1="12" y1="32" x2="52" y2="32" stroke="#5A0F14" stroke-width="2"/>
        <path d="M 32 12 Q 38 32 32 52" fill="none" stroke="#5A0F14" stroke-width="2"/>
        <path d="M 32 12 Q 26 32 32 52" fill="none" stroke="#5A0F14" stroke-width="2"/>
        <style>
          .globe-rotate {
            transform-origin: center;
            animation: rotateGlobe 4s linear infinite;
          }
          @keyframes rotateGlobe {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
        </style>
      </svg>`,
    },
  ],
};

// ============================================
// SECTION 4 — GEOGRAPHIC AVAILABILITY
// ============================================
export const geographicAvailabilityCopy = {
  title: "When & Where",
  subtitle: "Nevexa financing will launch in Nigeria in 2027, expanding across West Africa in 2028.",
  
  countries: [
    { 
      id: "nigeria", 
      name: "Nigeria", 
      x: { mobile: "42%", desktop: "42%" },
      y: { mobile: "42%", desktop: "41%" },
      year: "2027",
      labelPosition: "top-right"
    },
    { 
      id: "senegal", 
      name: "Senegal", 
      x: { mobile: "15%", desktop: "15%" },
      y: { mobile: "33%", desktop: "33%" },
      year: "2028",
      labelPosition: "left"
    },
    { 
      id: "ghana", 
      name: "Ghana", 
      x: { mobile: "31%", desktop: "31%" },
      y: { mobile: "43%", desktop: "44%" },
      year: "2028",
      labelPosition: "top"
    },
    { 
      id: "ivory-coast", 
      name: "Ivory Coast", 
      x: { mobile: "25%", desktop: "25%" },
      y: { mobile: "45%", desktop: "45%" },
      year: "2028",
      labelPosition: "bottom-left"
    },
    { 
      id: "cameroun", 
      name: "Cameroun", 
      x: { mobile: "47%", desktop: "46%" },
      y: { mobile: "48%", desktop: "48%" },
      year: "2028",
      labelPosition: "bottom-right"
    },
 
  ],
  
  legend: {
    firstMarket: "2027 — First market (Nigeria)",
    expansion: "2028 — West Africa expansion",
    additionalmarkets: "Additional markets: 2029 onwards"
  },
  
  cta: {
    text: "Not listed yet? Join the waitlist to be notified when financing launches in your country.",
    button: "Join Waitlist"
  }
};


// ============================================
// SECTION 5 — FAQ FINANCING
// ============================================
export const faqFinancingCopy = {
  title: "Your Questions",
  
  questions: [
    
    {
      id: 1,
      question: "Does Nevexa lend money?",
      answer:
        "No. Nevexa does not provide loans. Financing will be provided by licensed banking institutions in your country. Nevexa facilitates vehicle sourcing and delivery.",
    },
    {
      id: 2,
      question: "Does joining the waitlist guarantee financing approval?",
      answer:
        "No. The waitlist helps us gauge market interest and prioritize launch regions. Final loan approval will be determined by our banking partners based on individual credit assessment.",
    },
    {
      id: 3,
      question: "When will financing be available in my country?",
      answer:
        "We are launching first in Nigeria (Q1 2027), followed by West Africa (2027-2028). Join the waitlist to be notified when we expand to your region.",
    },
    {
      id: 4,
      question: "What happens to my data?",
      answer:
        "Your waitlist data is used solely to inform banking partners of market demand and to notify you when financing becomes available. We do not share your information with third parties without consent.",
    },
  ],
};


// ============================================
// SECTION 6 — WAITLIST FORM
// ============================================
export const waitlistFormCopy = {
  title: "Join the Waitlist",
  
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },
    email: {
      label: "Email",
      placeholder: "your.email@example.com",
      required: true,
    },
    country: {
      label: "Country of Residence",
      placeholder: "Enter your country",
      required: true,
    },
    clientType: {
      label: "Client Type",
      required: true,
      options: [
        { value: "", label: "Select client type" },
        { value: "individual", label: "Individual (Salaried professional)" },
        { value: "corporation", label: "Corporation/Fleet" },
        { value: "ngo", label: "NGO/International organization" },
        { value: "diaspora", label: "Diaspora/Expat" },
      ],
    },
    estimatedBudget: {
      label: "Estimated Budget",
      required: true,
      options: [
        { value: "", label: "Select budget range" },
        { value: "under-30k", label: "Under $30,000" },
        { value: "30k-50k", label: "$30,000 - $50,000" },
        { value: "50k-80k", label: "$50,000 - $80,000" },
        { value: "80k-plus", label: "$80,000+" },
      ],
    },
  },
  
  submitButton: "Join Waitlist",
  
  successMessage: {
    title: "You're on the Waitlist",
    description: "We'll notify you when financing launches in your country.",
    cta: "Explore Vehicles"
  }
};