// PARTNERSHIP PAGE CONTENT — NEVEXA
// Version: Couche 1
// Last updated: 2026-01-30

// ============================================
// SECTION 1 — HERO PARTNERSHIP
// ============================================
export const partnershipHeroCopy = {
  badge: "Selective Program",
  title: "Become a Nevexa Partner",
  subtitle:
    "Nevexa accepts a limited number of partners per country. Priority is given to automotive professionals with established networks and proven credibility.",
  clarification:
    "Nevexa partners introduce serious buyers to our sourcing service. This is a professional referral program, not a mass affiliate network.",
};

// ============================================
// SECTION 2 — YOUR ROLE & LIMITS
// ============================================
export const roleAndLimitsCopy = {
  title: "Your Role & Limits (Read Carefully)",
  preWarning: "Non-negotiable requirements. Failure to comply = immediate exclusion.",
  
  partnerRole: {
    title: "As a Nevexa Partner, You:",
    canDo: [
      "Introduce a qualified prospect to Nevexa",
      "Provide basic context about the client's needs",
      "Step back and let Nevexa handle the relationship",
    ],
    cannotDo: [
      "DO NOT manage the commercial relationship",
      "DO NOT contact the client after introduction",
      "DO NOT intervene in pricing or negotiations",
      "DO NOT represent Nevexa publicly without authorization",
    ],
  },
  
  nevexaRole: {
    title: "Nevexa's Role:",
    responsibilities: [
      "Takes full control of the client relationship",
      "Handles all sourcing, inspection, and logistics",
      "Decides whether to proceed with the lead",
      "Manages pricing and payment terms",
      "Pays commission only after successful vehicle delivery",
    ],
  },
  
  warning:
    "Any attempt to interfere with the client relationship after introduction will result in immediate exclusion from the partnership program.",
};

// ============================================
// SECTION 3 — COMMISSION STRUCTURE
// ============================================
export const commissionStructureCopy = {
  title: "Commission Structure",

  table: [
    {
      category: "STANDARD",
      vehicleValue: "$30,000 - $59,999",
      commission: "$300 USD",
    },
    {
      category: "PREMIUM",
      vehicleValue: "$60,000 - $79,999",
      commission: "$500 USD",
    },
    {
      category: "ELITE",
      vehicleValue: "$80,000+",
      commission: "$1,000 USD",
    },
  ],

  paymentTerms: {
    title: "Payment Terms:",
    terms: [
      "Commissions are FIXED and NON-NEGOTIABLE",
      "Payment made ONLY after vehicle delivery to client",
      "No commission if client or Nevexa cancels transaction",
      "No advance payments",
      "No recurring commissions",
      "No multi-level or sub-affiliate commissions",
    ],
  },

  paymentMethod: {
    title: "Payment Method:",
    methods: [
      "International wire transfer (SWIFT)",
      "Mobile Money (depending on country)",
    ],
  },

  legalNote:
    "Commissions apply only to vehicles with a minimum value of $30,000 USD and are paid after confirmed delivery to the final client.",
};

// ============================================
// SECTION 4 — HOW IT WORKS
// ============================================
export const howItWorksCopy = {
  title: "How It Works",

  steps: [
    {
      id: "step-1",
      label: "Step 1: Apply & Get Validated",
      details: [
        "Submit your partner application",
        "Nevexa reviews your profile manually",
        "Validation response within 5 business days",
      ],
    },
    {
      id: "step-2",
      label: "Step 2: Introduce Qualified Leads",
      details: [
        "You introduce serious buyers to Nevexa",
        "Provide basic context (budget, vehicle type, timeline)",
        "Nevexa takes over the entire process",
      ],
    },
    {
      id: "step-3",
      label: "Step 3: Commission Paid After Delivery",
      details: [
        "Client receives vehicle in their country",
        "Nevexa confirms successful delivery",
        "You receive commission within 30 days",
      ],
    },
  ],
};

