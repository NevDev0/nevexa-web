import HeroPartnership from "@/components/partnership/HeroPartnership";
import RoleAndLimits from "@/components/partnership/RoleAndLimits";
import CommissionStructure from "@/components/partnership/CommissionStructure";
import HowItWorks from "@/components/partnership/HowItWorks";
import FAQPartnership from "@/components/partnership/FAQPartnership";
import PartnerApplication from "@/components/partnership/PartnerApplication";
import Footer from "@/components/Footer";
// Import des autres composants au fur et à mesure
// import JoinUs from "@/components/JoinUs";
// import Footer from "@/components/Footer";

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroPartnership />
      <RoleAndLimits />
      <CommissionStructure />
      <HowItWorks />
      <FAQPartnership />
      <PartnerApplication />
      <Footer />
      {/* Les autres sections seront ajoutées au fur et à mesure */}
    </main>
  );
}