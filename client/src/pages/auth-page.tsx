import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

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
  const [isLogin, setIsLogin] = useState(true);
  const { user, loginMutation, registerMutation } = useAuth();
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
    <div className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Side - Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{'{ }'}</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                {isLogin ? 'Sing In' : 'Sing Up'}
              </h1>
            </div>

            {/* Welcome Text */}
            <p className="text-muted-foreground mb-8">Bienvenido</p>

            {/* Forms */}
            {isLogin ? (
              <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Mail"
                    {...loginForm.register("email")}
                    className="auth-input"
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
                    className="auth-input"
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.password.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full py-3 mt-8"
                  disabled={loginMutation.isPending}
                >
                  Iniciar Sesión
                </button>

                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    ¿No tienes cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-primary hover:underline"
                    >
                      Crea una haciendo clic aquí
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Mail"
                    {...registerForm.register("email")}
                    className="auth-input"
                  />
                  {registerForm.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    {...registerForm.register("password")}
                    className="auth-input"
                  />
                  {registerForm.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.password.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    {...registerForm.register("confirmPassword")}
                    className="auth-input"
                  />
                  {registerForm.formState.errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.confirmPassword.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full py-3 mt-8"
                  disabled={registerMutation.isPending}
                >
                  Registrarse
                </button>

                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    ¿Ya tienes cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-primary hover:underline"
                    >
                      Inicia sesión aquí
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Side - Logo and Footer */}
        <div className="flex flex-col justify-between p-8 bg-card">
          <div></div>
          
          {/* Centered Logo */}
          <div className="flex justify-center">
            <CuatroLogo size="lg" orientation="vertical" showSubtitle={true} />
          </div>
          
          {/* Footer Content */}
          <div className="grid grid-cols-3 gap-8 text-sm">
            {/* Cuatro Cero Section */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Cuatro Cero</h4>
              <h5 className="font-medium text-foreground mb-2">Gestión de Equipo</h5>
              <p className="text-xs text-muted-foreground">Lleva tu gestión a otro nivel</p>
            </div>

            {/* Redes Sociales Section */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Redes Sociales</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>YouTube</p>
              </div>
            </div>

            {/* Navegación Section */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Navegación</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Inicio</p>
                <p>Pizarras</p>
                <p>Servicios</p>
                <p>Contacto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}