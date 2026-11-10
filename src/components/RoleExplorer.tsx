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
    <section aria-labelledby="role-explorer-title" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
          </span>
          Sekolah Karir Career Hub
        </div>
        <h1 id="role-explorer-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Role yang sedang dibuka
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Pilih department atau gunakan fitur pencarian untuk menemukan posisi yang sesuai dengan minat dan keahlianmu.
        </p>
      </header>

      {/* Control Bar: Filter Pills sejajar dengan Search Bar */}
      <div className="mt-8 flex flex-col gap-3.5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 flex-1 overflow-hidden">
          <FilterBar active={department} counts={counts} onChange={setDepartment} />
        </div>

        <div className="relative w-full md:w-60 lg:w-72 shrink-0">
          <label htmlFor="role-search" className="sr-only">
            Cari posisi atau skill
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <svg
              className="h-4 w-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="role-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari posisi atau skill..."
            className="h-10 w-full rounded-full border border-slate-300/90 bg-white pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs transition-all duration-200 hover:border-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus-visible:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Hapus pencarian"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm font-medium text-slate-600">
          Menampilkan <span className="font-semibold text-slate-900">{visible.length}</span> posisi
          {department !== 'All' && <> di <span className="text-slate-900">{department}</span></>}
        </p>
        {isFiltered && visible.length > 0 && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span>Reset filter</span>
          </button>
        )}
      </div>

      {/* key membuat animasi fade jalan ulang tiap filter / pencarian berubah */}
      <div key={`${department}|${query}`} className="grid-in mt-5">
        {visible.length > 0 ? (
          <RoleGrid roles={visible} />
        ) : (
          <EmptyState department={department} query={query} onReset={reset} />
        )}
      </div>
    </section>
  )
}
