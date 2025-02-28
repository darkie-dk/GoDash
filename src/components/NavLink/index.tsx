'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export type NavLinkProps = PropsWithChildren<LinkProps>

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-active={pathname === props.href}
      className="flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
      {...props}
    >
      {children}
    </Link>
  )
}
