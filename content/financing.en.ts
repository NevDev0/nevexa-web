// FINANCING PAGE CONTENT — ENGLISH VERSION (Optimized)

// ============================================
// SECTION 1 — HERO FINANCING
// ============================================
export const financingHeroCopy = {
  badges: {
    earlyAccess: "Priority Access",
    comingSoon: "Pilot Launch 2027", // More exclusive than "Coming 2027"
  },
  titleLine1: "Vehicle Financing",
  titleLine2: "Reinvented.",
  subtitle: "Nevexa is structuring the first cross-border leasing solution with major African banks. Join the waitlist to secure your spot.",
  clarification: "Service currently in banking structuring phase. Joining the waitlist is non-binding but guarantees priority access at launch.",
};

// ============================================
// SECTION 2 — HOW IT WORKS
// ============================================
export const howItWorksCopy = {
  title: "The Triangular Model",
  subtitle: "Total security for all parties. The bank funds, Nevexa secures the asset, you drive.",
  
  actors: [
    {
      id: "client",
      initial: "C",
      label: "Client (You)",
      tag: "Borrower",
      description: "Selects vehicle & submits application",
    },
    {
      id: "banking-partner",
      initial: "B",
      label: "Banking Partner",
      tag: "Lender",
      description: "Validates credit & pays for the vehicle directly",
    },
    {
      id: "nevexa",
      initial: "N",
      label: "Nevexa",
      tag: "Trusted Third Party",
      description: "Certifies value, inspects & delivers the vehicle",
    },
  ],
};

// ============================================
// SECTION 3 — FINANCING FOR EVERY NEED
// ============================================
export const financingProfilesCopy = {
  title: "Tailored Solutions",
  intro: "From private individuals to fleet managers, we build the necessary banking bridges.",
  
  profiles: [
    {
      id: "business",
      title: "Corporate Fleets",
      targets: "SMEs, Large Corps, Logistics",
      example: "Fleet renewal (5+ units)",
      range: "Orders > $100,000",
      // ... (Keep SVG) ...
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
      title: "Premium Personal",
      targets: "Executives, Professionals",
      example: "Personal SUV (2021-2026)",
      range: "Vehicles $30k – $80k",
      // ... (Keep SVG) ...
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
      title: "NGOs & Institutions",
      targets: "Intl Orgs, Donor Funded",
      example: "Field fleet on donor budget",
      range: "Dedicated vehicles (Pickups)",
      // ... (Keep SVG) ...
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
      title: "Diaspora (FX Credit)",
      targets: "Expats, USD/EUR Earners",
      example: "Financing based on foreign income",
      range: "Vehicles $40k – $100k",
      // ... (Keep SVG) ...
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
  title: "Banking Roadmap",
  subtitle: "Progressive expansion driven by local banking system maturity.",
  countries: [
    { id: "nigeria", name: "Nigeria", year: "2027" },
    { id: "senegal", name: "Senegal", year: "2028" },
    { id: "ghana", name: "Ghana", year: "2028" },
    { id: "ivory-coast", name: "Ivory Coast", year: "2028" },
    { id: "cameroon", name: "Cameroon", year: "2028" },
  ],
  timeline: [
    {
      year: "2027",
      badge: "Pilot Market",
      title: "Nigeria Launch",
      description: "Credit opening for companies registered in Lagos and Abuja.",
    },
    {
      year: "2028",
      badge: "UEMOA Zone",
      title: "Francophone Expansion",
      description: "Simultaneous opening in Senegal and Ivory Coast via regional partners.",
    },
    {
      year: "2029+",
      badge: "Pan-African",
      title: "Continental Coverage",
      description: "Expansion to East Africa (Kenya, Rwanda).",
    },
  ],
  cta: {
    text: "Your country not listed? Register to accelerate its opening.",
    button: "Vote for my country",
  },
};


// ============================================
// SECTION 5 — FAQ FINANCING
// ============================================
export const faqFinancingCopy = {
  title: "Investor FAQ",
  
  questions: [
    
    {
      id: 1,
      question: "Is Nevexa a bank?",
      answer:
        "No. Nevexa is a sourcing and logistics company. We act as a 'Trusted Third Party' to secure the asset (the car) on behalf of the lending bank.",
    },
    {
      id: 2,
      question: "Why register now for 2027?",
      answer:
        "Slots will be limited at launch ('Early Adopters' Quota). By registering today, you secure your priority in the file review queue.",
    },
    {
      id: 3,
      question: "What will interest rates be?",
      answer:
        "Rates will be defined by our partner banks based on your risk profile and country. Our role is to negotiate preferential rates thanks to the volume of business we bring.",
    },
    {
      id: 4,
      question: "Do you accept diaspora?",
      answer:
        "Yes. This is a priority target. If you reside in Europe/USA but want to finance a vehicle for your family or business back home, we will have dedicated solutions.",
    },
  ],
};


// ============================================
// SECTION 6 — WAITLIST FORM
// ============================================
export const waitlistFormCopy = {
  title: "Priority Access Application",
  
  stats: {
    counterLabel: "Waitlist",
    statusLabel: "Status",
    progressLabel: "Your Position"
  },

  errors: {
    required: "Required",
    invalidEmail: "Invalid email",
  },

  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Ex: Joshua Oti",
      required: true,
    },
    email: {
      label: "Professional Email", // Mieux que "Digital Address"
      placeholder: "name@company.com",
      required: true,
    },
    country: {
      label: "Residence",
      placeholder: "Select country",
      required: true,
    },
    clientType: {
      label: "Profile",
      required: true,
      options: [
        { value: "", label: "Select..." },
        { value: "individual", label: "Individual" },
        { value: "corporation", label: "Corporation" },
        { value: "ngo", label: "NGO" },
        { value: "diaspora", label: "Diaspora" },
      ],
    },
    estimatedBudget: {
      label: "Estimated Budget",
      required: true,
      options: [
        { value: "", label: "Select..." },
        { value: "under-30k", label: "< $30,000" },
        { value: "30k-50k", label: "$30k - $50k" },
        { value: "50k-80k", label: "$50k - $80k" },
        { value: "80k-plus", label: "> $80,000" },
      ],
    },
  },
  
  submitButton: "Reserve my spot",
  submittingText: "Validating...",
  
  successMessage: {
    title: "Application Logged",
    description: "You are now on the priority list. You will receive an email as soon as quotas open.",
    cta: "Back to site"
  }
};