import { Button } from "@/components/ui/button";
import { Facebook, Package, Boxes } from "lucide-react";

export const Partners = () => {
  const facebookUrl = "https://www.facebook.com/tatossnacks";

  return (
    <section id="socios" className="py-24 bg-background border-t-2 border-ink">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 animate-pop-in">
            <p className="font-cartoon font-semibold tracking-[0.3em] text-[10px] text-ink uppercase mb-4">
              SOCIOS COMERCIALES & DISTRIBUCIÓN
            </p>
            <h2 className="font-vintage text-4xl md:text-5xl text-ink leading-tight uppercase">
              Alianzas Comerciales
              <span className="block text-xl md:text-2xl font-cartoon font-bold mt-3 normal-case">
                Crezcamos Juntos.
              </span>
            </h2>
            <div className="w-16 h-px bg-ink mx-auto mt-6" />
            <p className="font-cartoon text-base md:text-lg text-ink/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Queremos hacer equipo con tiendas de conveniencia, cafeterías, cooperativas
              escolares y distribuidores locales de la región. Sin contratos forzosos,
              trámites complejos ni registros obligatorios; te ofrecemos lotes
              estandarizados listos para la venta con excelentes márgenes de ganancia.
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <article className="border-2 border-ink p-8 bg-background hover:bg-ink hover:text-background transition-colors duration-300 group">
              <Package className="w-10 h-10 stroke-[1.25] mb-6" />
              <p className="font-cartoon font-semibold text-[10px] tracking-[0.3em] mb-2 uppercase">Paquete 01</p>
              <h3 className="font-vintage text-2xl mb-3 uppercase leading-tight">Paquete Inicial Emprendedor</h3>
              <p className="font-cartoon text-sm leading-relaxed mb-6">
                Lote de 80 bolsas listas para exhibidor a un precio preferencial,
                ideal para iniciar tu punto de venta.
              </p>
              <div className="border-t border-current pt-4 flex items-baseline justify-between">
                <span className="font-cartoon font-semibold text-[10px] uppercase tracking-[0.2em]">Precio</span>
                <span className="font-vintage text-3xl">$1,200<span className="text-sm ml-1">MXN</span></span>
              </div>
            </article>

            <article className="border-2 border-ink p-8 bg-ink text-background">
              <Boxes className="w-10 h-10 stroke-[1.25] mb-6" />
              <p className="font-cartoon font-semibold text-[10px] tracking-[0.3em] mb-2 uppercase">Paquete 02</p>
              <h3 className="font-vintage text-2xl mb-3 uppercase leading-tight">Caja Máster Distribución</h3>
              <p className="font-cartoon text-sm leading-relaxed mb-6">
                Lote de 100 bolsas ideal para abastecimiento constante de tu negocio
                o ruta de distribución local.
              </p>
              <div className="border-t border-current pt-4 flex items-baseline justify-between">
                <span className="font-cartoon font-semibold text-[10px] uppercase tracking-[0.2em]">Precio</span>
                <span className="font-vintage text-3xl">$1,500<span className="text-sm ml-1">MXN</span></span>
              </div>
            </article>
          </div>

          {/* CTAs */}
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-ink text-background hover:bg-ink/90 font-cartoon font-bold tracking-wide text-sm px-8 py-7 rounded-none border-2 border-ink uppercase"
            >
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 mr-2 stroke-[1.5]" />
                Iniciar Pedido / Contactar por Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};