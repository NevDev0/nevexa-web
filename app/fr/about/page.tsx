// app/fr/about/page.tsx

import type { Metadata } from "next";
import HeroAbout from "@/components/about/HeroAbout";
import Manifesto from "@/components/about/Manifesto";
import TheReality from "@/components/about/TheReality";
import SplitCTA from "@/components/about/SplitCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "À propos | Nevexa",
  description:
    "Nevexa a été créée pour éliminer la fraude sur le marché automobile africain. Découvrez notre histoire, notre mission et pourquoi la transparence est au cœur de tout ce que nous faisons.",
  alternates: {
    canonical: "https://nevexacars.com/fr/about",
    languages: {
      en: "https://nevexacars.com/about",
      fr: "https://nevexacars.com/fr/about",
    },
  },
  openGraph: {
    title: "À propos | Nevexa",
    description:
      "Nevexa a été créée pour éliminer la fraude sur le marché automobile africain. Découvrez notre histoire, notre mission et pourquoi la transparence est au cœur de tout ce que nous faisons.",
    url: "https://nevexacars.com/fr/about",
  },
  twitter: {
    title: "À propos | Nevexa",
    description:
      "Nevexa a été créée pour éliminer la fraude sur le marché automobile africain. Découvrez notre histoire, notre mission et pourquoi la transparence est au cœur de tout ce que nous faisons.",
  },
};

export default function AboutPageFR() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <HeroAbout />
      <Manifesto />
      <TheReality />
      <SplitCTA />
      <Footer />
    </main>
  );
}