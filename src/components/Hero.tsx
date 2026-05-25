import { Button } from "@/components/ui/button";
import { Sparkles, Wheat, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Wheat,
    title: "Calibre Extra Pop Mushroom",
    desc: "Forma esférica perfecta que retiene mejor la mantequilla en cada pieza, sin cáscaras molestas. Una experiencia gourmet uniforme.",
  },
  {
    icon: Sparkles,
    title: "Receta Estandarizada",
    desc: "Balance ideal de ingredientes de alta calidad. Botana ligera, deliciosa y cuidada bajo manuales estrictos de producción.",
  },
  {
    icon: ShieldCheck,
    title: "Empaque con Triple Barrera",
    desc: "BOPP Mate + Papel Kraft + CPP grado alimentario. Impermeable al aceite, aísla la humedad y conserva el producto 100% crujiente.",
  },
];

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Copy */}
          <div className="space-y-6 animate-pop-in">
            <div className="inline-flex items-center gap-3 border border-ink px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-ink" />
              <span className="font-cartoon font-semibold tracking-[0.3em] text-[10px] text-ink uppercase">
                Acámbaro · Guanajuato
              </span>
            </div>
            <h1 className="font-vintage text-ink leading-[0.95] text-5xl md:text-6xl lg:text-7xl uppercase">
              Tatos
              <span className="block">Snacks</span>
              <span className="block text-xl md:text-2xl lg:text-3xl mt-5 font-cartoon font-bold normal-case leading-tight">
                Reinventando la Botana Tradicional.
              </span>
            </h1>
            <p className="font-cartoon text-base md:text-lg text-ink/80 max-w-xl leading-relaxed">
              Seleccionamos exclusivamente grano de maíz <strong>Pop Mushroom de gran calibre</strong>,
              reventado a la perfección para lograr una textura esférica, crujiente y única.
              Orgullosamente producidas bajo procesos estandarizados en Acámbaro, Guanajuato.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() => scrollTo("producto")}
                className="bg-ink text-background hover:bg-ink/90 font-cartoon font-bold tracking-wide text-sm px-7 py-6 rounded-none border-2 border-ink uppercase"
              >
                Conocer Producto
              </Button>
              <Button
                onClick={() => scrollTo("socios")}
                variant="outline"
                className="bg-transparent text-ink hover:bg-ink hover:text-background font-cartoon font-bold tracking-wide text-sm px-7 py-6 rounded-none border-2 border-ink uppercase"
              >
                Socios Comerciales
              </Button>
            </div>
          </div>

          {/* Stylized Kraft bag */}
          <div className="flex justify-center animate-pop-in" style={{ animationDelay: "0.15s" }}>
            <KraftBag />
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cartoon font-semibold tracking-[0.3em] text-[10px] text-ink uppercase mb-3">
              Pilares de Calidad Extrema
            </p>
            <h2 className="font-vintage text-3xl md:text-4xl text-ink uppercase">
              Hecho con estándares premium
            </h2>
            <div className="w-16 h-px bg-ink mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ink border-2 border-ink">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-background p-8 flex flex-col items-start text-left space-y-4 animate-pop-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <p.icon className="w-10 h-10 text-ink stroke-[1.25]" />
                <h3 className="font-vintage text-lg md:text-xl text-ink uppercase leading-tight">
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

/* Stylized Kraft bag with transparent window */
const KraftBag = () => (
  <div className="relative w-full max-w-sm aspect-[3/4]">
    {/* Bag body */}
    <div className="absolute inset-0 bg-[hsl(30,41%,82%)] border-2 border-ink shadow-[8px_8px_0_0_hsl(0_0%_0%)]">
      {/* Top serrated edge */}
      <div className="h-3 bg-ink" style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 96% 40%, 92% 100%, 88% 40%, 84% 100%, 80% 40%, 76% 100%, 72% 40%, 68% 100%, 64% 40%, 60% 100%, 56% 40%, 52% 100%, 48% 40%, 44% 100%, 40% 40%, 36% 100%, 32% 40%, 28% 100%, 24% 40%, 20% 100%, 16% 40%, 12% 100%, 8% 40%, 4% 100%, 0 40%)"
      }} />

      {/* Brand block */}
      <div className="px-6 pt-6 pb-3 text-center">
        <p className="font-cartoon font-bold tracking-[0.3em] text-[9px] text-ink">EST. 2024</p>
        <div className="w-8 h-px bg-ink mx-auto my-2" />
        <h3 className="font-vintage text-2xl text-ink uppercase leading-none">Tatos</h3>
        <h3 className="font-vintage text-2xl text-ink uppercase leading-none">Snacks</h3>
        <p className="font-cartoon font-semibold tracking-[0.25em] text-[9px] text-ink mt-2">
          MANTEQUILLA · 36 G
        </p>
      </div>

      {/* Transparent window with popcorn */}
      <div className="mx-6 mt-2 border-2 border-ink bg-[hsl(48,60%,90%)] aspect-[5/4] relative overflow-hidden">
        {/* Popcorn cluster */}
        <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full">
          {[
            [40, 60], [70, 50], [100, 55], [130, 48], [160, 62],
            [55, 85], [90, 80], [125, 82], [155, 90],
            [45, 110], [80, 115], [115, 108], [145, 118],
            [65, 135], [105, 138], [140, 140],
          ].map(([cx, cy], i) => (
            <g key={i} transform={`translate(${cx} ${cy})`} fill="hsl(48,80%,75%)" stroke="black" strokeWidth="1.5">
              <circle cx="0" cy="0" r="10" />
              <circle cx="-7" cy="-4" r="7" />
              <circle cx="7" cy="-4" r="7" />
              <circle cx="-4" cy="6" r="6" />
              <circle cx="6" cy="6" r="6" />
            </g>
          ))}
        </svg>
        {/* Window highlight */}
        <div className="absolute top-1 left-1 right-1/2 bottom-1/2 bg-white/30 pointer-events-none" />
      </div>

      {/* Bottom info */}
      <div className="px-6 pt-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-px flex-1 bg-ink" />
          <span className="font-cartoon font-bold tracking-[0.2em] text-[9px]">POP MUSHROOM</span>
          <span className="h-px flex-1 bg-ink" />
        </div>
      </div>
    </div>
  </div>
);
