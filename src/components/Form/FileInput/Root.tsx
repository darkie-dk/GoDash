'use client'
import {
  createContext,
  ComponentProps,
  useId,
  useContext,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type fileInputContextType = {
  id: string
  files: File[]
  onFileSelected: (files: File[], multiple: boolean) => void
}

const fileInputContext = createContext({} as fileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFileSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <fileInputContext.Provider value={{ id, files, onFileSelected }}>
      <div {...props} />
    </fileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(fileInputContext)
