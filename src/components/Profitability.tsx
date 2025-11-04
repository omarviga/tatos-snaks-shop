import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Package, Target } from "lucide-react";

export const Profitability = () => {
  return (
    <section id="distribuidores" className="py-20 bg-vintage-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 text-9xl rotate-12">💰</div>
        <div className="absolute bottom-20 right-20 text-9xl -rotate-12">📊</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-pop-in">
            <h2 className="text-4xl md:text-6xl font-vintage text-vintage-brown mb-6">
              ¿Quieres distribuir Tatos Pops?
            </h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
            <p className="text-xl font-cartoon text-foreground/80">
              Únete a nuestro equipo de distribuidores y comparte la magia vintage
            </p>
          </div>

          <div className="bg-background border-8 border-vintage-brown rounded-3xl p-8 md:p-12 shadow-2xl animate-pop-in" style={{ animationDelay: '0.2s' }}>
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Costo por lote */}
              <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <Package className="w-10 h-10 text-primary" />
                  <div>
                    <h3 className="font-vintage text-lg text-vintage-brown">Costo por lote</h3>
                    <p className="font-cartoon text-sm text-foreground/70">(10 bolsas)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-primary">$224.09</p>
              </div>

              {/* Costo unitario */}
              <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <DollarSign className="w-10 h-10 text-secondary" />
                  <div>
                    <h3 className="font-vintage text-lg text-vintage-brown">Costo unitario</h3>
                    <p className="font-cartoon text-sm text-foreground/70">(por bolsa)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-secondary">$22.41</p>
              </div>

              {/* Precio sugerido */}
              <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <Target className="w-10 h-10 text-primary" />
                  <div>
                    <h3 className="font-vintage text-lg text-vintage-brown">Precio sugerido</h3>
                    <p className="font-cartoon text-sm text-foreground/70">(venta al público)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-primary">$30.00</p>
              </div>

              {/* Rentabilidad */}
              <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <TrendingUp className="w-10 h-10 text-secondary" />
                  <div>
                    <h3 className="font-vintage text-lg text-vintage-brown">Rentabilidad bruta</h3>
                    <p className="font-cartoon text-sm text-foreground/70">(por bolsa)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-secondary">25.5%</p>
              </div>
            </div>

            {/* Punto de equilibrio */}
            <div className="bg-primary/10 border-4 border-primary rounded-2xl p-6 mb-8">
              <div className="text-center">
                <p className="font-cartoon text-lg text-foreground/80 mb-2">
                  Punto de equilibrio mensual
                </p>
                <p className="font-vintage text-4xl text-primary">
                  357 bolsas/mes
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <p className="font-cartoon text-lg text-foreground/80">
                ¿Te gustaría ser parte de la familia Tatos Pops?
              </p>
              <Button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-vintage text-2xl py-8 px-12 border-4 border-vintage-brown shadow-lg"
              >
                📦 Quiero distribuir Tatos Pops
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};