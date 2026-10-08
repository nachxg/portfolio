# Portfolio de Nacho

## Para qué existe este proyecto

1. Portfolio personal: conseguir clientes freelance y postularme a trabajos remotos. Lo voy a linkear desde los proyectos que hago para clientes.
2. **Proyecto de aprendizaje.** Lo uso para aprender en serio Next.js (App Router), TypeScript y Tailwind, y para aprender a trabajar con Claude Code. No es para "vibe codear" un portfolio: si entrego algo que no entiendo, el proyecto falló aunque se vea bien.

Contexto: `BRIEF.md` (objetivo, contenido, alcance) y `DESIGN.md` (sistema visual). Las referencias visuales están en `design-refs/`.

## Lo que más me cuesta y quiero aprender

Siempre armé proyectos freelance "como salía", sin estructura pensada. Me cuesta reconocer cuándo algo debería ser un componente reutilizable y cómo organizar un proyecto para que escale. Con este proyecto quiero aprender eso:

- **Estructura de carpetas**: qué va en `app/`, `components/`, `lib/`, `content/`, `types/`, etc., y por qué esa separación.
- **Maquetado**: layouts, composición de secciones y cómo pensar una página antes de escribirla.
- **Reutilización**: cuándo extraer un componente, cuándo NO (abstraer de más también es error), cómo diseñar sus props, variantes vs. componentes distintos, composición con `children`.

Para eso, en cada tarea:

- Antes de escribir una sección, **desarmala conmigo**: qué partes tiene, cuáles se repiten en el sitio y cuáles serían componentes reutilizables.
- Si ves código repetido o algo que debería ser componente, **señalalo** y explicame la señal que lo delata, para que aprenda a verlo solo.
- Si yo armo algo mal estructurado, **no lo arregles en silencio**: decime qué está mal y por qué.

## Cómo quiero que trabajes conmigo

- **Hablame en español rioplatense**, directo y sin relleno.
- **Explicá el porqué, no solo el qué.** Cuando crees o cambies algo, decime:
  - dónde va y por qué va ahí (estructura de carpetas, convención de Next);
  - qué alternativas había y por qué elegiste esta;
  - qué concepto de Next/TS/Tailwind estoy viendo (Server vs Client Component, tipos genéricos, `@theme`, etc.).
- **Antes de cambios grandes, proponé un plan y esperá mi OK.** Nada de reescribir varios archivos de una.
- **Cambios chicos y revisables.** Una tarea = un componente o una sección.
- **Si algo que yo escribí está mal o es mala práctica, decímelo** aunque no te lo haya preguntado. Prefiero corrección honesta a validación.
- Cuando haya una decisión de diseño real (una estructura de datos, cómo tipar algo, cómo manejar un error), **dejámela a mí**: explicame las opciones y que la escriba yo.
- No instales dependencias sin preguntarme y justificar por qué no alcanza con lo que ya hay.

## Stack

- Next.js (App Router) + TypeScript (strict) + Tailwind CSS
- Deploy: Vercel
- Backend: dentro del mismo proyecto Next (Route Handlers / Server Actions). Ver "Fases" en `BRIEF.md`.

## Convenciones de código

- TypeScript estricto: nada de `any`. Si no sabés el tipo, preguntá o usá `unknown` y estrechalo.
- Server Components por defecto. `"use client"` solo cuando haga falta (estado, eventos, APIs del navegador) y en el componente hoja más chico posible.
- Componentes: un componente por archivo, nombre en PascalCase, props tipadas con `type Props = {...}`.
- Estilos: solo Tailwind, usando los tokens del tema (`bg-ink`, `text-lime`, etc.) y nunca colores hardcodeados (`bg-[#123456]`). Si falta un token, se agrega al tema.
- Accesibilidad no negociable: HTML semántico, `alt` en imágenes (vacío si es decorativa), foco visible, contraste AA, respetar `prefers-reduced-motion`, navegable con teclado.
- Las ilustraciones decorativas llevan `aria-hidden="true"`.

## Git

- `main` siempre deployable: no se commitea directo a `main`.
- Una rama por tarea: `feat/hero`, `fix/navbar-mobile`, `chore/limpiar-deps`, `refactor/tokens`.
- Commits con Conventional Commits, en español: `feat: agrega sección de proyectos`, `fix: corrige contraste del botón`. Chicos y con un solo propósito.
- Merge a `main` vía Pull Request en GitHub (aunque trabaje solo), para tener preview deploy de Vercel por rama.
- Antes de commitear: `npm run lint` y `npm run build` sin errores.
- Nunca hagas `push`, `merge` ni borres ramas sin que te lo pida.

## Comandos

<!-- /init va a completar esta sección con los comandos reales del proyecto -->
