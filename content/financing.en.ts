// FINANCING PAGE CONTENT — NEVEXA
// Version: Couche 1
// Last updated: 2026-01-29

// ============================================
// SECTION 1 — HERO FINANCING
// ============================================
export const financingHeroCopy = {
    badges: {
      earlyAccess: "Early Access",
      comingSoon: "Coming 2027",
    },
    title: "Vehicle Financing — Coming 2027",
    subtitle:
      "Nevexa is structuring vehicle financing with banking partners in Africa. Join the priority waitlist to be informed when we launch in your country.",
    clarification:
      "This service is not yet available. By joining the waitlist, you help us demonstrate market demand to banking partners and secure priority access when we launch.",
  };
  
  // ============================================
  // SECTION 2 — TRIPARTITE MODEL
  // ============================================
  export const tripartiteModelCopy = {
    title: "How Financing Will Work",
    subtitle: "Secure, transparent model. Nevexa facilitates, banks finance, you receive a verified vehicle.",
    
    roles: [
      {
        id: "client",
        label: "Client",
        tag: "You",
        responsibilities: [
          "Applies for financing through banking partner",
          "Makes down payment",
          "Receives vehicle after bank approval",
        ],
      },
      {
        id: "banking-partner",
        label: "Banking Partner",
        tag: "Lender",
        responsibilities: [
          "Provides the loan",
          "Assesses creditworthiness",
          "Sets final interest rates and terms",
        ],
      },
      {
        id: "nevexa",
        label: "Nevexa",
        tag: "Facilitator",
        responsibilities: [
          "Sources and inspects the vehicle in North America",
          "Manages shipping and delivery",
          "Coordinates with bank for vehicle handover",
        ],
      },
    ],
  };
  
  // ============================================
  // SECTION 3 — PRELIMINARY LOAN TERMS
  // ============================================
  export const preliminaryLoanTermsCopy = {
    title: "Preliminary Loan Terms",
    subtitle: "Indicative — Subject to Banking Partner Approval",
    
    terms: [
      {
        id: "loan-duration",
        label: "Loan Duration",
        value: "12 to 48 months",
        details: ["Depending on vehicle value and borrower profile"],
      },
      {
        id: "down-payment",
        label: "Down Payment",
        value: "20-30% minimum",
        details: [
          "Minimum 20-30% of vehicle value required upfront",
          "Remainder financed through banking partner",
        ],
      },
      {
        id: "interest-rates",
        label: "Interest Rates",
        value: "8-18% APR",
        details: [
          "Annual percentage rate (indicative)",
          "Final rate determined by banking partner after credit assessment",
          "Rates vary by country, creditworthiness, and market conditions",
        ],
      },
      {
        id: "monthly-payment",
        label: "Monthly Payment Example",
        calculation: {
          vehicle: "$50,000",
          downPayment: "$15,000",
          downPaymentPercent: "30%",
          loanAmount: "$35,000",
          term: "36 months",
          interestRate: "12% APR",
          estimatedMonthly: "~$1,160",
        },
      },
      {
        id: "eligibility",
        label: "Eligibility Criteria",
        value: "Preliminary",
        details: [
          "Proof of stable income (employment letter, bank statements)",
          "Good credit history (no major defaults in past 24 months)",
          "Legal residency in target country",
          "Minimum age: 21 years (varies by country)",
          "Minimum monthly income: $2,000 USD or local equivalent",
        ],
      },
    ],
    
    disclaimer:
      "These are preliminary guidelines based on typical automotive financing structures. Final loan terms, interest rates, and eligibility criteria will be determined by our banking partners based on individual credit assessment, local regulations, and market conditions at the time of launch.",
  };
  
  // ============================================
  // SECTION 4 — ELIGIBILITY CARDS
  // ============================================
  export const eligibilityCardsCopy = {
    title: "Who Will Be Eligible?",
    
    cards: [
      {
        id: "individuals",
        initials: "IN",
        label: "Individuals",
        subtitle: "Salaried Professionals",
        designedFor: [
          "Employed professionals with stable income",
          "Minimum monthly income: $2,000+ (or local equivalent)",
          "Vehicle value: $30,000 - $80,000",
        ],
        typicalProfile: "Corporate employees, medical professionals, entrepreneurs",
      },
      {
        id: "fleets",
        initials: "FL",
        label: "Fleets & Corporations",
        subtitle: "",
        designedFor: [
          "Companies purchasing 3+ vehicles",
          "Registered businesses with 2+ years of operations",
          "Vehicle value: $100,000+ fleet orders",
        ],
        typicalProfile: "Transport companies, executive fleets, rental agencies",
      },
      {
        id: "ngos",
        initials: "NGO",
        label: "NGOs & International Organizations",
        subtitle: "",
        designedFor: [
          "Registered non-profits with donor funding",
          "UN agencies, international development organizations",
          "Vehicle value: $50,000+ (4x4 utility vehicles)",
        ],
        typicalProfile: "Health organizations, humanitarian missions, field operations",
      },
      {
        id: "diaspora",
        initials: "DI",
        label: "Diaspora & Expats",
        subtitle: "",
        designedFor: [
          "Africans living abroad (USA, Canada, Europe, Middle East)",
          "Sending vehicles to family in home country",
          "Income in foreign currency (USD, EUR, CAD)",
          "Vehicle value: $40,000 - $100,000",
        ],
        typicalProfile: "Professionals working abroad, dual citizens, expat retirees",
        note: "Financing approval based on foreign income + local delivery address verification.",
      },
    ],
  };
  
  // ============================================
  // SECTION 5 — GEOGRAPHIC AVAILABILITY
  // ============================================
  export const geographicAvailabilityCopy = {
    title: "Where Will Financing Be Available?",
    
    phases: [
      {
        id: "phase-1",
        label: "Phase 1 (2027): Nigeria",
        details: [
          "Pilot program with select banking partners",
          "Expected launch: Q1 2027",
        ],
      },
      {
        id: "phase-2",
        label: "Phase 2 (2027-2028): West Africa Expansion",
        details: [
          "Ghana, Senegal, Côte d'Ivoire",
          "Subject to regulatory approval and banking partnerships",
        ],
      },
      {
        id: "phase-3",
        label: "Phase 3 (2028+): Broader Africa",
        details: [
          "Kenya, South Africa, Morocco",
          "Under evaluation with regional banking institutions",
        ],
      },
    ],
    
    notInCountry:
      "Not in your country yet? Join the waitlist to be notified when we expand to your region. Your interest helps us prioritize new markets.",
  };
  
  // ============================================
  // SECTION 6 — WAITLIST FORM
  // ============================================
  export const waitlistFormCopy = {
    title: "Join the Priority Waitlist",
    
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
    
    successMessage:
      "Your registration is confirmed. You are now on the priority waitlist for Nevexa financing. We will notify you as soon as the program launches in your country.",
  };
  
  // ============================================
  // SECTION 7 — FAQ FINANCING
  // ============================================
  export const faqFinancingCopy = {
    title: "Frequently Asked Questions",
    
    questions: [
      {
        id: 1,
        question: "Is financing currently available?",
        answer:
          "No. Nevexa financing is under development with banking partners and is expected to launch in Q1 2027, starting with Nigeria.",
      },
      {
        id: 2,
        question: "Does Nevexa lend money?",
        answer:
          "No. Nevexa does not provide loans. Financing will be provided by licensed banking institutions in your country. Nevexa facilitates vehicle sourcing and delivery.",
      },
      {
        id: 3,
        question: "Does joining the waitlist guarantee financing approval?",
        answer:
          "No. The waitlist helps us gauge market interest and prioritize launch regions. Final loan approval will be determined by our banking partners based on individual credit assessment.",
      },
      {
        id: 4,
        question: "What information will banks require for approval?",
        answer:
          "Banking partners will typically require: proof of income (employment letter, bank statements), credit history, government-issued ID, and proof of residency. Specific requirements vary by country.",
      },
      {
        id: 5,
        question: "Can I specify which vehicle I want financed?",
        answer:
          "Not at this stage. The waitlist is for general interest. Vehicle selection and financing application will happen once the program launches.",
      },
      {
        id: 6,
        question: "When will financing be available in my country?",
        answer:
          "We are launching first in Nigeria (Q1 2027), followed by West Africa (2027-2028). Join the waitlist to be notified when we expand to your region.",
      },
      {
        id: 7,
        question: "What happens to my data?",
        answer:
          "Your waitlist data is used solely to inform banking partners of market demand and to notify you when financing becomes available. We do not share your information with third parties without consent.",
      },
    ],
  };