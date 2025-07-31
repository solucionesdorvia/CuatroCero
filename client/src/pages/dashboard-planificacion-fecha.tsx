import { Link } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardPlanificacionFechaPage() {
  return (
    <DashboardLayout title="Planificación - Fecha" currentSection="Entrenamiento">
      {/* Calendar Grid */}
      <div className="bg-card rounded-lg p-4 lg:p-8 mb-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-7 gap-2 lg:gap-4 mb-4">
          {["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"].map((day) => (
            <div key={day} className="text-center text-xs lg:text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2 lg:gap-4">
          {/* Calendar days */}
          {Array.from({ length: 35 }, (_, i) => {
            const day = i - 6; // Start from day -6 to fill the grid
            const isCurrentMonth = day > 0 && day <= 31;
            const isSelected = day === 15; // Example selected day
            
            return (
              <button 
                key={i}
                className={`aspect-square flex items-center justify-center rounded text-xs lg:text-sm transition-colors ${
                  !isCurrentMonth 
                    ? 'text-muted' 
                    : isSelected 
                      ? 'bg-accent text-primary font-medium' 
                      : 'hover:bg-card/80 text-foreground'
                }`}
              >
                {isCurrentMonth ? day : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <Link to="/dashboard/planificacion-categoria">
          <button className="btn-secondary px-6 lg:px-8 py-3 w-full sm:w-auto">Volver</button>
        </Link>
        <Link to="/dashboard/crear-entrenamiento-guardar">
          <button className="btn-primary px-6 lg:px-8 py-3 w-full sm:w-auto">Continuar</button>
        </Link>
      </div>
    </DashboardLayout>
  );
}