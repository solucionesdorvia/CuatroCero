import { Link } from "wouter";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

export default function DashboardEntrenamientoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <CuatroLogo size="sm" orientation="horizontal" showSubtitle={false} />
        
        <div className="flex items-center gap-8">
          <Link href="/dashboard/inicio" className="nav-link">Inicio</Link>
          <Link href="/dashboard/entrenamiento" className="nav-link active">Entrenamiento</Link>
          <Link href="/dashboard/partido" className="nav-link">Partido</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Entrenamiento</h1>
          <p className="text-lg text-muted-foreground">Planificación de Entrenamientos</p>
        </div>

        {/* Training Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Planificación de Entrenamientos */}
          <div className="card-cuatro p-8">
            <h3 className="text-xl font-bold text-center mb-6">Planificación de Entrenamientos</h3>
            
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded">
                <h4 className="font-medium mb-2">Entrenamiento de Técnica</h4>
                <p className="text-sm text-muted-foreground">Ejercicios de control, pase y conducción</p>
                <div className="mt-2">
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">45 min</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded ml-2">Básico</span>
                </div>
              </div>
              
              <div className="bg-secondary p-4 rounded">
                <h4 className="font-medium mb-2">Entrenamiento Físico</h4>
                <p className="text-sm text-muted-foreground">Resistencia, velocidad y fuerza</p>
                <div className="mt-2">
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">60 min</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded ml-2">Intermedio</span>
                </div>
              </div>
              
              <div className="bg-secondary p-4 rounded">
                <h4 className="font-medium mb-2">Entrenamiento Táctico</h4>
                <p className="text-sm text-muted-foreground">Sistemas de juego y estrategias</p>
                <div className="mt-2">
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">90 min</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded ml-2">Avanzado</span>
                </div>
              </div>
            </div>
            
            <button className="btn-primary w-full mt-6">Crear Nuevo Plan</button>
          </div>

          {/* Ejercicios Disponibles */}
          <div className="card-cuatro p-8">
            <h3 className="text-xl font-bold text-center mb-6">Ejercicios Disponibles</h3>
            
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded">
                <h4 className="font-medium mb-2">Ejercicios de Técnica</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Control de balón</div>
                  <div>• Pases cortos</div>
                  <div>• Conducción</div>
                  <div>• Remates</div>
                </div>
              </div>
              
              <div className="bg-secondary p-4 rounded">
                <h4 className="font-medium mb-2">Ejercicios Físicos</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Resistencia</div>
                  <div>• Velocidad</div>
                  <div>• Agilidad</div>
                  <div>• Coordinación</div>
                </div>
              </div>
              
              <div className="bg-secondary p-4 rounded">
                <h4 className="font-medium mb-2">Ejercicios Tácticos</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• 4-0 Sistema</div>
                  <div>• 3-1 Sistema</div>
                  <div>• Transiciones</div>
                  <div>• Jugadas ensayadas</div>
                </div>
              </div>
            </div>
            
            <button className="btn-secondary w-full mt-6">Ver Todos los Ejercicios</button>
          </div>
        </div>

        {/* Calendario de Entrenamientos */}
        <div className="card-cuatro p-8 mb-12">
          <h3 className="text-xl font-bold text-center mb-6">Próximos Entrenamientos</h3>
          
          <div className="grid md:grid-cols-7 gap-4">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="font-medium mb-2">{day}</div>
                <div className={`p-3 rounded ${index === 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  <div className="text-sm">{15 + index}</div>
                  {index === 1 && <div className="text-xs mt-1">Técnico</div>}
                  {index === 2 && <div className="text-xs mt-1">Táctico</div>}
                  {index === 4 && <div className="text-xs mt-1">Físico</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}