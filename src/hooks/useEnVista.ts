import { useEffect, useRef, useState } from 'react'

/** Devuelve `true` la primera vez que el elemento entra en pantalla. */
export function useEnVista<T extends Element>(margen = '0px 0px -10% 0px') {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento || visible) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { rootMargin: margen },
    )
    observador.observe(elemento)
    return () => observador.disconnect()
  }, [margen, visible])

  return [ref, visible] as const
}

export const prefiereMenosMovimiento = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
