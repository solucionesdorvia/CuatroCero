import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import CuatroLogo from "@/components/cuatro-logo";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const registerSchema = insertUserSchema.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [, setLocation] = useLocation();

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      role: "TECNICO",
    },
  });

  // Redirect if already logged in
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  const onLogin = (data: LoginForm) => {
    // Simulate login success and redirect to confirmation
    setLocation("/confirmation");
  };

  const onRegister = (data: RegisterForm) => {
    // Simulate registration success and redirect to confirmation
    setLocation("/confirmation");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <CuatroLogo size="md" orientation="vertical" showSubtitle={true} />
        </div>

        {/* Form Card */}
        <div className="card-cuatro p-8">
          <h1 className="text-2xl font-bold text-center mb-2">
            {isLogin ? "Sing In" : "Sing Up"}
          </h1>
          <p className="text-center text-muted-foreground mb-8">Bienvenido</p>
          
          {isLogin ? (
            <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...loginForm.register("email")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...loginForm.register("password")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.password.message}</p>
                )}
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full py-3"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Iniciando..." : "Iniciar Sesión"}
              </button>
            </form>
          ) : (
            <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...registerForm.register("firstName")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Apellido"
                  {...registerForm.register("lastName")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...registerForm.register("email")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
              </div>
              
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...registerForm.register("password")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
              </div>
              
              <div>
                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  {...registerForm.register("confirmPassword")}
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                />
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full py-3"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? "Registrando..." : "Registrarse"}
              </button>
            </form>
          )}
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
              <button 
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin ? "Regístrate" : "Inicia sesión"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Cuatro Cero</p>
            <p className="text-xs text-muted-foreground">Gestión de Equipo</p>
            <p className="text-xs text-muted-foreground">Pizarras para entrenamiento</p>
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