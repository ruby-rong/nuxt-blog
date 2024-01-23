export interface MessageDto {
  userName: string
  orgName?: string
  title?: string
  content?: string
}

export interface UpdateMessageDto {
  userName?: string
  orgName?: string
  title?: string
  content?: string
}

export interface MessageListVo {
  total: number
  page: number
  pageSize: number
  records: RecordsVo[]
}

export interface RecordsVo {
  id: number
  userName: string
  orgName?: string
  title?: string
  content?: string
  createdAt?: Date
  createdBy?: number
  updatedAt?: Date
  updatedBy?: number
  deletedAt?: Date
  deletedBy?: number
  reply?: ReplyVo[]
}

export interface ReplyVo {
  id: number
  messageId: number
  userName: string
  orgName?: string
  title?: string
  content?: string
  createdAt?: Date
  createdBy?: number
  updatedAt?: Date
  updatedBy?: number
  deletedAt?: Date
  deletedBy?: number
}
