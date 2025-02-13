import { LuLogOut } from 'react-icons/lu'

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
        <span className="text-sm font-semibold text-slate-700">
          Keven Daniel
        </span>
        <span className="truncate text-sm text-slate-500">
          kevendaniel.kd@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto">
        <LuLogOut className="box-content h-5 w-5 rounded-md p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-700" />
      </button>
    </div>
  )
}
