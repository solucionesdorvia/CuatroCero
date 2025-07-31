import { useState } from "react";
import { Link, useLocation } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

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
    <DashboardLayout title="Crear Entrenamiento - Guardar" currentSection="Entrenamiento">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
          {/* Training Details Form */}
          <div className="bg-card rounded-lg p-4 lg:p-8">
            <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-6">Detalles del Entrenamiento</h2>
            
            <div className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre del Entrenamiento
                </label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm lg:text-base"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Descripción
                </label>
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                  rows={4}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm lg:text-base"
                  required
                />
              </div>
            </div>
          </div>

          {/* Selected Exercises */}
          <div className="bg-card rounded-lg p-4 lg:p-8">
            <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-6">Ejercicios Seleccionados</h2>
            
            <div className="space-y-3 lg:space-y-4">
              {selectedExercises.map((exercise, index) => (
                <div key={index} className="flex items-center justify-between p-3 lg:p-4 bg-purple-600 rounded-lg">
                  <span className="text-white font-medium text-sm lg:text-base">{exercise}</span>
                  <Link to="/dashboard/ejercicio-detalle">
                    <button type="button" className="text-white hover:text-accent transition-colors text-sm">
                      Ver detalles
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link to="/dashboard/planificacion-fecha">
              <button type="button" className="btn-secondary px-6 lg:px-8 py-3 w-full sm:w-auto">
                Volver
              </button>
            </Link>
            <button type="submit" className="btn-primary px-6 lg:px-8 py-3 w-full sm:w-auto">
              Guardar Entrenamiento
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}