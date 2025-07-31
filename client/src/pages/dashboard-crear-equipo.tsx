import { useState } from "react";
import { Link, useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardCrearEquipoPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    abreviatura: "",
    color: "#dc2626", // Default red color
    escudo: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Creating team:", formData);
    setLocation("/dashboard/equipo");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, escudo: file }));
    }
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
          <Link to="/dashboard/equipo" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
            Equipo
          </Link>
          <Link to="/dashboard/ejercicios" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Crear Equipo</h1>
          
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-8">
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
                    value={formData.abreviatura}
                    onChange={(e) => setFormData(prev => ({ ...prev, abreviatura: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground"
                    maxLength={5}
                    required
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
                    <span className="text-foreground">{formData.color}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-8">
                  <button 
                    type="submit"
                    className="btn-primary px-8 py-3 flex-1"
                  >
                    Crear
                  </button>
                  <button 
                    type="button"
                    onClick={() => setLocation("/dashboard/equipo")}
                    className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
            
            {/* Upload Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-muted rounded-lg p-12 text-center mb-4 w-full aspect-square flex items-center justify-center">
                {formData.escudo ? (
                  <img 
                    src={URL.createObjectURL(formData.escudo)} 
                    alt="Escudo" 
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-lg font-medium text-foreground">Subir Escudo</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="escudo-upload"
              />
              <label 
                htmlFor="escudo-upload"
                className="cursor-pointer text-primary hover:underline"
              >
                Seleccionar archivo
              </label>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}