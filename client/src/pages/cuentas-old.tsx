import { useState } from "react";
import { useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";

export default function CuentasPage() {
  const [, setLocation] = useLocation();
  const [selectedRole, setSelectedRole] = useState<"TECNICO" | "CUERPO_TECNICO" | "INSTITUCIONAL" | null>(null);
  
  const handleRoleSelect = (role: "TECNICO" | "CUERPO_TECNICO" | "INSTITUCIONAL") => {
    setSelectedRole(role);
    // Simulate role selection and redirect to dashboard
    setTimeout(() => {
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-2xl">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <CuatroLogo size="md" orientation="vertical" showSubtitle={true} />
        </div>

        {/* Account Types */}
        <div className="card-cuatro p-8">
          <h1 className="text-2xl font-bold text-center mb-8">CUENTAS</h1>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Técnico */}
            <div 
              className={`p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedRole === "TECNICO" ? "border-primary bg-primary/10" : "border-border"
              }`}
              onClick={() => handleRoleSelect("TECNICO")}
            >
              <h3 className="text-lg font-bold text-center mb-4">TÉCNICO</h3>
              <div className="space-y-2 text-sm">
                <p>• Gestión básica</p>
                <p>• Entrenamientos</p>
                <p>• Planillas</p>
                <p>• Estadísticas básicas</p>
              </div>
            </div>

            {/* Cuerpo Técnico */}
            <div 
              className={`p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedRole === "CUERPO_TECNICO" ? "border-primary bg-primary/10" : "border-border"
              }`}
              onClick={() => handleRoleSelect("CUERPO_TECNICO")}
            >
              <h3 className="text-lg font-bold text-center mb-4">CUERPO TÉCNICO</h3>
              <div className="space-y-2 text-sm">
                <p>• Todo lo anterior</p>
                <p>• Análisis avanzado</p>
                <p>• Reportes detallados</p>
                <p>• Gestión múltiple</p>
                <p>• Videos y análisis</p>
              </div>
            </div>

            {/* Institucional */}
            <div 
              className={`p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedRole === "INSTITUCIONAL" ? "border-primary bg-primary/10" : "border-border"
              }`}
              onClick={() => handleRoleSelect("INSTITUCIONAL")}
            >
              <h3 className="text-lg font-bold text-center mb-4">INSTITUCIONAL</h3>
              <div className="space-y-2 text-sm">
                <p>• Gestión completa</p>
                <p>• Múltiples equipos</p>
                <p>• Reportes financieros</p>
                <p>• Administración total</p>
                <p>• Contratos y acuerdos</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Selecciona el tipo de cuenta que mejor se adapte a tus necesidades
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Cuatro Cero</p>
            <p className="text-xs text-muted-foreground">Gestión de Equipo</p>
            <p className="text-xs text-muted-foreground">Pizarras para entrenamiento</p>
          </div>
          
          <div className="mt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Redes Sociales</p>
            <p className="text-xs text-muted-foreground">Newsletters</p>
          </div>
        </div>
      </div>
    </div>
  );
}