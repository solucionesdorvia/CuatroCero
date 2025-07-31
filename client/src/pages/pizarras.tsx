import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function PizarrasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Inicio</Link>
          <Link to="/pizarras" className="text-sm text-foreground font-medium">Pizarras</Link>
          <Link to="/servicios" className="text-sm text-muted-foreground hover:text-foreground">Servicios</Link>
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
        <h1 className="text-3xl font-bold text-primary mb-4">PIZARRAS</h1>
        <h2 className="text-2xl font-medium text-foreground mb-4">Modelos de tu proxima Pizarra</h2>
        <p className="text-lg text-muted-foreground mb-12">¡Conoce nuestros planes y elegí el ideal para vos!</p>
      </section>

      {/* Pizarras Grid */}
      <section className="px-8 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {/* Pizarra Basica */}
          <div className="bg-card rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-1 border-b border-muted-foreground pb-2">Pizarra Basica</h3>
            
            <div className="bg-muted rounded-lg aspect-[3/4] my-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-foreground">Modelo 1</span>
            </div>
            
            <button className="bg-muted text-foreground px-6 py-2 rounded font-medium w-full">
              ¡Quiero este!
            </button>
          </div>

          {/* Pizarra Basica Premium */}
          <div className="bg-card rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-1 border-b border-muted-foreground pb-2">
              Pizarra Basica<br/>Premium
            </h3>
            
            <div className="bg-muted rounded-lg aspect-[3/4] my-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-foreground">Modelo 2</span>
            </div>
            
            <button className="bg-muted text-foreground px-6 py-2 rounded font-medium w-full">
              ¡Quiero este!
            </button>
          </div>

          {/* Pizarra Premium */}
          <div className="bg-card rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-1 border-b border-muted-foreground pb-2">Pizarra Premium</h3>
            
            <div className="bg-muted rounded-lg aspect-[3/4] my-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-foreground">Modelo 3</span>
            </div>
            
            <button className="bg-muted text-foreground px-6 py-2 rounded font-medium w-full">
              ¡Quiero este!
            </button>
          </div>
        </div>
        
        {/* Personalization Section */}
        <div className="max-w-6xl mx-auto text-center mt-12">
          <p className="text-lg text-foreground mb-6">¿Queres personalizar tu proxima Pizarra?</p>
          <button className="btn-primary px-8 py-3">
            Mandanos un<br/>mensaje
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}