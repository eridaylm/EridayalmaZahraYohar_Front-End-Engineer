import type { Role } from '../types'

// Mock data. People & Operations sengaja dikosongkan untuk memperlihatkan empty state.
export const roles: Role[] = [
  {
    id: 'eng-frontend',
    title: 'Front-End Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hybrid',
    experienceLevel: 'Mid',
    briefDescription:
      'Membangun antarmuka web yang cepat dan mudah diakses untuk produk belajar kami.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'eng-backend',
    title: 'Back-End Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    experienceLevel: 'Senior',
    briefDescription:
      'Merancang API dan layanan yang menopang platform dengan ribuan pengguna aktif.',
    tags: ['Node.js', 'PostgreSQL', 'REST'],
  },
  {
    id: 'eng-qa-intern',
    title: 'QA Engineer Intern',
    department: 'Engineering',
    type: 'Internship',
    location: 'Jakarta',
    experienceLevel: 'Entry',
    briefDescription:
      'Menulis test case, menemukan bug sebelum rilis, dan membantu tim menjaga kualitas.',
    tags: ['Testing', 'Cypress', 'Bug Triage'],
  },
  {
    id: 'eng-devops',
    title: 'DevOps Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    experienceLevel: 'Mid',
    briefDescription:
      'Mengelola pipeline CI/CD dan infrastruktur cloud agar rilis berjalan mulus.',
    tags: ['Docker', 'GitHub Actions', 'AWS'],
  },
  {
    id: 'pd-product-manager',
    title: 'Product Manager',
    department: 'Product & Design',
    type: 'Full-time',
    location: 'Jakarta',
    experienceLevel: 'Senior',
    briefDescription:
      'Menentukan prioritas produk berdasarkan data dan kebutuhan nyata pengguna.',
    tags: ['Roadmap', 'Analytics', 'Discovery'],
  },
  {
    id: 'pd-ux-designer',
    title: 'UI/UX Designer',
    department: 'Product & Design',
    type: 'Full-time',
    location: 'Hybrid',
    experienceLevel: 'Mid',
    briefDescription:
      'Mengubah masalah pengguna menjadi alur dan antarmuka yang jelas dan konsisten.',
    tags: ['Figma', 'User Research', 'Design System'],
  },
  {
    id: 'pd-design-intern',
    title: 'Product Design Intern',
    department: 'Product & Design',
    type: 'Internship',
    location: 'Remote',
    experienceLevel: 'Entry',
    briefDescription:
      'Membantu tim desain membuat wireframe, prototipe, dan aset untuk fitur baru.',
    tags: ['Figma', 'Wireframing', 'Prototyping'],
  },
  {
    id: 'mkt-content',
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Jakarta',
    experienceLevel: 'Mid',
    briefDescription:
      'Menulis konten edukatif yang membantu calon peserta memahami arah kariernya.',
    tags: ['Copywriting', 'SEO', 'Content Plan'],
  },
  {
    id: 'mkt-social-intern',
    title: 'Social Media Intern',
    department: 'Marketing',
    type: 'Internship',
    location: 'Hybrid',
    experienceLevel: 'Entry',
    briefDescription:
      'Mengelola kalender konten harian dan memantau performa kanal media sosial.',
    tags: ['Instagram', 'Canva', 'Reporting'],
  },
]
