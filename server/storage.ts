import { 
  users, clubs, players, exercises, trainingSessions, matches, matchEvents, 
  playerStatistics, products, cartItems, subscriptionPlans, userSubscriptions,
  clubCategories, tournaments, contactInfo,
  type User, type InsertUser, type Club, type InsertClub, type Player, type InsertPlayer,
  type Exercise, type InsertExercise, type TrainingSession, type InsertTrainingSession,
  type Match, type InsertMatch, type Product, type InsertProduct,
  type SubscriptionPlan, type UserSubscription, type ClubCategory, type Tournament,
  type MatchEvent, type PlayerStatistics, type CartItem, type ContactInfo
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc, asc } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // Auth
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User | undefined>;
  
  // Clubs
  getClubsByUserId(userId: string): Promise<Club[]>;
  createClub(club: InsertClub): Promise<Club>;
  getClubById(id: string): Promise<Club | undefined>;
  updateClub(id: string, updates: Partial<Club>): Promise<Club | undefined>;
  
  // Club Categories
  getCategoriesByClubId(clubId: string): Promise<ClubCategory[]>;
  createCategory(clubId: string, name: string): Promise<ClubCategory>;
  
  // Players
  getPlayersByClubId(clubId: string): Promise<Player[]>;
  getPlayersByCategoryId(categoryId: string): Promise<Player[]>;
  createPlayer(player: InsertPlayer): Promise<Player>;
  getPlayerById(id: string): Promise<Player | undefined>;
  updatePlayer(id: string, updates: Partial<Player>): Promise<Player | undefined>;
  
  // Exercises
  getExercisesByUserId(userId: string): Promise<Exercise[]>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;
  getExerciseById(id: string): Promise<Exercise | undefined>;
  updateExercise(id: string, updates: Partial<Exercise>): Promise<Exercise | undefined>;
  
  // Training Sessions
  getTrainingSessionsByClubId(clubId: string): Promise<TrainingSession[]>;
  createTrainingSession(session: InsertTrainingSession): Promise<TrainingSession>;
  getTrainingSessionById(id: string): Promise<TrainingSession | undefined>;
  
  // Tournaments
  getTournamentsByClubId(clubId: string): Promise<Tournament[]>;
  createTournament(tournament: any): Promise<Tournament>;
  
  // Matches
  getMatchesByClubId(clubId: string): Promise<Match[]>;
  createMatch(match: InsertMatch): Promise<Match>;
  getMatchById(id: string): Promise<Match | undefined>;
  updateMatch(id: string, updates: Partial<Match>): Promise<Match | undefined>;
  
  // Match Events
  getMatchEventsByMatchId(matchId: string): Promise<MatchEvent[]>;
  createMatchEvent(event: any): Promise<MatchEvent>;
  
  // Player Statistics
  getPlayerStatsByMatchId(matchId: string): Promise<PlayerStatistics[]>;
  getPlayerStatsByPlayerId(playerId: string): Promise<PlayerStatistics[]>;
  createPlayerStats(stats: any): Promise<PlayerStatistics>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, updates: Partial<Product>): Promise<Product | undefined>;
  
  // Cart
  getCartByUserId(userId: string): Promise<CartItem[]>;
  addToCart(userId: string, productId: string, quantity: number): Promise<CartItem>;
  removeFromCart(userId: string, productId: string): Promise<void>;
  clearCart(userId: string): Promise<void>;
  
  // Subscription Plans
  getSubscriptionPlans(): Promise<SubscriptionPlan[]>;
  getSubscriptionPlanById(id: string): Promise<SubscriptionPlan | undefined>;
  createSubscriptionPlan(plan: any): Promise<SubscriptionPlan>;
  
  // User Subscriptions
  getUserSubscription(userId: string): Promise<UserSubscription | undefined>;
  createUserSubscription(subscription: any): Promise<UserSubscription>;
  
  // Contact Info
  getContactInfo(): Promise<ContactInfo | undefined>;
  updateContactInfo(info: any): Promise<ContactInfo>;
  
  sessionStore: session.SessionStore;
}

export class DatabaseStorage implements IStorage {
  public sessionStore: session.SessionStore;

  constructor() {
    this.sessionStore = new PostgresSessionStore({ 
      pool, 
      createTableIfMissing: true 
    });
  }

