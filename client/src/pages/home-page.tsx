import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        <div className="flex items-center gap-8">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/pizarras" className="nav-link">Pizarras</Link>
          <Link href="/servicios" className="nav-link">Servicios</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Pizarras Section */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-center mb-2">PIZARRAS CUATRO CERO</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="pizarra-card">
                <div className="pizarra-number">N{num}</div>
                <button className="btn-primary w-full">¿Quiere está?</button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-6">
            Encuentre la Pizarra!
          </p>
        </div>

        {/* Gestión de Equipo Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">GESTIÓN DE EQUIPO</h2>
            <p className="text-muted-foreground mb-6">
              Gestiona tu equipo de manera eficiente y completa. Desde el registro 
              de jugadores hasta el seguimiento de rendimiento individual, nuestra 
              plataforma te ofrece todas las herramientas necesarias para mantener 
              a tu equipo organizado y en constante mejora. Controla entrenamientos, 
              partidos, estadísticas y mucho más en un solo lugar centralizado 
              y fácil de usar.
            </p>
            <button className="btn-primary">Más INFORMACIÓN</button>
          </div>
          
          <div className="flex justify-center">
            <div className="cuatro-logo-icon w-32 h-32 text-6xl">
              <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                { }
              </span>
            </div>
          </div>
        </div>

        {/* Contacto Section */}
        <div className="card-cuatro p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Contacto</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Envianos tu Consulta</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre y Apellido"
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
                <textarea 
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground resize-none"
                />
                <button className="btn-primary w-full">Enviar Consulta</button>
              </form>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold mb-6">SEGUINOS EN NUESTRAS REDES!</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Cuatro Cero</p>
                  <p className="text-sm text-muted-foreground">Gestión de Equipo</p>
                  <p className="text-sm text-muted-foreground">Pizarras para entrenamiento</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Redes Sociales</p>
                  <p className="text-sm text-muted-foreground">Newsletters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">Cuatro Cero</h3>
              <p className="text-gray-300 mb-4">La plataforma líder en gestión de clubes de futsal profesional.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-accent transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Demos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Integraciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-accent transition-colors">Tienda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Tutoriales</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-accent transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Estado del Sistema</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Términos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Cuatro Cero. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
