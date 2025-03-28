import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, X } from 'lucide-react'

export function OrderTablefilters() {
  return (
    <form className="flex flex-col items-start gap-2">
      <span className="text-sm font-semibold">Filtros:</span>

      <div className="flex items-center gap-2">
        <Input placeholder="ID do pedido" className="h-8 w-auto" />
        <Input placeholder="Nome do cliente" className="h-8 w-80" />
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
            <SelectItem value="processing">Preparando</SelectItem>
            <SelectItem value="delivering">Entragando</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" variant="secondary">
          <Search className="mr-2 h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button type="button" variant="outline">
          <X className="mr-2 h-4 w-4" />
          Remover filtros
        </Button>
      </div>
    </form>
  )
}
