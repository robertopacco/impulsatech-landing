# Repository Guidelines

## Proyecto y estructura

IMPULSATECH usa Next.js 16 App Router, React 19, TypeScript estricto y CSS nativo. La landing es prioritaria.

- `app/`: rutas, layout, metadata y estilos. `page.tsx` contiene la landing y `globals.css` su sistema visual.
- `components/`: componentes React reutilizables.
- `public/marca/`: identidad gráfica.
- `public/casos/<cliente>/`: fotografías, logos, videos y posters de casos reales.

No versionar `.next/`, `node_modules/` ni archivos generados.

## Principios de implementación

Trabajar mobile-first y preservar el responsive validado salvo indicación explícita. Antes de cambiar una sección, inspeccionar su JSX, estilos y breakpoints. Evitar overflow horizontal, layout shifts y grandes capas de overrides; corregir las reglas existentes.

Mantener código legible, eficiente y con dependencias mínimas; no instalar librerías sin justificación técnica. Usar dos espacios, comillas dobles y punto y coma. Nombrar componentes/archivos en PascalCase, funciones/variables en camelCase y assets en kebab-case. Reservar `"use client"` para código que lo requiera y usar `@/*` en imports.

## Identidad y comunicación comercial

Usar únicamente la paleta oficial: `#0064E8`, `#008FF0`, `#00CFF0` y `#07111B`. No usar morado. Reservar el verde para elementos asociados a la identidad oficial de WhatsApp.

No modificar, regenerar ni sustituir mediante IA fotografías reales de clientes o propietarios. Priorizar:

1. NFC + QR
2. Smart Links & Menús
3. Páginas Web
4. WhatsApp & Chatbots
5. Sistemas para Negocios

Automatizaciones, integraciones e IA son líneas futuras y no deben dominar la landing.

## Accesibilidad y validación

Conservar semántica HTML, teclado, `focus-visible` y `prefers-reduced-motion`. Verificar navegación, CTAs, formularios, videos y responsive en móvil y escritorio. No hay tests automatizados.

Comandos habituales:

- `npm run dev`: servidor local en `http://localhost:3000`.
- `npx tsc --noEmit`: comprobación de tipos.
- `npm run build`: build de producción y validación de Next.js.
- `npm start`: servir el build generado.

## Flujo de trabajo y Git

Antes de cambios importantes, ejecutar `git status` e inspeccionar archivos, implementación y breakpoints relacionados. Después, ejecutar `npx tsc --noEmit` y `npm run build`; finalizar con `git diff` y `git status`.

Nunca ejecutar automáticamente `git commit` ni `git push`; el usuario lo hará tras validar visualmente. Usar mensajes breves orientados a una acción, por ejemplo: `Mejora hero responsive y prueba social`.

## Seguridad y alcance futuro

Nunca escribir API keys, contraseñas, tokens o secretos en archivos versionados; usar variables de entorno para servicios externos.

Se prevé una arquitectura multi-tenant con `impulsatech.pe`, Railway, Supabase y Cloudflare. No implementarla hasta que una tarea lo solicite expresamente.
