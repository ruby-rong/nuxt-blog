import { MessageApi } from '~/api'
import { BasePageModel } from '~/types'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as BasePageModel

  try {
    const data = await MessageApi.findMany(query)
    return {
      ...data
    }
  } catch (err) {
    return {
      message: err
    }
  }
})
