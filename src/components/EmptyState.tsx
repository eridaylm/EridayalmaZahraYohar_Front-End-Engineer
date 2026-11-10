import type { DepartmentFilter } from '../types'

interface Props {
  department: DepartmentFilter
  query: string
  onReset: () => void
}

export default function EmptyState({ department, query, onReset }: Props) {
  const q = query.trim()

  const title = q
    ? `Tidak ada posisi yang cocok dengan “${q}”`
    : `Belum ada lowongan di ${department}`
  const hint = q
    ? 'Coba kata kunci lain, atau tampilkan semua department.'
    : 'Posisi baru akan muncul di sini saat dibuka. Sementara itu, lihat department lain.'

  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-12 w-12 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-600">{hint}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Reset filter
      </button>
    </div>
  )
}
