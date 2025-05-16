// src/lib/prisma.ts
import { PrismaClient } from '../../prisma/generated/client';

export const prisma = new PrismaClient();

// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV !== 'production') {
  if (!(global as any).prisma) {
    (global as any).prisma = prisma;
  }
}

export default prisma;
