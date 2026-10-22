import './App.css'

interface Project {
  name: string
  description: string
  stack: string[]
  repo: string
  linkLabel?: string
  badge?: string
}

const projects: Project[] = [
  {
    name: 'App de Operaciones — Unicomer',
    description:
      'Práctica profesional: migración de una app interna de Power Apps a una arquitectura web con evaluaciones operativas, roles y auditoría.',
    stack: ['Angular', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway'],
    repo: 'https://github.com/CespSebas/repo_personal_proyectos_concluidos/blob/main/proyectos/app-operaciones-unicomer.md',
    linkLabel: 'Ver ficha del proyecto →',
    badge: 'Código privado · En curso',
  },
  {
    name: 'Carnices',
    description:
      'Sistema full-stack de gestión para carnicería: catálogo de productos, pedidos y reseñas.',
    stack: ['Angular', 'Node.js/Express', 'Prisma', 'MySQL'],
    repo: 'https://github.com/CespSebas/carnices-showcase',
  },
  {
    name: 'Panel de Facturas CARNICES',
    description:
      'Automatización del ciclo completo de facturación electrónica de Hacienda (Costa Rica): XML → PDF → envío por correo.',
    stack: ['Python', 'watchdog', 'IMAP/SMTP', 'PyInstaller'],
    repo: 'https://github.com/CespSebas/panel-facturas-carnices',
  },
  {
    name: 'Comercializadora Caces de Oro',
    description:
      'Sitio web de catálogo para un negocio de aderezos y productos artesanales, con marca asociada.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/CespSebas/comercializadora-caces-de-oro-showcase',
  },
]

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Sebastián Céspedes</h1>
          <p>
            Full-Stack Developer · Ingeniero de Software · Backend &amp; Automatización
          </p>
        </div>
        <div id="hero-links">
          <a href="mailto:sc163876@gmail.com">Email</a>
          <a href="https://github.com/CespSebas" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="projects">
        <h2>Proyectos destacados</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              {project.badge && <span className="badge">{project.badge}</span>}
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="stack-tags">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a href={project.repo} target="_blank" rel="noreferrer">
                {project.linkLabel ?? 'Ver repositorio →'}
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
