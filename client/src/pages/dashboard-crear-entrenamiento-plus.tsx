import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardCrearEntrenamientoPlusPage() {
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Crear Entrenamiento +</h1>
          
          {/* Training Creation Interface */}
          <div className="max-w-4xl mx-auto">
            {/* Selected Exercises Display */}
            <div className="bg-card rounded-lg p-8 mb-8">
              <h2 className="text-xl font-medium text-foreground mb-6">Ejercicios Seleccionados</h2>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="bg-muted rounded p-4 text-center">
                    <span className="text-foreground">Ejercicio {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Details Form */}
            <div className="bg-card rounded-lg p-8 mb-8">
              <h2 className="text-xl font-medium text-foreground mb-6">Detalles del Entrenamiento</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-foreground mb-2">Fecha</label>
                  <input type="date" className="w-full p-3 bg-muted rounded text-foreground" />
                </div>
                <div>
                  <label className="block text-foreground mb-2">Duración</label>
                  <input type="text" placeholder="90 minutos" className="w-full p-3 bg-muted rounded text-foreground" />
                </div>
                <div>
                  <label className="block text-foreground mb-2">Notas</label>
                  <textarea className="w-full p-3 bg-muted rounded text-foreground h-24 resize-none" placeholder="Notas adicionales..."></textarea>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6">
              <Link to="/dashboard/planificacion-entrenamientos">
                <button className="btn-primary px-8 py-3">Volver</button>
              </Link>
              <button className="btn-primary px-8 py-3">Guardar Entrenamiento</button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}