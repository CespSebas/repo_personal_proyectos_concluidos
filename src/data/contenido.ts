// Todo el texto del sitio vive aquí. Los componentes solo lo presentan.

const FICHAS = 'https://github.com/CespSebas/repo_personal_proyectos_concluidos/blob/main/proyectos'

export const perfil = {
  nombre: 'Sebastián Céspedes',
  rol: 'Desarrollador de Software Full-Stack · Backend y Automatización de Procesos',
  lema: { inicio: 'Convierto cuellos de botella', destacado: 'en software.' },
  estado: 'Abierto a oportunidades de empleo',
  resumen:
    'Más de 4 años creando soluciones para retail, automatización financiera y servicios digitales. Aplico Lean Six Sigma (Green Belt) para encontrar dónde se pierde el tiempo y construyo el software que lo elimina.',
  ubicacion: 'Grecia, Costa Rica',
  email: 'sc163876@gmail.com',
  github: 'https://github.com/CespSebas',
  linkedin: 'https://www.linkedin.com/in/sebasti%C3%A1n-c%C3%A9spedes',
}

export interface Metrica {
  valor: number
  prefijo?: string
  sufijo: string
  etiqueta: string
}

export const metricas: Metrica[] = [
  { valor: 30, prefijo: '−', sufijo: '%', etiqueta: 'operaciones manuales por área' },
  { valor: 99, prefijo: '>', sufijo: '%', etiqueta: 'disponibilidad en herramientas de gestión' },
  { valor: 40, sufijo: '%', etiqueta: 'más rápido detectando errores de precio' },
  { valor: 4, sufijo: '+ h/mes', etiqueta: 'de conciliación manual eliminadas' },
]

export type FaseDMAIC = 'D' | 'M' | 'A' | 'I' | 'C'

export const fases: { clave: FaseDMAIC; nombre: string; pregunta: string }[] = [
  { clave: 'D', nombre: 'Definir', pregunta: '¿Cuál es el problema real?' },
  { clave: 'M', nombre: 'Medir', pregunta: '¿Cuánto cuesta hoy?' },
  { clave: 'A', nombre: 'Analizar', pregunta: '¿Dónde está el cuello de botella?' },
  { clave: 'I', nombre: 'Mejorar', pregunta: '¿Qué software lo resuelve?' },
  { clave: 'C', nombre: 'Controlar', pregunta: '¿Cómo se sostiene el resultado?' },
]

export interface Caso {
  id: string
  titulo: string
  contexto: string
  periodo: string
  resultado: string
  pasos: Record<FaseDMAIC, string>
  stack: string[]
  repo?: string
  ficha?: string
}

export const casos: Caso[] = [
  {
    id: 'facturacion',
    titulo: 'Facturación electrónica automatizada',
    contexto: 'Proyecto empresarial',
    periodo: 'Ene – Mar 2026',
    resultado: '100 % automático · cero revisión manual · −4 h/mes',
    pasos: {
      D: 'Los comprobantes electrónicos de Hacienda llegaban como XML y se revisaban y concilaban a mano.',
      M: 'Más de 4 horas al mes dedicadas solo a conciliación, sin trazabilidad de cada comprobante.',
      A: 'El tiempo se perdía en abrir, validar y cruzar cada XML por separado.',
      I: 'Pipeline en Python que detecta comprobantes en tiempo real, los procesa con lxml y XSLT y valida la firma digital.',
      C: 'Dashboards de flujo de caja y alertas de vencimiento en Google Sheets vía OAuth 2.0, con trazabilidad total.',
    },
    stack: ['Python 3.11', 'lxml', 'XSLT', 'watchdog', 'Google Sheets API', 'OAuth 2.0'],
    repo: 'https://github.com/CespSebas/panel-facturas-carnices',
    ficha: `${FICHAS}/panel-facturas-carnices.md`,
  },
  {
    id: 'promociones',
    titulo: 'Motor de reglas de promociones',
    contexto: 'Proyecto personal · cadena de supermercados',
    periodo: 'Ago – Dic 2025',
    resultado: 'Errores de precio detectados 40 % más rápido',
    pasos: {
      D: 'Las promociones se gestionaban 100 % a mano en hojas de cálculo.',
      M: 'Los errores de precio se detectaban tarde y obligaban a correcciones de último minuto en el piso de venta.',
      A: 'La lógica de negocio estaba mezclada con los datos, sin validaciones entre reglas.',
      I: 'Motor de reglas en C# con Repository y Unit of Work sobre SQL Server 2019, e interfaz WinForms.',
      C: 'Reportes de margen en SQL Server; el equipo de operaciones adoptó la herramienta sin capacitación formal.',
    },
    stack: ['C#', '.NET Framework 4.8', 'SQL Server 2019', 'WinForms', 'Repository', 'Unit of Work'],
    ficha: `${FICHAS}/motor-promociones.md`,
  },
  {
    id: 'ecommerce',
    titulo: 'E-commerce con panel multi-rol',
    contexto: 'Proyecto universitario',
    periodo: 'Ene – Jun 2025',
    resultado: 'Catálogo 60 % más ágil · despliegue de horas a < 10 min',
    pasos: {
      D: 'Se necesitaba un portal de venta con roles diferenciados y buen posicionamiento SEO.',
      M: 'Los despliegues manuales tomaban horas.',
      A: 'Responsabilidades mezcladas y un proceso de despliegue sin automatizar.',
      I: 'Arquitectura NestJS modular (productos, pedidos, usuarios, auth), Angular 17 y autenticación JWT multi-rol.',
      C: 'Contenedores Docker en producción para despliegues repetibles en menos de 10 minutos.',
    },
    stack: ['Angular 17', 'NestJS', 'TypeScript', 'Prisma', 'MySQL', 'JWT', 'Docker'],
    ficha: `${FICHAS}/ecommerce-multirol.md`,
  },
  {
    id: 'carnices',
    titulo: 'Sistema de gestión para emprendimiento',
    contexto: 'Carnices · en curso',
    periodo: '2025 – actualidad',
    resultado: 'Catálogo, pedidos y reseñas en un solo sistema',
    pasos: {
      D: 'El catálogo, los pedidos y las reseñas del negocio no estaban en un sistema común.',
      M: 'Se levantó el catálogo por categoría, tipo de carne, presentación y características.',
      A: 'Clientes y administración necesitaban vistas y permisos distintos sobre los mismos datos.',
      I: 'Aplicación full-stack: Angular con panel administrativo separado y API Node.js/Express con Prisma.',
      C: 'Despliegue en Railway y Netlify para mantener la aplicación disponible y actualizable.',
    },
    stack: ['Angular 20', 'Angular Material', 'Node.js', 'Express', 'Prisma', 'MySQL'],
    repo: 'https://github.com/CespSebas/carnices-showcase',
    ficha: `${FICHAS}/carnices.md`,
  },
]

