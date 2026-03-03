// ABOUT PAGE CONTENT — VERSION FRANÇAISE (Optimisée)
// Ton : Engagé, Protecteur, Expert.

// ─────────────────────────────────────────
// Section 1 — Hero
// ─────────────────────────────────────────
export const aboutHeroCopy = {
  statement: "Le marché est piégé. | Nous sommes la sortie.", // Plus pro que "truqué"
  highlightWord: "piégé", 
  subline: "Nevexa redéfinit les règles de l'import automobile.",
};

// ─────────────────────────────────────────
// Section 2 — Manifesto (3 Piliers)
// ─────────────────────────────────────────
export const manifestoCopy = {
  pillars: [
    {
      id: "our-origin",
      title: "Le Constat",
      content: [
        "D'un côté, le Canada : un marché automobile ultra-réglementé et transparent. De l'autre, l'Afrique de l'Ouest : un terrain de jeu pour les véhicules accidentés et maquillés.",
        "Ce déséquilibre nous a révoltés. Alors nous avons construit un pont sécurisé.",
      ],
    },
    {
      id: "our-standard",
      title: "La Méthode",
      content: [
        "Sourcing exclusif en concession. Jamais d'enchères, jamais de 'salvage'. L'historique de chaque véhicule est audité avant même de vous être proposé.",
        "Transparence totale. Vous voyez ce que nous voyons. Aucune zone d'ombre.",
      ],
    },
    {
      id: "what-we-are",
      title: "L'Identité",
      content: [
        "Ni une simple marketplace, ni un courtier opaque. Nous ne stockons pas d'invendus.",
        "Nous sommes vos yeux au Canada. Nous chassons le véhicule précis qu'il vous faut, avec une obsession : la qualité sans compromis.",
      ],
    },
  ],
};

// ─────────────────────────────────────────
// Section 3 — The Reality
// ─────────────────────────────────────────
export const realityCopy = {
  paragraphs: [
    {
      text: "Chaque année, des milliers d'acheteurs paient le prix fort pour des véhicules déclarés 'épaves' en Amérique du Nord. Carrosserie neuve, châssis plié.",
      highlights: ["épaves", "châssis plié"],
    },
    {
      text: "Une fois importé, le véhicule passe de main en main, accumulant les marges injustifiées. Au final ? Vous payez double pour un danger public.",
      highlights: ["payez double"],
    },
    {
      text: "Ce système prospère sur le silence. Nevexa a été bâtie pour briser ce silence.",
      highlights: ["briser ce silence"],
    },
  ],
  founder: {
    header: "Le Mot du Fondateur",
    quote: "Dans cette industrie, la transparence est un acte de rébellion. J'ai vu trop d'économies d'une vie partir en fumée dans des véhicules maquillés. Nevexa n'est pas juste un exportateur, c'est un gardien. Nous sommes là pour que votre ambition ne soit plus jamais taxée par la malhonnêteté des autres. Avec nous, vous n'achetez pas seulement une voiture, vous achetez la vérité.",
    signature: "Ozioma",
    role: "Fondateur, Nevexa Automotive Inc.",
  },
};

// ─────────────────────────────────────────
// Section 4 — Split CTA
// ─────────────────────────────────────────
export const splitCTACopy = {
  title: "Quel est votre projet ?",
  buttons: [
    {
      label: "Pour moi-même",
      buttonText: "Je suis un Particulier",
      href: "/b2c",
      variant: "outline" as const,
    },
    {
      label: "Pour mon business",
      buttonText: "Je suis un Pro / ONG",
      href: "/b2b",
      variant: "solid" as const,
    },
  ],
};