// ============================================
// SECTION 5 — APPLY FOR PARTNERSHIP
// ============================================
export const partnerApplicationCopy = {
  title: "Apply for Partnership",

  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },
    country: {
      label: "Country of Residence",
      placeholder: "Enter your country",
      required: true,
    },
    city: {
      label: "City",
      placeholder: "Enter your city",
      required: true,
    },
    email: {
      label: "Email",
      placeholder: "your.email@example.com",
      required: true,
    },
    whatsapp: {
      label: "WhatsApp Number",
      placeholder: "+1 234 567 8900",
      required: true,
    },
    professionalProfile: {
      label: "Professional Profile",
      required: true,
      options: [
        { value: "", label: "Select your profile" },
        { value: "garage-dealer", label: "Automotive garage/dealer" },
        { value: "logistics", label: "Logistics/freight forwarder" },
        { value: "influencer", label: "Influencer/content creator (automotive niche)" },
        { value: "fleet-manager", label: "Corporate fleet manager" },
        { value: "consultant", label: "Business consultant/advisor" },
        { value: "other", label: "Other (please specify)" },
      ],
    },
    yourNetwork: {
      label: "Your Network",
      required: true,
      options: [
        { value: "", label: "Select network size" },
        { value: "1-2", label: "I can introduce 1-2 qualified leads per year" },
        { value: "3-5", label: "I can introduce 3-5 qualified leads per year" },
        { value: "6-10", label: "I can introduce 6-10 qualified leads per year" },
        { value: "10+", label: "I can introduce 10+ qualified leads per year" },
      ],
    },
    primaryChannel: {
      label: "Primary Channel",
      required: true,
      options: [
        { value: "", label: "Select primary channel" },
        { value: "personal", label: "Personal network (friends/family/colleagues)" },
        { value: "professional", label: "Professional network (clients/partners)" },
        { value: "social-media", label: "Social media (Instagram/Facebook/LinkedIn)" },
        { value: "business", label: "Business referrals (corporate contacts)" },
      ],
    },
    sampleLeadProfile: {
      label: "Sample Lead Profile",
      placeholder: "Describe a typical person or company you could introduce to Nevexa. Example: 'I know 3 corporate fleet managers in Lagos who need 10-15 vehicles per year for executive transport.'",
      required: true,
      maxLength: 300,
    },
  },

  submitButton: "Submit Application",

  successMessage:
    "Application received. We review all partner applications manually. If your profile matches our criteria, you will receive a response within 5 business days via email.",
};

// ============================================
// SECTION 7 — FAQ PARTNERSHIP
// ============================================
export const faqPartnershipCopy = {
  title: "Frequently Asked Questions",

  questions: [
    {
      id: 1,
      question: "Is this a multi-level marketing (MLM) program?",
      answer:
        "No. This is a single-tier referral program. You introduce clients, we handle everything, you get paid. There is no recruitment of sub-affiliates or multi-level commission structure.",
    },
    {
      id: 2,
      question: "Can I recruit other partners?",
      answer:
        "No. Only Nevexa can approve new partners. Any attempt to recruit sub-partners or create a downline will result in immediate exclusion.",
    },
    {
      id: 3,
      question: "Can I contact the client after introducing them?",
      answer:
        "No. Once you introduce a client to Nevexa, we take full control of the relationship. Any post-introduction contact with the client is prohibited.",
    },
    {
      id: 4,
      question: "Is there a minimum commission guarantee?",
      answer:
        "No. Commissions are paid only if the vehicle is successfully delivered to the client. Cancellations (by client or Nevexa) do not entitle you to compensation.",
    },
    {
      id: 5,
      question: "When will I receive my commission?",
      answer:
        "Commissions are paid within 30 days of vehicle delivery to the client, not at the time of introduction or sale.",
    },
    {
      id: 6,
      question: "How many partners does Nevexa accept?",
      answer:
        "Nevexa maintains a selective network. We accept a limited number of partners per country to ensure quality. Once a country reaches capacity, new applications are waitlisted.",
    },
    {
      id: 7,
      question: "What happens if the client cancels after my introduction?",
      answer:
        "No commission is due. Commissions are paid ONLY if the vehicle is delivered to the final client. Cancellations (from either party) do not open the right to compensation.",
    },
    {
      id: 8,
      question: "Can I introduce clients outside my country?",
      answer:
        "Yes, as long as you have a direct relationship with the prospect. However, Nevexa reserves the right to refuse leads from countries where we do not yet operate.",
    },
  ],
};