import type { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-1 focus-visible:ring-sky-300',
    'active:opacity-80 transition-all',
  ],
  variants: {
    variant: {
      primary:
        'bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-700 dark:text-slate-200 dark:hover:bg-sky-600',
      outline:
        ' border-slate-200 text-slate-800 dark:border-zinc-700 dark:border dark:text-slate-300 dark:hover:bg-slate-800 shadow-md hover:bg-slate-50',
      ghost:
        'rounded-md px-2 hover:bg-slate-50 shadow-none text-slate-500 dark:hover:bg-zinc-800 dark:text-slate-400',
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
