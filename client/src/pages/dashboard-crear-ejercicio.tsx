import { useState } from "react";
import { Link, useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardCrearEjercicioPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    materiales: "",
    notaAyuda: "",
    objetivo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating exercise:", formData);
    setLocation("/dashboard/ejercicios-transiciones");
  };

  const handleVolver = () => {
    setLocation("/dashboard/ejercicios-transiciones");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-8 py-4 flex justify-center">
        <CuatroLogo size="md" orientation="horizontal" showSubtitle={false} />
      </header>

      {/* Sidebar Navigation */}
      <div className="flex">
        <nav className="w-64 px-8 py-12 space-y-6">
          <Link to="/dashboard/inicio" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Inicio
          </Link>
          <Link to="/dashboard/club" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Club
          </Link>
          <Link to="/dashboard/equipo" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Equipo
          </Link>
          <Link to="/dashboard/ejercicios" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
            Ejercicios
          </Link>
          <Link to="/dashboard/entrenamiento" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Entrenamiento
          </Link>
          <Link to="/dashboard/partidos" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Partidos
          </Link>
          <Link to="/dashboard/partidos-vivo" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Partidos en Vivo
          </Link>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-8 py-12">
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Crear Ejercicio</h1>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-lg font-medium text-foreground mb-4">Materiales</label>
                <textarea
                  value={formData.materiales}
                  onChange={(e) => setFormData(prev => ({ ...prev, materiales: e.target.value }))}
                  className="w-full p-4 bg-muted rounded text-foreground h-32 resize-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-foreground mb-4">Nota de Ayuda</label>
                <textarea
                  value={formData.notaAyuda}
                  onChange={(e) => setFormData(prev => ({ ...prev, notaAyuda: e.target.value }))}
                  className="w-full p-4 bg-muted rounded text-foreground h-32 resize-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-foreground mb-4">Objetivo</label>
                <textarea
                  value={formData.objetivo}
                  onChange={(e) => setFormData(prev => ({ ...prev, objetivo: e.target.value }))}
                  className="w-full p-4 bg-muted rounded text-foreground h-32 resize-none"
                  required
                />
              </div>
              
              <div className="flex gap-4 pt-8">
                <button 
                  type="button"
                  onClick={handleVolver}
                  className="btn-primary px-8 py-3 flex-1"
                >
                  Volver
                </button>
                <button 
                  type="submit"
                  className="btn-primary px-8 py-3 flex-1"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}