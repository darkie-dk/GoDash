import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Roboto_Mono } from 'next/font/google'
import '../globals.css'
import { Sidebar } from '@/components/sidebar'

const RobotoSans = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const RobotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'GoDash app',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
      <Sidebar />

      <main className="maxwsc px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
        {children}
      </main>
    </div>
  )
}
