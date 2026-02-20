import HeroB2B from "@/components/b2b/HeroB2B";
import BuiltForScale from "@/components/b2b/BuiltForScale";
import WhatOthersWontTellYou from "@/components/b2b/WhatOthersWontTellYou";
import FAQB2B from "@/components/b2b/FAQB2B";
import ContactCTAB2B from "@/components/b2b/ContactCTAB2B";
import FollowUs from "@/components/b2b/FollowUs";  // ← AJOUTE
import Footer from "@/components/Footer";

export default function B2BPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <HeroB2B />
      <BuiltForScale />
      <WhatOthersWontTellYou />
      <FAQB2B />
      <ContactCTAB2B />
      <FollowUs />  {/* ← AJOUTE */}
      <Footer />
    </main>
  );
}