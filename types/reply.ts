export interface ReplyDto {
  userName: string
  orgName?: string
  title?: string
  content?: string
}

export interface UpdateReplyDto {
  userName?: string
  orgName?: string
  title?: string
  content?: string
}
