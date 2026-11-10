export type Department =
  | 'Engineering'
  | 'Product & Design'
  | 'Marketing'
  | 'People & Operations'

export type DepartmentFilter = 'All' | Department

export type RoleType = 'Full-time' | 'Internship'
export type RoleLocation = 'Remote' | 'Hybrid' | 'Jakarta'
export type ExperienceLevel = 'Entry' | 'Mid' | 'Senior'

export interface Role {
  id: string
  title: string
  department: Department
  type: RoleType
  location: RoleLocation
  experienceLevel: ExperienceLevel
  briefDescription: string
  tags: string[]
}
