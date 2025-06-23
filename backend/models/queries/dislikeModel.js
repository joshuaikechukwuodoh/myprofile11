import { db } from '../drizzle/index.js';
import { dislikesTable } from '../drizzle/schema.js';
import { eq, and } from 'drizzle-orm';

export const createDislike = async (dislikeData) => {
  return await db.insert(dislikesTable).values(dislikeData).returning();
};

export const getDislikesByPost = async (postId) => {
  return await db.select().from(dislikesTable).where(eq(dislikesTable.postId, postId));
};

export const getDislike = async (postId, userId) => {
  return await db
    .select()
    .from(dislikesTable)
    .where(and(eq(dislikesTable.postId, postId), eq(dislikesTable.userId, userId)));
};

export const deleteDislike = async (postId, userId) => {
  return await db
    .delete(dislikesTable)
    .where(and(eq(dislikesTable.postId, postId), eq(dislikesTable.userId, userId)))
    .returning();
};