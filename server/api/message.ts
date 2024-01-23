// import type { BasePageModel, MessageDto, UpdateMessageDto } from '~/types'
// import prisma from './prisma'
// import type { Prisma } from '@prisma/client'

// async function findManyMessage(basePageModel: BasePageModel) {
//   const { page, pageSize, startTime, endTime } = basePageModel
//   const where: Prisma.MessageWhereInput = {
//     deletedAt: null,
//     AND: [
//       {
//         createdAt: {
//           ...(startTime && { gte: startTime }),
//           ...(endTime && { lte: endTime })
//         }
//       }
//     ]
//   }

//   const records = await prisma.message.findMany({
//     where,
//     skip: (page - 1) * pageSize,
//     take: Number(pageSize),
//     include: {
//       reply: true
//     }
//   })
//   // ... you will write your Prisma Client queries here
//   const total = await prisma.message.count({ where })
//   return {
//     records,
//     total,
//     page,
//     pageSize
//   }
// }

// async function createMessage(messageDto: MessageDto) {
//   return await prisma.message.create({
//     data: {
//       ...messageDto
//     }
//   })
// }

// async function deleteMessage(id: number) {
//   return await prisma.message.delete({
//     where: {
//       id
//     }
//   })
// }

// async function updateMessage(id: number, updateMessageDto: UpdateMessageDto) {
//   return await prisma.message.update({
//     where: {
//       id
//     },
//     data: {
//       ...updateMessageDto
//     }
//   })
// }

// export default defineEventHandler(async (event) => {
//   try {
//     const data = await findManyMessage(basePageModel:BasePageModel)
//     return {
//       code: 200,
//       data
//     }
//   } catch (error) {
//     console.error(error)
//     return sendError(event, createError('Failed to retrieve data!'))
//   }
// })
