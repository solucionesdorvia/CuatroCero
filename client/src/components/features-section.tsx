import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Dumbbell, Trophy, BarChart3, Calendar, Smartphone } from "lucide-react";

const iconMap = {
  users: Users,
  dumbbell: Dumbbell,
  futbol: Trophy,
  "chart-line": BarChart3,
  trophy: Trophy,
  "mobile-alt": Smartphone,
};

export default function FeaturesSection() {
  const { data: homepage } = useQuery({
    queryKey: ["/api/homepage"],
  });

  const features = homepage?.features || [
    {
      id: "1",
      icon: "users",
      title: "Gestión de Jugadores",
      description: "Administra perfiles completos, estadísticas individuales y seguimiento del rendimiento de cada jugador."
    },
    {
      id: "2",
      icon: "dumbbell",
      title: "Planificación de Entrenamientos",
      description: "Crea ejercicios personalizados, planifica sesiones y optimiza el desarrollo técnico del equipo."
    },
    {
      id: "3",
      icon: "futbol",
      title: "Gestión de Partidos",
      description: "Cronómetro en vivo, registro de eventos, cambios dinámicos y análisis post-partido."
    },
    {
      id: "4",
      icon: "chart-line",
      title: "Estadísticas Avanzadas",
      description: "Analiza el rendimiento con métricas detalladas, filtros avanzados y reportes profesionales."
    },
    {
      id: "5",
      icon: "trophy",
      title: "Torneos y Competencias",
      description: "Organiza torneos, programa fixtures y lleva el control completo de todas las competencias."
    },
    {
      id: "6",
      icon: "mobile-alt",
      title: "Acceso Móvil",
      description: "Gestiona tu club desde cualquier dispositivo con nuestra interfaz optimizada y responsive."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Todo lo que necesitas para gestionar tu club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde la planificación de entrenamientos hasta el análisis de rendimiento, nuestra plataforma te ofrece todas las herramientas profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: any) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Users;
            
            return (
              <Card key={feature.id} className="bg-gray-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
