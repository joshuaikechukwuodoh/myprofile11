import { db } from '../drizzle/index.js';
import { otpsTable } from '../drizzle/schema.js';
import { eq } from 'drizzle-orm';

export const createOtp = async (otpData) => {
  return await db.insert(otpsTable).values(otpData).returning();
};

export const getOtpByEmail = async (email) => {
  return await db.select().from(otpsTable).where(eq(otpsTable.email, email));
};

export const deleteOtp = async (email) => {
  return await db.delete(otpsTable).where(eq(otpsTable.email, email)).returning();
};