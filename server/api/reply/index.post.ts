import { ReplyApi } from '~/api'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const query = getQuery(event)
  const messageId = query.messageId as number
  try {
    const data = await ReplyApi.create(messageId, body)
    return {
      ...data
    }
  } catch (err) {
    return err
  }
})
