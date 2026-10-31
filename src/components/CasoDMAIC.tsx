import { useRef, useState, type KeyboardEvent } from 'react'
import { fases, type Caso, type FaseDMAIC } from '../data/contenido'

export function CasoDMAIC({ caso }: { caso: Caso }) {
  const [activa, setActiva] = useState<FaseDMAIC>('D')
  const botones = useRef<(HTMLButtonElement | null)[]>([])
  const indice = fases.findIndex((f) => f.clave === activa)
  const fase = fases[indice]

  const seleccionar = (i: number) => {
    const siguiente = (i + fases.length) % fases.length
    setActiva(fases[siguiente].clave)
    botones.current[siguiente]?.focus()
  }

  const alTeclear = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') seleccionar(indice + 1)
    else if (e.key === 'ArrowLeft') seleccionar(indice - 1)
    else if (e.key === 'Home') seleccionar(0)
    else if (e.key === 'End') seleccionar(fases.length - 1)
    else return
    e.preventDefault()
  }

  return (
    <article className="caso" aria-labelledby={`caso-${caso.id}`}>
      <header className="caso-encabezado">
        <p className="caso-contexto mono">
          {caso.contexto} · {caso.periodo}
        </p>
        <h3 id={`caso-${caso.id}`}>{caso.titulo}</h3>
        <p className="caso-resultado">
          <span aria-hidden="true">✓</span> {caso.resultado}
        </p>
      </header>

      <div className="dmaic" role="tablist" aria-label={`Fases DMAIC de ${caso.titulo}`} onKeyDown={alTeclear}>
        <span className="dmaic-progreso" style={{ width: `${(indice / (fases.length - 1)) * 100}%` }} />
        {fases.map((f, i) => (
          <button
            key={f.clave}
            ref={(el) => {
              botones.current[i] = el
            }}
            role="tab"
            id={`tab-${caso.id}-${f.clave}`}
            aria-selected={f.clave === activa}
            aria-controls={`panel-${caso.id}`}
            tabIndex={f.clave === activa ? 0 : -1}
            className={`dmaic-paso${i <= indice ? ' hecho' : ''}${f.clave === activa ? ' activo' : ''}`}
            onClick={() => setActiva(f.clave)}
          >
            <span className="dmaic-letra">{f.clave}</span>
            <span className="dmaic-nombre">{f.nombre}</span>
          </button>
        ))}
      </div>

      <div
        className="dmaic-panel"
        role="tabpanel"
        id={`panel-${caso.id}`}
        aria-labelledby={`tab-${caso.id}-${activa}`}
        key={activa}
      >
        <p className="dmaic-pregunta mono">{fase.pregunta}</p>
        <p>{caso.pasos[activa]}</p>
      </div>

      <footer className="caso-pie">
        <ul className="etiquetas">
          {caso.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="caso-enlaces">
          {caso.repo ? (
            <a href={caso.repo} target="_blank" rel="noreferrer">
              Código →
            </a>
          ) : (
            <span className="privado">Código privado</span>
          )}
          {caso.ficha && (
            <a href={caso.ficha} target="_blank" rel="noreferrer">
              Ficha →
            </a>
          )}
        </div>
      </footer>
    </article>
  )
}
