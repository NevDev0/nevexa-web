// app/page.tsx
import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import Brands from "../components/Brands";
import ChoosePath from "../components/ChoosePath";
import DeliveryOptions from "../components/DeliveryOptions";
import RealResults from "../components/RealResults";
import FinalCTA from "../components/FinalCTA";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

const SHOW_REAL_RESULTS = true; // <- ON/OFF ici

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <ValueProposition />
      <Brands />
      <ChoosePath />
      <DeliveryOptions />
      {SHOW_REAL_RESULTS && <RealResults />}
      <FinalCTA />
      <JoinUs />
      <Footer />
    </main>
  );
}
