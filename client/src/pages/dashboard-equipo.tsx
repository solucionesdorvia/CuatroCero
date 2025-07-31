import { Link } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardEquipoPage() {
  return (
    <DashboardLayout title="Equipo" currentSection="Equipo">
      {/* Create Team Button */}
      <div className="flex justify-center">
        <Link to="/dashboard/division">
          <button className="bg-card rounded-lg p-12 lg:p-16 text-center hover:bg-card/80 transition-colors w-full max-w-xs">
            <div className="text-3xl lg:text-4xl mb-4">+</div>
            <p className="text-lg lg:text-xl font-medium text-foreground">Crear Equipo</p>
          </button>
        </Link>
      </div>
    </DashboardLayout>
  );
}