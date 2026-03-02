// app/fr/page.tsx

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyImport from "@/components/WhyImport";
import ValueProposition from "@/components/ValueProposition";
import Brands from "@/components/Brands";
import ChoosePath from "@/components/ChoosePath";
import DeliveryOptions from "@/components/DeliveryOptions";
import RealResults from "@/components/RealResults";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SHOW_REAL_RESULTS = false;

export const metadata: Metadata = {
  title: "Nevexa — Véhicules premium, du Canada à l'Afrique",
  description:
    "Sourcez votre prochain véhicule directement auprès de concessionnaires canadiens. Nevexa livre des véhicules certifiés 2021-2026 en Afrique de l'Ouest en toute transparence.",
  alternates: {
    canonical: "https://nevexacars.com/fr",
    languages: {
      en: "https://nevexacars.com",
      fr: "https://nevexacars.com/fr",
    },
  },
  openGraph: {
    title: "Nevexa — Véhicules premium, du Canada à l'Afrique",
    description:
      "Sourcez votre prochain véhicule directement auprès de concessionnaires canadiens. Nevexa livre des véhicules certifiés 2021-2026 en Afrique en toute transparence.",
    url: "https://nevexacars.com/fr",
  },
  twitter: {
    title: "Nevexa — Véhicules premium, du Canada à l'Afrique",
    description:
      "Sourcez votre prochain véhicule directement auprès de concessionnaires canadiens. Nevexa livre des véhicules certifiés 2021-2026 en Afrique de l'Ouest en toute transparence.",
  },
};

export default function HomePageFR() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Hero />
      <WhyImport />
      <ValueProposition />
      <Brands />
      <ChoosePath />
      <DeliveryOptions />
      {SHOW_REAL_RESULTS && <RealResults />}
      <FinalCTA />
      <Footer />
    </main>
  );
}