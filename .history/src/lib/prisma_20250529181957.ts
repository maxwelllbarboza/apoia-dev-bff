import { PrismaClient } from "@/generated/prisma/client";
 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
const _prisma = globalForPrisma.prisma || new PrismaClient()
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = _prisma;

export const prisma = _prisma.$extends({});