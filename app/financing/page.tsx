import type { Metadata } from "next";
import HeroFinancing from "@/components/financing/HeroFinancing";
import TripartiteModel from "@/components/financing/TripartiteModel";
import FinancingForEveryNeed from "@/components/financing/FinancingForEveryNeed";
import GeographicAvailability from "@/components/financing/GeographicAvailability";
import FAQFinancing from "@/components/financing/FAQFinancing";
import WaitlistForm from "@/components/financing/WaitlistForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Finance Your Canadian Vehicle Import to West Africa | Nevexa",
  description: "Understand the full cost of importing a Canadian vehicle to Nigeria or Côte d'Ivoire. Deposit structure, payment process, banking options — Nevexa guides you through it.",
  alternates: {
    canonical: "https://www.nevexacars.com/financing",
  },
};

export default function FinancingPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <HeroFinancing />
      <TripartiteModel />
      <FinancingForEveryNeed />
      <GeographicAvailability />
      <FAQFinancing />
      <WaitlistForm />
      <Footer />
    </main>
  );
}