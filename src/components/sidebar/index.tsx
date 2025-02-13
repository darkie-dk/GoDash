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

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-slate-200 px-5 py-8">
      <Logo />

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
    </aside>
  )
}
