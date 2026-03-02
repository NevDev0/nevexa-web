// app/fr/b2b/page.tsx

import type { Metadata } from "next";
import HeroB2B from "@/components/b2b/HeroB2B";
import BuiltForScale from "@/components/b2b/BuiltForScale";
import WhatOthersWontTellYou from "@/components/b2b/WhatOthersWontTellYou";
import FAQB2B from "@/components/b2b/FAQB2B";
import ContactCTAB2B from "@/components/b2b/ContactCTAB2B";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions Entreprises | Nevexa",
  description:
    "Sourcing de flotte et programmes véhicules pour les entreprises africaines. Nevexa livre des véhicules canadiens vérifiés à grande échelle avec documentation complète.",
  alternates: {
    canonical: "https://nevexacars.com/fr/b2b",
    languages: {
      en: "https://nevexacars.com/b2b",
      fr: "https://nevexacars.com/fr/b2b",
    },
  },
  openGraph: {
    title: "Solutions Entreprises | Nevexa",
    description:
      "Sourcing de flotte et programmes véhicules pour les entreprises africaines. Nevexa livre des véhicules canadiens vérifiés à grande échelle avec documentation complète.",
    url: "https://nevexacars.com/fr/b2b",
  },
  twitter: {
    title: "Solutions Entreprises | Nevexa",
    description:
      "Sourcing de flotte et programmes véhicules pour les entreprises africaines. Nevexa livre des véhicules canadiens vérifiés à grande échelle avec documentation complète.",
  },
};

export default function B2BPageFR() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <HeroB2B />
      <BuiltForScale />
      <WhatOthersWontTellYou />
      <FAQB2B />
      <ContactCTAB2B />
      <Footer />
    </main>
  );
}