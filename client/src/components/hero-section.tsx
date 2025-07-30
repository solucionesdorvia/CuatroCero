import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  const { data: homepage } = useQuery({
    queryKey: ["/api/homepage"],
  });

  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {homepage?.hero?.title || "Gestiona tu Club de Futsal como un Profesional"}
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              {homepage?.hero?.subtitle || "Planifica entrenamientos, gestiona partidos en vivo, analiza estadísticas y potencia el rendimiento de tu equipo con nuestra plataforma integral."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth">
                <Button className="bg-accent text-primary px-8 py-4 text-lg font-semibold hover:bg-accent-cuatro transition-colors">
                  {homepage?.hero?.ctaPrimary || "¡Comenzar Gratis!"}
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                {homepage?.hero?.ctaSecondary || "Ver Demo"}
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Modern dashboard mockup illustration */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 h-4 rounded w-3/4"></div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-accent/80 h-16 rounded-lg"></div>
                  <div className="bg-white/20 h-16 rounded-lg"></div>
                  <div className="bg-white/20 h-16 rounded-lg"></div>
                </div>
                <div className="bg-white/20 h-8 rounded w-full"></div>
                <div className="bg-white/20 h-8 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
