import { Button } from "@/components/ui/button";
import tatoCoking from "@/assets/tato-cooking.jpg";

export const HowItsMade = () => {
  return (
    <section id="proceso" className="py-20 bg-vintage-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 text-9xl animate-float">🍯</div>
        <div className="absolute bottom-20 right-20 text-9xl animate-bounce-soft">🔥</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-pop-in">
            <h2 className="text-4xl md:text-6xl font-vintage text-vintage-brown mb-6">
              ¿Cómo se hacen?
            </h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="animate-pop-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                <img 
                  src={tatoCoking} 
                  alt="Tato cocinando palomitas artesanales"
                  className="w-full rounded-3xl border-8 border-vintage-brown shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 text-6xl animate-bounce-soft">🍿</div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-pop-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-background border-8 border-vintage-brown rounded-3xl p-8 shadow-xl">
                <div className="text-5xl mb-6 text-center animate-wiggle">✨</div>
                
                <p className="text-lg md:text-xl font-cartoon text-foreground leading-relaxed mb-6">
                  Usamos <span className="font-vintage text-primary text-2xl">maíz tipo Mushroom</span> de la más alta calidad, 
                  azúcar, mantequilla y jarabe de maíz natural.
                </p>
                
                <p className="text-lg md:text-xl font-cartoon text-foreground leading-relaxed mb-8">
                  Cada lote se elabora <span className="font-vintage text-secondary text-2xl">artesanalmente con cariño</span> en 
                  <span className="font-vintage text-vintage-brown text-2xl"> Acámbaro, Guanajuato</span>.
                </p>

                <div className="text-center">
                  <Button 
                    onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-vintage text-xl py-6 px-8 border-4 border-vintage-brown shadow-lg"
                  >
                    Conoce nuestra historia
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};