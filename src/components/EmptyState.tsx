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
    ? 'Coba kata kunci lain, atau reset filter untuk menampilkan semua posisi.'
    : 'Posisi baru akan muncul di sini saat dibuka. Sementara itu, kamu bisa mengecek departemen lain.'

  return (
    <div className="empty-appear flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center shadow-xs backdrop-blur-xs">
      <div className="animate-float rounded-2xl bg-slate-100 p-4 text-slate-400">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-10 w-10 text-slate-500"
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
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-slate-600">{hint}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-xs transition-all duration-150 hover:bg-slate-800 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Reset filter</span>
      </button>
    </div>
  )
}
