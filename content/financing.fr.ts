// FINANCING PAGE CONTENT — VERSION FRANÇAISE (Optimisée)

// ============================================
// SECTION 1 — HERO FINANCING
// ============================================
export const financingHeroCopy = {
  badges: {
    earlyAccess: "Accès Prioritaire", // Mieux que "Accès Anticipé"
    comingSoon: "Lancement Pilote 2027", // Plus exclusif
  },
  titleLine1: "Le Financement Auto",
  titleLine2: "Réinventé.",
  subtitle: "Nevexa structure la première solution de leasing transfrontalier avec les grandes banques africaines. Rejoignez la liste d'attente pour sécuriser votre place.",
  clarification: "Service en cours de structuration bancaire. Votre inscription sur la liste d'attente est sans engagement mais vous garantit un accès prioritaire au lancement.",
};
  
  // ============================================
  // SECTION 2 — HOW IT WORKS
  // ============================================
  export const howItWorksCopy = {
    title: "Le Modèle Triangulaire", // Plus technique/pro
    subtitle: "Une sécurité totale pour toutes les parties. La banque finance, Nevexa sécurise l'actif, vous conduisez.",
  
    actors: [
      {
        id: "client",
        initial: "C",
        label: "Client (Vous)",
        tag: "Emprunteur",
        description: "Sélectionne le véhicule et dépose son dossier",
      },
      {
        id: "banking-partner",
        initial: "B",
        label: "Banque Partenaire",
        tag: "Financeur",
        description: "Valide la solvabilité et règle le véhicule directement",
      },
      {
        id: "nevexa",
        initial: "N",
        label: "Nevexa",
        tag: "Tiers de Confiance", // Mieux que "Facilitateur"
        description: "Certifie la valeur, inspecte et livre le véhicule",
      },
    ],
  };
  
  // ============================================
  // SECTION 3 — FINANCING FOR EVERY NEED
  // ============================================
  export const financingProfilesCopy = {
    title: "Solutions Adaptées",
    intro: "Du particulier au gestionnaire de flotte, nous créons les ponts bancaires nécessaires.",
  
    profiles: [
      {
        id: "business",
        title: "Flottes d'Entreprise", // Plus clair
        targets: "PME, Grandes Entreprises, Logistique",
        example: "Renouvellement de parc (5+ unités)",
        range: "Commandes > 100 000 $",
        // ... (Garde ton icône SVG ici) ...
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
              0%, 100% { opacity: 0.7; transform: scaleY(1); }
              50% { opacity: 1; transform: scaleY(1.05); }
            }
          </style>
        </svg>`,
      },
      {
        id: "personal",
        title: "Particuliers Premium", // Plus chic que "Upgrade Personnel"
        targets: "Cadres, Professions Libérales",
        example: "SUV personnel (2021-2026)",
        range: "Véhicules 30k $ – 80k $",
        // ... (Garde ton icône SVG ici) ...
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
        title: "ONG & Institutions",
        targets: "Organisations Internationales, Bailleurs",
        example: "Flotte terrain sur budget bailleur",
        range: "Véhicules dédiés (Ambulances, Pickups)",
        // ... (Garde ton icône SVG ici) ...
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
        title: "Diaspora (Crédit Devise)",
        targets: "Expatriés, Revenus en Euros/USD",
        example: "Financement basé sur revenus étrangers",
        range: "Véhicules 40k $ – 100k $",
        // ... (Garde ton icône SVG ici) ...
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
  title: "Roadmap Bancaire", // Plus pro que "Calendrier"
  subtitle: "Une expansion progressive dictée par la maturité des systèmes bancaires locaux.",
  countries: [
    { id: "nigeria", name: "Nigeria", year: "2027" },
    { id: "senegal", name: "Sénégal", year: "2028" },
    { id: "ghana", name: "Ghana", year: "2028" },
    { id: "ivory-coast", name: "Côte d'Ivoire", year: "2028" },
    { id: "cameroon", name: "Cameroun", year: "2028" },
  ],
  timeline: [
    {
      year: "2027",
      badge: "Marché Pilote",
      title: "Lancement Nigeria",
      description: "Ouverture des crédits pour les entreprises immatriculées à Lagos et Abuja.",
    },
    {
      year: "2028",
      badge: "Zone UEMOA",
      title: "Expansion Francophone",
      description: "Ouverture simultanée au Sénégal et en Côte d'Ivoire via nos partenaires régionaux.",
    },
    {
      year: "2029+",
      badge: "Pan-Africain",
      title: "Couverture Continentale",
      description: "Extension vers l'Afrique de l'Est (Kenya, Rwanda).",
      },
    ],
  
    cta: {
      text: "Votre pays n'est pas listé ? Inscrivez-vous pour accélérer son ouverture.",
      button: "Voter pour mon pays",
    },
  };
  
  // ============================================
  // SECTION 5 — FAQ FINANCING
  // ============================================
  export const faqFinancingCopy = {
    title: "FAQ Investisseur",
  
    questions: [
      {
        id: 1,
        question: "Nevexa est-elle une banque ?",
        answer:
          "Non. Nevexa est une société de sourcing et de logistique. Nous agissons comme 'Tiers de Confiance' pour sécuriser l'actif (la voiture) pour le compte de la banque qui prête l'argent.",
      },
      {
        id: 2,
        question: "Pourquoi s'inscrire maintenant pour 2027 ?",
        answer:
          "Les places seront limitées au lancement (Quota 'Early Adopters'). En vous inscrivant aujourd'hui, vous sécurisez votre priorité dans la file d'attente d'analyse de dossier.",
      },
      {
        id: 3,
        question: "Quels seront les taux d'intérêt ?",
        answer:
          "Les taux seront définis par nos banques partenaires selon votre profil de risque et votre pays. Notre rôle est de négocier des taux préférentiels grâce au volume d'affaires que nous apportons.",
      },
      {
        id: 4,
        question: "Acceptez-vous la diaspora ?",
        answer:
          "Oui. C'est même une cible prioritaire. Si vous résidez en Europe/USA mais souhaitez financer un véhicule pour votre famille ou vos affaires au pays, nous aurons des solutions dédiées.",
      },
    ],
  };
  
  // ============================================
  // SECTION 6 — WAITLIST FORM
  // ============================================
  export const waitlistFormCopy = {
    title: "Candidature Accès Prioritaire",
  
    stats: {
      counterLabel: "Liste d'Attente",
      statusLabel: "Statut",
      progressLabel: "Votre Position",
    },
  
    errors: {
      required: "Requis",
      invalidEmail: "Email invalide",
    },
    
    fields: {
      fullName: {
        label: "Nom complet",
        placeholder: "Ex : Aminata Diallo",
        required: true,
      },
      email: {
        label: "Email professionnel",
        placeholder: "contact@entreprise.com",
        required: true,
      },
      country: {
        label: "Pays de résidence",
        placeholder: "Sélectionner",
        required: true,
      },
      clientType: {
        label: "Profil",
        required: true,
        options: [
          { value: "", label: "Choisir..." },
          { value: "individual", label: "Particulier" },
          { value: "corporation", label: "Entreprise" },
          { value: "ngo", label: "ONG" },
          { value: "diaspora", label: "Diaspora" },
        ],
      },
      estimatedBudget: {
        label: "Budget estimé",
        required: true,
        options: [
          { value: "", label: "Choisir..." },
          { value: "under-30k", label: "< 30 000 $" },
          { value: "30k-50k", label: "30k $ – 50k $" },
          { value: "50k-80k", label: "50k $ – 80k $" },
          { value: "80k-plus", label: "> 80 000 $" },
        ],
      },
    },
  
    submitButton: "Réserver ma place",
    submittingText: "Validation...",
  
    successMessage: {
      title: "Candidature Enregistrée",
      description: "Vous êtes désormais sur la liste prioritaire. Vous recevrez un email dès l'ouverture des quotas.",
      cta: "Retour au site",
    },
  };