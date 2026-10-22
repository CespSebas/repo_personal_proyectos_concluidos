const REPO_INDICE = 'https://github.com/CespSebas/repo_personal_proyectos_concluidos/blob/main/proyectos'

export interface Proyecto {
  nombre: string
  descripcion: string
  stack: string[]
  ficha: string
  repo?: string
  estado?: string
}

export const proyectosPublicos: Proyecto[] = [
  {
    nombre: 'Carnices',
    descripcion: 'Sistema full-stack de gestión para emprendimiento: catálogo, pedidos y reseñas.',
    stack: ['Angular', 'Node.js', 'Prisma', 'MySQL'],
    ficha: `${REPO_INDICE}/carnices.md`,
    repo: 'https://github.com/CespSebas/carnices-showcase',
  },
  {
    nombre: 'Panel de Facturas',
    descripcion: 'Automatización de la facturación electrónica de Hacienda: XML a PDF y envío por correo.',
    stack: ['Python', 'watchdog', 'IMAP/SMTP', 'PyInstaller'],
    ficha: `${REPO_INDICE}/panel-facturas-carnices.md`,
    repo: 'https://github.com/CespSebas/panel-facturas-carnices',
  },
  {
    nombre: 'Comercializadora Caces de Oro',
    descripcion: 'Sitio web de catálogo para una empresa y su marca asociada.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    ficha: `${REPO_INDICE}/comercializadora-caces-de-oro.md`,
    repo: 'https://github.com/CespSebas/comercializadora-caces-de-oro-showcase',
  },
]

export const proyectosPrivados: Proyecto[] = [
  {
    nombre: 'App de Operaciones — Unicomer',
    descripcion: 'Práctica profesional: migración de una app interna a arquitectura web.',
    stack: ['Angular', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway'],
    ficha: `${REPO_INDICE}/app-operaciones-unicomer.md`,
    estado: 'En curso',
  },
  {
    nombre: 'Análisis de datos retail',
    descripcion: 'Prueba técnica: estacionalidad, cohortes de retención y experimento A/B.',
    stack: ['Python', 'DuckDB', 'SciPy', 'Jupyter'],
    ficha: `${REPO_INDICE}/analisis-datos-retail.md`,
  },
]
