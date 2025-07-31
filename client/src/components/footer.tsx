import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Cuatro Cero Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Cuatro Cero</h3>
            <h4 className="text-base font-medium text-foreground mb-2">Gestión de Equipo</h4>
            <p className="text-sm text-muted-foreground">
              Lleva tu gestión a otro nivel
            </p>
          </div>

          {/* Redes Sociales Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Redes Sociales</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Navegación Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Navegación</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </Link>
              <Link href="/pizarras" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pizarras
              </Link>
              <Link href="/servicios" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}