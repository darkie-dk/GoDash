'use client'
import { LuUser } from 'react-icons/lu'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 dark:bg-sky-800/10">
          <LuUser className="h-8 w-8 text-slate-700 dark:text-sky-700" />
        </div>
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full border-2 border-sky-300 object-cover"
      />
    )
  }
}
