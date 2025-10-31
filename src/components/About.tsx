export const About = () => {
  return (
    <section id="historia" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 text-8xl animate-float">🎩</div>
        <div className="absolute bottom-10 left-10 text-8xl animate-bounce-soft">🎪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-pop-in">
            <h2 className="text-4xl md:text-6xl font-vintage text-primary mb-6">
              La Historia de Tatos Pops
            </h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-8"></div>
          </div>

          <div className="bg-vintage-cream border-8 border-vintage-brown rounded-3xl p-8 md:p-12 shadow-2xl animate-pop-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-cartoon text-foreground leading-relaxed text-center mb-6">
              "Tatos Pops nació con la idea de devolverle magia a lo simple: el estallido del maíz, 
              el toque del caramelo y la sonrisa de los viejos tiempos."
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-background rounded-2xl border-4 border-vintage-brown">
                <div className="text-5xl mb-3">🎨</div>
                <h3 className="font-vintage text-xl text-primary mb-2">Artesanal</h3>
                <p className="font-cartoon text-sm text-foreground/70">
                  Hecho a mano con amor
                </p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-2xl border-4 border-vintage-brown">
                <div className="text-5xl mb-3">⏰</div>
                <h3 className="font-vintage text-xl text-primary mb-2">Tradicional</h3>
                <p className="font-cartoon text-sm text-foreground/70">
                  Recetas de antaño
                </p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-2xl border-4 border-vintage-brown">
                <div className="text-5xl mb-3">✨</div>
                <h3 className="font-vintage text-xl text-primary mb-2">Mágico</h3>
                <p className="font-cartoon text-sm text-foreground/70">
                  Sabor que enamora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
