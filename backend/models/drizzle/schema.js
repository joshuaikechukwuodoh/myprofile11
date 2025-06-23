import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const adminsTable = pgTable("admins", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const otpsTable = pgTable("otps", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull(),
  otp: varchar({ length: 6 }).notNull(),
});

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  authorId: integer().notNull().references(() => usersTable.id),
});

export const savedPostsTable = pgTable("savedPosts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  postId: integer().notNull().references(() => postsTable.id),
  userId: integer().notNull().references(() => usersTable.id),
}); 

export const commentsTable = pgTable("comments", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: varchar({ length: 255 }).notNull(),
  postId: integer().notNull().references(() => postsTable.id),
  authorId: integer().notNull().references(() => usersTable.id),
}); 

export const likesTable = pgTable("likes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  postId: integer().notNull().references(() => postsTable.id),
  userId: integer().notNull().references(() => usersTable.id),
}); 

export const dislikesTable = pgTable("dislikes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  postId: integer().notNull().references(() => postsTable.id),
  userId: integer().notNull().references(() => usersTable.id),
});     



