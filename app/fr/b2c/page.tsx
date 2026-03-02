// app/fr/b2c/page.tsx

import type { Metadata } from "next";
import Hero from "@/components/b2c/B2CHero";
import BrandModelGallery from "@/components/b2c/BrandModelGallery";
import ImportAdvantage from "@/components/b2c/ImportAdvantage";
import B2CIndustrySecrets from "@/components/b2c/B2CIndustrySecrets";
import FAQ from "@/components/b2c/B2CFAQ";
import ReferralBlock from "@/components/b2c/ReferralBlock";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SHOW_REAL_RESULTS = false;

export const metadata: Metadata = {
  title: "Acheter un véhicule | Nevexa",
  description:
    "Parcourez des véhicules premium 2021-2026 sourcés directement auprès de concessionnaires canadiens. Mercedes-Benz, Toyota, Cadillac et plus — livrés en Afrique.",
  alternates: {
    canonical: "https://nevexacars.com/fr/b2c",
    languages: {
      en: "https://nevexacars.com/b2c",
      fr: "https://nevexacars.com/fr/b2c",
    },
  },
  openGraph: {
    title: "Acheter un véhicule | Nevexa",
    description:
      "Parcourez des véhicules premium 2021-2026 sourcés directement auprès de concessionnaires canadiens. Mercedes-Benz, Toyota, Cadillac et plus — livrés en Afrique.",
    url: "https://nevexacars.com/fr/b2c",
  },
  twitter: {
    title: "Acheter un véhicule | Nevexa",
    description:
      "Parcourez des véhicules premium 2021-2026 sourcés directement auprès de concessionnaires canadiens. Mercedes-Benz, Toyota, Cadillac et plus — livrés en Afrique.",
  },
};

export default function B2CPageFR() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Hero />
      <BrandModelGallery />
      <ImportAdvantage />
      <B2CIndustrySecrets />
      <FAQ />
      {SHOW_REAL_RESULTS && <ReferralBlock />}
      <FinalCTA />
      <Footer />
    </main>
  );
}