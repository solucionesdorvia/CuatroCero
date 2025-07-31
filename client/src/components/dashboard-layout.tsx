import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  currentSection?: string;
}

export default function DashboardLayout({ children, title, currentSection }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/dashboard/inicio" },
    { name: "Club", href: "/dashboard/club" },
    { name: "Equipo", href: "/dashboard/equipo" },
    { name: "Ejercicios", href: "/dashboard/ejercicios" },
    { name: "Entrenamiento", href: "/dashboard/entrenamiento" },
    { name: "Partidos", href: "/dashboard/partidos" },
    { name: "Partidos en Vivo", href: "/dashboard/partidos-vivo" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 lg:px-8 py-4 flex justify-between items-center lg:justify-center border-b lg:border-none">
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <nav className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto
          w-64 lg:w-64 px-4 lg:px-8 py-6 lg:py-12 
          bg-background lg:bg-transparent
          space-y-4 lg:space-y-6 z-50
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {navigation.map((item) => (
            <Link 
              key={item.name}
              to={item.href} 
              className={`block text-sm pb-1 border-b transition-colors ${
                location === item.href || (currentSection && item.name === currentSection)
                  ? 'text-foreground font-medium border-foreground' 
                  : 'text-muted-foreground hover:text-foreground border-muted'
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-4 lg:px-8 py-6 lg:py-12">
          <h1 className="text-xl lg:text-2xl font-bold text-foreground mb-6 lg:mb-8 text-center">
            {title}
          </h1>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}