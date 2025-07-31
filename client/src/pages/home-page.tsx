import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Inicio</Link>
          <Link to="/pizarras" className="text-sm text-muted-foreground hover:text-foreground">Pizarras</Link>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-xs text-muted-foreground mb-8 space-y-1">
            <p>BANNERS DE FOTOS</p>
            <p>SOBRE</p>
            <p>APLICACION</p>
            <p>PIZARRAS DE CHATA</p>
            <p>EBOOKS DE CHATA</p>
            <p>BUSCAR PATROCINADORES</p>
            <p>PODCAST/PONER</p>
            <p>CHATA</p>
            <p>MUSICA</p>
            <p>LAMBA</p>
            <p>LO QUE QUERAMOS</p>
          </div>
        </div>
      </section>

      {/* Pizarras Section */}
      <section className="px-8 py-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">PIZARRAS CUATRO CERO</h2>
          
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="text-center">
                <div className="bg-muted rounded-lg aspect-[3/4] mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">N{num}</span>
                </div>
                <button className="btn-primary w-full py-2 text-sm">COMPRAR</button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-foreground font-medium">¡Encuentra tu Pizarra!</p>
          </div>
        </div>
      </section>

      {/* Gestión de Equipo Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-primary mb-4">GESTION DE EQUIPO</h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Optimización total para tu cuerpo técnico.<br/>
              Con esta app vas a poder planificar tus entrenamientos,<br/>
              guardar rutinas personalizadas, registrar y analizar el<br/>
              rendimiento de tus jugadores en cada partido, y tomar<br/>
              decisiones tácticas basadas en datos reales.<br/>
              Además, podés cargar sesiones en vivo durante los<br/>
              encuentros, generar reportes automáticos, y mantener<br/>
              toda la información centralizada y segura.<br/>
              Diseñada para que vos y tu equipo trabajen con orden,<br/>
              claridad y profesionalismo.
            </p>
            <button className="btn-primary px-8 py-3">
              Haz Click Acá<br/>
              Para Más Información
            </button>
          </div>
          
          <div className="flex justify-center">
            <CuatroLogo size="lg" orientation="vertical" showSubtitle={true} />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-8 py-16 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Contacto</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="w-full p-3 bg-muted rounded text-foreground"
              />
              <input
                type="text"
                placeholder="Club"
                className="w-full p-3 bg-muted rounded text-foreground"
              />
              <textarea
                placeholder="Consulta"
                rows={6}
                className="w-full p-3 bg-muted rounded text-foreground resize-none"
              />
              <button type="submit" className="btn-secondary px-8 py-3">
                Enviar Consulta
              </button>
            </form>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-muted rounded p-8 text-center">
              <h3 className="font-bold text-foreground mb-2">BANNER DE PROMOCIONES</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}