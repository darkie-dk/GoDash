'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  Line,
  XAxis,
  CartesianGrid,
} from 'recharts'

import colors from 'tailwindcss/colors'

const data = [
  { data: '10/12', revenue: 1200 },
  { data: '11/12', revenue: 800 },
  { data: '12/12', revenue: 900 },
  { data: '13/12', revenue: 600 },
  { data: '14/12', revenue: 1100 },
  { data: '15/12', revenue: 1300 },
  { data: '16/12', revenue: 1600 },
  { data: '17/12', revenue: 1200 },
  { data: '18/12', revenue: 2100 },
  { data: '19/12', revenue: 1900 },
  { data: '20/12', revenue: 1100 },
]

export function RevenueChart() {
  return (
    <>
      <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">
              Receita no periodo
            </CardTitle>
            <CardDescription></CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data} style={{ fontSize: 12 }}>
              <XAxis dataKey="data" axisLine={false} tickLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />

              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="revenue"
                stroke={colors.green['400']}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  )
}
