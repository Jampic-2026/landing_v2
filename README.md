# Jampic Landing Page

Landing page modular para Jampic, construida con React, Vite y TypeScript.

## Estructura

- `src/`
  - `landing/` - componentes de la landing.
  - `components/` - componentes reutilizables.
  - `config/` - contenido bilingüe y tipos.
  - `App.tsx` - entrada de la aplicación.
  - `main.tsx` - bootstrap de React.
- `globals.css` - base global de Tailwind y estilos mínimos no específicos de secciones.
- `index.html` - punto de entrada para Vite.
- `package.json` - dependencias y scripts.
- `tsconfig.json` - configuración de TypeScript.
- `vite.config.ts` - configuración de Vite.

## Scripts

- `npm install` - instala dependencias.
- `npm run dev` - inicia el servidor de desarrollo.
- `npm run build` - genera la versión de producción.
- `npm run preview` - sirve la compilación de producción localmente.

## Cómo usar

1. Abre la terminal en `landing/`.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Accede a `http://localhost:5173`.

## Contenido bilingüe

El contenido de la landing está centralizado en `src/config/content.ts` y soporta los idiomas:

- `es` (español)
- `en` (inglés)

## Secciones principales

- `Navbar`
- `HeroSection`
- `ProblemSection`
- `SolutionSection`
- `HowItWorksSection`
- `ModulesSection`
- `BenefitsSection`
- `DifferentiatorsSection`
- `TrustSection`
- `FinalCTASection`
- `Footer`

## Notas

- El diseño usa paleta de colores inspirada en salud digital y tonos suaves.
- Se emplean animaciones ligeras con `framer-motion`.
- La landing es responsive y modular para facilitar mantenimiento.
