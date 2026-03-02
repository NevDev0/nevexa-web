// app/fr/financing/page.tsx

import type { Metadata } from "next";
import HeroFinancing from "@/components/financing/HeroFinancing";
import TripartiteModel from "@/components/financing/TripartiteModel";
import FinancingForEveryNeed from "@/components/financing/FinancingForEveryNeed";
import GeographicAvailability from "@/components/financing/GeographicAvailability";
import FAQFinancing from "@/components/financing/FAQFinancing";
import WaitlistForm from "@/components/financing/WaitlistForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Financement | Nevexa",
  description:
    "Financement véhicule pour l'Afrique — lancement T1 2027 au Nigeria. Rejoignez la liste d'attente et accédez en priorité au programme de partenariat bancaire Nevexa.",
  alternates: {
    canonical: "https://nevexacars.com/fr/financing",
    languages: {
      en: "https://nevexacars.com/financing",
      fr: "https://nevexacars.com/fr/financing",
    },
  },
  openGraph: {
    title: "Financement | Nevexa",
    description:
      "Financement véhicule pour l'Afrique — lancement T1 2027 au Nigeria. Rejoignez la liste d'attente et accédez en priorité au programme de partenariat bancaire Nevexa.",
    url: "https://nevexacars.com/fr/financing",
  },
  twitter: {
    title: "Financement | Nevexa",
    description:
      "Financement véhicule pour l'Afrique — lancement T1 2027 au Nigeria. Rejoignez la liste d'attente et accédez en priorité au programme de partenariat bancaire Nevexa.",
  },
};

export default function FinancingPageFR() {
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