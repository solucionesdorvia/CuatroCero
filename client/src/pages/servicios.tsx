import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Inicio</Link>
          <Link to="/pizarras" className="text-sm text-muted-foreground hover:text-foreground">Pizarras</Link>
          <Link to="/servicios" className="text-sm text-foreground font-medium">Servicios</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link>
        </div>
        
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs">🔍</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs">?</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">SERVICIOS</h1>
        <h2 className="text-2xl font-medium text-foreground mb-4">GESTION DE EQUIPO</h2>
        <p className="text-lg text-muted-foreground mb-12">¡Conoce nuestros planes y elegí el ideal para vos!</p>
      </section>

      {/* Plans Grid */}
      <section className="px-8 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 mb-12">
          {/* Plan Técnico */}
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-1 border-b border-muted-foreground pb-2">Plan Técnico</h3>
            
            <ul className="text-sm text-muted-foreground space-y-2 my-6">
              <li>• 1 Cuenta</li>
              <li>• Planificacion de Entrenamiento</li>
              <li>• Creacion de Ejercicio</li>
              <li>• Gestion de Plantilla</li>
            </ul>
            
            <button className="bg-muted text-foreground px-6 py-2 rounded font-medium w-full">
              ¡Quiero este!
            </button>
          </div>

          {/* Plan Cuerpo Técnico */}
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-1 border-b border-muted-foreground pb-2">
              Plan Cuerpo<br/>Técnico
            </h3>
            
            <ul className="text-sm text-muted-foreground space-y-2 my-6">
              <li>• Hasta 5 cuentas</li>
              <li>• Planificacion de entrenamientos</li>
              <li>• Creacion de Ejercicios</li>
              <li>• Planificacion de Partidos</li>
              <li>• Estadisticas en Vivo</li>
              <li>• Gestion de Plantilla</li>
              <li>• Una Sola Categoria</li>
            </ul>
            
            <button className="bg-muted text-foreground px-6 py-2 rounded font-medium w-full">
              ¡Quiero este!
            </button>
          </div>

          {/* Plan Institucional */}
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-1 border-b border-muted-foreground pb-2">Plan Instucional</h3>
            
            <ul className="text-sm text-muted-foreground space-y-2 my-6">
              <li>• Hasta 12 cuentas</li>
              <li>• Planificacion de Entrenamiento</li>
              <li>• Creacion de Ejercicios</li>
              <li>• Planificacion de Partidos</li>
              <li>• Estadisticas en Vivo</li>
              <li>• Gestion de Plantilla</li>
              <li>• Presencialidad</li>
              <li>• Division por categoria</li>
              <li>• del Mismo Club</li>
            </ul>
            
            <button className="bg-muted text-foreground px-6 py-2 rounded font-medium w-full">
              ¡Quiero este!
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-lg text-foreground mb-6">¿No sabes cual es tu plan ideal? Nosotros te ayudamos!</p>
          <button className="btn-primary px-8 py-3">
            Mandanos un<br/>mensaje
          </button>
        </div>

        {/* Ebooks Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-medium text-foreground text-center mb-8">
            Libros que te pueden ayudar a planificar tu entrenamiento
          </h3>
          
          <div className="grid grid-cols-5 gap-4 mb-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-muted rounded aspect-[3/4] flex items-center justify-center">
                <span className="text-sm font-medium text-foreground">Ebook</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}