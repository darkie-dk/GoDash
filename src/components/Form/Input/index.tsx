import type { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div className="" {...props}></div>
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-slate-700 placeholder-slate-600 outline-none dark:text-slate-200 dark:placeholder-slate-400"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="box-border flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md transition focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-500/40 dark:border-zinc-700 dark:bg-zinc-800"
      {...props}
    />
  )
}
