import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OrderTableRow } from './(components)/Order/table-row'
import { OrderTablefilters } from './(components)/Order/table-filters'
import { Pagination } from '@/components/Pagination'

export default function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTablefilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-14"></TableHead>
                  <TableHead className="w-28">Indentificador</TableHead>
                  <TableHead className="w-36">Realizado há</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-40">Total </TableHead>
                  <TableHead className="w-36">Fonte</TableHead>
                  <TableHead className="w-36"></TableHead>
                  <TableHead className="w-32"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={26} perPage={10} />
        </div>
      </div>
    </>
  )
}
