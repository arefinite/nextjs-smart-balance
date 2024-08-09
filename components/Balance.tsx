import { getBalance } from '@/app/actions/getBalance'
import { addCommas } from '@/lib/utils'
import { currentUser } from '@clerk/nextjs/server'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import Summary from './Summary'

const Balance = async () => {
  const user = await currentUser()
  const { balance, error } = await getBalance()
  return (
    <div className='space-y-4'>
      <Alert>
        <AlertTitle>
          <p className='text-lg'>
            Welcome, <span className='font-bold'>{user?.fullName}</span>
          </p>
        </AlertTitle>
        <AlertDescription>
          <p>
            Your current balance is :{' '}
            <span className='font-bold'> ${addCommas(balance ?? 0)}</span>
          </p>
        </AlertDescription>
      </Alert>

      <Summary />
    </div>
  )
}
export default Balance
