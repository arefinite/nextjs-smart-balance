import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { getTransactions } from '@/app/actions/getTransactions'
import Transaction from './Transaction'

const History = async () => {
  const { transactions, error } = await getTransactions()

  return (
    <div className='my-4'>
      <h1 className='text-lg font-bold my-4'>Transaction History</h1>
      <Table className='bg-white dark:bg-black'>
        <TableCaption>A list of your recent transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>SL</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Transaction Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions?.map((transaction, index) => (
            <Transaction transaction={transaction} index={index} key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default History
