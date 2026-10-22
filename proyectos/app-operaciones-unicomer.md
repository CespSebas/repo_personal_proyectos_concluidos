# App de Operaciones — Práctica profesional en Unicomer

> 🔒 **Código privado.** El código fuente pertenece a la empresa y no se publica. Esta ficha describe solo el stack, la arquitectura general y mi rol, sin detalles internos del negocio.

**Estado:** en curso (práctica profesional, 2026)

## Contexto

Migración de una aplicación interna de operaciones, construida originalmente en Power Apps, a una arquitectura web moderna con frontend, API REST y base de datos relacional propias.

## Funcionalidad general

- Evaluaciones operativas de tiendas a partir de plantillas configurables y versionadas
- Cálculo automático de calificación ponderada por secciones
- Registro de evidencias, comentarios y firmas dentro de cada evaluación
- Seguimiento de indicadores de confiabilidad de inventario frente a metas
- Gestión de usuarios con múltiples roles
- Bitácora de auditoría de las acciones realizadas en el sistema

## Stack

**Frontend:** Angular · TypeScript · Vitest
**Backend:** Java 21 · Spring Boot · Spring Security (JWT) · Spring Data JPA · Bean Validation
**Base de datos:** PostgreSQL · migraciones versionadas con Flyway
**Herramientas:** GitLab · Postman · Maven

## Prácticas aplicadas

- Arquitectura modular por dominio (entidad → repositorio → servicio → controlador, con DTOs)
- Autenticación con tokens de corta duración y contraseñas cifradas
- Formato de errores estandarizado y respuestas paginadas
- Esquema de base de datos evolucionado solo mediante migraciones
- Flujo de trabajo con ramas por desarrollador, integración y **Merge Requests con revisión de código** antes de llegar a la rama principal
