import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Package, Target, ShoppingBag, ChartBar } from "lucide-react";

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
                    <p className="font-cartoon text-sm text-foreground/70">(10 bolsas de 80g)</p>
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
                    <p className="font-cartoon text-sm text-foreground/70">(por bolsa de 80g)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-secondary">$22.41</p>
              </div>

              {/* Precio sugerido público */}
              <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <Target className="w-10 h-10 text-primary" />
                  <div>
                    <h3 className="font-vintage text-lg text-vintage-brown">Precio al público</h3>
                    <p className="font-cartoon text-sm text-foreground/70">(venta detalle)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-primary">$30.00</p>
              </div>

              {/* Precio mayoreo */}
              <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <ShoppingBag className="w-10 h-10 text-secondary" />
                  <div>
                    <h3 className="font-vintage text-lg text-vintage-brown">Precio mayoreo</h3>
                    <p className="font-cartoon text-sm text-foreground/70">(mín. 20 bolsas)</p>
                  </div>
                </div>
                <p className="font-vintage text-3xl text-secondary">$26.00</p>
              </div>
            </div>

            {/* Margen de contribución */}
            <div className="bg-secondary/10 border-4 border-secondary rounded-2xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-cartoon text-lg text-foreground/80 mb-2">
                    Margen de contribución
                  </p>
                  <p className="font-vintage text-3xl text-secondary">
                    $5.72 por bolsa
                  </p>
                  <p className="font-cartoon text-sm text-foreground/60 mt-1">(a 30% utilidad)</p>
                </div>
                <div className="text-center">
                  <p className="font-cartoon text-lg text-foreground/80 mb-2">
                    Rentabilidad bruta
                  </p>
                  <p className="font-vintage text-3xl text-secondary">
                    25.5%
                  </p>
                  <p className="font-cartoon text-sm text-foreground/60 mt-1">(ganancia neta)</p>
                </div>
              </div>
            </div>

            {/* Punto de equilibrio */}
            <div className="bg-primary/10 border-4 border-primary rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4">
                <ChartBar className="w-12 h-12 text-primary" />
                <div className="text-center">
                  <p className="font-cartoon text-lg text-foreground/80 mb-2">
                    Punto de equilibrio mensual
                  </p>
                  <p className="font-vintage text-4xl text-primary">
                    357 bolsas/mes
                  </p>
                  <p className="font-cartoon text-sm text-foreground/60 mt-1">(base 500 bolsas/mes)</p>
                </div>
              </div>
            </div>

            {/* Desglose de costos */}
            <div className="bg-vintage-cream border-4 border-vintage-brown rounded-2xl p-6 mb-8">
              <h3 className="font-vintage text-2xl text-vintage-brown text-center mb-6">
                Desglose de Costos por Lote
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-cartoon text-foreground/70 text-sm mb-1">Materia Prima</p>
                  <p className="font-vintage text-2xl text-primary">$138.09</p>
                </div>
                <div>
                  <p className="font-cartoon text-foreground/70 text-sm mb-1">Empaque</p>
                  <p className="font-vintage text-2xl text-secondary">$38.00</p>
                </div>
                <div>
                  <p className="font-cartoon text-foreground/70 text-sm mb-1">Indirectos</p>
                  <p className="font-vintage text-2xl text-vintage-brown">$48.00</p>
                </div>
              </div>
            </div>

            {/* Costo por kg */}
            <div className="text-center mb-8">
              <p className="font-cartoon text-lg text-foreground/70 mb-2">
                Costo por kilogramo de producto final
              </p>
              <p className="font-vintage text-4xl text-vintage-brown">
                $280.12/kg
              </p>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <p className="font-cartoon text-xl text-foreground/80 mb-4">
                ¿Te gustaría ser parte de la familia Tatos Pops?
              </p>
              <Button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-vintage text-2xl py-8 px-12 border-4 border-vintage-brown shadow-lg hover:scale-105 transition-all duration-300"
              >
                📦 Quiero distribuir Tatos Pops
              </Button>
              <p className="font-cartoon text-sm text-foreground/60 mt-4">
                Contáctanos para conocer más detalles sobre precios especiales para distribuidores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};