import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";

export default function DashboardInicioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        <div className="flex items-center gap-8">
          <Link href="/dashboard/inicio" className="nav-link active">Inicio</Link>
          <Link href="/dashboard/entrenamiento" className="nav-link">Entrenamiento</Link>
          <Link href="/dashboard/partido" className="nav-link">Partido</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Inicio</h1>
          <p className="text-lg text-muted-foreground">Panel de Control Principal</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Equipos Card */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold mb-4">Equipos</h3>
            <div className="space-y-3">
              <div className="bg-secondary p-3 rounded">
                <p className="font-medium">Equipo Principal</p>
                <p className="text-sm text-muted-foreground">15 jugadores</p>
              </div>
              <div className="bg-secondary p-3 rounded">
                <p className="font-medium">Reserva</p>
                <p className="text-sm text-muted-foreground">12 jugadores</p>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">Gestionar Equipos</button>
          </div>

          {/* Entrenamientos Card */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold mb-4">Entrenamientos</h3>
            <div className="space-y-3">
              <div className="bg-secondary p-3 rounded">
                <p className="font-medium">Próximo Entrenamiento</p>
                <p className="text-sm text-muted-foreground">Hoy 18:00</p>
              </div>
              <div className="bg-secondary p-3 rounded">
                <p className="font-medium">Planificados</p>
                <p className="text-sm text-muted-foreground">5 esta semana</p>
              </div>
            </div>
            <Link href="/dashboard/entrenamiento">
              <button className="btn-primary w-full mt-4">Ver Entrenamientos</button>
            </Link>
          </div>

          {/* Partidos Card */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold mb-4">Partidos</h3>
            <div className="space-y-3">
              <div className="bg-secondary p-3 rounded">
                <p className="font-medium">Próximo Partido</p>
                <p className="text-sm text-muted-foreground">Sábado vs Rival FC</p>
              </div>
              <div className="bg-secondary p-3 rounded">
                <p className="font-medium">Resultados</p>
                <p className="text-sm text-muted-foreground">3-1 último partido</p>
              </div>
            </div>
            <Link href="/dashboard/partido">
              <button className="btn-primary w-full mt-4">Ver Partidos</button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">27</div>
            <div className="text-sm text-muted-foreground">Jugadores Total</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Entrenamientos</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Partidos Jugados</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">75%</div>
            <div className="text-sm text-muted-foreground">Efectividad</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">CUATRO CERO</p>
            <p className="text-sm text-muted-foreground">GESTIÓN DE EQUIPO</p>
            <p className="text-sm text-muted-foreground">Pizarras para entrenamiento</p>
          </div>
          
          <div className="mt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Redes Sociales</p>
            <p className="text-xs text-muted-foreground">Newsletters</p>
          </div>
        </div>
      </div>
    </div>
  );
}