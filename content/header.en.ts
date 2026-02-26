// content/header.en.ts
export const headerContent = {
  nav: [
    { label: "Home", href: "/" },
    { label: "Individuals", href: "/b2c" },
    { label: "Businesses", href: "/b2b" },
    { label: "Financing", href: "/financing" },
    { label: "About", href: "/about" },
  ],
  cta: {
    label: "Contact Us",
    href: "/#contact",
  },
  languages: ["EN", "FR"] as const,
  logo: {
    mobile: "/logo/nevexa-vertical-white.svg",        // standalone symbol only
    desktop: "/logo/Wordmark-copy-WHITE.svg",          // symbol + NEVEXA + CARS
    drawer: "/logo/HOROZONTAL-LOGO-2WHITE-copy.svg",   // logo dans le hamburger
    alt: "Nevexa",
  },
  drawer: {
    closeLabel: "Close menu",
    openLabel: "Open menu",
  },
} as const;