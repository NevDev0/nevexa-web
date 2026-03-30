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
  title: "Buy Canadian Cars, Delivered to Nigeria | Nevexa",
  description: "Nevexa sources any 2021–2026 vehicle from certified Canadian dealerships and ships it directly to Nigeria or Côte d'Ivoire. On-demand. Verified. Premium.",
  alternates: {
    canonical: "https://www.nevexacars.com",
  },
};

export default function HomePage() {
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