import { Link } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardInicioPage() {
  return (
    <DashboardLayout title="Inicio" currentSection="Inicio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto">
        {/* Main Cards */}
        <Link to="/dashboard/equipo" className="bg-card rounded-lg p-6 lg:p-8 text-center hover:bg-card/80 transition-colors">
          <h2 className="text-lg lg:text-xl font-medium text-foreground mb-4">Equipo</h2>
        </Link>
        
        <Link to="/dashboard/entrenamiento" className="bg-card rounded-lg p-6 lg:p-8 text-center hover:bg-card/80 transition-colors">
          <h2 className="text-lg lg:text-xl font-medium text-foreground mb-4">Entrenamiento</h2>
        </Link>
        
        {/* Locked Cards */}
        <div className="bg-card rounded-lg p-6 lg:p-8 text-center relative">
          <h2 className="text-lg lg:text-xl font-medium text-muted-foreground mb-4">Partidos</h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-lg lg:text-xl">🔒</span>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 lg:p-8 text-center relative">
          <h2 className="text-lg lg:text-xl font-medium text-muted-foreground mb-4">Partidos en Vivo</h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-lg lg:text-xl">🔒</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}