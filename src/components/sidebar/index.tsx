'use client'

import { Logo } from './logo'
import { GoStack, GoSearch } from 'react-icons/go'
import { NavItem } from './NavItem'
import { FiCheckSquare } from 'react-icons/fi'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineContactSupport } from 'react-icons/md'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'
import { LuChartColumnIncreasing, LuFlag, LuUsers } from 'react-icons/lu'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { Menu } from 'lucide-react'

export function Sidebar() {
  return (
    <Collapsible.Root className="lg:w-70 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-slate-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <GoSearch className="h-5 w-5 text-slate-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={IoHomeOutline} />
          <NavItem title="Dashboard" icon={LuChartColumnIncreasing} />
          <NavItem title="Projects" icon={GoStack} />
          <NavItem title="Tasks" icon={FiCheckSquare} />
          <NavItem title="Reporting" icon={LuFlag} />
          <NavItem title="Users" icon={LuUsers} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={MdOutlineContactSupport} />
            <NavItem title="Settings" icon={HiOutlineCog6Tooth} />
          </nav>
        </div>

        <UsedSpaceWidget />

        <div className="h-px bg-slate-200"></div>
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
