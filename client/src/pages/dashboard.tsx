import { useEffect } from "react";
import { useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to dashboard inicio
    setLocation("/dashboard/inicio");
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <CuatroLogo size="md" orientation="vertical" showSubtitle={true} />
        <p className="text-muted-foreground mt-4">Redirigiendo al dashboard...</p>
      </div>
    </div>
  );
}