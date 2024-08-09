import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const AddOrUpdateButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button className='mt-4 flex gap-2' disabled={pending}>
      {pending && <Loader2 size={20} className='animate-spin' />}
      {pending ? 'Adding Transaction' : 'Add Transaction'}
    </Button>
  )
}
export default AddOrUpdateButton
