import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import Brands from "../components/Brands";
import ChoosePath from "../components/ChoosePath";
import DeliveryOptions from "../components/DeliveryOptions";
import RealResults from "../components/RealResults";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <ValueProposition />
      <Brands />
      <ChoosePath />
      <DeliveryOptions />
      <RealResults />
      <FinalCTA />
      <Footer />
    </main>
  );
}
