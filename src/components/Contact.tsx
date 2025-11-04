import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Mail } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado!", {
      description: "Nos pondremos en contacto pronto 🍿",
      position: "top-center"
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 text-8xl animate-float">📧</div>
        <div className="absolute bottom-20 right-20 text-8xl animate-bounce-soft">📱</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-pop-in">
            <h2 className="text-4xl md:text-6xl font-vintage text-primary mb-4">
              ¡Hablemos!
            </h2>
            <p className="text-xl font-cartoon text-foreground/80">
              ¿Tienes antojo o una idea loca de sabor? ¡Escríbenos!
            </p>
          </div>

          <div className="bg-vintage-cream border-8 border-vintage-brown rounded-3xl p-8 md:p-12 shadow-2xl animate-pop-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                  className="font-cartoon text-lg border-4 border-vintage-brown focus:border-primary"
                />
              </div>
              
              <div>
                <Input 
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono o WhatsApp"
                  required
                  className="font-cartoon text-lg border-4 border-vintage-brown focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea 
                  name="mensaje"
                  placeholder="Tu pedido o mensaje artesanal..."
                  required
                  rows={5}
                  className="font-cartoon text-lg border-4 border-vintage-brown focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-vintage text-xl py-6 border-4 border-vintage-brown shadow-lg"
              >
                Enviar pedido artesanal
              </Button>
            </form>
            
            <div className="mt-8 text-center space-y-3">
              <p className="font-cartoon text-lg text-foreground/80">
                📍 <span className="font-vintage text-primary">Hecho artesanalmente en Acámbaro, Guanajuato</span>
              </p>
              <p className="font-vintage text-2xl text-secondary">
                ❤️ De nuestra olla a tu corazón
              </p>
            </div>

            <div className="mt-10 pt-8 border-t-4 border-vintage-brown">
              <h3 className="text-2xl font-vintage text-center mb-6">Síguenos</h3>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-14 h-14 border-4 border-vintage-brown hover:bg-accent"
                >
                  <Instagram className="w-7 h-7" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-14 h-14 border-4 border-vintage-brown hover:bg-accent"
                >
                  <Facebook className="w-7 h-7" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-14 h-14 border-4 border-vintage-brown hover:bg-accent"
                >
                  <Mail className="w-7 h-7" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <p className="font-cartoon text-foreground/60">
          © 2025 Tatos Pops - Palomitas con alma vintage 🍿
        </p>
      </footer>
    </section>
  );
};
