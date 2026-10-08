# Portfolio — Nacho

Portfolio personal con panel de administración integrado.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Estilos:** Tailwind CSS + shadcn/ui
- **DB:** Supabase (PostgreSQL)
- **ORM:** Prisma
- **Auth:** NextAuth.js
- **Deploy:** Vercel

## Secciones públicas

- **Hero** — nombre, tagline, intro rápida
- **Sobre mí** — descripción personal y enfoque profesional
- **Stack/Tecnologías** — herramientas que uso
- **Proyectos** — lista con preview + página de detalle por proyecto
- **Contacto** — formulario funcional que manda mail + links a redes
- **CV** — descargable en PDF

## Panel de administración (`/admin`)

- Login con NextAuth (solo yo)
- CRUD de proyectos: crear, editar, eliminar
- Accesible solo con sesión autenticada

## Estructura de carpetas (objetivo)

```
src/
├── app/
│   ├── (public)/          # rutas públicas (home, proyectos, etc.)
│   ├── admin/             # panel de administración
│   └── api/               # API routes (auth, proyectos, contacto)
├── components/
│   ├── ui/                # componentes de shadcn (auto-generados)
│   ├── layout/            # Navbar, Footer, etc.
│   └── sections/          # secciones del home (Hero, About, Projects...)
├── lib/                   # utilidades, config de Prisma, NextAuth, etc.
└── types/                 # tipos TypeScript compartidos
```

## Principios de desarrollo

- Componentes pequeños, con una sola responsabilidad
- Diseño mobile-first
- TypeScript estricto desde el arranque
- shadcn/ui como base de componentes, sin reinventar la rueda
- Primero funciona, después se pule

## Roadmap

- [ ] Setup inicial (Next.js + Git + Supabase + Prisma)
- [ ] Layout base (Navbar + Footer)
- [ ] Secciones públicas estáticas
- [ ] Integración con DB (proyectos dinámicos)
- [ ] Panel admin + auth
- [ ] Formulario de contacto (mail)
- [ ] CV descargable
- [ ] Deploy en Vercel
- [ ] Diseño / polish visual