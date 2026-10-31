import type { ReactNode } from 'react'
import { useEnVista } from '../hooks/useEnVista'

/** Aparece con un desplazamiento suave al entrar en pantalla. */
export function Revelar({ children, retraso = 0 }: { children: ReactNode; retraso?: number }) {
  const [ref, visible] = useEnVista<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`revelar${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${retraso}ms` }}
    >
      {children}
    </div>
  )
}
