import { db } from '../models/drizzle/index.js';
import { users } from '../models/drizzle/schema.js';
import { eq } from 'drizzle-orm';
import { hashPassword, comparePassword } from '../utils/hashPassword.js';
import { generateJWT } from '../utils/auth.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const [newUser] = await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    }).returning();

    const token = generateJWT(newUser.id);
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const [user] = await db.select().from(users).where(eq(users.email, email));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateJWT(user.id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};