import { LuLogOut } from 'react-icons/lu'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/darkie-dk.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Keven Daniel
        </span>
        <span className="truncate text-sm text-slate-500 dark:text-slate-400">
          kevendaniel.kd@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button" className="ml-auto">
        <LuLogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}
