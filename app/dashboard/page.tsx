import AddOrEditForm from '@/components/AddOrEditForm'
import Balance from '@/components/Balance'
import Charts from '@/components/Charts'
import History from '@/components/History'

const DashboardPage = () => {
  return (
    <main className='mt-8 flex-1'>
      <section className='flex  justify-between gap-4'>
        <div className='space-y-4'>
          <Balance />
          <AddOrEditForm />
        </div>
        <div className='flex-1'>
          <Charts />
          <History />
        </div>
      </section>
    </main>
  )
}
export default DashboardPage
