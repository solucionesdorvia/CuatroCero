
import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CuatroLogo from "@/components/cuatro-logo";
import Footer from "@/components/footer";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function SignInPage() {
  const { user, loginMutation } = useAuth();
  const [, setLocation] = useLocation();

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
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

  return (
    <div className="min-h-screen bg-background grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <CuatroLogo size="md" orientation="horizontal" showSubtitle={false} />
          </div>
          
          <h1 className="text-3xl font-medium text-foreground mb-2">Bienvenido</h1>
          
          <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-8 mt-12">
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
              className="bg-foreground text-background px-8 py-3 rounded font-medium mt-12"
              disabled={loginMutation.isPending}
            >
              Iniciar Sesión
            </button>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                ¿No tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setLocation("/signup")}
                  className="text-primary hover:underline"
                >
                  ¡Create una haciendo click acá!
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