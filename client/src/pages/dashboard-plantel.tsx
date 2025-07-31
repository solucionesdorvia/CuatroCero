import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardPlantelPage() {
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
          
          {/* Players Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {/* Create Player Button */}
            <div className="bg-card rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-card/80 transition-colors">
              <Link to="/dashboard/crear-jugador" className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-4">+</div>
                <p className="text-lg font-medium text-foreground">Crear Jugador</p>
              </Link>
            </div>

            {/* Sample Player Card */}
            <div className="bg-card rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23dc2626'/%3E%3Ctext x='50' y='55' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3ETV%3C/text%3E%3C/svg%3E"
                  alt="Thiago Vitelli" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-foreground">Thiago Vitelli</h3>
              <p className="text-sm text-muted-foreground">Titi</p>
              <p className="text-sm text-muted-foreground">Ultimo</p>
              <p className="text-sm text-muted-foreground">Derecho</p>
              <div className="mt-3">
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs">Activo</span>
              </div>
            </div>

            {/* Empty slots */}
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-card rounded-lg aspect-[3/4]"></div>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <Link to="/dashboard/division">
              <button className="btn-primary px-8 py-3">Volver</button>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}