import { useMemo, useState } from 'react'
import { roles } from '../data/roles'
import { FILTERS } from '../data/departments'
import type { DepartmentFilter } from '../types'
import EmptyState from './EmptyState'
import FilterBar from './FilterBar'
import RoleGrid from './RoleGrid'

// jumlah per department dihitung sekali, datanya statis
const counts = FILTERS.reduce(
  (acc, name) => {
    acc[name] =
      name === 'All' ? roles.length : roles.filter((r) => r.department === name).length
    return acc
  },
  {} as Record<DepartmentFilter, number>,
)

export default function RoleExplorer() {
  const [department, setDepartment] = useState<DepartmentFilter>('All')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return roles.filter((r) => {
      const matchDept = department === 'All' || r.department === department
      const matchQuery =
        !q ||
        [r.title, r.briefDescription, ...r.tags].join(' ').toLowerCase().includes(q)
      return matchDept && matchQuery
    })
  }, [department, query])

  const isFiltered = department !== 'All' || query.trim() !== ''

  function reset() {
    setDepartment('All')
    setQuery('')
  }

  return (
    <section aria-labelledby="role-explorer-title" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-2xl">
        <h1 id="role-explorer-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Role yang sedang dibuka
        </h1>
        <p className="mt-3 text-slate-600">
          Pilih department untuk melihat posisi yang sesuai dengan minatmu.
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterBar active={department} counts={counts} onChange={setDepartment} />

        <div className="w-full lg:max-w-xs">
          <label htmlFor="role-search" className="sr-only">
            Cari posisi atau skill
          </label>
          <input
            id="role-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari posisi atau skill"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-slate-600">
          Menampilkan {visible.length} posisi
          {department !== 'All' && <> di {department}</>}
        </p>
        {isFiltered && visible.length > 0 && (
          <button
            type="button"
            onClick={reset}
            className="rounded text-sm font-medium text-indigo-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* key bikin animasi fade jalan ulang tiap filter / pencarian berubah */}
      <div key={`${department}|${query}`} className="grid-in mt-4">
        {visible.length > 0 ? (
          <RoleGrid roles={visible} />
        ) : (
          <EmptyState department={department} query={query} onReset={reset} />
        )}
      </div>
    </section>
  )
}
