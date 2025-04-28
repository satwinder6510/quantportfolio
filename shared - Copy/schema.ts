import { pgTable, text, serial, timestamp, integer, decimal, boolean, primaryKey, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// User entity
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  prefersDarkMode: boolean("prefers_dark_mode").default(false),
  preferredLanguage: text("preferred_language").default("en"),
  region: text("region"),
});

// User relations
export const usersRelations = relations(users, ({ many }) => ({
  portfolios: many(portfolios),
  tradingStrategies: many(tradingStrategies),
  watchlists: many(watchlists),
}));

// Cryptocurrency entity
export const cryptos = pgTable("cryptos", {
  id: serial("id").primaryKey(),
  symbol: text("symbol").notNull().unique(),
  name: text("name").notNull(),
  currentPrice: decimal("current_price", { precision: 18, scale: 8 }),
  marketCap: decimal("market_cap", { precision: 18, scale: 2 }),
  volume24h: decimal("volume_24h", { precision: 18, scale: 2 }),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Crypto relations
export const cryptosRelations = relations(cryptos, ({ many }) => ({
  portfolioItems: many(portfolioItems),
  watchlistItems: many(watchlistItems),
  tradingSignals: many(tradingSignals),
}));

// Portfolio entity
export const portfolios = pgTable("portfolios", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text("name").notNull(),
  isActive: boolean("is_active").default(true),
  totalValue: decimal("total_value", { precision: 18, scale: 2 }).default("0"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Portfolio relations
export const portfoliosRelations = relations(portfolios, ({ one, many }) => ({
  user: one(users, {
    fields: [portfolios.userId],
    references: [users.id],
  }),
  items: many(portfolioItems),
}));

// Portfolio items (holdings)
export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  portfolioId: integer("portfolio_id").notNull().references(() => portfolios.id, { onDelete: 'cascade' }),
  cryptoId: integer("crypto_id").notNull().references(() => cryptos.id, { onDelete: 'cascade' }),
  quantity: decimal("quantity", { precision: 18, scale: 8 }).notNull(),
  averageBuyPrice: decimal("average_buy_price", { precision: 18, scale: 8 }),
  currentValue: decimal("current_value", { precision: 18, scale: 2 }),
  profitLossPercentage: decimal("profit_loss_percentage", { precision: 10, scale: 2 }),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Portfolio items relations
export const portfolioItemsRelations = relations(portfolioItems, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [portfolioItems.portfolioId],
    references: [portfolios.id],
  }),
  crypto: one(cryptos, {
    fields: [portfolioItems.cryptoId],
    references: [cryptos.id],
  }),
}));

