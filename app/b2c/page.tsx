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
  title: "Buy a Car from Canada, Delivered to Nigeria | Nevexa",
  description: "Choose your vehicle, we source it from certified Canadian dealerships, handle shipping and customs, and deliver it to you. 100% on-demand, 0 inventory.",
  alternates: {
    canonical: "https://www.nevexacars.com/b2c",
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