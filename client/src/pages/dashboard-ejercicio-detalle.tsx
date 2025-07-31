import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardEjercicioDetallePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-8 py-4 flex justify-center">
        <CuatroLogo size="md" orientation="horizontal" showSubtitle={false} />
      </header>

      {/* Sidebar Navigation */}
      <div className="flex">
        <nav className="w-64 px-8 py-12 space-y-6">
          <Link to="/dashboard/inicio" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Inicio
          </Link>
          <Link to="/dashboard/club" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Club
          </Link>
          <Link to="/dashboard/equipo" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Equipo
          </Link>
          <Link to="/dashboard/ejercicios" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
            Ejercicios
          </Link>
          <Link to="/dashboard/entrenamiento" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Entrenamiento
          </Link>
          <Link to="/dashboard/partidos" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Partidos
          </Link>
          <Link to="/dashboard/partidos-vivo" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Partidos en Vivo
          </Link>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-8 py-12">
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Ejercicios - Transiciones</h1>
          
          <div className="max-w-6xl mx-auto">
            {/* Exercise Title */}
            <div className="bg-purple-600 text-white text-center py-4 rounded-lg mb-8">
              <h2 className="text-xl font-bold">3 VS 2 Ataque - Defensa</h2>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {/* Left Side - Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-foreground"><strong>Jugadores Necesarios:</strong> 18 jugadores</p>
                </div>
                
                <div>
                  <p className="text-lg text-foreground"><strong>Tiempo Estimado:</strong> 20 minutos</p>
                </div>
                
                <div>
                  <p className="text-lg text-foreground"><strong>Materiales Necesarios:</strong> 5 - Pelotas - 10 Conos - 9 Pecheras</p>
                </div>
                
                <div>
                  <p className="text-lg text-foreground"><strong>Descripción:</strong> Ejercicio con los arcos en 20 metros, empiezan atacando un equipo de 3 jugadores y defendiendo 3 jugadores. Al finalizar los 3 que defendieron salen y entran otros 3 a atacar, los 3 que atacaban ahora defienden</p>
                </div>
              </div>
              
              {/* Right Side - Diagram */}
              <div className="flex justify-center">
                <div className="w-80 h-64 bg-blue-600 rounded-lg relative overflow-hidden">
                  {/* Soccer field diagram */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Field markings */}
                    <div className="w-full h-full relative">
                      {/* Center circle */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full"></div>
                      
                      {/* Players - red team */}
                      <div className="absolute top-8 left-8 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute top-8 right-8 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                      
                      {/* Players - green team */}
                      <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute bottom-8 right-8 w-3 h-3 bg-green-500 rounded-full"></div>
                      
                      {/* Goals */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-white"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mt-12">
              <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors">
                Eliminar
              </button>
              <Link to="/dashboard/ejercicios-transiciones">
                <button className="btn-primary px-8 py-3">Volver</button>
              </Link>
              <button className="bg-muted text-foreground px-8 py-3 rounded hover:bg-muted/80 transition-colors">
                Editar
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}