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
