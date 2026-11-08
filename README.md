# Proyectos — Sebastián Céspedes

Índice de mis proyectos. Los que tienen código público enlazan a su repositorio; los privados tienen una ficha breve con stack y funcionalidad, sin código ni datos.

## Código público

| Proyecto | Descripción | Stack | Ficha |
|---|---|---|---|
| [Carnices](https://github.com/CespSebas/carnices-showcase) | Sistema full-stack de gestión para emprendimiento | Angular · Node.js · Prisma · MySQL | [ver](proyectos/carnices.md) |
| [Panel de Facturas](https://github.com/CespSebas/panel-facturas-carnices) | Automatización de la facturación electrónica de Hacienda | Python · watchdog · IMAP/SMTP | [ver](proyectos/panel-facturas-carnices.md) |
| [Comercializadora Caces de Oro](https://github.com/CespSebas/comercializadora-caces-de-oro-showcase) | Sitio web de catálogo para una empresa | HTML · CSS · JavaScript | [ver](proyectos/comercializadora-caces-de-oro.md) |

## Código privado (solo ficha)

| Proyecto | Descripción | Stack | Ficha |
|---|---|---|---|
| App de Operaciones — Unicomer | Práctica profesional (en curso): migración de una app interna a arquitectura web | Angular · Java 21 · Spring Boot · PostgreSQL | [ver](proyectos/app-operaciones-unicomer.md) |
| Motor de reglas de promociones | Proyecto personal: reglas de promociones y reportes de margen | C# · .NET · SQL Server | [ver](proyectos/motor-promociones.md) |
| E-commerce con panel multi-rol | Proyecto universitario: portal con roles y despliegue en Docker | Angular · NestJS · Docker | [ver](proyectos/ecommerce-multirol.md) |
| Análisis de datos retail | Prueba técnica: estacionalidad, cohortes y experimento A/B | Python · DuckDB · SciPy | [ver](proyectos/analisis-datos-retail.md) |

## Estructura del repositorio

```
proyectos/   una ficha por proyecto (mismo formato para todos)
src/         sitio web del portafolio (Vite + React + TypeScript)
  data/contenido.ts   todo el texto del sitio (perfil, casos DMAIC, experiencia)
  components/         piezas de la interfaz
```

Para ver el sitio localmente:

```bash
npm install
npm run dev
```
