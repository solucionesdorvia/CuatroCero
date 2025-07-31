import { useState } from "react";
import { Link, useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardCrearEntrenamientoGuardarPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nombre: "Superioridades",
    descripcion: "Se trabaja las superioridades e\ninferioridades con diferentes\nejercicios"
  });

  const selectedExercises = [
    "3 VS 2 Ataque - Defensa",
    "2 VS 2 Ataque - Defensa", 
    "5 VS 4 Ataque - Defensa"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving training:", formData);
    setLocation("/dashboard/planificacion-entrenamientos");
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
          <Link to="/dashboard/ejercicios" className="block text-sm text-muted-foreground hover:text-foreground border-b border-muted pb-1">
            Ejercicios
          </Link>
          <Link to="/dashboard/entrenamiento" className="block text-sm text-foreground font-medium border-b border-foreground pb-1">
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Crear Jugador</h1>
          
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Descripción</label>
                  <textarea
                    value={formData.descripcion}
                    onChange={(e) => setFormData(prev => ({ ...prev, descripcion: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground h-32 resize-none"
                    required
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
                  >
                    Eliminar
                  </button>
                  <Link to="/dashboard/planificacion-entrenamientos">
                    <button 
                      type="button"
                      className="btn-primary px-6 py-3"
                    >
                      Volver
                    </button>
                  </Link>
                  <button 
                    type="button"
                    className="bg-muted text-foreground px-6 py-3 rounded hover:bg-muted/80 transition-colors"
                  >
                    Editar
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right Side - Selected Exercises */}
            <div>
              <h2 className="text-xl font-medium text-foreground mb-6">Ejercicios Seleccionados</h2>
              <div className="space-y-4">
                {selectedExercises.map((exercise, index) => (
                  <div key={index} className="bg-purple-600 text-white px-4 py-3 rounded">
                    {exercise}
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="btn-primary px-6 py-3 w-full">
                  Seleccionar
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}