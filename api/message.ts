import type { BasePageModel, MessageDto, UpdateMessageDto } from '~/types'
import { prisma } from './prisma'
import type { Prisma } from '@prisma/client'

export class MessageApi {
  static async findMany(basePageModel: BasePageModel) {
    const { page, pageSize, startTime, endTime } = basePageModel
    const where: Prisma.MessageWhereInput = {
      deletedAt: null,
      AND: [
        {
          createdAt: {
            ...(startTime && { gte: startTime }),
            ...(endTime && { lte: endTime })
          }
        }
      ]
    }

    const records = await prisma.message.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: Number(pageSize),
      include: {
        reply: true
      }
    })
    // ... you will write your Prisma Client queries here
    const total = await prisma.message.count({ where })
    return {
      records,
      total,
      page,
      pageSize
    }
  }
  static async create(messageDto: MessageDto) {
    return await prisma.message.create({
      data: {
        ...messageDto
      }
    })
  }

  static async delete(id: number) {
    return await prisma.message.delete({
      where: {
        id
      }
    })
  }
  static async update(id: number, updateMessageDto: UpdateMessageDto) {
    return await prisma.message.update({
      where: {
        id
      },
      data: {
        ...updateMessageDto
      }
    })
  }
}