  // Auth methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user || undefined;
  }

  // Club methods
  async getClubsByUserId(userId: string): Promise<Club[]> {
    return await db.select().from(clubs).where(eq(clubs.ownerId, userId));
  }

  async createClub(club: InsertClub): Promise<Club> {
    const [newClub] = await db
      .insert(clubs)
      .values(club)
      .returning();
    return newClub;
  }

  async getClubById(id: string): Promise<Club | undefined> {
    const [club] = await db.select().from(clubs).where(eq(clubs.id, id));
    return club || undefined;
  }

  async updateClub(id: string, updates: Partial<Club>): Promise<Club | undefined> {
    const [club] = await db
      .update(clubs)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(clubs.id, id))
      .returning();
    return club || undefined;
  }

  // Category methods
  async getCategoriesByClubId(clubId: string): Promise<ClubCategory[]> {
    return await db.select().from(clubCategories).where(eq(clubCategories.clubId, clubId));
  }

  async createCategory(clubId: string, name: string): Promise<ClubCategory> {
    const [category] = await db
      .insert(clubCategories)
      .values({ clubId, name })
      .returning();
    return category;
  }

  // Player methods
  async getPlayersByClubId(clubId: string): Promise<Player[]> {
    return await db.select().from(players).where(eq(players.clubId, clubId));
  }

  async getPlayersByCategoryId(categoryId: string): Promise<Player[]> {
    return await db.select().from(players).where(eq(players.categoryId, categoryId));
  }

  async createPlayer(player: InsertPlayer): Promise<Player> {
    const [newPlayer] = await db
      .insert(players)
      .values(player)
      .returning();
    return newPlayer;
  }

  async getPlayerById(id: string): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.id, id));
    return player || undefined;
  }

  async updatePlayer(id: string, updates: Partial<Player>): Promise<Player | undefined> {
    const [player] = await db
      .update(players)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(players.id, id))
      .returning();
    return player || undefined;
  }

  // Exercise methods
  async getExercisesByUserId(userId: string): Promise<Exercise[]> {
    return await db.select().from(exercises).where(eq(exercises.userId, userId));
  }

  async createExercise(exercise: InsertExercise): Promise<Exercise> {
    const [newExercise] = await db
      .insert(exercises)
      .values(exercise)
      .returning();
    return newExercise;
  }

  async getExerciseById(id: string): Promise<Exercise | undefined> {
    const [exercise] = await db.select().from(exercises).where(eq(exercises.id, id));
    return exercise || undefined;
  }

  async updateExercise(id: string, updates: Partial<Exercise>): Promise<Exercise | undefined> {
    const [exercise] = await db
      .update(exercises)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(exercises.id, id))
      .returning();
    return exercise || undefined;
  }

  // Training Session methods
  async getTrainingSessionsByClubId(clubId: string): Promise<TrainingSession[]> {
    return await db.select().from(trainingSessions)
      .where(eq(trainingSessions.clubId, clubId))
      .orderBy(desc(trainingSessions.date));
  }

  async createTrainingSession(session: InsertTrainingSession): Promise<TrainingSession> {
    const [newSession] = await db
      .insert(trainingSessions)
      .values(session)
      .returning();
    return newSession;
  }

  async getTrainingSessionById(id: string): Promise<TrainingSession | undefined> {
    const [session] = await db.select().from(trainingSessions).where(eq(trainingSessions.id, id));
    return session || undefined;
  }

  // Tournament methods
  async getTournamentsByClubId(clubId: string): Promise<Tournament[]> {
    return await db.select().from(tournaments).where(eq(tournaments.clubId, clubId));
  }

  async createTournament(tournament: any): Promise<Tournament> {
    const [newTournament] = await db
      .insert(tournaments)
      .values(tournament)
      .returning();
    return newTournament;
  }

  // Match methods
  async getMatchesByClubId(clubId: string): Promise<Match[]> {
    return await db.select().from(matches)
      .where(eq(matches.clubId, clubId))
      .orderBy(desc(matches.date));
  }

  async createMatch(match: InsertMatch): Promise<Match> {
    const [newMatch] = await db
      .insert(matches)
      .values(match)
      .returning();
    return newMatch;
  }

  async getMatchById(id: string): Promise<Match | undefined> {
    const [match] = await db.select().from(matches).where(eq(matches.id, id));
    return match || undefined;
  }

  async updateMatch(id: string, updates: Partial<Match>): Promise<Match | undefined> {
    const [match] = await db
      .update(matches)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(matches.id, id))
      .returning();
    return match || undefined;
  }

  // Match Event methods
  async getMatchEventsByMatchId(matchId: string): Promise<MatchEvent[]> {
    return await db.select().from(matchEvents)
      .where(eq(matchEvents.matchId, matchId))
      .orderBy(asc(matchEvents.minute));
  }

  async createMatchEvent(event: any): Promise<MatchEvent> {
    const [newEvent] = await db
      .insert(matchEvents)
      .values(event)
      .returning();
    return newEvent;
  }

  // Player Statistics methods
  async getPlayerStatsByMatchId(matchId: string): Promise<PlayerStatistics[]> {
    return await db.select().from(playerStatistics).where(eq(playerStatistics.matchId, matchId));
  }

  async getPlayerStatsByPlayerId(playerId: string): Promise<PlayerStatistics[]> {
    return await db.select().from(playerStatistics).where(eq(playerStatistics.playerId, playerId));
  }

  async createPlayerStats(stats: any): Promise<PlayerStatistics> {
    const [newStats] = await db
      .insert(playerStatistics)
      .values(stats)
      .returning();
    return newStats;
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.isActive, true));
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products)
      .where(and(eq(products.category, category as any), eq(products.isActive, true)));
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db
      .insert(products)
      .values(product)
      .returning();
    return newProduct;
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | undefined> {
    const [product] = await db
      .update(products)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return product || undefined;
  }

  // Cart methods
  async getCartByUserId(userId: string): Promise<CartItem[]> {
    return await db.select().from(cartItems).where(eq(cartItems.userId, userId));
  }

  async addToCart(userId: string, productId: string, quantity: number = 1): Promise<CartItem> {
    // Check if item already exists
    const [existingItem] = await db.select().from(cartItems)
      .where(and(eq(cartItems.userId, userId), eq(cartItems.productId, productId)));

    if (existingItem) {
      // Update quantity
      const [updatedItem] = await db
        .update(cartItems)
        .set({ quantity: existingItem.quantity + quantity })
        .where(eq(cartItems.id, existingItem.id))
        .returning();
      return updatedItem;
    } else {
      // Create new cart item
      const [newItem] = await db
        .insert(cartItems)
        .values({ userId, productId, quantity })
        .returning();
      return newItem;
    }
  }

  async removeFromCart(userId: string, productId: string): Promise<void> {
    await db.delete(cartItems)
      .where(and(eq(cartItems.userId, userId), eq(cartItems.productId, productId)));
  }

  async clearCart(userId: string): Promise<void> {
    await db.delete(cartItems).where(eq(cartItems.userId, userId));
  }

  // Subscription Plan methods
  async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.isActive, true));
  }

  async getSubscriptionPlanById(id: string): Promise<SubscriptionPlan | undefined> {
    const [plan] = await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.id, id));
    return plan || undefined;
  }

  async createSubscriptionPlan(plan: any): Promise<SubscriptionPlan> {
    const [newPlan] = await db
      .insert(subscriptionPlans)
      .values(plan)
      .returning();
    return newPlan;
  }

  // User Subscription methods
  async getUserSubscription(userId: string): Promise<UserSubscription | undefined> {
    const [subscription] = await db.select().from(userSubscriptions)
      .where(and(eq(userSubscriptions.userId, userId), eq(userSubscriptions.isActive, true)));
    return subscription || undefined;
  }

  async createUserSubscription(subscription: any): Promise<UserSubscription> {
    const [newSubscription] = await db
      .insert(userSubscriptions)
      .values(subscription)
      .returning();
    return newSubscription;
  }

  // Contact Info methods
  async getContactInfo(): Promise<ContactInfo | undefined> {
    const [info] = await db.select().from(contactInfo).limit(1);
    return info || undefined;
  }

  async updateContactInfo(info: any): Promise<ContactInfo> {
    const existing = await this.getContactInfo();
    if (existing) {
      const [updated] = await db
        .update(contactInfo)
        .set({ ...info, updatedAt: new Date() })
        .where(eq(contactInfo.id, existing.id))
        .returning();
      return updated;
    } else {
      const [newInfo] = await db
        .insert(contactInfo)
        .values(info)
        .returning();
      return newInfo;
    }
  }
}

export const storage = new DatabaseStorage();
