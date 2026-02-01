import HeroFinancing from "@/components/financing/HerofFinancing";
import TripartiteModel from "@/components/financing/TripartiteModel";
import PreliminaryLoanTerms from "@/components/financing/PreliminaryLoanTerms";
import EligibilityCards from "@/components/financing/EligibilityCards";
import GeographicAvailability from "@/components/financing/GeographicAvailability";
import WaitlistForm from "@/components/financing/WaitlistForm";
import FAQFinancing from "@/components/financing/FAQFinancing";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

// Import des autres composants au fur et à mesure
// import GeographicAvailability from "@/components/financing/GeographicAvailability";
// import WaitlistForm from "@/components/financing/WaitlistForm";
// import FAQFinancing from "@/components/financing/FAQFinancing";
// import JoinUs from "@/components/JoinUs";
// import Footer from "@/components/Footer";

export default function FinancingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroFinancing />
      <TripartiteModel />
      <PreliminaryLoanTerms />
      <EligibilityCards />
      <GeographicAvailability />
      <WaitlistForm />
      <FAQFinancing />
      <JoinUs />
      <Footer />
      {/* Les autres sections seront ajoutées au fur et à mesure */}
    </main>
  );
}