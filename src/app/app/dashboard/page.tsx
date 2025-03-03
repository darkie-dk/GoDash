import { DayOrdersAmountCard } from './(components)/(cards)/day-orders'
import { DayRevenueCard } from './(components)/(cards)/day-revenue'
import { MonthOrdersAmountCard } from './(components)/(cards)/month-orders'
import { MonthRevenueCard } from './(components)/(cards)/month-revenue'
import { PopularProductsChart } from './(components)/charts/popular-products'
import { RevenueChart } from './(components)/charts/revenue'

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-2 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayRevenueCard />
          <DayOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
