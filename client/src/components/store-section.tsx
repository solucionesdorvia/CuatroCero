import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

export default function StoreSection() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products", selectedCategory === "all" ? undefined : selectedCategory],
  });

  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await apiRequest("POST", "/api/cart", { productId, quantity: 1 });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({
        title: "Producto agregado",
        description: "El producto se agregó correctamente al carrito",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const categories = [
    { value: "all", label: "Todos" },
    { value: "PLANTILLA", label: "Plantillas" },
    { value: "EBOOK", label: "eBooks" },
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Tienda de Recursos Profesionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a plantillas de entrenamiento, eBooks especializados y recursos desarrollados por expertos en futsal.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={selectedCategory === category.value 
                ? "bg-accent text-primary hover:bg-accent-cuatro" 
                : "hover:bg-gray-100"
              }
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría</p>
            </div>
          ) : (
            products.map((product: any) => (
              <Card key={product.id} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">📄</span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={product.category === "PLANTILLA" ? "default" : "secondary"}
                      className={product.category === "PLANTILLA" 
                        ? "bg-accent text-primary" 
                        : "bg-blue-100 text-blue-600"
                      }
                    >
                      {product.category === "PLANTILLA" ? "Plantilla" : "eBook"}
                    </Badge>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <Button 
                    className="w-full bg-primary text-white hover:bg-secondary transition-colors"
                    onClick={() => user ? addToCartMutation.mutate(product.id) : toast({
                      title: "Inicia sesión",
                      description: "Debes iniciar sesión para agregar productos al carrito",
                      variant: "destructive",
                    })}
                    disabled={addToCartMutation.isPending}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {addToCartMutation.isPending ? "Agregando..." : "Agregar al Carrito"}
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
