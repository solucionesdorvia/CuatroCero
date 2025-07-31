import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardInicioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-8 py-4 flex justify-center">
        <CuatroLogo size="md" orientation="horizontal" showSubtitle={false} />
      </header>

      {/* Sidebar Navigation */}
      <div className="flex">
        <nav className="w-64 px-8 py-12 space-y-6">
          <Link to="/dashboard/inicio" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
            Inicio
          </Link>
          <Link to="/dashboard/club" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Club
          </Link>
          <Link to="/dashboard/equipo" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Equipo
          </Link>
          <Link to="/dashboard/ejercicios" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
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
          <div className="grid grid-cols-2 gap-8 max-w-4xl">
            {/* Main Cards */}
            <div className="bg-card rounded-lg p-8 text-center">
              <h2 className="text-xl font-medium text-foreground mb-4">Equipo</h2>
            </div>
            
            <div className="bg-card rounded-lg p-8 text-center">
              <h2 className="text-xl font-medium text-foreground mb-4">Entrenamiento</h2>
            </div>
            
            {/* Locked Cards */}
            <div className="bg-card rounded-lg p-8 text-center relative">
              <h2 className="text-xl font-medium text-muted-foreground mb-4">Partidos</h2>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 text-center relative">
              <h2 className="text-xl font-medium text-muted-foreground mb-4">Partidos en Vivo</h2>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}