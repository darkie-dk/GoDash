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
      className="flex-1 border-0 bg-transparent p-0 text-slate-900 placeholder-slate-600"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="box-border flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md"
      {...props}
    />
  )
}
