import { useState } from "react";
import { useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";

export default function ConfirmationPage() {
  const [, setLocation] = useLocation();
  const [code, setCode] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate code verification
    if (code.length === 6) {
      setLocation("/cuentas");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <CuatroLogo size="md" orientation="vertical" showSubtitle={true} />
        </div>

        {/* Confirmation Form */}
        <div className="card-cuatro p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Confirmación</h1>
          <p className="text-center text-muted-foreground mb-8">Código de Confirmación</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Ingresa el código de 6 dígitos"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full p-4 bg-input border border-border rounded-lg text-foreground text-center text-lg tracking-widest"
                maxLength={6}
              />
            </div>
            
            <button 
              type="submit"
              className="btn-primary w-full py-4"
              disabled={code.length !== 6}
            >
              Verificar Código
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              ¿No recibiste el código?{" "}
              <button className="text-primary hover:underline">
                Enviar nuevamente
              </button>
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