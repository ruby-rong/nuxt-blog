import type { FriendsDto } from '~/types'
import { prisma } from '~/api/prisma'

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as FriendsDto

  try {
    const prismaData = await prisma.friends.create({
      data: {
        ...body
      }
    })
    setResponseStatus(event, 200)
    return {
      prismaData
    }
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: '创建失败'
    })
  }
})
