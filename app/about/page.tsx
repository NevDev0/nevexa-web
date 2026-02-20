import HeroAbout from "@/components/about/HeroAbout";
import Manifesto from "@/components/about/Manifesto";
import TheReality from "@/components/about/TheReality";
import SplitCTA from "@/components/about/SplitCTA";
import FollowUs from "@/components/b2b/FollowUs";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Section 1 — Hero */}
      <HeroAbout />
      {/* Section 2 — Manifesto (TODO) */}
      <Manifesto />
      {/* Section 3 — The Reality (TODO) */}
      <TheReality />
      {/* Section 4 — Split CTA (TODO) */}
      <SplitCTA />
      {/* FollowUs */}
      <FollowUs />
      {/* Footer */}
      <Footer />
    </main>
  );
}