'use server'
import db from '@/lib/db'
import { auth } from '@clerk/nextjs/server'


export const getBalance = async (): Promise<{
  balance?: number
  error?: string
}> => {
  const { userId } = auth()
  if (!userId) return { error: 'User not found' }
  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    })
    const balance = transactions.reduce((acc, curr) => {
      if (curr.type === 'income') return acc + curr.amount
      return acc - curr.amount
    }, 0)
    return { balance }

  } catch (err) {
    return { error: 'Something went wrong' }
  }
}
