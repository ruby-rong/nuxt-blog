import type { BasePageModel } from '~/types'
import { prisma } from '~/api/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as BasePageModel
  const { pageSize, page } = query

  try {
    const where = {
      deletedAt: null
    }

    const records = await prisma.friends.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: Number(pageSize)
    })
    const total = await prisma.friends.count({ where })
    setResponseStatus(event, 200)
    // console.log('Success')
    return {
      records,
      total,
      page,
      pageSize
    }
  } catch {
    // console.log('error')
    throw createError({
      statusCode: 400,
      statusMessage: '查找失败'
    })
  }
})
