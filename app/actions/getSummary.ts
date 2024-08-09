'use server'
import db from '@/lib/db'
import { auth } from '@clerk/nextjs/server'


export const getSummary = async (): Promise<{
  income?: number
  expense?: number
  error?: string
}> => {
  const { userId } = auth()
  if (!userId) return { error: 'User not found' }
  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    })
    const income = transactions.reduce((acc, curr) => {
      if (curr.type === 'income') return acc + curr.amount
      return acc
    }, 0)
    const expense = transactions.reduce((acc, curr) => {
      if (curr.type === 'expense') return acc + curr.amount
      return acc
    }, 0)
    return { income, expense }
  } catch (err) {
    return { error: 'Something went wrong' }
  }
}
