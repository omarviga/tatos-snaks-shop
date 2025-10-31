import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tato-hero.jpg";

export const Hero = () => {
  const scrollToShop = () => {
    const element = document.getElementById('tienda');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🍿</div>
        <div className="absolute top-40 right-20 text-5xl animate-bounce-soft opacity-20" style={{ animationDelay: '0.5s' }}>🍿</div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🍿</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce-soft opacity-20" style={{ animationDelay: '1.5s' }}>🍿</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6 animate-pop-in">
            <h1 className="text-5xl md:text-7xl font-vintage text-vintage-brown leading-tight">
              ¡TATOS POPS!
            </h1>
            <h2 className="text-3xl md:text-4xl font-cartoon text-primary animate-wiggle">
              Palomitas con alma vintage 🍿✨
            </h2>
            <p className="text-xl md:text-2xl font-cartoon text-foreground/80 max-w-lg">
              Sabor artesanal, hecho a mano, directo a tu corazón.
            </p>
            <Button 
              onClick={scrollToShop}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-vintage text-xl px-8 py-6 border-4 border-vintage-brown shadow-lg hover:scale-105 transition-transform"
            >
              Explora los sabores
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative animate-pop-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden border-8 border-vintage-brown shadow-2xl">
              <img 
                src={heroImage} 
                alt="Tato mascota de Tatos Pops lanzando palomitas"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
