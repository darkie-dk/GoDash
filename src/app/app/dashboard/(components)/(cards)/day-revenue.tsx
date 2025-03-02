import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function DayRevenueCard() {
  return (
    <>
      <Card>
        <CardHeader className="items-start gap-1 space-y-0 pb-4">
          <div className="flex w-full flex-row items-center justify-between">
            <CardTitle className="flex justify-between text-lg font-semibold">
              Receita Diária
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            Dia em Reais (R$)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">R$ 1274,56</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">+2%</span>{' '}
            em relação a ontem
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  )
}
