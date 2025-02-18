import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
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
  title: 'GoDash',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoSans.variable} ${RobotoMono.variable}antialiased`}
      >
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />

          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
