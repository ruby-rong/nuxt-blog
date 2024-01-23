import { MessageApi } from '~/api'
import { BasePageModel } from '~/types'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as BasePageModel
  try {
    const data = await MessageApi.findMany(query)
    setResponseStatus(event, 200)
    const dataVo = { ...data }
    return {
      ...dataVo
    }
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: '查找失败'
    })
  }

  // try {

  // } catch (err) {
  //   return {
  //     message: err
  //   }
  // }
})
