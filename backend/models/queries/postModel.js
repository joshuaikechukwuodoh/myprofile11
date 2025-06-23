import { db } from '../drizzle/index.js';
import { postsTable } from '../drizzle/schema.js';
import { eq } from 'drizzle-orm';

export const createPost = async (postData) => {
  return await db.insert(postsTable).values(postData).returning();
};

export const getPostById = async (postId) => {
  return await db.select().from(postsTable).where(eq(postsTable.id, postId));
};

export const getPostsByAuthor = async (authorId) => {
  return await db.select().from(postsTable).where(eq(postsTable.authorId, authorId));
};

export const updatePost = async (postId, postData) => {
  return await db
    .update(postsTable)
    .set(postData)
    .where(eq(postsTable.id, postId))
    .returning();
};

export const deletePost = async (postId) => {
  return await db.delete(postsTable).where(eq(postsTable.id, postId)).returning();
};