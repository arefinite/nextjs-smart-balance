'use server'
import { auth } from '@clerk/nextjs/server'
import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
interface ITransaction {
  type: string
  amount: number
  description: string
}

interface ITransactionResponse {
  data?: ITransaction
  error?: string
}

export const addTransaction = async (
  formData: FormData
): Promise<ITransactionResponse> => {
  const type = formData.get('type')?.toString() as string
  const amount = Number(formData.get('amount')?.toString()) as number
  const description = formData.get('description')?.toString() as string
  if (!type || !amount || !description) {
    return { error: 'Please fill all the fields' }
  }
  const { userId } = auth()
  if (!userId) {
    return { error: 'User not found' }
  }
  try {
    await db.transaction.create({
      data: {
        type,
        amount,
        description,
        userId,
      },
    })
    revalidatePath('/dashboard')
    return { data: { type, amount, description } }
  } catch (err) {
    return { error: 'Something went wrong' }
  }
}
