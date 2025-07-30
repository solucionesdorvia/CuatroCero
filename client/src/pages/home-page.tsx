import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import StoreSection from "@/components/store-section";
import PlansSection from "@/components/plans-section";
import DashboardPreview from "@/components/dashboard-preview";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <StoreSection />
      <PlansSection />
      <DashboardPreview />
      <ContactSection />
      
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
