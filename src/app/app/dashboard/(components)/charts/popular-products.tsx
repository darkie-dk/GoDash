'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from 'lucide-react'

import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  { product: 'pizza', qtd: 10 },
  { product: 'burguer', qtd: 21 },
  { product: 'esfiha', qtd: 7 },
  { product: 'shawarma', qtd: 13 },
  { product: 'combo', qtd: 18 },
]

const COLORS = [
  colors.sky['500'],
  colors.rose['500'],
  colors.green['500'],
  colors.indigo['500'],
  colors.amber['500'],
]

export function PopularProductsChart() {
  return (
    <>
      <Card className="col-span-3">
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              Produtos populares
            </CardTitle>
            <BarChart className="w4 h4" />
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={data}
                dataKey="qtd"
                cx="50%"
                cy="50%"
                outerRadius={86}
                innerRadius={64}
                strokeWidth={6}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {data[index].product.length > 12
                        ? data[index].product.substring(0, 12).concat('...')
                        : data[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
                labelLine={false}
              >
                {data.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="stroke-background"
                    ></Cell>
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  )
}
