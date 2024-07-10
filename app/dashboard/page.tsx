import { Card } from '@/app/ui/dashboard/cards'
import RevenueChart from '../ui/dashboard/revenue-chart'
import LatestInvoices from '../ui/dashboard/latest-invoices'
import { lusitana } from '../ui/fonts'
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../lib/data'

export default async function Page() {
    const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, TotalPendingInvoices } = await fetchCardData

    const  revenue  = await fetchRevenue();
    const  latestInvoices = await fetchLatestInvoices();
    return(
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <Card title="Revenue" value={totalPaidInvoices} type='collected'/>
            <Card title="Invoices" value={TotalPendingInvoices} type='pending' />
            <Card title="Total Invoices" value={numberOfInvoices} type='invoices' />
            <Card title="Total Customers" value={numberOfCustomers} type='customers' />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
      </main>
    )
    
}