// HOMEPAGE CONTENT — VERSION FRANÇAISE (Corrigée)

export const heroCopy = {
  title: "Sourcing Premium. Du Canada à l'Afrique.",
  subtitle: "Sourcing. Inspection. Livraison.",
  ctaIndividuals: "Particuliers",
  ctaProfessionals: "Professionnels",
};

// Section 2 — Why Import from Canada
export const whyImportCopy = {
  title: "L'Avantage Stratégique Canadien",
  intro: "Des standards qui protègent. Une traçabilité sans faille. Des véhicules qui durent.",
  headline: ["Qualité", "Supérieure.", "Zéro Risque."], // CORRECTION: "Supérieure" avec un E
  accordions: [
    {
      id: "inventory-quality",
      title: "Concessionnaires vs Marché US Risqué", // Plus pro que "Épave"
      content:
        "Le marché américain à l'export est saturé de véhicules accidentés ou inondés. Nevexa s'approvisionne exclusivement chez des concessionnaires officiels canadiens : historique limpide, aucun compromis.",
    },
    {
      id: "export-security",
      title: "Titre Propre. Zéro Saisie.",
      content:
        "Un véhicule saisi au port, c'est un investissement perdu. Nevexa applique strictement le protocole de l'ASFC. Vous recevez le Titre Douanier Officiel pour chaque véhicule : 100% légal et immunisé contre toute saisie Interpol.",
    },
    {
      id: "heavy-duty-specs",
      title: "Conçus pour les routes africaines",
      content:
        "Les véhicules canadiens sont construits pour l'extrême : suspensions renforcées, batteries haute capacité, isolation thermique. Sur les routes africaines, ces spécifications font toute la différence face aux imports fragiles des pays chauds.",
    },
  ],
};

export const valuePropsCopy = {
  title: "Mode opératoire",
  trustLine: "Concessionnaires officiels uniquement. Zéro enchères.",
  steps: [
    {
      id: 1,
      label: "Sourcing",
      description:
        "Identification et sécurisation de votre modèle 2021-2026 auprès du réseau concessionnaire certifié.", // Plus pro que "On identifie..."
      image: "/process/step-1-sourcing.webp",
    },
    {
      id: 2,
      label: "Inspection",
      description:
        "Contrôle technique complet avant achat, rapport détaillé et historique CARFAX inclus.",
      image: "/process/step-2-inspection.webp",
    },
    {
      id: 3,
      label: "Logistique",
      description:
        "Pilotage complet de l'expédition depuis le Canada jusqu'à votre port de destination.",
      image: "/process/step-3-logistics.webp",
    },
    {
      id: 4,
      label: "Douanes",
      description:
        "Documentation export complète et assistance technique pour votre transitaire local.",
      image: "/process/step-4-customs.webp",
    },
  ],
};

export const brandsCopy = {
  title: "Marques disponibles",
  legalNote: "Accès à l'ensemble des concessionnaires officiels",
  logos: [
    { name: "Mercedes", src: "/brands/mercedes.png", scale: 2.0 },
    { name: "BMW", src: "/brands/bmw.png", scale: 2.0 },
    { name: "Audi", src: "/brands/audi.png", scale: 1.5 },  
    { name: "Porsche", src: "/brands/porsche.png", scale: 1.9 },
    { name: "Land Rover", src: "/brands/land-rover.png", scale: 1.6 },   
    { name: "Cadillac", src: "/brands/cadillac.png", scale: 1.4 },   
    { name: "Dodge", src: "/brands/dodge.png", scale: 2.1 },    
    { name: "Lexus", src: "/brands/lexus.png", scale: 1.6 },
    { name: "Toyota", src: "/brands/toyota.png", scale: 1.5 },
    { name: "Honda", src: "/brands/honda.png", scale: 1.65 },
    { name: "Tesla", src: "/brands/tesla.png", scale: 2.1 },
    { name: "Hyundai", src: "/brands/hyundai.png", scale: 1.5 },
  ],
};

// Section 4 — Choose Your Path
export const choosePathCopy = {
  label: "Votre profil",
  cards: [
    {
      id: "b2c",
      title: "Particuliers",
      badge: null,
      ctaLabel: "Trouver mon véhicule",
      href: "/b2c",
      image: "/paths/individuals.webp",
    },
    {
      id: "b2b",
      title: "Professionnels",
      badge: null,
      ctaLabel: "Voir l'offre B2B",
      href: "/b2b",
      image: "/paths/professionals.webp",
    },
    {
      id: "financing",
      title: "Financement",
      badge: "ACCÈS ANTICIPÉ",
      ctaLabel: "En savoir plus",
      href: "/financing",
      image: "/paths/financing.webp",
    },
  ],
};

// Section 5 — Delivery Options
export const deliveryOptionsCopy = {
  label: "Options de livraison",
  intro:
    "Choisissez le niveau de service adapté à votre logistique locale.",
  options: [
    {
      id: "port-to-port",
      title: "Port à Port",
      description:
        "Nous expédions au port de votre choix (Lomé, Cotonou, Abidjan, etc.). Vous recevez tous les documents conformes par DHL avant l'arrivée du navire. Votre transitaire local prend le relais en toute sérénité.", // "Nous" au lieu de "On"
    },
    {
      id: "port-to-door",
      title: "Port à Domicile",
      description:
        "Dédouanement et livraison à domicile. Actuellement disponible pour le Nigeria. (Autres destinations : sur devis et selon disponibilité des partenaires agréés).",
    },
  ],
};

// Section 6 — Real Results
export const realResultsCopy = {
  label: "Track Record", // Plus business que "Opérations réelles"
  intro:
    "Sélection d'opérations récentes menées entre le Canada et l'Afrique.",
};

// Section 7 — Final CTA
export const finalCtaCopy = {
  label: "Contact",
  title: "Parlez à un conseiller Nevexa",
  subtitle:
    "Pas de formulaire. Pas d'attente. Contact direct via WhatsApp ou Email. Nous nous occupons du reste.",
  ctaLabel: "Nous contacter",
  email: "contact@nevexacars.com",
  emailSubject: "Nouvelle demande — Site Nevexa",
  whatsappNumber: "+14374842769",
};

// Footer
export const footerCopy = {
  legalNoticeLabel: "Mentions légales",
  contactLabel: "Contact",
  copyrightName: "Nevexa",
};