// Trading strategy entity
export const tradingStrategies = pgTable("trading_strategies", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text("name").notNull(),
  description: text("description"),
  isActive: boolean("is_active").default(true),
  riskLevel: text("risk_level").notNull(), // low, medium, high
  timeFrame: text("time_frame").notNull(), // daily, weekly, monthly
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Trading strategies relations
export const tradingStrategiesRelations = relations(tradingStrategies, ({ one, many }) => ({
  user: one(users, {
    fields: [tradingStrategies.userId],
    references: [users.id],
  }),
  signals: many(tradingSignals),
}));

// Trading signals entity
export const tradingSignals = pgTable("trading_signals", {
  id: serial("id").primaryKey(),
  strategyId: integer("strategy_id").notNull().references(() => tradingStrategies.id, { onDelete: 'cascade' }),
  cryptoId: integer("crypto_id").notNull().references(() => cryptos.id, { onDelete: 'cascade' }),
  signalType: text("signal_type").notNull(), // buy, sell, hold
  confidence: decimal("confidence", { precision: 5, scale: 2 }),
  entryPrice: decimal("entry_price", { precision: 18, scale: 8 }),
  targetPrice: decimal("target_price", { precision: 18, scale: 8 }),
  stopLoss: decimal("stop_loss", { precision: 18, scale: 8 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  executedAt: timestamp("executed_at"),
  isExecuted: boolean("is_executed").default(false),
});

// Trading signals relations
export const tradingSignalsRelations = relations(tradingSignals, ({ one }) => ({
  strategy: one(tradingStrategies, {
    fields: [tradingSignals.strategyId],
    references: [tradingStrategies.id],
  }),
  crypto: one(cryptos, {
    fields: [tradingSignals.cryptoId],
    references: [cryptos.id],
  }),
}));

// Watchlist entity
export const watchlists = pgTable("watchlists", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Watchlist relations
export const watchlistsRelations = relations(watchlists, ({ one, many }) => ({
  user: one(users, {
    fields: [watchlists.userId],
    references: [users.id],
  }),
  items: many(watchlistItems),
}));

// Watchlist items
export const watchlistItems = pgTable("watchlist_items", {
  id: serial("id").primaryKey(),
  watchlistId: integer("watchlist_id").notNull().references(() => watchlists.id, { onDelete: 'cascade' }),
  cryptoId: integer("crypto_id").notNull().references(() => cryptos.id, { onDelete: 'cascade' }),
  addedAt: timestamp("added_at").defaultNow().notNull(),
});

// Watchlist items relations
export const watchlistItemsRelations = relations(watchlistItems, ({ one }) => ({
  watchlist: one(watchlists, {
    fields: [watchlistItems.watchlistId],
    references: [watchlists.id],
  }),
  crypto: one(cryptos, {
    fields: [watchlistItems.cryptoId],
    references: [cryptos.id],
  }),
}));

// Performance metrics
export const performanceMetrics = pgTable("performance_metrics", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  date: date("date").notNull(),
  portfolioValue: decimal("portfolio_value", { precision: 18, scale: 2 }),
  profitLoss: decimal("profit_loss", { precision: 18, scale: 2 }),
  profitLossPercentage: decimal("profit_loss_percentage", { precision: 10, scale: 2 }),
  sharpeRatio: decimal("sharpe_ratio", { precision: 10, scale: 2 }),
  maxDrawdown: decimal("max_drawdown", { precision: 10, scale: 2 }),
});

// Performance metrics relations
export const performanceMetricsRelations = relations(performanceMetrics, ({ one }) => ({
  user: one(users, {
    fields: [performanceMetrics.userId],
    references: [users.id],
  }),
}));

// Insert schema definitions
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  firstName: true,
  lastName: true,
  prefersDarkMode: true,
  preferredLanguage: true,
  region: true,
});

export const insertCryptoSchema = createInsertSchema(cryptos);
export const insertPortfolioSchema = createInsertSchema(portfolios).pick({
  userId: true,
  name: true,
  isActive: true,
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).pick({
  portfolioId: true,
  cryptoId: true,
  quantity: true,
  averageBuyPrice: true,
});

export const insertTradingStrategySchema = createInsertSchema(tradingStrategies).pick({
  userId: true,
  name: true,
  description: true,
  isActive: true,
  riskLevel: true,
  timeFrame: true,
});

export const insertTradingSignalSchema = createInsertSchema(tradingSignals).pick({
  strategyId: true,
  cryptoId: true,
  signalType: true,
  confidence: true,
  entryPrice: true,
  targetPrice: true,
  stopLoss: true,
});

export const insertWatchlistSchema = createInsertSchema(watchlists).pick({
  userId: true,
  name: true,
});

export const insertWatchlistItemSchema = createInsertSchema(watchlistItems).pick({
  watchlistId: true,
  cryptoId: true,
});

// Type definitions
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCrypto = z.infer<typeof insertCryptoSchema>;
export type Crypto = typeof cryptos.$inferSelect;

export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>;
export type Portfolio = typeof portfolios.$inferSelect;

export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;

export type InsertTradingStrategy = z.infer<typeof insertTradingStrategySchema>;
export type TradingStrategy = typeof tradingStrategies.$inferSelect;

export type InsertTradingSignal = z.infer<typeof insertTradingSignalSchema>;
export type TradingSignal = typeof tradingSignals.$inferSelect;

export type InsertWatchlist = z.infer<typeof insertWatchlistSchema>;
export type Watchlist = typeof watchlists.$inferSelect;

export type InsertWatchlistItem = z.infer<typeof insertWatchlistItemSchema>;
export type WatchlistItem = typeof watchlistItems.$inferSelect;
