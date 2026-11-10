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
      className="no-scrollbar flex snap-x items-center gap-2 overflow-x-auto py-1"
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
              'inline-flex h-10 shrink-0 snap-start items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-200 ease-out active:scale-95 cursor-pointer',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              isActive
                ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                : 'border-slate-300/90 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 shadow-2xs',
            ].join(' ')}
          >
            <span>{name}</span>
            <span
              className={[
                'rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums transition-colors duration-200',
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600',
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
