import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, decimal, boolean, jsonb, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Enums
export const userRoleEnum = pgEnum("user_role", ["INSTITUCIONAL", "CUERPO_TECNICO", "TECNICO"]);
export const planTypeEnum = pgEnum("plan_type", ["TECNICO", "CUERPO_TECNICO", "INSTITUCIONAL"]);
export const playerPositionEnum = pgEnum("player_position", ["PORTERO", "CIERRE", "ALA", "PIVOT"]);
export const playerFootEnum = pgEnum("player_foot", ["DERECHO", "IZQUIERDO", "AMBOS"]);
export const playerStatusEnum = pgEnum("player_status", ["ACTIVO", "LESIONADO", "SUSPENDIDO", "INACTIVO"]);
export const exerciseDifficultyEnum = pgEnum("exercise_difficulty", ["FACIL", "MEDIO", "DIFICIL"]);
export const matchStatusEnum = pgEnum("match_status", ["PROGRAMADO", "EN_VIVO", "FINALIZADO", "CANCELADO"]);
export const eventTypeEnum = pgEnum("event_type", ["GOL", "FALTA", "TARJETA_AMARILLA", "TARJETA_ROJA", "CAMBIO", "TIEMPO_MUERTO"]);
export const productCategoryEnum = pgEnum("product_category", ["PLANTILLA", "EBOOK"]);

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: userRoleEnum("role").notNull().default("TECNICO"),
  isEmailVerified: boolean("is_email_verified").notNull().default(false),
  emailVerificationCode: text("email_verification_code"),
  subscriptionId: varchar("subscription_id"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Subscription Plans
export const subscriptionPlans = pgTable("subscription_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: planTypeEnum("type").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  features: jsonb("features").notNull(),
  maxClubs: integer("max_clubs"),
  maxPlayers: integer("max_players"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// User Subscriptions
export const userSubscriptions = pgTable("user_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  planId: varchar("plan_id").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  startDate: timestamp("start_date").notNull().defaultNow(),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Clubs
export const clubs = pgTable("clubs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  abbreviation: text("abbreviation").notNull(),
  logo: text("logo"),
  ownerId: varchar("owner_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Club Categories
export const clubCategories = pgTable("club_categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clubId: varchar("club_id").notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Players
export const players = pgTable("players", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clubId: varchar("club_id").notNull(),
  categoryId: varchar("category_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  nickname: text("nickname"),
  birthDate: timestamp("birth_date").notNull(),
  position: playerPositionEnum("position").notNull(),
  preferredFoot: playerFootEnum("preferred_foot").notNull(),
  status: playerStatusEnum("status").notNull().default("ACTIVO"),
  photo: text("photo"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Exercises
export const exercises = pgTable("exercises", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  difficulty: exerciseDifficultyEnum("difficulty").notNull(),
  estimatedTime: integer("estimated_time").notNull(), // in minutes
  requiredPlayers: integer("required_players").notNull(),
  requiredGoalkeepers: integer("required_goalkeepers").notNull().default(0),
  materials: jsonb("materials").notNull(),
  diagram: text("diagram"), // image URL
  description: text("description").notNull(),
  objective: text("objective").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Training Sessions
export const trainingSessions = pgTable("training_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clubId: varchar("club_id").notNull(),
  categoryId: varchar("category_id").notNull(),
  date: timestamp("date").notNull(),
  exercises: jsonb("exercises").notNull(), // array of exercise IDs with order
  focusPercentages: jsonb("focus_percentages").notNull(), // breakdown by exercise type
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Tournaments
export const tournaments = pgTable("tournaments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clubId: varchar("club_id").notNull(),
  name: text("name").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Matches
export const matches = pgTable("matches", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clubId: varchar("club_id").notNull(),
  tournamentId: varchar("tournament_id"),
  opponent: text("opponent").notNull(),
  date: timestamp("date").notNull(),
  isHome: boolean("is_home").notNull().default(true),
  status: matchStatusEnum("status").notNull().default("PROGRAMADO"),
  homeScore: integer("home_score").default(0),
  awayScore: integer("away_score").default(0),
  lineup: jsonb("lineup"), // starting lineup
  substitutes: jsonb("substitutes"), // substitute players
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Match Events
export const matchEvents = pgTable("match_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  matchId: varchar("match_id").notNull(),
  playerId: varchar("player_id"),
  eventType: eventTypeEnum("event_type").notNull(),
  minute: integer("minute").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Player Statistics
export const playerStatistics = pgTable("player_statistics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  playerId: varchar("player_id").notNull(),
  matchId: varchar("match_id").notNull(),
  minutesPlayed: integer("minutes_played").notNull().default(0),
  goals: integer("goals").notNull().default(0),
  assists: integer("assists").notNull().default(0),
  yellowCards: integer("yellow_cards").notNull().default(0),
  redCards: integer("red_cards").notNull().default(0),
  fouls: integer("fouls").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Products (Store)
export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: productCategoryEnum("category").notNull(),
  image: text("image"),
  downloadUrl: text("download_url"),
  stock: integer("stock"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Shopping Cart
export const cartItems = pgTable("cart_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  productId: varchar("product_id").notNull(),
  quantity: integer("quantity").notNull().default(1),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Contact Information
export const contactInfo = pgTable("contact_info", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  whatsapp: text("whatsapp").notNull(),
  instagram: text("instagram").notNull(),
  email: text("email").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  subscription: one(userSubscriptions, {
    fields: [users.subscriptionId],
    references: [userSubscriptions.id],
  }),
  clubs: many(clubs),
  exercises: many(exercises),
  cartItems: many(cartItems),
}));

export const userSubscriptionsRelations = relations(userSubscriptions, ({ one }) => ({
  user: one(users, {
    fields: [userSubscriptions.userId],
    references: [users.id],
  }),
  plan: one(subscriptionPlans, {
    fields: [userSubscriptions.planId],
    references: [subscriptionPlans.id],
  }),
}));

export const clubsRelations = relations(clubs, ({ one, many }) => ({
  owner: one(users, {
    fields: [clubs.ownerId],
    references: [users.id],
  }),
  categories: many(clubCategories),
  players: many(players),
  trainingSessions: many(trainingSessions),
  tournaments: many(tournaments),
  matches: many(matches),
}));

export const clubCategoriesRelations = relations(clubCategories, ({ one, many }) => ({
  club: one(clubs, {
    fields: [clubCategories.clubId],
    references: [clubs.id],
  }),
  players: many(players),
  trainingSessions: many(trainingSessions),
}));

export const playersRelations = relations(players, ({ one, many }) => ({
  club: one(clubs, {
    fields: [players.clubId],
    references: [clubs.id],
  }),
  category: one(clubCategories, {
    fields: [players.categoryId],
    references: [clubCategories.id],
  }),
  statistics: many(playerStatistics),
  matchEvents: many(matchEvents),
}));

export const exercisesRelations = relations(exercises, ({ one }) => ({
  user: one(users, {
    fields: [exercises.userId],
    references: [users.id],
  }),
}));

export const trainingSessionsRelations = relations(trainingSessions, ({ one }) => ({
  club: one(clubs, {
    fields: [trainingSessions.clubId],
    references: [clubs.id],
  }),
  category: one(clubCategories, {
    fields: [trainingSessions.categoryId],
    references: [clubCategories.id],
  }),
}));

export const tournamentsRelations = relations(tournaments, ({ one, many }) => ({
  club: one(clubs, {
    fields: [tournaments.clubId],
    references: [clubs.id],
  }),
  matches: many(matches),
}));

export const matchesRelations = relations(matches, ({ one, many }) => ({
  club: one(clubs, {
    fields: [matches.clubId],
    references: [clubs.id],
  }),
  tournament: one(tournaments, {
    fields: [matches.tournamentId],
    references: [tournaments.id],
  }),
  events: many(matchEvents),
  playerStatistics: many(playerStatistics),
}));

export const matchEventsRelations = relations(matchEvents, ({ one }) => ({
  match: one(matches, {
    fields: [matchEvents.matchId],
    references: [matches.id],
  }),
  player: one(players, {
    fields: [matchEvents.playerId],
    references: [players.id],
  }),
}));

export const playerStatisticsRelations = relations(playerStatistics, ({ one }) => ({
  player: one(players, {
    fields: [playerStatistics.playerId],
    references: [players.id],
  }),
  match: one(matches, {
    fields: [playerStatistics.matchId],
    references: [matches.id],
  }),
}));

export const productsRelations = relations(products, ({ many }) => ({
  cartItems: many(cartItems),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  user: one(users, {
    fields: [cartItems.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [cartItems.productId],
    references: [products.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  subscriptionId: true,
  isEmailVerified: true,
  emailVerificationCode: true,
});

export const insertClubSchema = createInsertSchema(clubs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPlayerSchema = createInsertSchema(players).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertExerciseSchema = createInsertSchema(exercises).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTrainingSessionSchema = createInsertSchema(trainingSessions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertMatchSchema = createInsertSchema(matches).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Club = typeof clubs.$inferSelect;
export type InsertClub = z.infer<typeof insertClubSchema>;
export type Player = typeof players.$inferSelect;
export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Exercise = typeof exercises.$inferSelect;
export type InsertExercise = z.infer<typeof insertExerciseSchema>;
export type TrainingSession = typeof trainingSessions.$inferSelect;
export type InsertTrainingSession = z.infer<typeof insertTrainingSessionSchema>;
export type Match = typeof matches.$inferSelect;
export type InsertMatch = z.infer<typeof insertMatchSchema>;
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type UserSubscription = typeof userSubscriptions.$inferSelect;
export type ClubCategory = typeof clubCategories.$inferSelect;
export type Tournament = typeof tournaments.$inferSelect;
export type MatchEvent = typeof matchEvents.$inferSelect;
export type PlayerStatistics = typeof playerStatistics.$inferSelect;
export type CartItem = typeof cartItems.$inferSelect;
export type ContactInfo = typeof contactInfo.$inferSelect;
