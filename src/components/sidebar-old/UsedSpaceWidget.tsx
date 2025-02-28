export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-100 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-slate-700 dark:text-slate-300">
          Orders to Ship
        </span>
        <p className="text-sm/5 font-medium text-slate-500 dark:text-slate-400">
          Your store has orders.
        </p>
      </div>

      <div className="h-2 rounded-full bg-slate-400 dark:bg-zinc-100">
        <div className="h-2 w-4/5 rounded-full bg-slate-600 dark:bg-sky-700"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-slate-500 transition hover:text-slate-600 dark:text-zinc-500 dark:hover:text-slate-500"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-zinc-400 dark:hover:text-sky-600"
        >
          Upgrade
        </button>
      </div>
    </div>
  )
}
