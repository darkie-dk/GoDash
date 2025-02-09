import { ElementType } from 'react'
import { LuChevronDown } from 'react-icons/lu'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <nav className="space-y-0.5">
      <a
        href=""
        className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-slate-100"
      >
        <Icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400" />
        <span className="font-medium text-slate-700 group-hover:text-blue-900">
          {title}
        </span>
        <LuChevronDown className="ml-auto h-5 w-5 text-slate-400 group-hover:text-blue-400" />
      </a>
    </nav>
  )
}
