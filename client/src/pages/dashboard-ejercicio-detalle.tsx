import { Link } from "wouter";
import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardEjercicioDetallePage() {
  return (
    <DashboardLayout title="3 VS 2 Ataque - Defensa" currentSection="Ejercicios">
      {/* Exercise Details */}
      <div className="bg-card rounded-lg p-4 lg:p-8 mb-8 max-w-4xl mx-auto">
        {/* Field Diagram */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-base lg:text-lg font-semibold text-foreground mb-4">Diagrama del Campo</h2>
          <div className="bg-blue-50 rounded-lg p-4 lg:p-8 flex items-center justify-center overflow-x-auto">
            {/* Simple field representation */}
            <div className="relative w-72 h-48 lg:w-80 lg:h-60 border-2 border-blue-300 rounded bg-green-100 flex-shrink-0">
              {/* Goals */}
              <div className="absolute top-1/2 left-0 w-3 h-12 lg:w-4 lg:h-16 bg-white border border-blue-300 transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 right-0 w-3 h-12 lg:w-4 lg:h-16 bg-white border border-blue-300 transform -translate-y-1/2 translate-x-1/2"></div>
              
              {/* Center line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-300 transform -translate-x-1/2"></div>
              
              {/* Players - Attacking team (3 players) */}
              <div className="absolute top-6 left-12 lg:top-8 lg:left-16 w-5 h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <div className="absolute top-16 left-18 lg:top-20 lg:left-24 w-5 h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="absolute top-26 left-16 lg:top-32 lg:left-20 w-5 h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              
              {/* Players - Defending team (2 players) */}
              <div className="absolute top-12 right-16 lg:top-16 lg:right-20 w-5 h-5 lg:w-6 lg:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">D1</div>
              <div className="absolute top-22 right-18 lg:top-28 lg:right-24 w-5 h-5 lg:w-6 lg:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">D2</div>
            </div>
          </div>
        </div>

        {/* Exercise Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h3 className="text-sm lg:text-md font-semibold text-foreground mb-2">Detalles del Ejercicio</h3>
            <ul className="space-y-2 text-xs lg:text-sm text-muted-foreground">
              <li><span className="font-medium">Jugadores:</span> 5 (3 atacantes + 2 defensores)</li>
              <li><span className="font-medium">Tiempo:</span> 10-15 minutos</li>
              <li><span className="font-medium">Dificultad:</span> Intermedio</li>
              <li><span className="font-medium">Categoría:</span> Morado/Superioridades</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm lg:text-md font-semibold text-foreground mb-2">Materiales Necesarios</h3>
            <ul className="space-y-2 text-xs lg:text-sm text-muted-foreground">
              <li>• Conos para delimitar el área</li>
              <li>• 2 porterías pequeñas</li>
              <li>• Balones</li>
              <li>• Petos de diferentes colores</li>
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 lg:mt-8">
          <h3 className="text-sm lg:text-md font-semibold text-foreground mb-4">Instrucciones</h3>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p className="mb-4 text-xs lg:text-sm">
              Este ejercicio se enfoca en desarrollar la capacidad de los jugadores para aprovechar situaciones de superioridad numérica en el ataque, mientras que los defensores practican la defensa en inferioridad.
            </p>
            <p className="mb-4 text-xs lg:text-sm">
              <strong>Desarrollo:</strong> Los 3 atacantes deben intentar marcar gol aprovechando su superioridad numérica. Los 2 defensores deben coordinar su defensa para evitar el gol y recuperar el balón.
            </p>
            <p className="text-xs lg:text-sm">
              <strong>Objetivos:</strong> Mejorar la toma de decisiones en superioridad, desarrollar la coordinación defensiva en inferioridad, y trabajar la finalización bajo presión.
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center px-4">
        <Link to="/dashboard/crear-entrenamiento-guardar">
          <button className="btn-primary px-6 lg:px-8 py-3 w-full sm:w-auto">Volver</button>
        </Link>
      </div>
    </DashboardLayout>
  );
}