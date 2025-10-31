import { Card, CardContent } from "@/components/ui/card";
import butterImage from "@/assets/butter-popcorn.jpg";
import caramelImage from "@/assets/caramel-popcorn.jpg";

const flavors = [
  {
    name: "Mantequilla Clásica",
    description: "Suave y cremosa",
    image: butterImage,
    delay: "0s"
  },
  {
    name: "Caramelo Dorado",
    description: "Dulce artesanal con brillo tostado",
    image: caramelImage,
    delay: "0.2s"
  }
];

export const FlavorSection = () => {
  return (
    <section id="sabores" className="py-20 bg-vintage-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 text-9xl">🍿</div>
        <div className="absolute bottom-0 right-0 text-9xl">🍿</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-vintage text-vintage-brown mb-4">
            Nuestros Sabores
          </h2>
          <p className="text-xl font-cartoon text-foreground/80 max-w-2xl mx-auto">
            Cada sabor cuenta una historia de tradición y sabor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {flavors.map((flavor, index) => (
            <Card 
              key={flavor.name}
              className="border-4 border-vintage-brown overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-background group animate-pop-in"
              style={{ animationDelay: flavor.delay }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={flavor.image} 
                    alt={flavor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-brown/80 to-transparent flex items-end p-6">
                    <div className="text-vintage-cream">
                      <h3 className="text-2xl md:text-3xl font-vintage mb-1">
                        {flavor.name}
                      </h3>
                      <p className="font-cartoon text-lg">
                        {flavor.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
