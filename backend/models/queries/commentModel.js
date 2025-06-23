import { db } from '../drizzle/index.js';
import { commentsTable } from '../drizzle/schema.js';
import { eq } from 'drizzle-orm';

export const createComment = async (commentData) => {
  return await db.insert(commentsTable).values(commentData).returning();
};

export const getCommentById = async (commentId) => {
  return await db.select().from(commentsTable).where(eq(commentsTable.id, commentId));
};

export const getCommentsByPost = async (postId) => {
  return await db.select().from(commentsTable).where(eq(commentsTable.postId, postId));
};

export const getCommentsByUser = async (userId) => {
  return await db.select().from(commentsTable).where(eq(commentsTable.authorId, userId));
};

export const updateComment = async (commentId, commentData) => {
  return await db
    .update(commentsTable)
    .set(commentData)
    .where(eq(commentsTable.id, commentId))
    .returning();
};

export const deleteComment = async (commentId) => {
  return await db.delete(commentsTable).where(eq(commentsTable.id, commentId)).returning();
};