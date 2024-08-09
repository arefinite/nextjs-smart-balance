'use client'
import { Edit2, Loader, Loader2, Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'
import { TableCell, TableRow } from './ui/table'
import { ITransaction } from '@/types/transaction'
import { deleteTransaction } from '@/app/actions/deleteTransaction'
import { toast } from 'sonner'
import { format } from 'date-fns'
import { useState } from 'react'

interface TransactionProps {
  transaction: ITransaction
  index: number
}

const Transaction = ({ transaction, index }: TransactionProps) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const { message, error } = await deleteTransaction(id)
    setIsDeleting(false)
    if (error) {
      toast(error)
      return
    }
    toast(message)
  }
  return (
    <TableRow key={transaction.id}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>
        <Badge
          variant={`${
            transaction.type === 'expense' ? 'destructive' : 'outline'
          }`}
        >
          {transaction.type}
        </Badge>
      </TableCell>
      <TableCell>
        <span className='font-semibold'>${transaction.amount}</span>
      </TableCell>
      <TableCell>
        {format(new Date(transaction.createdAt), 'd MMM, yyyy')}
      </TableCell>
      <TableCell>
        {format(new Date(transaction.createdAt), 'hh:mm a')}
      </TableCell>
      <TableCell className='text-right'>
        <div className='flex justify-end gap-6'>
          <Edit2 size={20} color='green' className='cursor-pointer' />
          {isDeleting ? (
            <Loader2 size={20} color='red' className='animate-spin' />
          ) : (
            <Trash2
              size={20}
              color='red'
              className='cursor-pointer'
              onClick={() => handleDelete(transaction.id)}
            />
          )}
        </div>
      </TableCell>
    </TableRow>
  )
}
export default Transaction
