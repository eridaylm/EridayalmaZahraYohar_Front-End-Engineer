import { FILTERS } from '../data/departments'
import type { DepartmentFilter } from '../types'

interface Props {
  active: DepartmentFilter
  counts: Record<DepartmentFilter, number>
  onChange: (value: DepartmentFilter) => void
}

export default function FilterBar({ active, counts, onChange }: Props) {
  return (
    <div
      role="group"
      aria-label="Filter berdasarkan department"
      className="no-scrollbar flex snap-x items-center gap-2 overflow-x-auto py-1.5"
    >
      {FILTERS.map((name) => {
        const isActive = name === active
        return (
          <button
            key={name}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(name)}
            className={[
              'inline-flex h-10 shrink-0 snap-start items-center gap-2 rounded-full border px-4 text-sm font-medium',
              'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              isActive
                ? 'border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-[1.02]'
                : 'border-slate-300/80 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-xs active:scale-95 active:translate-y-0',
            ].join(' ')}
          >
            <span>{name}</span>
            <span
              className={[
                'rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                isActive ? 'bg-white/20 text-white scale-105' : 'bg-slate-100 text-slate-600',
              ].join(' ')}
            >
              {counts[name]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