export interface Experiencia {
  puesto: string
  empresa: string
  periodo: string
  actual?: boolean
  logros: string[]
}

export const experiencia: Experiencia[] = [
  {
    puesto: 'Desarrollador de Software (práctica profesional)',
    empresa: 'Grupo Unicomer',
    periodo: 'Sep 2026 – actualidad',
    actual: true,
    logros: [
      'Lidero un proyecto para el área de Operaciones con Angular, Java y PostgreSQL, de requerimientos a entrega.',
      'Desarrollo integraciones y consumo de servicios REST, con migraciones de base de datos mediante Flyway y Maven.',
      'Traduzco procesos de Operaciones en funcionalidades, priorizando con Lean Six Sigma los flujos de mayor impacto.',
    ],
  },
  {
    puesto: 'Desarrollador de Soluciones Tecnológicas',
    empresa: 'Comercializadora Caces de Oro',
    periodo: '2023 – 2025',
    logros: [
      'Diseñé e implementé 3+ soluciones web a medida: −30 % de operaciones manuales por área y ciclos de entrega ~2 semanas más cortos por sprint.',
      'Mantuve >99 % de disponibilidad con GitHub, CI/CD en GitLab y Docker, sin errores de despliegue manual.',
      'Documenté arquitecturas e integraciones: ~50 % menos tiempo de incorporación por proyecto.',
    ],
  },
]

export const habilidades: { grupo: string; items: string[] }[] = [
  { grupo: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C#', 'SQL'] },
  { grupo: 'Frontend', items: ['Angular', 'React', 'Next.js', 'HTML', 'CSS'] },
  { grupo: 'Backend', items: ['Java', 'NestJS', 'Node.js', '.NET', 'REST APIs', 'JWT', 'OAuth 2.0'] },
  { grupo: 'Datos', items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'Prisma', 'Flyway'] },
  { grupo: 'DevOps', items: ['Docker', 'GitLab CI/CD', 'Maven', 'Git', 'Jest', 'Postman'] },
  { grupo: 'Automatización', items: ['Python', 'Power Automate', 'XML / XSLT', 'Google APIs'] },
]

export const certificaciones: { nombre: string; emisor: string; anio: string }[] = [
  { nombre: 'Lean Six Sigma Green Belt', emisor: 'MoreSteam', anio: '2025' },
  { nombre: 'Google Data Analytics Professional Certificate', emisor: 'Google', anio: '2025' },
  { nombre: 'Data Science Essentials with Python', emisor: 'Cisco', anio: '2026' },
  { nombre: 'JavaScript Essentials 1 y 2', emisor: 'Cisco', anio: '2024 – 2025' },
  { nombre: 'Introduction to Cybersecurity', emisor: 'Cisco', anio: '2024' },
]

export const educacion = {
  titulo: 'Bachillerato en Ingeniería de Software',
  institucion: 'Universidad Técnica Nacional (UTN)',
  periodo: '2022 – 2026',
}

export const otrosProyectos: { nombre: string; descripcion: string; enlace: string }[] = [
  {
    nombre: 'Comercializadora Caces de Oro',
    descripcion: 'Sitio web de catálogo para una empresa y su marca asociada.',
    enlace: 'https://github.com/CespSebas/comercializadora-caces-de-oro-showcase',
  },
  {
    nombre: 'Análisis de datos retail',
    descripcion: 'Estacionalidad, cohortes de retención y experimento A/B con SQL y estadística.',
    enlace: `${FICHAS}/analisis-datos-retail.md`,
  },
  {
    nombre: 'App de Operaciones — Unicomer',
    descripcion: 'Migración de una app interna a arquitectura web (código privado).',
    enlace: `${FICHAS}/app-operaciones-unicomer.md`,
  },
]
