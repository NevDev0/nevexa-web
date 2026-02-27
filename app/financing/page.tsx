import type { Metadata } from "next";
import HeroFinancing from "@/components/financing/HeroFinancing";
import TripartiteModel from "@/components/financing/TripartiteModel";
import FinancingForEveryNeed from "@/components/financing/FinancingForEveryNeed";
import GeographicAvailability from "@/components/financing/GeographicAvailability";
import FAQFinancing from "@/components/financing/FAQFinancing";
import WaitlistForm from "@/components/financing/WaitlistForm";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Vehicle financing for Africa — launching Q1 2027 in Nigeria. Join the waitlist and be first to access Nevexa's banking partnership program.",
  openGraph: {
    title: "Financing | Nevexa",
    description:
      "Vehicle financing for Africa — launching Q1 2027 in Nigeria. Join the waitlist and be first to access Nevexa's banking partnership program.",
    url: "https://nevexacars.com/financing",
  },
  twitter: {
    title: "Financing | Nevexa",
    description:
      "Vehicle financing for Africa — launching Q1 2027 in Nigeria. Join the waitlist and be first to access Nevexa's banking partnership program.",
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