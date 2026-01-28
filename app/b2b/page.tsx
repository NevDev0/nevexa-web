import HeroB2B from "@/components/b2b/HeroB2B";
import B2BCapabilities from "@/components/b2b/B2BCapabilities";
import UseCases from "@/components/b2b/UseCases";
import PricingFramework from "@/components/b2b/PricingFramework";
import WhatOthersWontTellYou from "@/components/b2b/WhatOthersWontTellYou";
import FAQB2B from "@/components/b2b/FAQB2B";
import ContactCTAB2B from "@/components/b2b/ContactCTAB2B"; // ← Ajoute
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function B2BPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroB2B />
      <B2BCapabilities />
      <UseCases />
      <PricingFramework />
      <WhatOthersWontTellYou />
      <FAQB2B />
      <ContactCTAB2B /> {/* ← Ajoute */}
      <JoinUs />
      <Footer />
    </main>
  );
}