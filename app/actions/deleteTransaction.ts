'use server'
import db from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export const deleteTransaction = async (
  id: string
): Promise<{
  message?: string
  error?: string
}> => {
  const { userId } = auth()
  if (!userId) return { error: 'User not found' }
  try {
    await db.transaction.delete({
      where: {
        id,
        userId,
      },
    })
    revalidatePath('/dashboard')
    return { message: 'Transaction deleted successfully' }
  } catch (err) {
    return { error: 'Something went wrong' }
  }
}
