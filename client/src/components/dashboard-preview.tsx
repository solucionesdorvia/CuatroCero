import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Dumbbell, Trophy, Calendar, Plus, Shield } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Dashboard de Gestión Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una vista completa de todo lo que necesitas para administrar tu club de manera eficiente.
          </p>
        </div>

        {/* Dashboard Interface Mockup */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-primary text-white p-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Club Deportivo San Lorenzo</h3>
                <p className="text-gray-300">Primera División</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">Próximo partido</p>
              <p className="font-semibold">vs River Plate - 15/12</p>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-r from-accent to-accent-cuatro rounded-xl p-6 text-primary">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold mb-1">Jugadores Activos</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                  <Users className="h-8 w-8 opacity-80" />
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Entrenamientos</p>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                  <Dumbbell className="h-8 w-8 text-gray-400" />
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Partidos Jugados</p>
                    <p className="text-2xl font-bold text-primary">8</p>
                  </div>
                  <Trophy className="h-8 w-8 text-gray-400" />
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Victorias</p>
                    <p className="text-2xl font-bold text-green-600">6</p>
                  </div>
                  <Trophy className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Acciones Rápidas</h4>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start p-3 hover:bg-white transition-colors">
                      <Plus className="h-4 w-4 text-accent mr-3" />
                      <span>Crear Entrenamiento</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start p-3 hover:bg-white transition-colors">
                      <Calendar className="h-4 w-4 text-accent mr-3" />
                      <span>Programar Partido</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start p-3 hover:bg-white transition-colors">
                      <Users className="h-4 w-4 text-accent mr-3" />
                      <span>Agregar Jugador</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Próximos Eventos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
                        <Dumbbell className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Entrenamiento</p>
                        <p className="text-xs text-gray-600">Hoy 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <Trophy className="h-4 w-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">vs River Plate</p>
                        <p className="text-xs text-gray-600">15/12 20:30</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Mejores Jugadores</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">JS</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Juan Silva</p>
                        <p className="text-xs text-gray-600">8 goles, 3 asistencias</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">MG</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Miguel García</p>
                        <p className="text-xs text-gray-600">6 goles, 5 asistencias</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
