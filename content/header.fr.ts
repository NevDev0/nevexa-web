// content/header.fr.ts

export const headerContent = {
    nav: [
      { label: "Accueil", href: "/" },
      { label: "Particuliers", href: "/b2c" },
      { label: "Professionnels", href: "/b2b" },
      { label: "Financement", href: "/financing" },
      { label: "À propos", href: "/about" },
    ],
    cta: {
      label: "Nous contacter",
      href: "/#contact",
    },
    languages: ["EN", "FR"] as const,
    logo: {
      mobile: "/logo/nevexa-vertical-white.svg",
      desktop: "/logo/Wordmark-copy-WHITE.svg",
      drawer: "/logo/HOROZONTAL-LOGO-2WHITE-copy.svg",
      alt: "Nevexa",
    },
    drawer: {
      closeLabel: "Fermer le menu",
      openLabel: "Ouvrir le menu",
    },
  } as const;