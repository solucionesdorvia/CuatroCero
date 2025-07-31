import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardFichaJugadorPage() {
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
          <Link to="/dashboard/equipo" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">AVL - Primera División</h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Player Info */}
            <div className="grid grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Thiago Vitelli</h2>
                <p className="text-lg text-foreground">Titi</p>
                <p className="text-lg text-foreground">Ultimo</p>
                <p className="text-lg text-foreground">Derecho</p>
                <div>
                  <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full">Activo</span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-80 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Crect width='200' height='300' fill='%23dc2626'/%3E%3Ctext x='100' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EThiago%3C/text%3E%3Ctext x='100' y='190' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EVitelli%3C/text%3E%3C/svg%3E"
                    alt="Thiago Vitelli" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6">
              <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors">
                Eliminar
              </button>
              <Link to="/dashboard/plantel">
                <button className="btn-primary px-8 py-3">Volver</button>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}