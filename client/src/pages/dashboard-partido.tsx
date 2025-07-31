import { Link } from "wouter";

export default function DashboardPartidoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="cuatro-logo">
          <div className="cuatro-logo-icon"></div>
          <span className="cuatro-logo-text text-foreground">Cuatro <span className="text-primary">Cero</span></span>
        </div>
        
        <div className="flex items-center gap-8">
          <Link href="/dashboard/inicio" className="nav-link">Inicio</Link>
          <Link href="/dashboard/entrenamiento" className="nav-link">Entrenamiento</Link>
          <Link href="/dashboard/partido" className="nav-link active">Partido</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Partido</h1>
          <p className="text-lg text-muted-foreground">Gestión de Partidos</p>
        </div>

        {/* Match Management */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Próximos Partidos */}
          <div className="card-cuatro p-8">
            <h3 className="text-xl font-bold text-center mb-6">Próximos Partidos</h3>
            
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">vs. Rival FC</h4>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Local</span>
                </div>
                <p className="text-sm text-muted-foreground">Sábado 20:00 - Estadio Principal</p>
                <div className="mt-2 flex gap-2">
                  <button className="btn-primary text-xs px-3 py-1">Preparar Equipo</button>
                  <button className="btn-secondary text-xs px-3 py-1">Ver Rival</button>
                </div>
              </div>
              
              <div className="bg-secondary p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">vs. Deportivo A</h4>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Visitante</span>
                </div>
                <p className="text-sm text-muted-foreground">Miércoles 19:30 - Estadio B</p>
                <div className="mt-2 flex gap-2">
                  <button className="btn-primary text-xs px-3 py-1">Preparar Equipo</button>
                  <button className="btn-secondary text-xs px-3 py-1">Ver Rival</button>
                </div>
              </div>
            </div>
            
            <button className="btn-primary w-full mt-6">Programar Nuevo Partido</button>
          </div>

          {/* Partido en Vivo */}
          <div className="card-cuatro p-8">
            <h3 className="text-xl font-bold text-center mb-6">Partido en Vivo</h3>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">2 - 1</div>
              <div className="text-lg">Cuatro Cero vs. Athletic FC</div>
              <div className="text-sm text-muted-foreground">Tiempo: 35'</div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="bg-secondary p-3 rounded flex justify-between">
                <span>Gol - Juan Pérez</span>
                <span className="text-xs">15'</span>
              </div>
              <div className="bg-secondary p-3 rounded flex justify-between">
                <span>Gol - Carlos Silva</span>
                <span className="text-xs">28'</span>
              </div>
              <div className="bg-muted p-3 rounded flex justify-between">
                <span>Gol Rival - López</span>
                <span className="text-xs">32'</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="btn-primary text-xs">Añadir Evento</button>
              <button className="btn-secondary text-xs">Ver Estadísticas</button>
            </div>
          </div>
        </div>

        {/* Resultados Recientes */}
        <div className="card-cuatro p-8 mb-12">
          <h3 className="text-xl font-bold text-center mb-6">Resultados Recientes</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-secondary p-4 rounded text-center">
              <div className="text-lg font-bold text-primary">3 - 1</div>
              <div className="text-sm">vs. Real FC</div>
              <div className="text-xs text-muted-foreground">Victoria</div>
            </div>
            
            <div className="bg-secondary p-4 rounded text-center">
              <div className="text-lg font-bold text-muted-foreground">1 - 1</div>
              <div className="text-sm">vs. Central</div>
              <div className="text-xs text-muted-foreground">Empate</div>
            </div>
            
            <div className="bg-secondary p-4 rounded text-center">
              <div className="text-lg font-bold text-primary">2 - 0</div>
              <div className="text-sm">vs. Unidos FC</div>
              <div className="text-xs text-muted-foreground">Victoria</div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Partidos Jugados</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Victorias</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">Empates</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Derrotas</div>
          </div>
        </div>

        {/* Footer */}
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