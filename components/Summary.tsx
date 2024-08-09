import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from './ui/separator'
import { getSummary } from '@/app/actions/getSummary'
import { addCommas } from '@/lib/utils'

const Summary = async () => {
  const { income, expense, error } = await getSummary()
  return (
    <Card className='w-72'>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
        <CardDescription>Summary of Transactions</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between text-center'>
        <div className='text-green-500 flex-1'>
          Income: <p className='font-bold'>${addCommas(income ?? 0)}</p>
        </div>
        <Separator orientation='vertical' className='h-12' />
        <div className='text-red-500 mx-2  flex-1'>
          Expense: <p className='font-bold'>${addCommas(expense ?? 0)}</p>
        </div>
      </CardContent>
    </Card>
  )
}
export default Summary
