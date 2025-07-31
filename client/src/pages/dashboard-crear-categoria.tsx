import { useState } from "react";
import { Link, useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardCrearCategoriaPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    abreviatura: "",
    color: "#ffffff"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating category:", formData);
    setLocation("/dashboard/ejercicios-categoria");
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Crear Categoria</h1>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-lg font-medium text-foreground mb-4">Nombre</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                  className="w-full p-3 bg-muted rounded text-foreground"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-foreground mb-4">Abreviatura</label>
                <input
                  type="text"
                  placeholder="Opcional"
                  value={formData.abreviatura}
                  onChange={(e) => setFormData(prev => ({ ...prev, abreviatura: e.target.value }))}
                  className="w-full p-3 bg-muted rounded text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-foreground mb-4">Color Asignado</label>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    className="w-12 h-12 rounded border-none"
                  />
                </div>
              </div>
              
              <div className="pt-8">
                <button 
                  type="submit"
                  className="btn-primary px-8 py-3 w-full"
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