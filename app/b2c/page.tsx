import Hero from "@/components/b2c/B2CHero";
import BrandModelGallery from "@/components/b2c/BrandModelGallery"; // ← Ajoute cette ligne
import ImportAdvantage from "@/components/b2c/ImportAdvantage";
import FAQ from "@/components/b2c/B2CFAQ";
import FinalCTA from "@/components/FinalCTA";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer"; // Footer will be added after ALL sections

export default function B2CPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Brand Model Gallery */}
      <BrandModelGallery /> {/* ← Ajoute cette ligne */}

      {/* Section 3 — Import Advantage (coming next) */}
      <ImportAdvantage /> {/* ← AJOUTE ICI */}
      {/* Section 4 — FAQ (coming next) */}
      <FAQ /> 
      {/* Section 5 — Contact CTA (coming next) */}
      <FinalCTA />
      {/* Section 6 — Join Us (coming next) */}
      <JoinUs />
      <Footer />
      {/* Footer will be added here after all sections are complete */}
    </main>
  );
}