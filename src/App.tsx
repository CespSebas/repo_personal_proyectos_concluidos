import { proyectosPrivados, proyectosPublicos, type Proyecto } from './data/proyectos'
import './App.css'

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="project-card">
      <span className="badge">
        {proyecto.repo ? 'Código público' : 'Código privado'}
        {proyecto.estado && ` · ${proyecto.estado}`}
      </span>
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <ul className="stack-tags">
        {proyecto.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="card-links">
        {proyecto.repo && (
          <a href={proyecto.repo} target="_blank" rel="noreferrer">
            Repositorio →
          </a>
        )}
        <a href={proyecto.ficha} target="_blank" rel="noreferrer">
          Ficha →
        </a>
      </div>
    </article>
  )
}

function SeccionProyectos({ titulo, proyectos }: { titulo: string; proyectos: Proyecto[] }) {
  return (
    <section className="projects">
      <h2>{titulo}</h2>
      <div className="project-grid">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto proyecto={proyecto} key={proyecto.nombre} />
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Sebastián Céspedes</h1>
          <p>Full-Stack Developer · Ingeniero de Software · Backend &amp; Automatización</p>
        </div>
        <div id="hero-links">
          <a href="mailto:sc163876@gmail.com">Email</a>
          <a href="https://github.com/CespSebas" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <div className="ticks"></div>
      <SeccionProyectos titulo="Proyectos con código público" proyectos={proyectosPublicos} />
      <div className="ticks"></div>
      <SeccionProyectos titulo="Proyectos con código privado" proyectos={proyectosPrivados} />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
