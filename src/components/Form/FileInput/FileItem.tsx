import { Button } from '@/components/Button'
import { formatBytes } from '@/utils/format-bytes'
import { LuCloudUpload, LuTrash2 } from 'react-icons/lu'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-slate-200 p-4',
    icon: 'rounded-full border-4 border-sky-150 bg-sky-200 p-2 text-sky-700',
    deleteFileButton: '',
  },

  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-sky-300',
      },
      error: {
        container: ' border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteFileButton:
          'border-error-200 bg-error-50 text-error-600 hover:bg-error-100',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteFileButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <LuCloudUpload className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-rose-700">
              {' '}
              Upload Failed, please try again
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>
          <Button
            variant="outline"
            type="button"
            className="hover:text-border-500 border-orange-200 bg-orange-50 text-orange-600 shadow-none hover:bg-orange-100"
          >
            Try again...
          </Button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">{name}</span>
            <span className="text-sm text-slate-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-sky-150">
              <div
                className="h-2 w-4/5 rounded-full bg-sky-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium text-slate-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      <Button variant="ghost" type="button" className={deleteFileButton()}>
        <LuTrash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
