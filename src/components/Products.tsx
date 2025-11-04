import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(20);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error cargando productos:', error);
        toast.error("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0].node;
    
    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("¡Agregado al carrito!", {
      description: product.node.title,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <section id="tienda" className="py-20 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
            <p className="mt-4 font-cartoon text-xl">Cargando productos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tienda" className="py-20 bg-vintage-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-10 text-9xl rotate-12">🛒</div>
        <div className="absolute bottom-1/4 right-10 text-9xl -rotate-12">🎁</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-vintage text-vintage-brown mb-4 animate-pop-in">
            Nuestra Tienda
          </h2>
          <p className="text-xl font-cartoon text-foreground/80 max-w-2xl mx-auto animate-pop-in" style={{ animationDelay: '0.1s' }}>
            ¡Lleva la magia vintage a tu casa!
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 animate-bounce-soft">🍿</div>
            <h3 className="text-2xl font-vintage text-vintage-brown mb-4">
              No hay productos disponibles
            </h3>
            <p className="font-cartoon text-lg text-foreground/70">
              ¡Pronto tendremos palomitas deliciosas para ti!
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const variant = product.node.variants.edges[0].node;
              const image = product.node.images.edges[0]?.node;
              const isCaramel = product.node.title.toLowerCase().includes('caramelo');

              return (
                <Card 
                  key={product.node.id}
                  className="group border-8 border-vintage-brown overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl bg-background animate-pop-in relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative corner stamp */}
                  <div className="absolute top-4 right-4 z-10 bg-secondary border-4 border-vintage-brown rounded-full w-16 h-16 flex items-center justify-center rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-500">
                    <span className="text-2xl">{isCaramel ? '🍯' : '🧈'}</span>
                  </div>

                  {image && (
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-vintage-cream to-background">
                      <img 
                        src={image.url} 
                        alt={image.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay effect on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500"></div>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-vintage text-vintage-brown mb-3 group-hover:text-primary transition-colors duration-300">
                      {product.node.title}
                    </h3>
                    <p className="font-cartoon text-lg text-foreground/70 mb-6 leading-relaxed">
                      {product.node.description}
                    </p>
                    <div className="flex items-center justify-between bg-vintage-cream rounded-2xl p-4 border-4 border-vintage-brown group-hover:border-primary transition-colors duration-300">
                      <span className="text-4xl font-vintage text-primary">
                        ${parseFloat(variant.price.amount).toFixed(2)}
                      </span>
                      <span className="font-cartoon text-lg text-foreground/70">
                        MXN
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-8 pt-0">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      disabled={!variant.availableForSale}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-vintage text-xl py-7 border-4 border-vintage-brown shadow-lg group-hover:scale-105 transition-all duration-300"
                    >
                      <ShoppingCart className="w-6 h-6 mr-2 group-hover:animate-bounce-soft" />
                      {variant.availableForSale ? 'Comprar ahora' : 'Agotado'}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
