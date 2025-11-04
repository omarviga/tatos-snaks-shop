import { Package, Leaf, Thermometer, MapPin } from "lucide-react";

export const TechnicalSheet = () => {
  return (
    <section id="ficha-tecnica" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-10 text-9xl rotate-12">📋</div>
        <div className="absolute bottom-1/4 right-10 text-9xl -rotate-12">🏷️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-pop-in">
            <h2 className="text-4xl md:text-6xl font-vintage text-primary mb-6">
              Ficha Técnica
            </h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
            <p className="text-xl font-cartoon text-foreground/80">
              Todo lo que necesitas saber sobre nuestras palomitas
            </p>
          </div>

          <div className="bg-vintage-cream border-8 border-vintage-brown rounded-3xl p-8 md:p-12 shadow-2xl animate-pop-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Presentación */}
              <div className="bg-background border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Package className="w-8 h-8 text-primary" />
                  <h3 className="font-vintage text-xl text-vintage-brown">Presentación</h3>
                </div>
                <p className="font-cartoon text-lg">Bolsa kraft 80 g</p>
              </div>

              {/* Contenido neto */}
              <div className="bg-background border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Package className="w-8 h-8 text-secondary" />
                  <h3 className="font-vintage text-xl text-vintage-brown">Contenido neto</h3>
                </div>
                <p className="font-cartoon text-lg">36 g por porción</p>
              </div>

              {/* Ingredientes */}
              <div className="bg-background border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300 md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                  <h3 className="font-vintage text-xl text-vintage-brown">Ingredientes</h3>
                </div>
                <p className="font-cartoon text-lg">
                  Maíz palomero, azúcar, mantequilla, jarabe de maíz, sal
                </p>
              </div>

              {/* Conservación */}
              <div className="bg-background border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Thermometer className="w-8 h-8 text-secondary" />
                  <h3 className="font-vintage text-xl text-vintage-brown">Conservación</h3>
                </div>
                <p className="font-cartoon text-lg">Lugar fresco y seco</p>
              </div>

              {/* Origen */}
              <div className="bg-background border-4 border-vintage-brown rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h3 className="font-vintage text-xl text-vintage-brown">Elaborado por</h3>
                </div>
                <p className="font-cartoon text-lg">Tatos Snacks – Acámbaro, Gto.</p>
              </div>

              {/* Badge mexicano */}
              <div className="md:col-span-2 text-center mt-6">
                <div className="inline-block bg-primary/10 border-4 border-primary rounded-full px-8 py-4 animate-bounce-soft">
                  <p className="font-vintage text-2xl text-primary">
                    🇲🇽 Producto 100% Mexicano y Artesanal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};