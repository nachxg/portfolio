# Brief — Portfolio

## Objetivo
- Conseguir clientes freelance (PyMEs, consultoras) **y** postularme a trabajos remotos.
- Linkearlo desde mi CV y desde los sitios que hago para clientes (ej: Grupo 2R, futuro Ztrans).
- Dos lectores distintos:
  - **Cliente**: quiere ver qué problema le resolví a otro negocio y cómo contactarme.
  - **Recruiter / dev**: quiere ver stack, código, criterio técnico y buen manejo de accesibilidad y performance.
- Idioma: español primero. Inglés como segunda fase (pensar la estructura para que agregarlo no implique reescribir).

## Contenido

### Proyectos
Criterio: **3 proyectos fuertes valen más que 6 flojos.** Cada proyecto se presenta como caso: problema → qué hice → stack → resultado → links.

| Proyecto | Estado | Decisión |
|---|---|---|
| Grupo 2R (cliente real) | Online | Caso principal |
| Este portfolio | En construcción | Caso: Next + TS + Tailwind + panel admin propio. Es el proyecto que mejor muestra lo técnico |
| Proyecto de curso con explicación, sin URL | Sin deploy | Incluir solo si se puede deployar o mostrar con repo + capturas + explicación |
| Proyecto de curso caído | Caído | Revivirlo y deployarlo en Vercel, o sacarlo. Un link roto resta |

### Secciones (v1)
1. Hero / presentación (**ya hecho, se mantiene**)
2. Proyectos
3. Sobre mí + stack
4. Contacto

## Alcance

### v1: sitio estático bien hecho
- Contenido de proyectos en archivos TypeScript tipados (`src/content/projects.ts`).
- Foco: estructura, componentes reutilizables, tema de Tailwind, accesibilidad, deploy en Vercel.

### v2: mini backend
- Panel `/admin` protegido para cargar y editar proyectos.
- Base de datos: Postgres en **Supabase** (DB + login + storage de imágenes en un solo servicio, plan gratis).
- Los tipos de v1 se reutilizan como modelo de datos, así que la migración es natural.

### Fuera de alcance por ahora
- Blog, CMS externo, animaciones pesadas, inglés.
