import { useEffect, useState } from 'react'
import type { Metrica } from '../data/contenido'
import { prefiereMenosMovimiento, useEnVista } from '../hooks/useEnVista'

function Contador({ metrica, activo }: { metrica: Metrica; activo: boolean }) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!activo) return
    if (prefiereMenosMovimiento()) {
      setValor(metrica.valor)
      return
    }
    const duracion = 1200
    const inicio = performance.now()
    let cuadro = 0
    const paso = (ahora: number) => {
      const t = Math.min((ahora - inicio) / duracion, 1)
      const suavizado = 1 - Math.pow(1 - t, 3)
      setValor(Math.round(metrica.valor * suavizado))
      if (t < 1) cuadro = requestAnimationFrame(paso)
    }
    cuadro = requestAnimationFrame(paso)
    return () => cancelAnimationFrame(cuadro)
  }, [activo, metrica.valor])

  return (
    <span className="metrica-valor">
      {metrica.prefijo}
      {valor}
      <small>{metrica.sufijo}</small>
    </span>
  )
}

export function Metricas({ metricas }: { metricas: Metrica[] }) {
  const [ref, visible] = useEnVista<HTMLUListElement>('0px')
  return (
    <ul className="metricas" ref={ref}>
      {metricas.map((m) => (
        <li key={m.etiqueta}>
          <Contador metrica={m} activo={visible} />
          <span className="metrica-etiqueta">{m.etiqueta}</span>
        </li>
      ))}
    </ul>
  )
}
