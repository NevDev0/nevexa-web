import type { Metadata } from "next";
import HeroB2B from "@/components/b2b/HeroB2B";
import BuiltForScale from "@/components/b2b/BuiltForScale";
import WhatOthersWontTellYou from "@/components/b2b/WhatOthersWontTellYou";
import FAQB2B from "@/components/b2b/FAQB2B";
import ContactCTAB2B from "@/components/b2b/ContactCTAB2B";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fleet Sourcing from Canada for African Businesses | Nevexa",
  description: "Nevexa sources business fleets directly from Canadian dealerships. Competitive pricing, volume orders, shipping to Nigeria and Côte d'Ivoire.",
  alternates: {
    canonical: "https://www.nevexacars.com/b2b",
  },
};

export default function B2BPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <HeroB2B />
      <BuiltForScale />
      <WhatOthersWontTellYou />
      <FAQB2B />
      <ContactCTAB2B />
      <Footer />
    </main>
  );
}