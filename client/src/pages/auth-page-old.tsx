import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Redirect, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";

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
          <div className="cuatro-logo justify-center mb-4">
            <div className="cuatro-logo-icon"></div>
            <span className="cuatro-logo-text text-foreground">Cuatro <span className="text-primary">Cero</span></span>
          </div>
          <p className="text-sm text-muted-foreground">GESTIÓN DE EQUIPO</p>
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
            <CardDescription>
              {isLogin 
                ? "Accede a tu cuenta de Cuatro Cero" 
                : "Crea tu cuenta en Cuatro Cero"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLogin ? (
              <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...loginForm.register("email")}
                  />
                  {loginForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {loginForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Tu contraseña"
                    {...loginForm.register("password")}
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-primary hover:bg-accent-cuatro"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>
              </form>
            ) : (
              <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      placeholder="Juan"
                      {...registerForm.register("firstName")}
                    />
                    {registerForm.formState.errors.firstName && (
                      <p className="text-sm text-destructive mt-1">
                        {registerForm.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input
                      id="lastName"
                      placeholder="Pérez"
                      {...registerForm.register("lastName")}
                    />
                    {registerForm.formState.errors.lastName && (
                      <p className="text-sm text-destructive mt-1">
                        {registerForm.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...registerForm.register("email")}
                  />
                  {registerForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="role">Rol</Label>
                  <Select onValueChange={(value) => registerForm.setValue("role", value as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TECNICO">Técnico</SelectItem>
                      <SelectItem value="CUERPO_TECNICO">Cuerpo Técnico</SelectItem>
                      <SelectItem value="INSTITUCIONAL">Institucional</SelectItem>
                    </SelectContent>
                  </Select>
                  {registerForm.formState.errors.role && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.role.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    {...registerForm.register("password")}
                  />
                  {registerForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repite tu contraseña"
                    {...registerForm.register("confirmPassword")}
                  />
                  {registerForm.formState.errors.confirmPassword && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-primary hover:bg-accent-cuatro"
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? "Creando cuenta..." : "Crear Cuenta"}
                </Button>
              </form>
            )}

            <div className="text-center mt-6">
              <p className="text-gray-600">
                {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-accent hover:text-accent-cuatro font-medium"
                >
                  {isLogin ? "Regístrate aquí" : "Inicia sesión"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right side - Hero */}
      <div className="flex-1 flex items-center justify-center p-8 text-white">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6">
            Gestiona tu Club de Futsal como un
            <span className="text-accent"> Profesional</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Planifica entrenamientos, gestiona partidos en vivo, analiza estadísticas y potencia el rendimiento de tu equipo.
          </p>
        </div>
      </div>
    </div>
  );
}
