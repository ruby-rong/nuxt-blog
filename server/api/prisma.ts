// api/prisma.js

import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!(typeof global !== 'undefined' && (global as any).prisma)) {
    ;(global as any).prisma = new PrismaClient()
  }
  prisma = (global as any).prisma
}

export default prisma
