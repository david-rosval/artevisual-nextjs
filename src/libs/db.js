import { PrismaClient } from '@prisma/client'

// This function creates a singleton instance of the PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Assign the globalThis object to a variable named globalForPrisma
const globalForPrisma = globalThis 

// Check if the globalForPrisma object already has a property named 'prisma'
// If it does, use the existing prisma instance, otherwise create a new one using the prismaClientSingleton function
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// Export the prisma instance as the default export of this module
export default prisma

// If the current environment is not 'production', assign the prisma instance to the globalForPrisma object
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma