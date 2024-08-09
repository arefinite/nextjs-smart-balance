'use server'
import db from '@/lib/db'
import { ITransaction } from '@/types/transaction'
import { auth } from '@clerk/nextjs/server'


export const getTransactions = async (): Promise<{
  transactions?: ITransaction[]
  error?: string
}> => {
  const { userId } = auth()
  if (!userId) return { error: 'User not found' }
  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
    return { transactions }

  } catch (err) {
    return { error: 'Something went wrong' }
  }
}
