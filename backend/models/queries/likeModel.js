import { db } from '../drizzle/index.js';
import { likesTable } from '../drizzle/schema.js';
import { eq, and } from 'drizzle-orm';

export const createLike = async (likeData) => {
  return await db.insert(likesTable).values(likeData).returning();
};

export const getLikesByPost = async (postId) => {
  return await db.select().from(likesTable).where(eq(likesTable.postId, postId));
};

export const getLike = async (postId, userId) => {
  return await db
    .select()
    .from(likesTable)
    .where(and(eq(likesTable.postId, postId), eq(likesTable.userId, userId)));
};

export const deleteLike = async (postId, userId) => {
  return await db
    .delete(likesTable)
    .where(and(eq(likesTable.postId, postId), eq(likesTable.userId, userId)))
    .returning();
};