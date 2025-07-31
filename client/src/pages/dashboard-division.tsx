import { Link } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardDivisionPage() {
  return (
    <DashboardLayout title="Divisiones" currentSection="Equipo">
      {/* Divisions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto mb-8 lg:mb-12">
        {/* Existing Division */}
        <Link to="/dashboard/avl-primera-division">
          <div className="bg-card rounded-lg p-6 lg:p-8 text-center hover:bg-card/80 transition-colors">
            <h2 className="text-base lg:text-lg font-medium text-foreground">Primera División</h2>
          </div>
        </Link>
        
        {/* Empty slots */}
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="bg-card rounded-lg aspect-[4/3]"></div>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <Link to="/dashboard/equipo">
          <button className="btn-primary px-6 lg:px-8 py-3">Volver</button>
        </Link>
      </div>
    </DashboardLayout>
  );
}