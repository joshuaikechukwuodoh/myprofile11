import { db } from '../drizzle/index.js';
import { usersTable } from '../drizzle/schema.js';
import { eq } from 'drizzle-orm';

export const createUser = async (userData) => {
  return await db.insert(usersTable).values(userData).returning();
};

export const getUserById = async (userId) => {
  return await db.select().from(usersTable).where(eq(usersTable.id, userId));
};

export const getUserByEmail = async (email) => {
  return await db.select().from(usersTable).where(eq(usersTable.email, email));
};

export const updateUser = async (userId, userData) => {
  return await db
    .update(usersTable)
    .set(userData)
    .where(eq(usersTable.id, userId))
    .returning();
};

export const deleteUser = async (userId) => {
  return await db.delete(usersTable).where(eq(usersTable.id, userId)).returning();
};