// FINANCING PAGE CONTENT — VERSION FRANÇAISE
// Ton : Fintech premium, crédible, accessible. Pas de jargon bancaire opaque.

// ============================================
// SECTION 1 — HERO FINANCING
// ============================================
export const financingHeroCopy = {
  badges: {
    earlyAccess: "Accès Anticipé",
    comingSoon: "Disponible en 2027",
  },
  titleLine1: "Le Financement Auto",
  titleLine2: "Réinventé.",
  subtitle: "Nevexa structure un service de financement véhicule avec des partenaires bancaires en Afrique. Rejoignez la liste prioritaire pour être informé du lancement dans votre pays.",
  clarification: "Ce service n'est pas encore disponible. En rejoignant la liste d'attente, vous nous aidez à démontrer la demande du marché à nos partenaires bancaires et à obtenir un accès prioritaire au lancement.",
};
  
  // ============================================
  // SECTION 2 — HOW IT WORKS
  // ============================================
  export const howItWorksCopy = {
    title: "Comment ça fonctionne",
    subtitle: "Un partenariat triangulaire fluide. Vous choisissez le véhicule, la banque apporte les fonds, Nevexa assure la livraison sécurisée.",
  
    actors: [
      {
        id: "client",
        initial: "C",
        label: "Client",
        tag: "Vous",
        description: "Choisit le véhicule et fait sa demande de financement",
      },
      {
        id: "banking-partner",
        initial: "B",
        label: "Partenaire Bancaire",
        tag: "Prêteur",
        description: "Valide le dossier et débloque les fonds directement",
      },
      {
        id: "nevexa",
        initial: "N",
        label: "Nevexa",
        tag: "Facilitateur",
        description: "Sécurise, certifie et expédie le véhicule",
      },
    ],
  };
  
  // ============================================
  // SECTION 3 — FINANCING FOR EVERY NEED
  // ============================================
  export const financingProfilesCopy = {
    title: "Un Financement pour Chaque Besoin",
    intro: "Que vous constituiez une flotte, upgradiez votre véhicule personnel ou équipiez votre organisation — on structure un financement qui fonctionne pour vous.",
  
    profiles: [
      {
        id: "business",
        title: "Développez Votre Activité",
        targets: "Gestionnaires de flotte, acheteurs corporate, sociétés de transport",
        example: "Financement de 5+ véhicules vers plusieurs destinations",
        range: "Commandes multi-véhicules 100 000 $+",
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
        title: "Votre Upgrade Personnel",
        targets: "Professionnels, entrepreneurs et salariés en Afrique",
        example: "SUV ou berline premium 2021-2026",
        range: "Véhicules 30 000 $ – 80 000 $",
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
        title: "Au Service des Communautés",
        targets: "ONG, organisations internationales, secteur santé/éducation",
        example: "Véhicules utilitaires 4x4 financés par des bailleurs",
        range: "Véhicules dédiés 50 000 $+",
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
        title: "Investir depuis l'Étranger",
        targets: "Diaspora, expatriés, revenus en devises étrangères",
        example: "Financement sur revenus en USD/EUR",
        range: "Véhicules 40 000 $ – 100 000 $",
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
  title: "Calendrier de Déploiement",
  subtitle: "Une stratégie d'expansion ciblée, débutant par le Nigéria pour s'étendre aux principaux hubs économiques d'Afrique de l'Ouest.",
  countries: [
    {
      id: "nigeria",
      name: "Nigeria",
      year: "2027",
    },
    {
      id: "senegal",
      name: "Sénégal",
      year: "2028",
    },
    {
      id: "ghana",
      name: "Ghana",
      year: "2028",
    },
    {
      id: "ivory-coast",
      name: "Côte d'Ivoire",
      year: "2028",
    },
    {
      id: "cameroon",
      name: "Cameroun",
      year: "2028",
    },
  ],
  timeline: [
    {
      year: "2027",
      badge: "Premier Marché",
      title: "Lancement au Nigéria (QG)",
      description: "Activation des premiers partenariats bancaires et ouverture aux importateurs qualifiés.",
    },
    {
      year: "2028",
      badge: "Expansion",
      title: "Extension Afrique de l'Ouest",
      // On insiste sur la consolidation plutôt que de re-citer la liste
      description: "Déploiement simultané sur quatre marchés clés pour consolider notre présence régionale.",
    },
    {
      year: "2029+",
      badge: "Panafricain",
      title: "Couverture Continentale",
      description: "Ouverture progressive vers l'Afrique de l'Est et australe en fonction de la maturité des marchés.",
      },
    ],
  
    cta: {
      text: "Votre pays n'est pas encore listé ? Rejoignez la liste d'attente pour être notifié au lancement.",
      button: "Rejoindre la liste",
    },
  };
  
  // ============================================
  // SECTION 5 — FAQ FINANCING
  // ============================================
  export const faqFinancingCopy = {
    title: "Vos Questions",
  
    questions: [
      {
        id: 1,
        question: "Est-ce que Nevexa prête de l'argent ?",
        answer:
          "Non. Nevexa n'accorde pas de prêts. Le financement sera assuré par des établissements bancaires agréés dans votre pays. Nevexa prend en charge le sourcing et la livraison du véhicule.",
      },
      {
        id: 2,
        question: "Rejoindre la liste garantit-il une approbation de financement ?",
        answer:
          "Non. La liste d'attente nous permet d'évaluer l'intérêt du marché et de prioriser les régions de lancement. L'approbation finale du prêt sera décidée par nos partenaires bancaires sur la base d'une évaluation individuelle du dossier.",
      },
      {
        id: 3,
        question: "Quand le financement sera-t-il disponible dans mon pays ?",
        answer:
          "Nous lançons d'abord au Nigeria (T1 2027), suivi de l'Afrique de l'Ouest (2027-2028). Rejoignez la liste d'attente pour être informé dès que nous arrivons dans votre région.",
      },
      {
        id: 4,
        question: "Que devient mon dossier ?",
        answer:
          "Vos données sont utilisées uniquement pour informer nos partenaires bancaires de la demande du marché et pour vous notifier à l'ouverture du service. Nous ne partageons pas vos informations avec des tiers sans votre consentement.",
      },
    ],
  };
  
  // ============================================
  // SECTION 6 — WAITLIST FORM
  // ============================================
  export const waitlistFormCopy = {
    title: "Rejoindre la Liste d'Attente",
  
    stats: {
      counterLabel: "Inscrits Prioritaires",
      statusLabel: "Statut d'Inscription en Direct",
      progressLabel: "Progression du Dossier",
    },
  
    errors: {
      required: "Ce champ est obligatoire",
      invalidEmail: "Veuillez entrer un email valide",
    },
    
    fields: {
      fullName: {
        label: "Nom complet",
        placeholder: "Ex : Aminata Diallo",
        required: true,
      },
      email: {
        label: "Adresse email",
        placeholder: "nom@gmail.com",
        required: true,
      },
      country: {
        label: "Pays de résidence",
        placeholder: "Entrez votre pays",
        required: true,
      },
      clientType: {
        label: "Type de profil",
        required: true,
        options: [
          { value: "", label: "Sélectionnez votre profil" },
          { value: "individual", label: "Particulier (salarié ou profession libérale)" },
          { value: "corporation", label: "Entreprise / Flotte" },
          { value: "ngo", label: "ONG / Organisation internationale" },
          { value: "diaspora", label: "Diaspora / Expatrié" },
        ],
      },
      estimatedBudget: {
        label: "Enveloppe budgétaire",
        required: true,
        options: [
          { value: "", label: "Sélectionnez une fourchette" },
          { value: "under-30k", label: "Moins de 30 000 $" },
          { value: "30k-50k", label: "30 000 $ – 50 000 $" },
          { value: "50k-80k", label: "50 000 $ – 80 000 $" },
          { value: "80k-plus", label: "80 000 $ et plus" },
        ],
      },
    },
  
    submitButton: "Demander un accès",
    submittingText: "Traitement en cours...",
  
    successMessage: {
      title: "Dossier reçu",
      description: "Bienvenue dans le cercle des premiers. Nous vous contacterons prochainement.",
      cta: "Explorer les véhicules",
    },
  };