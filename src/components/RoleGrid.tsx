import type { Role } from '../types'
import RoleCard from './RoleCard'

export default function RoleGrid({ roles }: { roles: Role[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {roles.map((role, idx) => (
        <li
          key={role.id}
          className="card-stagger h-full"
          style={{ animationDelay: `${Math.min(idx * 45, 360)}ms` }}
        >
          <RoleCard role={role} />
        </li>
      ))}
    </ul>
  )
}
