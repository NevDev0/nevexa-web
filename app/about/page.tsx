import type { Metadata } from "next";
import HeroAbout from "@/components/about/HeroAbout";
import Manifesto from "@/components/about/Manifesto";
import TheReality from "@/components/about/TheReality";
import SplitCTA from "@/components/about/SplitCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Nevexa — Canadian Vehicle Importer to West Africa",
  description: "Nevexa is a Toronto-based vehicle importer connecting West African buyers to certified Canadian dealerships. Premium vehicles, transparent process, direct delivery.",
  alternates: {
    canonical: "https://www.nevexacars.com/about",
  },
};

export default function AboutPage() {
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