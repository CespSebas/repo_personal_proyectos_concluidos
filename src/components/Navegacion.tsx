import { useEffect, useState } from 'react'

type Tema = 'claro' | 'oscuro'

const temaInicial = (): Tema => {
  const guardado = document.documentElement.dataset.tema
  if (guardado === 'claro' || guardado === 'oscuro') return guardado
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro'
}

const ENLACES = [
  { href: '#metodo', texto: 'Método' },
  { href: '#casos', texto: 'Casos' },
  { href: '#experiencia', texto: 'Experiencia' },
  { href: '#habilidades', texto: 'Habilidades' },
]

export function Navegacion() {
  const [tema, setTema] = useState<Tema>(temaInicial)
  const [conSombra, setConSombra] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    try {
      localStorage.setItem('tema', tema)
    } catch {
      // Sin almacenamiento disponible: el tema solo dura esta visita.
    }
  }, [tema])

  useEffect(() => {
    const alDesplazar = () => setConSombra(window.scrollY > 8)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  return (
    <nav className={`navegacion${conSombra ? ' con-sombra' : ''}`} aria-label="Principal">
      <a href="#inicio" className="logo mono" aria-label="Inicio">
        SC<span>.</span>
      </a>
      <ul>
        {ENLACES.map((e) => (
          <li key={e.href}>
            <a href={e.href}>{e.texto}</a>
          </li>
        ))}
      </ul>
      <div className="navegacion-acciones">
        <button
          type="button"
          className="boton-tema"
          onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}
          aria-label={tema === 'claro' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
        >
          {tema === 'claro' ? '◐' : '◑'}
        </button>
        <a href="#contacto" className="boton boton-primario boton-chico">
          Contacto
        </a>
      </div>
    </nav>
  )
}
