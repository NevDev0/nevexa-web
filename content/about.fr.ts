// ABOUT PAGE CONTENT — VERSION FRANÇAISE
// Ton : Narratif, authentique, tranchant. Pas un discours corporate.

// ─────────────────────────────────────────
// Section 1 — Hero
// ─────────────────────────────────────────
export const aboutHeroCopy = {
    statement: "Le marché est truqué. On ne joue pas ce jeu-là.",
    highlightWord: "truqué", 
    subline: "On a construit la sortie.",
  };
  
  // ─────────────────────────────────────────
  // Section 2 — Manifesto (3 Piliers)
  // ─────────────────────────────────────────
  export const manifestoCopy = {
    pillars: [
      {
        id: "our-origin",
        title: "Notre Origine",
        content: [
          "Nevexa est née d'une observation directe : d'un côté, le marché automobile canadien — réglementé, traçable, fiable. De l'autre, le marché de revente en Afrique de l'Ouest — opaque, sans garde-fous.",
          "Le contraste était impossible à ignorer. Alors on a construit le pont.",
        ],
      },
      {
        id: "our-standard",
        title: "Notre Standard",
        content: [
          "On s'approvisionne exclusivement chez des concessionnaires canadiens agréés. Zéro enchères, zéro marché gris, zéro compromis. Chaque véhicule est inspecté de manière indépendante.",
          "Historique complet, rapport d'état, documentation — tout est accessible avant le moindre engagement.",
        ],
      },
      {
        id: "what-we-are",
        title: "Ce Que Nous Sommes",
        content: [
          "On n'est ni une marketplace, ni un broker. On ne stocke pas de véhicules et on ne pousse pas du stock.",
          "Chaque véhicule qu'on déplace est sourcé à la demande, pour un seul client, avec un seul objectif.",
          "Le bon véhicule. Sans compromis.",
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
        text: "Chaque année, des milliers d'acheteurs en Afrique de l'Ouest paient le prix fort pour des véhicules déclarés épaves de l'autre côté de l'océan. Titre propre sur le papier. Dommages structurels en dessous.",
        highlights: ["épaves", "Dommages structurels en dessous"],
      },
      {
        text: "À l'arrivée, les revendeurs locaux ajoutent leur marge sur un prix déjà gonflé. L'acheteur paie deux fois pour un véhicule qui était compromis dès le départ.",
        highlights: ["paie deux fois"],
      },
      {
        text: "Le système est construit sur ce silence. Nevexa a été créée pour y mettre fin.",
        highlights: ["y mettre fin"],
      },
    ],
    founder: {
      header: "Un Mot de Notre Fondateur",
      quote: "Dans un secteur où le silence est rentable, la transparence est notre seule monnaie. J'ai vu trop de personnes investir leurs économies dans des véhicules qui n'auraient jamais dû être vendus. Nevexa n'a pas été créée pour être un distributeur de plus — elle a été créée pour être un rempart. On est là pour que votre ambition ne soit jamais sacrifiée par la malhonnêteté d'un autre. Vous n'achetez pas juste un véhicule — vous achetez la certitude que votre investissement est protégé par la vérité.",
      signature: "Ozioma",
      role: "Fondateur, Nevexa Automotive Inc.",
    },
  };
  
  // ─────────────────────────────────────────
  // Section 4 — Split CTA
  // ─────────────────────────────────────────
  export const splitCTACopy = {
    title: "Choisissez votre profil.",
    buttons: [
      {
        label: "Acheteurs particuliers",
        buttonText: "Je suis un particulier",
        href: "/b2c",
        variant: "outline" as const,
      },
      {
        label: "Entreprises & Revendeurs",
        buttonText: "Je représente une entreprise",
        href: "/b2b",
        variant: "solid" as const,
      },
    ],
  };