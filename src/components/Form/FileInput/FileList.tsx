'use client'

import { useFileInput } from './Root'
import { LuCloudUpload, LuTrash2 } from 'react-icons/lu'
import { formatBytes } from '@/utils/format-bytes'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-slate-200 p-4"
          >
            <div className="rounded-full border-4 border-sky-150 bg-sky-200 p-2 text-sky-700">
              <LuCloudUpload className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-700">
                  {file.name}
                </span>
                <span className="text-sm text-slate-500">
                  {formatBytes(file.size)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-sky-150">
                  <div className="h-2 w-4/5 rounded-full bg-sky-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">80%</span>
              </div>
            </div>
            <button type="button" className="ml-auto">
              <LuTrash2 className="box-content h-5 w-5 rounded-md p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-700" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
