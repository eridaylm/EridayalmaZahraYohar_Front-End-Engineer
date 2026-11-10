import type { Department, DepartmentFilter } from '../types'

export const FILTERS: DepartmentFilter[] = [
  'All',
  'Engineering',
  'Product & Design',
  'Marketing',
  'People & Operations',
]

// class dituliskan utuh supaya terbaca oleh Tailwind
export const DEPARTMENT_BADGE: Record<Department, string> = {
  Engineering: 'bg-sky-50 text-sky-800 ring-sky-200',
  'Product & Design': 'bg-violet-50 text-violet-800 ring-violet-200',
  Marketing: 'bg-amber-50 text-amber-900 ring-amber-200',
  'People & Operations': 'bg-emerald-50 text-emerald-800 ring-emerald-200',
}
