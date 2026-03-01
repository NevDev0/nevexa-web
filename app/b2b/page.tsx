import type { Metadata } from "next";
import HeroB2B from "@/components/b2b/HeroB2B";
import BuiltForScale from "@/components/b2b/BuiltForScale";
import WhatOthersWontTellYou from "@/components/b2b/WhatOthersWontTellYou";
import FAQB2B from "@/components/b2b/FAQB2B";
import ContactCTAB2B from "@/components/b2b/ContactCTAB2B";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business Solutions | Nevexa",
  description:
    "Fleet sourcing and corporate vehicle programs for African businesses. Nevexa delivers verified Canadian vehicles at scale with full documentation.",
  openGraph: {
    title: "Business Solutions | Nevexa",
    description:
      "Fleet sourcing and corporate vehicle programs for African businesses. Nevexa delivers verified Canadian vehicles at scale with full documentation.",
    url: "https://nevexacars.com/b2b",
  },
  twitter: {
    title: "Business Solutions | Nevexa",
    description:
      "Fleet sourcing and corporate vehicle programs for African businesses. Nevexa delivers verified Canadian vehicles at scale with full documentation.",
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