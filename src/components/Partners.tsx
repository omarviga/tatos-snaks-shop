import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, FileDown, Package, Boxes } from "lucide-react";

const PRICE_PUBLIC = 15;
const COST_PER_BAG = 11; // costo aprox para el distribuidor

export const Partners = () => {
  const [bags, setBags] = useState<number>(80);

  const revenue = bags * PRICE_PUBLIC;
  const cost = bags * COST_PER_BAG;
  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  const whatsappUrl =
    "https://wa.me/524179999999?text=" +
    encodeURIComponent(
      "¡Hola Tatos Snacks! Quiero iniciar un pedido como socio comercial."
    );

  return (
    <section id="socios" className="py-24 bg-background border-t-2 border-ink">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 animate-pop-in">
            <p className="font-cartoon tracking-[0.4em] text-xs text-ink mb-4">
              SOCIOS COMERCIALES & DISTRIBUCIÓN
            </p>
            <h2 className="font-vintage text-4xl md:text-5xl text-ink leading-tight">
              Hazte Socio Comercial
              <span className="block text-xl md:text-2xl font-cartoon mt-3">
                Lleva Tatos Snacks a tu Negocio
              </span>
            </h2>
            <div className="w-16 h-px bg-ink mx-auto mt-6" />
            <p className="font-cartoon text-base md:text-lg text-ink/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Queremos hacer equipo con tiendas de conveniencia, cooperativas escolares,
              cafeterías y emprendedores locales en la región. Sin registros obligatorios
              ni procesos complejos, te ofrecemos lotes listos para la venta con
              excelentes márgenes de ganancia.
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <article className="border-2 border-ink p-8 bg-background hover:bg-ink hover:text-background transition-colors duration-300 group">
              <Package className="w-10 h-10 stroke-1 mb-6" />
              <p className="font-cartoon text-xs tracking-widest mb-2">PAQUETE 01</p>
              <h3 className="font-vintage text-2xl mb-3">Paquete Inicial Emprendedor</h3>
              <p className="font-cartoon text-sm leading-relaxed mb-6">
                Incluye 80 bolsas listas para exhibidor a un precio preferencial.
              </p>
              <div className="border-t border-current pt-4 flex items-baseline justify-between">
                <span className="font-cartoon text-xs uppercase tracking-wider">Precio</span>
                <span className="font-vintage text-3xl">$1,200<span className="text-base"> MXN</span></span>
              </div>
            </article>

            <article className="border-2 border-ink p-8 bg-ink text-background">
              <Boxes className="w-10 h-10 stroke-1 mb-6" />
              <p className="font-cartoon text-xs tracking-widest mb-2">PAQUETE 02</p>
              <h3 className="font-vintage text-2xl mb-3">Caja Máster Distribución</h3>
              <p className="font-cartoon text-sm leading-relaxed mb-6">
                Lote de 100 piezas ideal para surtir de forma constante a tu negocio.
              </p>
              <div className="border-t border-current pt-4 flex items-baseline justify-between">
                <span className="font-cartoon text-xs uppercase tracking-wider">Precio</span>
                <span className="font-vintage text-3xl">$1,500<span className="text-base"> MXN</span></span>
              </div>
            </article>
          </div>

          {/* Calculator */}
          <div className="border-2 border-ink p-8 md:p-12 mb-12 bg-background">
            <div className="text-center mb-8">
              <p className="font-cartoon text-xs tracking-[0.3em] mb-2">CALCULADORA</p>
              <h3 className="font-vintage text-2xl md:text-3xl text-ink">
                Proyecta tus Ganancias
              </h3>
              <div className="w-12 h-px bg-ink mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Label htmlFor="bags" className="font-cartoon text-base text-ink">
                  Bolsas que planeas vender
                </Label>
                <Input
                  id="bags"
                  type="number"
                  min={0}
                  value={bags}
                  onChange={(e) => setBags(Math.max(0, Number(e.target.value) || 0))}
                  className="font-vintage text-2xl h-16 rounded-none border-2 border-ink bg-background text-center"
                />
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={bags}
                  onChange={(e) => setBags(Number(e.target.value))}
                  className="w-full accent-ink"
                />
                <p className="font-cartoon text-xs text-ink/70">
                  Precio público: ${PRICE_PUBLIC} MXN · Costo socio aprox: ${COST_PER_BAG} MXN
                </p>
              </div>

              <div className="border-2 border-ink divide-y-2 divide-ink">
                <div className="flex justify-between p-4">
                  <span className="font-cartoon text-sm uppercase tracking-wider">Ingresos</span>
                  <span className="font-vintage text-xl">${revenue.toLocaleString("es-MX")}</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-cartoon text-sm uppercase tracking-wider">Inversión</span>
                  <span className="font-vintage text-xl">${cost.toLocaleString("es-MX")}</span>
                </div>
                <div className="flex justify-between p-4 bg-ink text-background">
                  <span className="font-cartoon text-sm uppercase tracking-wider">Ganancia</span>
                  <span className="font-vintage text-2xl">
                    ${profit.toLocaleString("es-MX")}
                  </span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-cartoon text-sm uppercase tracking-wider">Margen</span>
                  <span className="font-vintage text-xl">{margin.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-ink text-background hover:bg-ink/90 font-vintage text-base px-8 py-7 rounded-none border-2 border-ink"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 stroke-[1.5]" />
                Iniciar Pedido por WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-ink hover:bg-ink hover:text-background font-vintage text-base px-8 py-7 rounded-none border-2 border-ink"
              onClick={() => window.print()}
            >
              <FileDown className="w-5 h-5 mr-2 stroke-[1.5]" />
              Descargar Ficha Técnica de Insumos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};