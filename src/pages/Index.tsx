import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FlavorSection } from "@/components/FlavorSection";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FlavorSection />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default Index;
