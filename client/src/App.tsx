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
