import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import '../globals.css'
import { LuPizza } from 'react-icons/lu'

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
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <LuPizza className="h-5 w-5" />
          <span className="font-semibold">GoDash</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; GoDash - {new Date().getFullYear()}{' '}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        {children}
      </div>
    </div>
  )
}
