import HeroFinancing from "@/components/financing/HeroFinancing";
import TripartiteModel from "@/components/financing/TripartiteModel";
import FinancingForEveryNeed from "@/components/financing/FinancingForEveryNeed";
import GeographicAvailability from "@/components/financing/GeographicAvailability";
import WaitlistForm from "@/components/financing/WaitlistForm";
import FAQFinancing from "@/components/financing/FAQFinancing";
import Footer from "@/components/Footer";


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