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
  title: "Buy a Vehicle | Nevexa",
  description:
    "Browse 2021-2026 premium vehicles sourced directly from Canadian dealerships. Mercedes-Benz, Toyota, Cadillac and more — delivered to your door in Africa.",
  openGraph: {
    title: "Buy a Vehicle | Nevexa",
    description:
      "Browse 2021-2026 premium vehicles sourced directly from Canadian dealerships. Mercedes-Benz, Toyota, Cadillac and more — delivered to your door in Africa.",
    url: "https://nevexacars.com/b2c",
  },
  twitter: {
    title: "Buy a Vehicle | Nevexa",
    description:
      "Browse 2021-2026 premium vehicles sourced directly from Canadian dealerships. Mercedes-Benz, Toyota, Cadillac and more — delivered to your door in Africa.",
  },
};

export default function B2CPage() {
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