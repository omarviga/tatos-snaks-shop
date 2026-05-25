import { Button } from "@/components/ui/button";
import { ShoppingBag, BadgeCheck, Award } from "lucide-react";
import butterImage from "@/assets/butter-popcorn.jpg";

export const Products = () => {
  return (
    <section id="producto" className="py-24 bg-vintage-cream border-t-2 border-ink">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cartoon tracking-[0.4em] text-xs text-ink mb-3">
              PRODUCTO ESTRELLA
            </p>
            <h2 className="font-vintage text-4xl md:text-5xl text-ink">
              Edición Mantequilla
            </h2>
            <div className="w-16 h-px bg-ink mx-auto mt-4" />
          </div>

          <article className="grid md:grid-cols-2 border-2 border-ink bg-background">
            {/* Image */}
            <div className="border-b-2 md:border-b-0 md:border-r-2 border-ink p-6 flex items-center justify-center bg-background">
              <div className="relative w-full aspect-square max-w-sm">
                <img
                  src={butterImage}
                  alt="Palomitas sabor mantequilla Tatos Snacks bolsa 36g"
                  className="w-full h-full object-contain grayscale contrast-125"
                />
                {/* Stamp */}
                <div className="absolute top-2 right-2 border-2 border-ink rounded-full w-20 h-20 flex flex-col items-center justify-center bg-background rotate-12 text-center p-1">
                  <Award className="w-5 h-5 stroke-1" />
                  <span className="font-vintage text-[10px] leading-tight mt-1">
                    NOM<br />051
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col">
              <p className="font-cartoon text-xs tracking-widest mb-2 text-ink/70">
                SKU · TS-MTQ-36
              </p>
              <h3 className="font-vintage text-3xl text-ink leading-tight">
                Palomitas Sabor Mantequilla
              </h3>
              <p className="font-cartoon text-base text-ink/80 mt-2">
                Bolsa de 36g · Maíz Pop Mushroom
              </p>

              <ul className="mt-6 space-y-3 font-cartoon text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 stroke-[1.5] shrink-0" />
                  Maíz reventado a la perfección
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 stroke-[1.5] shrink-0" />
                  Mantequilla balanceada, sin excesos
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 mt-0.5 stroke-[1.5] shrink-0" />
                  Empaque Kraft con triple capa
                </li>
              </ul>

              <div className="mt-auto pt-8">
                <div className="border-t-2 border-ink pt-5 flex items-baseline justify-between">
                  <span className="font-cartoon text-xs uppercase tracking-widest">
                    Precio público
                  </span>
                  <span className="font-vintage text-4xl text-ink">
                    $15.00 <span className="text-base">MXN</span>
                  </span>
                </div>
                <Button
                  onClick={() =>
                    document.getElementById("socios")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full mt-6 bg-ink text-background hover:bg-ink/90 font-vintage text-base py-7 rounded-none border-2 border-ink"
                >
                  <ShoppingBag className="w-5 h-5 mr-2 stroke-[1.5]" />
                  Probar Tatos Snacks
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
