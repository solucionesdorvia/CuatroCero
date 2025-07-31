import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardPlanificacionCategoriaPage() {
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
          <Link to="/dashboard/ejercicios" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Ejercicios
          </Link>
          <Link to="/dashboard/entrenamiento" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Planificacion - Categoria - Seleccionar Ejercicios</h1>
          
          {/* Category Selection Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {/* Category Cards */}
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="bg-card rounded-lg aspect-square p-6 flex items-center justify-center">
                <span className="text-foreground">Categoria {i + 1}</span>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <Link to="/dashboard/planificacion-entrenamientos">
              <button className="btn-primary px-8 py-3">Volver</button>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}