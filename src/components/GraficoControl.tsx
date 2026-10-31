import { useEnVista } from '../hooks/useEnVista'

// Datos ilustrativos: un proceso con mucha variación que se estabiliza tras la mejora.
const ANTES = [60, 34, 74, 47, 86, 40, 63, 24, 77, 52, 90, 44]
const DESPUES = [57, 53, 56, 58, 52, 55, 54, 57, 53, 56, 55, 54]
const LIMITES_ANTES = { superior: 82, inferior: 28 }
const LIMITES_DESPUES = { superior: 64, inferior: 46 }
const CENTRO = 55

const ANCHO = 560
const ALTO = 300
const X0 = 40
const X1 = 500
const Y0 = 40
const Y1 = 260

const y = (v: number) => Y1 - (v / 100) * (Y1 - Y0)
const total = ANTES.length + DESPUES.length
const x = (i: number) => X0 + 16 + (i * (X1 - X0 - 32)) / (total - 1)
const corte = (x(ANTES.length - 1) + x(ANTES.length)) / 2

const puntos = [...ANTES, ...DESPUES].map((v, i) => {
  const limites = i < ANTES.length ? LIMITES_ANTES : LIMITES_DESPUES
  return { cx: x(i), cy: y(v), fuera: v > limites.superior || v < limites.inferior, i }
})

export function GraficoControl() {
  const [ref, visible] = useEnVista<HTMLElement>()

  return (
    <figure className={`grafico-control${visible ? ' visible' : ''}`} ref={ref}>
      <figcaption>
        <span className="mono">Gráfico de control · tiempo del proceso</span>
        <span className="leyenda">
          <i className="punto fuera" /> fuera de control
          <i className="punto dentro" /> bajo control
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${ANCHO} ${ALTO}`}
        role="img"
        aria-label="Gráfico de control: antes de la mejora el proceso varía mucho y tiene puntos fuera de los límites; después, los puntos quedan estables dentro de límites más estrechos."
      >
        <rect className="zona-despues" x={corte} y={Y0} width={X1 - corte} height={Y1 - Y0} />

        <line className="limite" x1={X0} x2={corte} y1={y(LIMITES_ANTES.superior)} y2={y(LIMITES_ANTES.superior)} />
        <line className="limite" x1={X0} x2={corte} y1={y(LIMITES_ANTES.inferior)} y2={y(LIMITES_ANTES.inferior)} />
        <line className="limite estrecho" x1={corte} x2={X1} y1={y(LIMITES_DESPUES.superior)} y2={y(LIMITES_DESPUES.superior)} />
        <line className="limite estrecho" x1={corte} x2={X1} y1={y(LIMITES_DESPUES.inferior)} y2={y(LIMITES_DESPUES.inferior)} />
        <line className="centro" x1={X0} x2={X1} y1={y(CENTRO)} y2={y(CENTRO)} />
        <line className="corte" x1={corte} x2={corte} y1={Y0 - 14} y2={Y1} />

        <text className="etiqueta" x={(X0 + corte) / 2} y={Y0 - 18} textAnchor="middle">antes</text>
        <text className="etiqueta" x={(corte + X1) / 2} y={Y0 - 18} textAnchor="middle">después</text>
        <text className="etiqueta acento" x={corte + 6} y={Y1 - 6}>mejora</text>
        <text className="etiqueta" x={X1 + 8} y={y(CENTRO) + 4}>CL</text>
        <text className="etiqueta" x={X1 + 8} y={y(LIMITES_DESPUES.superior) + 4}>UCL</text>
        <text className="etiqueta" x={X1 + 8} y={y(LIMITES_DESPUES.inferior) + 4}>LCL</text>

        <polyline
          className="serie"
          pathLength={1}
          points={puntos.map((p) => `${p.cx},${p.cy}`).join(' ')}
        />
        {puntos.map((p) => (
          <circle
            key={p.i}
            className={`dato ${p.fuera ? 'fuera' : p.i >= ANTES.length ? 'dentro' : ''}`}
            cx={p.cx}
            cy={p.cy}
            r={p.fuera ? 5.5 : 4}
            style={{ transitionDelay: `${300 + p.i * 55}ms` }}
          />
        ))}
      </svg>
    </figure>
  )
}
