import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to dashboard inicio
    setLocation("/dashboard/inicio");
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="cuatro-logo justify-center mb-4">
          <div className="cuatro-logo-icon"></div>
          <span className="cuatro-logo-text text-foreground">Cuatro <span className="text-primary">Cero</span></span>
        </div>
        <p className="text-muted-foreground">Redirigiendo al dashboard...</p>
      </div>
    </div>
  );
}