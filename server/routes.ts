import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertClubSchema, insertPlayerSchema, insertExerciseSchema, 
  insertTrainingSessionSchema, insertMatchSchema, insertProductSchema 
} from "@shared/schema";

function requireAuth(req: any, res: any, next: any) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
}

function requireRole(roles: string[]) {
  return (req: any, res: any, next: any) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    next();
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication routes
  setupAuth(app);

  // Public API endpoints

  // Homepage content
  app.get("/api/homepage", async (req, res) => {
    try {
      const features = [
        {
          id: "1",
          icon: "users",
          title: "Gestión de Jugadores",
          description: "Administra perfiles completos, estadísticas individuales y seguimiento del rendimiento de cada jugador."
        },
        {
          id: "2",
          icon: "dumbbell",
          title: "Planificación de Entrenamientos",
          description: "Crea ejercicios personalizados, planifica sesiones y optimiza el desarrollo técnico del equipo."
        },
        {
          id: "3",
          icon: "futbol",
          title: "Gestión de Partidos",
          description: "Cronómetro en vivo, registro de eventos, cambios dinámicos y análisis post-partido."
        },
        {
          id: "4",
          icon: "chart-line",
          title: "Estadísticas Avanzadas",
          description: "Analiza el rendimiento con métricas detalladas, filtros avanzados y reportes profesionales."
        },
        {
          id: "5",
          icon: "trophy",
          title: "Torneos y Competencias",
          description: "Organiza torneos, programa fixtures y lleva el control completo de todas las competencias."
        },
        {
          id: "6",
          icon: "mobile-alt",
          title: "Acceso Móvil",
          description: "Gestiona tu club desde cualquier dispositivo con nuestra interfaz optimizada y responsive."
        }
      ];

      res.json({
        hero: {
          title: "Gestiona tu Club de Futsal como un Profesional",
          subtitle: "Planifica entrenamientos, gestiona partidos en vivo, analiza estadísticas y potencia el rendimiento de tu equipo con nuestra plataforma integral.",
          ctaPrimary: "¡Comenzar Gratis!",
          ctaSecondary: "Ver Demo"
        },
        features
      });
    } catch (error) {
      res.status(500).json({ message: "Error loading homepage content" });
    }
  });

  // Store endpoints
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      let products;
      
      if (category && typeof category === 'string') {
        products = await storage.getProductsByCategory(category);
      } else {
        products = await storage.getProducts();
      }
      
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error loading products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Error loading product" });
    }
  });

  // Plans endpoints
  app.get("/api/plans", async (req, res) => {
    try {
      const plans = await storage.getSubscriptionPlans();
      res.json(plans);
    } catch (error) {
      res.status(500).json({ message: "Error loading plans" });
    }
  });

  app.post("/api/plans/:id/select", async (req, res) => {
    try {
      const plan = await storage.getSubscriptionPlanById(req.params.id);
      if (!plan) {
        return res.status(404).json({ message: "Plan not found" });
      }

      // Simulate WhatsApp redirection
      const whatsappMessage = `Hola! Me interesa el plan ${plan.name} por $${plan.price}/mes. ¿Podrían darme más información?`;
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
      
      res.json({ 
        message: "Plan selected successfully",
        whatsappUrl,
        plan 
      });
    } catch (error) {
      res.status(500).json({ message: "Error selecting plan" });
    }
  });

  // Contact endpoints
  app.get("/api/contact", async (req, res) => {
    try {
      const contactInfo = await storage.getContactInfo();
      res.json(contactInfo || {
        whatsapp: "+1234567890",
        instagram: "@cuatrocero",
        email: "contacto@cuatrocero.com"
      });
    } catch (error) {
      res.status(500).json({ message: "Error loading contact info" });
    }
  });

  // Cart endpoints (require authentication)
  app.get("/api/cart", requireAuth, async (req, res) => {
    try {
      const cartItems = await storage.getCartByUserId(req.user.id);
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: "Error loading cart" });
    }
  });

  app.post("/api/cart", requireAuth, async (req, res) => {
    try {
      const { productId, quantity = 1 } = req.body;
      
      if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
      }

      const product = await storage.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const cartItem = await storage.addToCart(req.user.id, productId, quantity);
      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ message: "Error adding to cart" });
    }
  });

  app.delete("/api/cart/:productId", requireAuth, async (req, res) => {
    try {
      await storage.removeFromCart(req.user.id, req.params.productId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error removing from cart" });
    }
  });

  app.delete("/api/cart", requireAuth, async (req, res) => {
    try {
      await storage.clearCart(req.user.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error clearing cart" });
    }
  });

  // Protected endpoints (require authentication)

  // Club management
  app.get("/api/clubs", requireAuth, async (req, res) => {
    try {
      const clubs = await storage.getClubsByUserId(req.user.id);
      res.json(clubs);
    } catch (error) {
      res.status(500).json({ message: "Error loading clubs" });
    }
  });

  app.post("/api/clubs", requireAuth, async (req, res) => {
    try {
      const validation = insertClubSchema.safeParse({ ...req.body, ownerId: req.user.id });
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid club data", errors: validation.error.errors });
      }

      const club = await storage.createClub(validation.data);
      res.status(201).json(club);
    } catch (error) {
      res.status(500).json({ message: "Error creating club" });
    }
  });

  app.get("/api/clubs/:id", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.id);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }
      res.json(club);
    } catch (error) {
      res.status(500).json({ message: "Error loading club" });
    }
  });

  // Club categories
  app.get("/api/clubs/:clubId/categories", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const categories = await storage.getCategoriesByClubId(req.params.clubId);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error loading categories" });
    }
  });

  app.post("/api/clubs/:clubId/categories", requireAuth, async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "Category name is required" });
      }

      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const category = await storage.createCategory(req.params.clubId, name);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error creating category" });
    }
  });

  // Player management
  app.get("/api/clubs/:clubId/players", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const players = await storage.getPlayersByClubId(req.params.clubId);
      res.json(players);
    } catch (error) {
      res.status(500).json({ message: "Error loading players" });
    }
  });

  app.post("/api/clubs/:clubId/players", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const validation = insertPlayerSchema.safeParse({ ...req.body, clubId: req.params.clubId });
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid player data", errors: validation.error.errors });
      }

      const player = await storage.createPlayer(validation.data);
      res.status(201).json(player);
    } catch (error) {
      res.status(500).json({ message: "Error creating player" });
    }
  });

  // Exercise management
  app.get("/api/exercises", requireAuth, async (req, res) => {
    try {
      const exercises = await storage.getExercisesByUserId(req.user.id);
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ message: "Error loading exercises" });
    }
  });

  app.post("/api/exercises", requireAuth, async (req, res) => {
    try {
      const validation = insertExerciseSchema.safeParse({ ...req.body, userId: req.user.id });
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid exercise data", errors: validation.error.errors });
      }

      const exercise = await storage.createExercise(validation.data);
      res.status(201).json(exercise);
    } catch (error) {
      res.status(500).json({ message: "Error creating exercise" });
    }
  });

  // Training session management
  app.get("/api/clubs/:clubId/training-sessions", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const sessions = await storage.getTrainingSessionsByClubId(req.params.clubId);
      res.json(sessions);
    } catch (error) {
      res.status(500).json({ message: "Error loading training sessions" });
    }
  });

  app.post("/api/clubs/:clubId/training-sessions", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const validation = insertTrainingSessionSchema.safeParse({ ...req.body, clubId: req.params.clubId });
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid training session data", errors: validation.error.errors });
      }

      const session = await storage.createTrainingSession(validation.data);
      res.status(201).json(session);
    } catch (error) {
      res.status(500).json({ message: "Error creating training session" });
    }
  });

  // Tournament management
  app.get("/api/clubs/:clubId/tournaments", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const tournaments = await storage.getTournamentsByClubId(req.params.clubId);
      res.json(tournaments);
    } catch (error) {
      res.status(500).json({ message: "Error loading tournaments" });
    }
  });

  app.post("/api/clubs/:clubId/tournaments", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const { name, startDate, endDate } = req.body;
      if (!name || !startDate) {
        return res.status(400).json({ message: "Name and start date are required" });
      }

      const tournament = await storage.createTournament({
        clubId: req.params.clubId,
        name,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null
      });

      res.status(201).json(tournament);
    } catch (error) {
      res.status(500).json({ message: "Error creating tournament" });
    }
  });

  // Match management
  app.get("/api/clubs/:clubId/matches", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const matches = await storage.getMatchesByClubId(req.params.clubId);
      res.json(matches);
    } catch (error) {
      res.status(500).json({ message: "Error loading matches" });
    }
  });

  app.post("/api/clubs/:clubId/matches", requireAuth, async (req, res) => {
    try {
      const club = await storage.getClubById(req.params.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Club not found" });
      }

      const validation = insertMatchSchema.safeParse({ ...req.body, clubId: req.params.clubId });
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid match data", errors: validation.error.errors });
      }

      const match = await storage.createMatch(validation.data);
      res.status(201).json(match);
    } catch (error) {
      res.status(500).json({ message: "Error creating match" });
    }
  });

  app.get("/api/matches/:id", requireAuth, async (req, res) => {
    try {
      const match = await storage.getMatchById(req.params.id);
      if (!match) {
        return res.status(404).json({ message: "Match not found" });
      }

      const club = await storage.getClubById(match.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Match not found" });
      }

      res.json(match);
    } catch (error) {
      res.status(500).json({ message: "Error loading match" });
    }
  });

  app.patch("/api/matches/:id", requireAuth, async (req, res) => {
    try {
      const match = await storage.getMatchById(req.params.id);
      if (!match) {
        return res.status(404).json({ message: "Match not found" });
      }

      const club = await storage.getClubById(match.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Match not found" });
      }

      const updatedMatch = await storage.updateMatch(req.params.id, req.body);
      res.json(updatedMatch);
    } catch (error) {
      res.status(500).json({ message: "Error updating match" });
    }
  });

  // Match events
  app.get("/api/matches/:id/events", requireAuth, async (req, res) => {
    try {
      const match = await storage.getMatchById(req.params.id);
      if (!match) {
        return res.status(404).json({ message: "Match not found" });
      }

      const club = await storage.getClubById(match.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Match not found" });
      }

      const events = await storage.getMatchEventsByMatchId(req.params.id);
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Error loading match events" });
    }
  });

  app.post("/api/matches/:id/events", requireAuth, async (req, res) => {
    try {
      const match = await storage.getMatchById(req.params.id);
      if (!match) {
        return res.status(404).json({ message: "Match not found" });
      }

      const club = await storage.getClubById(match.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Match not found" });
      }

      const { playerId, eventType, minute, description } = req.body;
      if (!eventType || minute === undefined) {
        return res.status(400).json({ message: "Event type and minute are required" });
      }

      const event = await storage.createMatchEvent({
        matchId: req.params.id,
        playerId: playerId || null,
        eventType,
        minute,
        description: description || null
      });

      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error creating match event" });
    }
  });

  // Player statistics
  app.get("/api/players/:id/statistics", requireAuth, async (req, res) => {
    try {
      const player = await storage.getPlayerById(req.params.id);
      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }

      const club = await storage.getClubById(player.clubId);
      if (!club || club.ownerId !== req.user.id) {
        return res.status(404).json({ message: "Player not found" });
      }

      const statistics = await storage.getPlayerStatsByPlayerId(req.params.id);
      res.json(statistics);
    } catch (error) {
      res.status(500).json({ message: "Error loading player statistics" });
    }
  });

  // Admin endpoints (require INSTITUCIONAL role)
  app.get("/api/admin/users", requireAuth, requireRole(["INSTITUCIONAL"]), async (req, res) => {
    // Implementation for admin user management
    res.json({ message: "Admin endpoint - user management" });
  });

  app.get("/api/admin/products", requireAuth, requireRole(["INSTITUCIONAL"]), async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error loading products" });
    }
  });

  app.post("/api/admin/products", requireAuth, requireRole(["INSTITUCIONAL"]), async (req, res) => {
    try {
      const validation = insertProductSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid product data", errors: validation.error.errors });
      }

      const product = await storage.createProduct(validation.data);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error creating product" });
    }
  });

  app.patch("/api/admin/contact", requireAuth, requireRole(["INSTITUCIONAL"]), async (req, res) => {
    try {
      const { whatsapp, instagram, email } = req.body;
      if (!whatsapp || !instagram || !email) {
        return res.status(400).json({ message: "All contact fields are required" });
      }

      const contactInfo = await storage.updateContactInfo({ whatsapp, instagram, email });
      res.json(contactInfo);
    } catch (error) {
      res.status(500).json({ message: "Error updating contact info" });
    }
  });

  // Email verification simulation
  app.post("/api/verify-email", requireAuth, async (req, res) => {
    try {
      const { code } = req.body;
      if (!code) {
        return res.status(400).json({ message: "Verification code is required" });
      }

      // Simulate email verification
      console.log(`Email verification code for ${req.user.email}: ${code}`);
      
      if (req.user.emailVerificationCode === code) {
        await storage.updateUser(req.user.id, { 
          isEmailVerified: true, 
          emailVerificationCode: null 
        });
        res.json({ message: "Email verified successfully" });
      } else {
        res.status(400).json({ message: "Invalid verification code" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error verifying email" });
    }
  });

  app.post("/api/send-verification", requireAuth, async (req, res) => {
    try {
      if (req.user.isEmailVerified) {
        return res.status(400).json({ message: "Email already verified" });
      }

      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      await storage.updateUser(req.user.id, { emailVerificationCode: verificationCode });
      
      // Simulate sending email (log to console)
      console.log(`Email verification code sent to ${req.user.email}: ${verificationCode}`);
      
      res.json({ message: "Verification code sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending verification code" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
