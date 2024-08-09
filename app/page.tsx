import { Button } from '@/components/ui/button'
import bannerImage from '@/public/banner.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex-1'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Cloud Based Budget Tracker
        </h1>
        <p className='mb-4 tracking-widest'>
          Manage Your Finances Anytime, Anywhere
        </p>
        <p className='leading-7'>
          SmartBudget is a cloud-based budget tracking app designed to simplify
          personal and business finance management. With intuitive tools for
          tracking expenses, setting savings goals, and monitoring financial
          health.
        </p>
        <div className='space-x-2 pt-8'>
          <Button variant='outline'>Explore Feature</Button>
          <Button>Discover Technologies</Button>
        </div>
      </div>
      <div className='flex-1 flex justify-end'>
        <Image src={bannerImage} width={600} alt='Budget Tracker' />
      </div>
    </div>
  )
}
export default page
