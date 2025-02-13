'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function OrdersTabs() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="">
        <TabsTrigger value="pending" asChild>
          <a href="/orders/pending">Pendente</a>
        </TabsTrigger>
        <TabsTrigger value="completed">Concluidas</TabsTrigger>
        <TabsTrigger value="canceled">Canceladas</TabsTrigger>
        <TabsTrigger value="all">Geral</TabsTrigger>
      </TabsList>
      <TabsContent value="pending">Estes são os pedidos pendentes.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}
