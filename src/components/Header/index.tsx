import { Separator } from '../ui/separator'
import { ChefHat, Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { NavLink } from '../NavLink'
import { ThemeToggle } from '../Theme/theme-toggle'
import { AccountMenu } from '../AccountMenu'
import { SidebarTrigger } from '../ui/sidebar'

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex h-16 items-center gap-6 border-b px-6">
        <div className="flex items-center">
          <Pizza />
          <SidebarTrigger />
        </div>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/app">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink href="/app/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
          <NavLink href="/app/orders/pending">
            <ChefHat className="h-4 w-4" />
            Cardápio
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
