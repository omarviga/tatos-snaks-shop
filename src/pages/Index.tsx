import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FlavorSection } from "@/components/FlavorSection";
import { Products } from "@/components/Products";
import { HowItsMade } from "@/components/HowItsMade";
import { TechnicalSheet } from "@/components/TechnicalSheet";
import { Profitability } from "@/components/Profitability";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FlavorSection />
      <Products />
      <HowItsMade />
      <TechnicalSheet />
      <Profitability />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
