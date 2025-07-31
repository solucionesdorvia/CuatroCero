import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import HomePage from "@/pages/home-page";
import PizarrasPage from "@/pages/pizarras";
import ServiciosPage from "@/pages/servicios";
import SignInPage from "@/pages/auth-signin";
import SignUpPage from "@/pages/auth-signup";
import ConfirmationPage from "@/pages/confirmation";
import CuentasPage from "@/pages/cuentas";
import DashboardInicioPage from "@/pages/dashboard-inicio";
import DashboardEquipoPage from "@/pages/dashboard-equipo";
import DashboardCrearEquipoPage from "@/pages/dashboard-crear-equipo";
import DashboardDivisionPage from "@/pages/dashboard-division";
import DashboardCrearDivisionPage from "@/pages/dashboard-crear-division";
import DashboardPlantelPage from "@/pages/dashboard-plantel";
import DashboardCrearJugadorPage from "@/pages/dashboard-crear-jugador";
import DashboardFichaJugadorPage from "@/pages/dashboard-ficha-jugador";
import DashboardEntrenamientoPage from "@/pages/dashboard-entrenamiento";
import DashboardEjerciciosPage from "@/pages/dashboard-ejercicios";
import DashboardCrearCategoriaPage from "@/pages/dashboard-crear-categoria";
import DashboardEjerciciosCategoriaPage from "@/pages/dashboard-ejercicios-categoria";
import DashboardEjerciciosTransicionesPage from "@/pages/dashboard-ejercicios-transiciones";
import DashboardCrearEjercicioPage from "@/pages/dashboard-crear-ejercicio";
import DashboardPlanificacionEntrenamientosPage from "@/pages/dashboard-planificacion-entrenamientos";
import DashboardEjercicios3vs7Page from "@/pages/dashboard-ejercicios-3vs7";
import DashboardPlanificacionCategoriaPage from "@/pages/dashboard-planificacion-categoria";
import DashboardCrearEntrenamientoPlusPage from "@/pages/dashboard-crear-entrenamiento-plus";
import DashboardPlanificacionFechaPage from "@/pages/dashboard-planificacion-fecha";
import DashboardCrearEntrenamientoGuardarPage from "@/pages/dashboard-crear-entrenamiento-guardar";
import DashboardEjercicioDetallePage from "@/pages/dashboard-ejercicio-detalle";
import DashboardDivisionesPage from "@/pages/dashboard-divisiones";
import DashboardAVLPrimeraDivisionPage from "@/pages/dashboard-avl-primera-division";
import Store from "@/pages/store";
import Plans from "@/pages/plans";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/pizarras" component={PizarrasPage} />
      <Route path="/servicios" component={ServiciosPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/confirmation" component={ConfirmationPage} />
      <Route path="/cuentas" component={CuentasPage} />
      <Route path="/store" component={Store} />
      <Route path="/plans" component={Plans} />
      <Route path="/contact" component={Contact} />
      <ProtectedRoute path="/dashboard/inicio" component={DashboardInicioPage} />
      <ProtectedRoute path="/dashboard/equipo" component={DashboardEquipoPage} />
      <ProtectedRoute path="/dashboard/crear-equipo" component={DashboardCrearEquipoPage} />
      <ProtectedRoute path="/dashboard/division" component={DashboardDivisionPage} />
      <ProtectedRoute path="/dashboard/crear-division" component={DashboardCrearDivisionPage} />
      <ProtectedRoute path="/dashboard/plantel" component={DashboardPlantelPage} />
      <ProtectedRoute path="/dashboard/crear-jugador" component={DashboardCrearJugadorPage} />
      <ProtectedRoute path="/dashboard/ficha-jugador" component={DashboardFichaJugadorPage} />
      <ProtectedRoute path="/dashboard/entrenamiento" component={DashboardEntrenamientoPage} />
      <ProtectedRoute path="/dashboard/ejercicios" component={DashboardEjerciciosPage} />
      <ProtectedRoute path="/dashboard/crear-categoria" component={DashboardCrearCategoriaPage} />
      <ProtectedRoute path="/dashboard/ejercicios-categoria" component={DashboardEjerciciosCategoriaPage} />
      <ProtectedRoute path="/dashboard/ejercicios-transiciones" component={DashboardEjerciciosTransicionesPage} />
      <ProtectedRoute path="/dashboard/crear-ejercicio" component={DashboardCrearEjercicioPage} />
      <ProtectedRoute path="/dashboard/planificacion-entrenamientos" component={DashboardPlanificacionEntrenamientosPage} />
      <ProtectedRoute path="/dashboard/ejercicios-3vs7" component={DashboardEjercicios3vs7Page} />
      <ProtectedRoute path="/dashboard/planificacion-categoria" component={DashboardPlanificacionCategoriaPage} />
      <ProtectedRoute path="/dashboard/crear-entrenamiento-plus" component={DashboardCrearEntrenamientoPlusPage} />
      <ProtectedRoute path="/dashboard/planificacion-fecha" component={DashboardPlanificacionFechaPage} />
      <ProtectedRoute path="/dashboard/crear-entrenamiento-guardar" component={DashboardCrearEntrenamientoGuardarPage} />
      <ProtectedRoute path="/dashboard/ejercicio-detalle" component={DashboardEjercicioDetallePage} />
      <ProtectedRoute path="/dashboard/divisiones" component={DashboardDivisionesPage} />
      <ProtectedRoute path="/dashboard/avl-primera-division" component={DashboardAVLPrimeraDivisionPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
