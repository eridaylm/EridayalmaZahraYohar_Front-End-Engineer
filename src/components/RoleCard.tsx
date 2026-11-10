import { DEPARTMENT_BADGE } from '../data/departments'
import type { Role } from '../types'

export default function RoleCard({ role }: { role: Role }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-2xs transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#006EFF]/40 hover:shadow-xl hover:shadow-[#006EFF]/8 focus-within:border-[#006EFF]/60 focus-within:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset transition-colors duration-200 ${DEPARTMENT_BADGE[role.department]}`}
        >
          {role.department}
        </span>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
          {role.type}
        </span>
      </div>

      <h3 className="mt-3.5 text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#006EFF]">
        {role.title}
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        {role.location} &middot; {role.experienceLevel} level
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {role.briefDescription}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skill yang dibutuhkan">
        {role.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-slate-200/90 bg-slate-50/70 px-2.5 py-0.5 text-xs font-medium text-slate-600 transition-all duration-200 hover:scale-105 hover:border-[#006EFF]/30 hover:bg-[#006EFF]/5 hover:text-[#006EFF]"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* tombol interaktif */}
      <div className="mt-auto flex gap-2.5 pt-5">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label={`Lihat detail ${role.title}`}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:border-slate-400 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006EFF]"
        >
          Detail
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label={`Lamar sebagai ${role.title}`}
          className="rounded-xl bg-[#006EFF] px-4 py-2 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#005ed9] hover:shadow-md hover:shadow-[#006EFF]/25 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006EFF]"
        >
          Lamar
        </a>
      </div>
    </article>
  )
}
