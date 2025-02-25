'use client'
import { LuCloudUpload } from 'react-icons/lu'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-slate-300 px-3 py-4 text-center text-slate-500 shadow-sm transition hover:border-sky-150 hover:bg-slate-25 dark:border-zinc-700 dark:text-slate-400 dark:hover:border-sky-700 dark:hover:bg-slate-900/50 dark:hover:text-slate-300"
    >
      <span className="rounded-full border-6 border-slate-50 bg-slate-100 p-2 transition-all group-hover:border-sky-50 group-hover:bg-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-sky-700 dark:group-hover:bg-slate-800">
        <LuCloudUpload className="h-5 w-5 text-sky-700 group-hover:text-sky-600 dark:group-hover:text-sky-600" />
      </span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-sky-600 dark:text-sky-500">
            Click to Upload
          </span>{' '}
          or drag and drop.
        </span>
        <span className="text-xs">SVG, PNG OR JPEG (max. 800x400)</span>
      </div>
    </label>
  )
}
