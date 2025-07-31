import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to dashboard inicio
    setLocation("/dashboard/inicio");
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="cuatro-logo justify-center mb-4">
          <div className="cuatro-logo-icon"></div>
          <span className="cuatro-logo-text text-foreground">Cuatro <span className="text-primary">Cero</span></span>
        </div>
        <p className="text-muted-foreground">Redirigiendo al dashboard...</p>
      </div>
    </div>
  );
}
    queryKey: ["/api/clubs"],
  });

  const { data: exercises = [] } = useQuery({
    queryKey: ["/api/exercises"],
  });

  if (clubsLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Bienvenido, {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-600">
            Panel de gestión para tu{user?.role === "INSTITUCIONAL" ? "s" : ""} club{user?.role === "INSTITUCIONAL" ? "es" : ""} de futsal
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Clubes</p>
                  <p className="text-3xl font-bold text-primary">{clubs.length}</p>
                </div>
                <Users className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ejercicios</p>
                  <p className="text-3xl font-bold text-primary">{exercises.length}</p>
                </div>
                <Dumbbell className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Entrenamientos</p>
                  <p className="text-3xl font-bold text-primary">0</p>
                </div>
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Partidos</p>
                  <p className="text-3xl font-bold text-primary">0</p>
                </div>
                <Trophy className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clubs Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Mis Clubes</CardTitle>
                  <CardDescription>
                    Gestiona y administra tus clubes de futsal
                  </CardDescription>
                </div>
                <Button size="sm" className="bg-accent text-primary hover:bg-accent-cuatro">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Club
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {clubs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No tienes clubes creados aún</p>
                  <Button className="bg-accent text-primary hover:bg-accent-cuatro">
                    Crear tu primer club
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {clubs.map((club: any) => (
                    <div key={club.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {club.abbreviation || club.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{club.name}</h4>
                          <p className="text-sm text-gray-600">{club.abbreviation}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Gestionar
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Ejercicios</CardTitle>
                  <CardDescription>
                    Biblioteca de ejercicios de entrenamiento
                  </CardDescription>
                </div>
                <Button size="sm" className="bg-accent text-primary hover:bg-accent-cuatro">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Ejercicio
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {exercises.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No tienes ejercicios creados aún</p>
                  <Button className="bg-accent text-primary hover:bg-accent-cuatro">
                    Crear tu primer ejercicio
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {exercises.slice(0, 3).map((exercise: any) => (
                    <div key={exercise.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-primary">{exercise.name}</h4>
                        <Badge variant="secondary">{exercise.difficulty}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{exercise.category}</p>
                      <p className="text-xs text-gray-500">
                        {exercise.estimatedTime} min • {exercise.requiredPlayers} jugadores
                      </p>
                    </div>
                  ))}
                  {exercises.length > 3 && (
                    <Button variant="outline" className="w-full">
                      Ver todos los ejercicios ({exercises.length})
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>
              Accesos directos a las funciones más utilizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex-col bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50">
                <Users className="h-6 w-6 mb-2" />
                <span>Agregar Jugador</span>
              </Button>
              
              <Button className="h-20 flex-col bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50">
                <Calendar className="h-6 w-6 mb-2" />
                <span>Programar Entrenamiento</span>
              </Button>
              
              <Button className="h-20 flex-col bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50">
                <Trophy className="h-6 w-6 mb-2" />
                <span>Crear Partido</span>
              </Button>
              
              <Button className="h-20 flex-col bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50">
                <Dumbbell className="h-6 w-6 mb-2" />
                <span>Nuevo Ejercicio</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
