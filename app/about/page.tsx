import type { Metadata } from "next";
import HeroAbout from "@/components/about/HeroAbout";
import Manifesto from "@/components/about/Manifesto";
import TheReality from "@/components/about/TheReality";
import SplitCTA from "@/components/about/SplitCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nevexa was built to eliminate fraud in the African vehicle market. Learn our story, our mission, and why transparency is the foundation of everything we do.",
  openGraph: {
    title: "About | Nevexa",
    description:
      "Nevexa was built to eliminate fraud in the African vehicle market. Learn our story, our mission, and why transparency is the foundation of everything we do.",
    url: "https://nevexacars.com/about",
  },
  twitter: {
    title: "About | Nevexa",
    description:
      "Nevexa was built to eliminate fraud in the African vehicle market. Learn our story, our mission, and why transparency is the foundation of everything we do.",
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