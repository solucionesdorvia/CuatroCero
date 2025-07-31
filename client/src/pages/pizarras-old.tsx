import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function PizarrasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        <div className="flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/pizarras" className="nav-link active">Pizarras</Link>
          <Link href="/servicios" className="nav-link">Servicios</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">PIZARRAS</h1>
          <p className="text-lg text-muted-foreground">Modelos de las mejores Pizarras</p>
          <p className="text-sm text-muted-foreground">Ahorra tiempo creando ideas y gráficos para entrenar con</p>
        </div>

        {/* Pizarra Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Pizarra Básica */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold text-center mb-4">Pizarra Básica</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 1</p>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 2</p>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 3</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4">
              ¿Quiere personalizar tu primera Pizarra?
            </p>
            <button className="btn-primary w-full text-xs">Necesita personalizar</button>
          </div>

          {/* Pizarra Física */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold text-center mb-4">Pizarra Física</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 1</p>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 2</p>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 3</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4">
              ¿Quiere personalizar tu primera Pizarra?
            </p>
            <button className="btn-primary w-full text-xs">Necesita personalizar</button>
          </div>

          {/* Pizarra Premiun */}
          <div className="card-cuatro p-6">
            <h3 className="text-xl font-bold text-center mb-4">Pizarra Premiun</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 1</p>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 2</p>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <p className="text-sm">Modulo 3</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
              <p className="text-xs text-muted-foreground">¿Quiere esta?</p>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4">
              ¿Quiere personalizar tu primera Pizarra?
            </p>
            <button className="btn-primary w-full text-xs">Necesita personalizar</button>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}