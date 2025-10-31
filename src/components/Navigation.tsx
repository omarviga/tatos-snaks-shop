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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vintage-cream/95 backdrop-blur-sm border-b-4 border-vintage-brown shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-vintage text-primary animate-wiggle">
            TATOS POPS 🍿
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('inicio')} className="font-cartoon text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('sabores')} className="font-cartoon text-foreground hover:text-primary transition-colors">
              Sabores
            </button>
            <button onClick={() => scrollToSection('historia')} className="font-cartoon text-foreground hover:text-primary transition-colors">
              Historia
            </button>
            <button onClick={() => scrollToSection('tienda')} className="font-cartoon text-foreground hover:text-primary transition-colors">
              Tienda
            </button>
            <button onClick={() => scrollToSection('contacto')} className="font-cartoon text-foreground hover:text-primary transition-colors">
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
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-pop-in">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 font-cartoon text-foreground hover:text-primary">
              Inicio
            </button>
            <button onClick={() => scrollToSection('sabores')} className="block w-full text-left py-2 font-cartoon text-foreground hover:text-primary">
              Sabores
            </button>
            <button onClick={() => scrollToSection('historia')} className="block w-full text-left py-2 font-cartoon text-foreground hover:text-primary">
              Historia
            </button>
            <button onClick={() => scrollToSection('tienda')} className="block w-full text-left py-2 font-cartoon text-foreground hover:text-primary">
              Tienda
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 font-cartoon text-foreground hover:text-primary">
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
