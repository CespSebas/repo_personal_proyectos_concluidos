import { CasoDMAIC } from './components/CasoDMAIC'
import { GraficoControl } from './components/GraficoControl'
import { Metricas } from './components/Metricas'
import { Navegacion } from './components/Navegacion'
import { Revelar } from './components/Revelar'
import {
  casos,
  certificaciones,
  educacion,
  experiencia,
  fases,
  habilidades,
  metricas,
  otrosProyectos,
  perfil,
} from './data/contenido'
import './App.css'

// Resalta cifras de impacto dentro de un texto (−30 %, >99 %, 3+, ~2 semanas...).
const CIFRA = /([−~>]?\d+(?:\+)?\s?%|\d+\+|~\d+ semanas)/g

function conCifras(texto: string) {
  return texto.split(CIFRA).map((parte, i) =>
    i % 2 === 1 ? (
      <strong className="cifra" key={i}>
        {parte}
      </strong>
    ) : (
      parte
    ),
  )
}

function Encabezado({ numero, titulo, bajada }: { numero: string; titulo: string; bajada?: string }) {
  return (
    <header className="seccion-encabezado">
      <p className="mono seccion-numero">{numero}</p>
      <h2>{titulo}</h2>
      {bajada && <p className="seccion-bajada">{bajada}</p>}
    </header>
  )
}

function App() {
  return (
    <>
      <a href="#contenido" className="saltar">
        Saltar al contenido
      </a>
      <Navegacion />

      <main id="contenido">
        <section id="inicio" className="hero">
          <div className="hero-texto">
            <p className="mono hero-etiqueta">
              <span className="pulso" aria-hidden="true" /> {perfil.estado} · {perfil.ubicacion}
            </p>
            <h1>
              {perfil.lema.inicio} <em>{perfil.lema.destacado}</em>
            </h1>
            <p className="hero-nombre">
              <strong>{perfil.nombre}</strong> — {perfil.rol}
            </p>
            <p className="hero-resumen">{perfil.resumen}</p>
            <div className="hero-acciones">
              <a href="#casos" className="boton boton-primario">
                Ver casos de estudio
              </a>
              <a href={perfil.github} className="boton" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={perfil.linkedin} className="boton" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <GraficoControl />
        </section>

        <section className="franja-metricas" aria-label="Impacto medido">
          <Metricas metricas={metricas} />
        </section>

        <section id="metodo" className="seccion">
          <Encabezado
            numero="01 / Método"
            titulo="Lean Six Sigma aplicado al software"
            bajada="Antes de escribir código, mido. Cada proyecto sigue el ciclo DMAIC: así el software ataca el cuello de botella correcto y el resultado se puede comprobar."
          />
          <ol className="metodo">
            {fases.map((f, i) => (
              <li key={f.clave}>
                <Revelar retraso={i * 80}>
                  <span className="metodo-letra">{f.clave}</span>
                  <h3>{f.nombre}</h3>
                  <p>{f.pregunta}</p>
                </Revelar>
              </li>
            ))}
          </ol>
        </section>

        <section id="casos" className="seccion">
          <Encabezado
            numero="02 / Casos de estudio"
            titulo="Problemas reales, resultados medibles"
            bajada="Recorre cada caso por sus fases: del problema al resultado que se sostiene."
          />
          <div className="casos">
            {casos.map((caso, i) => (
              <Revelar key={caso.id} retraso={(i % 2) * 100}>
                <CasoDMAIC caso={caso} />
              </Revelar>
            ))}
          </div>
        </section>

        <section id="experiencia" className="seccion">
          <Encabezado numero="03 / Experiencia" titulo="Dónde lo he aplicado" />
          <ol className="linea-tiempo">
            {experiencia.map((e) => (
              <li key={e.empresa} className={e.actual ? 'actual' : undefined}>
                <Revelar>
                  <p className="mono linea-periodo">{e.periodo}</p>
                  <h3>
                    {e.puesto} <span>· {e.empresa}</span>
                  </h3>
                  <ul>
                    {e.logros.map((l) => (
                      <li key={l}>{conCifras(l)}</li>
                    ))}
                  </ul>
                </Revelar>
              </li>
            ))}
          </ol>
        </section>

        <section id="habilidades" className="seccion">
          <Encabezado numero="04 / Habilidades" titulo="Stack y formación" />
          <div className="habilidades">
            {habilidades.map((h) => (
              <div key={h.grupo} className="habilidad-grupo">
                <h3 className="mono">{h.grupo}</h3>
                <ul className="etiquetas">
                  {h.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="formacion">
            <div>
              <h3 className="mono">Educación</h3>
              <p>
                <strong>{educacion.titulo}</strong>
                <br />
                {educacion.institucion} · {educacion.periodo}
              </p>
            </div>
            <div>
              <h3 className="mono">Certificaciones</h3>
              <ul className="certificaciones">
                {certificaciones.map((c) => (
                  <li key={c.nombre}>
                    <span>{c.nombre}</span>
                    <span className="mono">
                      {c.emisor} · {c.anio}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="seccion seccion-compacta" aria-labelledby="otros">
          <h2 id="otros" className="subtitulo mono">
            Otros proyectos
          </h2>
          <ul className="otros">
            {otrosProyectos.map((p) => (
              <li key={p.nombre}>
                <a href={p.enlace} target="_blank" rel="noreferrer">
                  <strong>{p.nombre}</strong>
                  <span>{p.descripcion}</span>
                  <span aria-hidden="true" className="flecha">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="contacto">
          <Revelar>
            <p className="mono">05 / Contacto</p>
            <h2>¿Tu equipo necesita convertir procesos en software?</h2>
            <p>Busco mi próximo rol como desarrollador full-stack o backend. Conversemos.</p>
            <div className="hero-acciones">
              <a href={`mailto:${perfil.email}`} className="boton boton-primario">
                {perfil.email}
              </a>
              <a href={perfil.linkedin} className="boton" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={perfil.github} className="boton" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </Revelar>
        </section>
      </main>

      <footer className="pie mono">
        <span>© 2026 {perfil.nombre}</span>
        <a href="https://github.com/CespSebas/repo_personal_proyectos_concluidos" target="_blank" rel="noreferrer">
          Índice de proyectos en GitHub ↗
        </a>
      </footer>
    </>
  )
}

export default App
