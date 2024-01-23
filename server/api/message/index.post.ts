import { MessageApi } from '~/api'
//import type { H3Event } from 'h3'
// interface EventType {
//   // 定义事件的类型
//   event: H3Event<EventHandlerRequest>
// }

// interface CreateResponse {
//   // 定义创建操作的返回值类型
//   page: number
//   pageSize: number
//   records: any[]
//   total: number
// }

// interface ErrorType {
//   // 定义错误对象的类型
// }
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const data = await MessageApi.create(body)
    return {
      ...data
    }
  } catch (err) {
    return { err }
  }
})
