import { useState } from "react";
import { Link, useLocation } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardCrearJugadorPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    apodo: "",
    categoria: "",
    posicion: "",
    piernaHabil: "",
    estado: "Disponible",
    foto: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating player:", formData);
    setLocation("/dashboard/plantel");
  };

  const handleCancel = () => {
    setLocation("/dashboard/plantel");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, foto: file }));
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
          <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Crear Jugador</h1>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
            {/* Form */}
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
                  <label className="block text-lg font-medium text-foreground mb-2">Apodo</label>
                  <input
                    type="text"
                    value={formData.apodo}
                    onChange={(e) => setFormData(prev => ({ ...prev, apodo: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Categoría</label>
                  <input
                    type="text"
                    value={formData.categoria}
                    onChange={(e) => setFormData(prev => ({ ...prev, categoria: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Posición</label>
                  <input
                    type="text"
                    value={formData.posicion}
                    onChange={(e) => setFormData(prev => ({ ...prev, posicion: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Pierna Habil</label>
                  <input
                    type="text"
                    value={formData.piernaHabil}
                    onChange={(e) => setFormData(prev => ({ ...prev, piernaHabil: e.target.value }))}
                    className="w-full p-3 bg-muted rounded text-foreground"
                    required
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="btn-primary px-8 py-3 flex-1"
                  >
                    Crear
                  </button>
                  <button 
                    type="button"
                    onClick={handleCancel}
                    className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right Side */}
            <div className="space-y-6">
              {/* Upload Section */}
              <div className="text-center">
                <div className="bg-muted rounded-lg p-12 mb-4 aspect-[3/4] flex items-center justify-center">
                  {formData.foto ? (
                    <img 
                      src={URL.createObjectURL(formData.foto)} 
                      alt="Foto jugador" 
                      className="max-w-full max-h-full object-contain rounded"
                    />
                  ) : (
                    <span className="text-lg font-medium text-foreground">Subir Foto</span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="foto-upload"
                />
                <label 
                  htmlFor="foto-upload"
                  className="cursor-pointer text-primary hover:underline"
                >
                  Seleccionar archivo
                </label>
              </div>

              {/* Estado */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4 text-center">Estado</h3>
                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, estado: "Disponible" }))}
                    className={`px-6 py-2 rounded ${
                      formData.estado === "Disponible" 
                        ? "bg-green-600 text-white" 
                        : "bg-muted text-foreground"
                    }`}
                  >
                    Disponible
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, estado: "No Disponible" }))}
                    className={`px-6 py-2 rounded ${
                      formData.estado === "No Disponible" 
                        ? "bg-red-600 text-white" 
                        : "bg-muted text-foreground"
                    }`}
                  >
                    No Disponible
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}