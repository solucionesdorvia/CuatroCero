import { useState } from "react";
import { useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

// Simple footer component inline since we need it at bottom
const SimpleFooter = () => (
  <div className="grid grid-cols-3 gap-8 text-sm px-8 py-4">
    <div>
      <h4 className="font-medium text-foreground mb-2">Cuatro Cero</h4>
      <h5 className="font-medium text-foreground mb-2">Gestión de Equipo</h5>
      <p className="text-xs text-muted-foreground">Lleva tu gestión a otro nivel</p>
    </div>
    <div>
      <h4 className="font-medium text-foreground mb-2">Redes Sociales</h4>
    </div>
    <div>
      <h4 className="font-medium text-foreground mb-2">Navegación</h4>
      <div className="space-y-1 text-xs text-muted-foreground">
        <p>Inicio</p>
        <p>Pizarras</p>
        <p>Servicios</p>
        <p>Contacto</p>
      </div>
    </div>
  </div>
);

export default function ConfirmationPage() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [, setLocation] = useLocation();

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto-focus next input
      if (value && index < 4) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleConfirm = () => {
    // Simulate confirmation success and redirect to accounts
    setLocation("/cuentas");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-12">
          <CuatroLogo size="md" orientation="horizontal" showSubtitle={false} />
        </div>
        
        {/* Main Content */}
        <div className="bg-card rounded-lg p-12 max-w-md mx-auto">
          <h1 className="text-xl font-medium text-foreground mb-4">Codigo de Confirmacion</h1>
          <p className="text-sm text-muted-foreground mb-8">
            ¡Te enviamos un codigo<br/>a tu mail!
          </p>
          
          {/* Code Input Boxes */}
          <div className="flex justify-center gap-3 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-12 h-12 bg-muted rounded text-center text-lg font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={1}
              />
            ))}
          </div>
          
          <button 
            onClick={handleConfirm}
            className="btn-primary px-8 py-3"
          >
            Confirmar
          </button>
        </div>
        
        {/* Side Logos */}
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
          <CuatroLogo size="lg" orientation="vertical" showSubtitle={true} />
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2">
          <CuatroLogo size="lg" orientation="vertical" showSubtitle={true} />
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full">
        <SimpleFooter />
      </div>
    </div>
  );
}