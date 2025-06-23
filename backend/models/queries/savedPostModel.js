import { db } from '../drizzle/index.js';
import { savedPostsTable } from '../drizzle/schema.js';
import { eq, and } from 'drizzle-orm';

export const savePost = async (savedPostData) => {
  return await db.insert(savedPostsTable).values(savedPostData).returning();
};

export const getSavedPostsByUser = async (userId) => {
  return await db.select().from(savedPostsTable).where(eq(savedPostsTable.userId, userId));
};

export const getSavedPost = async (postId, userId) => {
  return await db
    .select()
    .from(savedPostsTable)
    .where(and(eq(savedPostsTable.postId, postId), eq(savedPostsTable.userId, userId)));
};

export const unsavePost = async (postId, userId) => {
  return await db
    .delete(savedPostsTable)
    .where(and(eq(savedPostsTable.postId, postId), eq(savedPostsTable.userId, userId)))
    .returning();
};