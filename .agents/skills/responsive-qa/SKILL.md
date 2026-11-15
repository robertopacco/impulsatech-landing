---
name: responsive-qa
description: "Audita de forma repetible la calidad responsive y visual de una sección o página web en el repositorio IMPULSATECH. Usar cuando se pida revisar desktop, tablet o mobile; validar carruseles, overflow, wrapping, estados de navegación, elementos fixed, hover/touch, accesibilidad responsive o aprobar visualmente una sección antes de commit. Por defecto es solo auditoría: inspecciona código, ejecuta validaciones técnicas y revisa evidencia visual disponible, pero no modifica archivos salvo que el usuario pida explícitamente corregir/fix."
---

# Responsive QA

## Objetivo

Auditar una sección o página sin alterar el código por defecto. Detectar regresiones responsive, separar evidencia técnica de evidencia visual y emitir un veredicto reproducible.

Leer primero `AGENTS.md` del repositorio y respetar sus reglas. Usar la matriz de `references/viewports.md` y el formato de `references/report-template.md`.

## Modo de operación

- **Audit-only por defecto:** no editar archivos, no instalar dependencias, no hacer commit ni push.
- **Fix mode solo por orden explícita:** si el usuario pide `corrige`, `fix`, `arregla` o equivalente, primero completar la auditoría, identificar la causa y después modificar únicamente el alcance necesario.
- No interpretar una petición de “revisar”, “validar”, “QA” o “auditar” como permiso para editar.

## Flujo obligatorio

1. **Definir el alcance**
   - Identificar la sección, componente o página objetivo.
   - Si el alcance ya está claro por contexto, no pedir confirmación.
   - Registrar los viewports relevantes. Usar los defaults de IMPULSATECH si el usuario no especifica otros.

2. **Inspeccionar el estado del repositorio**
   - Ejecutar `git status --short`.
   - Revisar `git diff --check`.
   - Inspeccionar únicamente los archivos relacionados con el objetivo y sus breakpoints.
   - Distinguir cambios del usuario de artefactos generados.

3. **Auditar implementación responsive**
   Revisar, según aplique:
   - `overflow-x`, anchos mínimos/máximos y contenido fuera del viewport.
   - wrapping de títulos, descripciones, CTA, iconos y flechas.
   - grid/flex, `min-width: 0`, gaps, paddings y alineación.
   - breakpoints y transición mobile → tablet → desktop.
   - elementos `position: fixed` o `sticky` contra contenido y viewport.
   - carruseles: snap, centrado, primer/último ítem, controles y estados disabled.
   - hover solo en `@media (hover: hover) and (pointer: fine)` cuando corresponda.
   - experiencia touch sin dependencia de hover.
   - `focus-visible`, navegación por teclado y `prefers-reduced-motion`.
   - layout shift o cambios de tamaño provocados por hover/focus.

4. **Ejecutar validaciones técnicas**
   En Windows/PowerShell preferir:
   - `npx.cmd tsc --noEmit`
   - `npm.cmd run build`
   - `git diff --check`
   - `git status --short`

   Si `tsconfig.tsbuildinfo` cambia únicamente como artefacto de TypeScript y ya era un archivo rastreado, restaurarlo al estado previo solo si eso no elimina cambios intencionales del usuario.

5. **Revisar evidencia visual**
   - Si existe navegador visual, inspeccionar el objetivo en los viewports definidos.
   - Si el usuario adjunta screenshots o video, usarlos como evidencia visual.
   - Si no existe capacidad visual ni evidencia adjunta, **no afirmar que el diseño pasó visualmente**. Marcar esos puntos como `NOT VERIFIED` y decir exactamente qué debe comprobarse manualmente.
   - No inferir PASS visual solo porque TypeScript/build pasan.

6. **Clasificar hallazgos**
   - `PASS`: comprobado y correcto.
   - `WARNING`: usable, sin bloqueo, pero existe riesgo o detalle mejorable.
   - `FAIL`: regresión funcional/visual, overflow, contenido inaccesible o comportamiento incorrecto.
   - `NOT VERIFIED`: no existe evidencia suficiente para comprobarlo.

7. **Emitir veredicto**
   - **APROBAR**: 0 FAIL y ningún NOT VERIFIED crítico.
   - **APROBAR CON OBSERVACIONES**: 0 FAIL y solo warnings no bloqueantes.
   - **NO APROBAR**: existe al menos un FAIL o falta una verificación crítica para el alcance solicitado.

## Reglas de evidencia

- Citar archivo/selectores relevantes cuando el hallazgo provenga del código.
- Indicar viewport exacto cuando el hallazgo sea visual.
- No afirmar que se probaron resoluciones que no se inspeccionaron realmente.
- En video, diferenciar una transición de carrusel de su estado detenido antes de reportar desalineación.
- En tablet, no asumir que debe verse igual que mobile; evaluar el comportamiento esperado del breakpoint.

## Límites

- No cambiar copy, branding, arquitectura o lógica fuera del objetivo durante una auditoría.
- No introducir librerías de testing visual automáticamente.
- No iniciar servidores adicionales si ya existe uno operativo.
- No hacer `git commit`, `git push`, `git reset --hard` ni limpieza destructiva.
- No restaurar archivos ajenos al alcance sin verificar primero que sean artefactos generados.

## Salida

Usar el formato de `references/report-template.md`. Mantener el reporte concreto: hallazgos accionables, evidencia y veredicto; evitar comentarios cosméticos sin impacto.
