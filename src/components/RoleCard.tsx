import { DEPARTMENT_BADGE } from '../data/departments'
import type { Role } from '../types'

export default function RoleCard({ role }: { role: Role }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-within:border-slate-300 focus-within:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${DEPARTMENT_BADGE[role.department]}`}
        >
          {role.department}
        </span>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
          {role.type}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
        {role.title}
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        {role.location} &middot; {role.experienceLevel} level
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {role.briefDescription}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skill yang dibutuhkan">
        {role.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* tombol masih placeholder, belum terhubung ke halaman detail / form */}
      <div className="mt-auto flex gap-2 pt-5">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label={`Lihat detail ${role.title}`}
          className="rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Detail
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label={`Lamar sebagai ${role.title}`}
          className="rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Lamar
        </a>
      </div>
    </article>
  )
}
