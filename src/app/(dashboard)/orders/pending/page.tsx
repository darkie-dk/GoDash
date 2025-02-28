import { OrdersTabs } from '@/components/OrdersTabs'
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb'

export default function Pending() {
  return (
    <>
      <h1 className="text-3xl font-medium text-slate-700">Orders</h1>

      <OrdersTabs />

      <div className=""></div>
    </>
  )
}
