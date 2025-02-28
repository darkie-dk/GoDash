import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

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
  title: 'GoDash Login',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${RobotoSans.variable} ${RobotoMono.variable} antialiased`}
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  )
}
