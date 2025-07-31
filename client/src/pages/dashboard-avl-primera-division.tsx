import { Link } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardAVLPrimeraDivisionPage() {
  return (
    <DashboardLayout title="AVL - Primera División" currentSection="Equipo">
      {/* Players Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto mb-8 lg:mb-12">
        {/* Create Player Button */}
        <Link to="/dashboard/crear-jugador">
          <div className="bg-card rounded-lg p-6 lg:p-8 flex flex-col items-center justify-center text-center hover:bg-card/80 transition-colors aspect-square">
            <div className="text-3xl lg:text-4xl mb-2 lg:mb-4">+</div>
            <p className="text-sm lg:text-lg font-medium text-foreground">Crear Jugador</p>
          </div>
        </Link>
        
        {/* Empty player slots */}
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="bg-card rounded-lg aspect-square"></div>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <Link to="/dashboard/division">
          <button className="btn-primary px-6 lg:px-8 py-3">Volver</button>
        </Link>
      </div>
    </DashboardLayout>
  );
}