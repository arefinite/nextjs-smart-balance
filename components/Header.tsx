import { HandCoins } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { verifyUser } from '@/lib/verifyUser'

const Header = async () => {
  await verifyUser()
  
  return (
    <header className='h-40 bg-muted-foreground'>
      <section className='container px-0 pt-10 mx-auto flex justify-between'>
        <Link href='/'>
          <h1 className='flex gap-2 text-3xl text-white items-center font-bold'>
            <HandCoins size={30} />
            <span>SmartBudget</span>
          </h1>
        </Link>
        <div className='flex gap-3 items-center'>
          <SignedOut>
            <Link href='/sign-in'>
              <Button variant='default' size='sm'>
                Sign In
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button variant='outline' size='sm'>
                Sign Up
              </Button>
            </Link>
          </SignedOut>
          <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </section>
    </header>
  )
}
export default Header
