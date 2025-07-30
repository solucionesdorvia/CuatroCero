import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Check, X } from "lucide-react";

export default function PlansSection() {
  const { toast } = useToast();

  const { data: plans = [], isLoading } = useQuery({
    queryKey: ["/api/plans"],
  });

  const selectPlanMutation = useMutation({
    mutationFn: async (planId: string) => {
      const res = await apiRequest("POST", `/api/plans/${planId}/select`);
      return res.json();
    },
    onSuccess: (data) => {
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
      toast({
        title: "Plan seleccionado",
        description: "Te redirigiremos a WhatsApp para completar la contratación",
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

  // Default plans if none from API
  const defaultPlans = [
    {
      id: "tecnico",
      name: "TÉCNICO",
      type: "TECNICO",
      price: "29",
      features: {
        clubs: "1 Club",
        players: "Hasta 25 jugadores",
        planning: "Planificación básica",
        stats: "Estadísticas básicas",
        analysis: false
      }
    },
    {
      id: "cuerpo-tecnico",
      name: "CUERPO TÉCNICO",
      type: "CUERPO_TECNICO",
      price: "59",
      features: {
        clubs: "Hasta 3 clubes",
        players: "Jugadores ilimitados",
        planning: "Planificación avanzada",
        stats: "Estadísticas completas",
        analysis: "Análisis avanzado"
      },
      popular: true
    },
    {
      id: "institucional",
      name: "INSTITUCIONAL",
      type: "INSTITUCIONAL",
      price: "99",
      features: {
        clubs: "Clubes ilimitados",
        players: "Jugadores ilimitados",
        planning: "Todas las funcionalidades",
        stats: "Panel administrativo",
        analysis: "Soporte prioritario"
      }
    }
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Elige el Plan Perfecto para tu Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde técnicos individuales hasta instituciones completas, tenemos el plan ideal para cada necesidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPlans.map((plan: any) => (
            <Card 
              key={plan.id} 
              className={`relative hover:shadow-lg transition-shadow ${
                plan.popular ? "border-2 border-accent" : "border-2 border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-primary px-4 py-1 text-sm font-semibold">
                    MÁS POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-primary mb-4">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  ${plan.price}
                  <span className="text-lg font-normal text-gray-600">/mes</span>
                </div>
                <CardDescription>
                  {plan.type === "TECNICO" && "Para entrenadores individuales"}
                  {plan.type === "CUERPO_TECNICO" && "Para equipos técnicos completos"}
                  {plan.type === "INSTITUCIONAL" && "Para instituciones deportivas"}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                <ul className="space-y-4">
                  {typeof plan.features === 'object' ? (
                    Object.entries(plan.features).map(([key, value]) => (
                      <li key={key} className="flex items-center">
                        {value === false ? (
                          <X className="h-4 w-4 text-gray-400 mr-3" />
                        ) : (
                          <Check className="h-4 w-4 text-accent mr-3" />
                        )}
                        <span className={value === false ? "text-gray-400" : ""}>
                          {typeof value === 'string' ? value : key}
                        </span>
                      </li>
                    ))
                  ) : (
                    plan.features?.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-accent mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))
                  )}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold transition-colors ${
                    plan.popular 
                      ? "bg-accent text-primary hover:bg-accent-cuatro" 
                      : plan.type === "INSTITUCIONAL"
                        ? "bg-primary text-white hover:bg-secondary"
                        : "bg-gray-100 text-primary hover:bg-gray-200"
                  }`}
                  onClick={() => selectPlanMutation.mutate(plan.id)}
                  disabled={selectPlanMutation.isPending}
                >
                  {selectPlanMutation.isPending ? "Procesando..." : "¡Quiero este!"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
