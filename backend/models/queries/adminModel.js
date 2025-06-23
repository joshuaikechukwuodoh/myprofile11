import { db } from '../drizzle/index.js';
import { adminsTable } from '../drizzle/schema.js';
import { eq } from 'drizzle-orm';

export const createAdmin = async (adminData) => {
  return await db.insert(adminsTable).values(adminData).returning();
};

export const getAdminById = async (adminId) => {
  return await db.select().from(adminsTable).where(eq(adminsTable.id, adminId));
};

export const getAdminByEmail = async (email) => {
  return await db.select().from(adminsTable).where(eq(adminsTable.email, email));
};

export const updateAdmin = async (adminId, adminData) => {
  return await db
    .update(adminsTable)
    .set(adminData)
    .where(eq(adminsTable.id, adminId))
    .returning();
};

export const deleteAdmin = async (adminId) => {
  return await db.delete(adminsTable).where(eq(adminsTable.id, adminId)).returning();
};