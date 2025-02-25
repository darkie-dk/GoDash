'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export function OrdersTabs() {
  return (
    <Tabs defaultValue="account" className="">
      <ScrollArea className="w-full rounded-md p-4">
        <TabsList className="">
          <TabsTrigger value="pending">
            {/* <a href="/orders/pending"> */}
            Pendente
            {/* </a> */}
          </TabsTrigger>
          <TabsTrigger value="completed">Concluidas</TabsTrigger>
          <TabsTrigger value="canceled">Canceladas</TabsTrigger>
          <TabsTrigger value="all">Geral</TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="pending">Estes são os pedidos pendentes.</TabsContent>
      <TabsContent value="canceled">Change your password here.</TabsContent>
    </Tabs>
  )
}
