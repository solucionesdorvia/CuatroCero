
import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

const registerSchema = insertUserSchema.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function SignUpPage() {
  const { user, registerMutation } = useAuth();
  const [, setLocation] = useLocation();

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

  const onRegister = (data: RegisterForm) => {
    // Simulate registration success and redirect to confirmation
    setLocation("/confirmation");
  };

  return (
    <div className="min-h-screen bg-background grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <CuatroLogo size="md" orientation="horizontal" showSubtitle={false} />
          </div>
          
          <h1 className="text-3xl font-medium text-foreground mb-2">Bienvenido</h1>
          
          <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-8 mt-12">
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
              className="bg-foreground text-background px-8 py-3 rounded font-medium mt-12"
              disabled={registerMutation.isPending}
            >
              Registrarse
            </button>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setLocation("/signin")}
                  className="text-primary hover:underline"
                >
                  Inicia sesión aquí
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Logo */}
      <div className="flex items-center justify-center bg-card">
        <CuatroLogo size="lg" orientation="vertical" showSubtitle={true} />
      </div>

      {/* Footer at bottom */}
      <div className="col-span-2">
        <Footer />
      </div>
    </div>
  );
}