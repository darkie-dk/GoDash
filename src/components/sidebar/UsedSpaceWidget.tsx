export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-100 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-slate-700">
          Orders to Ship
        </span>
        <p className="text-sm/5 font-medium text-slate-500">
          Your store has orders.
        </p>
      </div>

      <div className="h-2 rounded-full bg-slate-400">
        <div className="h-2 w-4/5 rounded-full bg-slate-600"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-slate-500 hover:text-slate-600"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-slate-700 hover:text-blue-600"
        >
          Upgrade
        </button>
      </div>
    </div>
  )
}
