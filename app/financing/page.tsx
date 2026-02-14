import HeroFinancing from "@/components/financing/HeroFinancing";
import TripartiteModel from "@/components/financing/TripartiteModel";
import EligibilityCards from "@/components/financing/FinancingForEveryNeed";
import GeographicAvailability from "@/components/financing/GeographicAvailability";
import WaitlistForm from "@/components/financing/WaitlistForm";
import FAQFinancing from "@/components/financing/FAQFinancing";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import FinancingForEveryNeed from "@/components/financing/FinancingForEveryNeed";

export default function FinancingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroFinancing />
      <TripartiteModel />
      <FinancingForEveryNeed />
      <GeographicAvailability />
      <WaitlistForm />
      <FAQFinancing />
      <JoinUs />
      <Footer />
    </main>
  );
}