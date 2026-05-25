import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-ink">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-vintage text-ink tracking-tight uppercase">
            Tatos Snacks
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('inicio')} className="font-cartoon text-ink hover:underline underline-offset-4">
              Inicio
            </button>
            <button onClick={() => scrollToSection('producto')} className="font-cartoon text-ink hover:underline underline-offset-4">
              Producto
            </button>
            <button onClick={() => scrollToSection('socios')} className="font-cartoon text-ink hover:underline underline-offset-4">
              Socios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="font-cartoon text-ink hover:underline underline-offset-4">
              Contacto
            </button>
            <CartDrawer />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <CartDrawer />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-pop-in border-t-2 border-ink mt-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 font-cartoon text-ink">
              Inicio
            </button>
            <button onClick={() => scrollToSection('producto')} className="block w-full text-left py-2 font-cartoon text-ink">
              Producto
            </button>
            <button onClick={() => scrollToSection('socios')} className="block w-full text-left py-2 font-cartoon text-ink">
              Socios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 font-cartoon text-ink">
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
