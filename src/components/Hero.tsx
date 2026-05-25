import { Button } from "@/components/ui/button";
import { Sparkles, Wheat, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/tato-hero.jpg";

const pillars = [
  {
    icon: Wheat,
    title: "Maíz Pop Mushroom Extra",
    desc: "Palomitas perfectamente esféricas que retienen mejor el sabor.",
  },
  {
    icon: Sparkles,
    title: "Receta Tradicional",
    desc: "Balance perfecto de ingredientes de alta calidad sin excesos.",
  },
  {
    icon: ShieldCheck,
    title: "Triple Capa de Protección",
    desc: "Empaque Kraft impermeable que mantiene el producto fresco y crujiente.",
  },
];

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-pop-in">
          <p className="font-cartoon tracking-[0.4em] text-sm text-ink">
            EST. ACÁMBARO · GUANAJUATO
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-ink max-w-[120px]" />
            <span className="font-cartoon text-xs tracking-widest">SERIE ARTESANAL</span>
            <span className="h-px flex-1 bg-ink max-w-[120px]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-vintage text-ink leading-[1.05]">
            Tatos Snacks
            <span className="block text-2xl md:text-4xl mt-4 font-cartoon">
              Palomitas con Alma Vintage
            </span>
          </h1>
          <p className="text-lg md:text-xl font-cartoon text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Descubre el auténtico maíz Pop Mushroom de gran calibre reventado a la perfección.
            Una botana artesanal, premium y estandarizada, orgullosamente hecha en
            Acámbaro, Guanajuato.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Button
              onClick={() => scrollTo("producto")}
              className="bg-ink text-background hover:bg-ink/90 font-vintage text-base px-8 py-6 rounded-none border-2 border-ink"
            >
              Probar Tatos Snacks
            </Button>
            <Button
              onClick={() => scrollTo("socios")}
              variant="outline"
              className="bg-transparent text-ink hover:bg-ink hover:text-background font-vintage text-base px-8 py-6 rounded-none border-2 border-ink"
            >
              Hazte Socio Comercial
            </Button>
          </div>
        </div>

        {/* Hero image card */}
        <div className="mt-16 max-w-3xl mx-auto animate-pop-in" style={{ animationDelay: "0.2s" }}>
          <div className="border-2 border-ink p-2 bg-background">
            <div className="border border-ink overflow-hidden">
              <img
                src={heroImage}
                alt="Palomitas Mushroom artesanales Tatos Snacks"
                className="w-full h-auto grayscale contrast-125"
              />
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-vintage text-3xl md:text-4xl text-ink">
              Calidad Estandarizada
            </h2>
            <div className="w-16 h-px bg-ink mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ink border-2 border-ink">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-background p-8 flex flex-col items-center text-center space-y-4 animate-pop-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <p.icon className="w-12 h-12 text-ink stroke-1" />
                <h3 className="font-vintage text-lg text-ink uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="font-cartoon text-sm text-ink/80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
