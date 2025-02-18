import type { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm border',
    'focus-visible:ring-1 focus-visible:ring-sky-300',
    'active:opacity-80 transition-all',
  ],
  variants: {
    variant: {
      primary: 'bg-sky-600 text-white hover:border-sky-500 ',
      outline: ' border-slate-200 text-slate-800 shadow-md hover:bg-slate-50',
      ghost: 'rounded-md px-2 hover:bg-slate-50 shadow-none text-slate-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, ...props })} />
}
