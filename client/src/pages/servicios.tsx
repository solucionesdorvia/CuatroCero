import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        <div className="flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/pizarras" className="nav-link">Pizarras</Link>
          <Link href="/servicios" className="nav-link active">Servicios</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">SERVICIOS</h1>
          <p className="text-lg text-muted-foreground">GESTIÓN DE EQUIPO</p>
          <p className="text-sm text-muted-foreground">Planes especiales para cada Técnico a sus equipos</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Plan Técnico */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold text-center mb-6">Plan Técnico</h3>
            <div className="space-y-4 mb-8">
              <div className="text-sm">
                <p>• Carga de Jugadores</p>
                <p>• Planificación de Entrenamientos</p>
                <p>• Estadísticas de Partidos</p>
                <p>• Gestión de Plantilla</p>
                <p>• Control de Asistencia</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <button className="btn-secondary w-full">¿Quiere esta?</button>
              <button className="btn-secondary w-full">¿Quiere esta?</button>
              <button className="btn-secondary w-full">¿Quiere esta?</button>
            </div>
          </div>

          {/* Plan Cuerpo Técnico */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold text-center mb-6">Plan Cuerpo Técnico</h3>
            <div className="space-y-4 mb-8">
              <div className="text-sm">
                <p>• Todo Plan Técnico</p>
                <p>• Análisis Avanzado</p>
                <p>• Reportes Detallados</p>
                <p>• Gestión Múltiple</p>
                <p>• Seguimiento Individual</p>
                <p>• Base de Datos</p>
                <p>• Análisis de Videos</p>
                <p>• Seguimiento por categoría</p>
                <p>• Control de Base</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <button className="btn-secondary w-full">¿Quiere esta?</button>
              <button className="btn-secondary w-full">¿Quiere esta?</button>
              <button className="btn-secondary w-full">¿Quiere esta?</button>
            </div>
          </div>

          {/* Plan Institucional */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold text-center mb-6">Plan Institucional</h3>
            <div className="space-y-4 mb-8">
              <div className="text-sm">
                <p>• Todo Plan Anterior</p>
                <p>• Planificación de Entrenamientos</p>
                <p>• Rentabilidad del Personal</p>
                <p>• Acuerdos</p>
                <p>• Base de Contratos</p>
                <p>• Análisis de Base</p>
                <p>• Seguimiento por categoría</p>
                <p>• Pizarra para la tecnología</p>
                <p>• Base de Conoce</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <button className="btn-secondary w-full">¿Quiere esta?</button>
              <button className="btn-secondary w-full">¿Quiere esta?</button>
              <button className="btn-secondary w-full">¿Quiere esta?</button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Sin saber cuál es el plan ideal? ¿Batiente sus problemas y nuestro equipo se ocupará?
          </p>
          <button className="btn-primary px-8 py-3">Contacto ➜</button>
        </div>

        {/* Ebooks Section */}
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground mb-8">
            ¿Buscas que te ayuden a potenciar tu entrenamiento?
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="bg-muted p-4 rounded text-center">
                <p className="text-sm font-medium">Ebook</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Contact */}
        <div className="text-center">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Cuatro Cero</p>
            <p className="text-sm text-muted-foreground">Gestión de Equipo</p>
            <p className="text-sm text-muted-foreground">Pizarras para entrenamiento</p>
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