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
  title: "Nevexa — Premium vehicles, from Canada to Africa",
  description:
    "Source your next vehicle directly from Canadian dealerships. Nevexa delivers certified 2021-2026 vehicles to West Africa with full transparency.",
  openGraph: {
    title: "Nevexa — Premium vehicles, from Canada to Africa",
    description:
      "Source your next vehicle directly from Canadian dealerships. Nevexa delivers certified 2021-2026 vehicles to West Africa with full transparency.",
    url: "https://nevexacars.com",
  },
  twitter: {
    title: "Nevexa — Premium vehicles, from Canada to Africa",
    description:
      "Source your next vehicle directly from Canadian dealerships. Nevexa delivers certified 2021-2026 vehicles to West Africa with full transparency.",
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