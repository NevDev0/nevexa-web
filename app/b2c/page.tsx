import Hero from "@/components/b2c/B2CHero";
import BrandModelGallery from "@/components/b2c/BrandModelGallery";
import ImportAdvantage from "@/components/b2c/ImportAdvantage";
import FAQ from "@/components/b2c/B2CFAQ";
import ReferralBlock from "@/components/b2c/ReferralBlock";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function B2CPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Section 1 — Hero */}
      <Hero />
      
      {/* Section 2 — Brand Model Gallery */}
      <BrandModelGallery />
      
      {/* Section 3 — Import Advantage */}
      <ImportAdvantage />
      
      {/* Section 4 — FAQ */}
      <FAQ />
      
      {/* Section 5 — Referral */}
      <ReferralBlock />
      
      {/* Section 6 — Contact CTA */}
      <FinalCTA />
      
      {/* Section 7 — Footer */}
      <Footer />
    </main>
  );
}