'use client'
import { useRef } from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { addTransaction } from '@/app/actions/addTransaction'
import { toast } from 'sonner'
import AddOrUpdateButton from './AddOrUpdateButton'

const AddOrEditForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const submitForm = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData)
    if (error) {
      toast(error)
    } else {
      toast('Transaction added successfully')
      formRef.current?.reset()
    }
  }
  return (
    <div>
      <Card className='w-72'>
        <CardHeader>
          <CardTitle>Add Income/Expense</CardTitle>
          <CardDescription>Enter your transaction details</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            action={submitForm}
            className=' flex gap-3 flex-col'
          >
            <Select name='type'>
              <SelectTrigger className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                <SelectValue placeholder='Select Type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='expense'>Expense</SelectItem>
                <SelectItem value='income'>Income</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder='Enter'
              className='focus-visible:ring-0 focus-visible:ring-offset-0'
              name='description'
            />
            <Input
              type='number'
              placeholder='Enter Amount'
              className='focus-visible:ring-0 focus-visible:ring-offset-0'
              name='amount'
            />
            <AddOrUpdateButton />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
export default AddOrEditForm
