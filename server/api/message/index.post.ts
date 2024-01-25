import { MessageApi } from '~/api'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const data = await MessageApi.create(body)
    return {
      ...data
    }
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: '创建失败'
    })
  }
})
