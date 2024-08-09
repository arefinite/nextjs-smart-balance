export interface ITransaction {
  id: string
  userId: string
  description: string
  amount: number
  type: string
  createdAt: Date
}
