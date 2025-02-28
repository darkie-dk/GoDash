import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import '../globals.css'
import { AppSidebar } from '@/components/Sidebar'
import Header from '@/components/Header'
import { SidebarProvider } from '@/components/ui/sidebar'

export const metadata: Metadata = {
  title: 'GoDash',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-screen w-full flex-col">
        <Header />

        <div className="flex flex-1 flex-col gap-4 p-8 pt-6">{children}</div>
      </main>
    </SidebarProvider>
  )
}
