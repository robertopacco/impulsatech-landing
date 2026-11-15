---
name: pre-commit-review
description: "Audita un repositorio justo antes de hacer commit para detectar cambios fuera de alcance, errores de TypeScript o build, whitespace roto, artefactos generados, archivos sensibles o secretos y un diff incoherente. Usar cuando el usuario pida revisar, validar o aprobar cambios antes de commit o push, o cuando un agente termine una implementacion y deba demostrar que el repositorio esta listo para guardarse. Por defecto es auditoria: no hacer commit, push, reset destructivo ni editar codigo salvo orden explicita de correccion."
---

# Pre Commit Review

## Objetivo

Determinar si los cambios actuales estan listos para commit con evidencia reproducible. Leer primero `AGENTS.md` y respetar sus reglas.

## Modo de operacion

- **Audit-only por defecto:** inspeccionar y ejecutar validaciones, pero no editar codigo.
- **Fix mode solo por orden explicita:** si el usuario pide corregir, arreglar o fix, modificar unicamente los fallos encontrados y volver a auditar.
- Nunca hacer `git commit` ni `git push` automaticamente.
- Nunca usar `git reset --hard`, `git clean -fd` ni otra limpieza destructiva.

## Flujo obligatorio

1. **Identificar alcance esperado**
   - Inferir la tarea que se acaba de implementar desde el contexto.
   - Si existe un alcance explicito, usarlo como contrato de revision.
   - Separar cambios previos del usuario de los cambios producidos por la tarea actual.

2. **Inspeccionar Git antes de validar**
   Ejecutar:
   - `git status --short`
   - `git diff --stat`
   - `git diff --name-only`
   - `git diff --check`

   Revisar el diff de cada archivo modificado relevante. Para archivos staged, revisar tambien `git diff --cached` cuando aplique.

3. **Comprobar alcance**
   Detectar:
   - archivos modificados fuera de la tarea;
   - cambios accidentales de copy, branding, rutas o configuracion;
   - dependencias nuevas no solicitadas;
   - archivos generados versionados por error;
   - borrados inesperados;
   - cambios masivos de formato que oculten la modificacion real.

4. **Comprobar artefactos y archivos sensibles**
   Revisar especialmente:
   - `tsconfig.tsbuildinfo`, `.next/`, logs, capturas temporales y otros artefactos;
   - `.env`, `.env.*`, claves, tokens, contrasenas, secretos o credenciales;
   - archivos grandes inesperados;
   - cambios en `package-lock.json` sin cambio intencional de dependencias.

   No imprimir secretos completos en el reporte. Si existe uno, indicar archivo y tipo de riesgo, redactando el valor.

5. **Ejecutar validaciones del proyecto**
   Seguir primero los comandos definidos por `AGENTS.md` y `package.json`.

   Para IMPULSATECH en Windows o PowerShell preferir:
   - `npx.cmd tsc --noEmit`
   - `npm.cmd run build`
   - `git diff --check`
   - `git status --short`

   Si `tsconfig.tsbuildinfo` cambia solo por la validacion y ya era un archivo rastreado, restaurarlo al estado previo unicamente si no elimina cambios intencionales del usuario.

6. **Evaluar calidad del diff**
   Verificar:
   - diff minimo y comprensible;
   - sin debug temporal, codigo muerto evidente o comentarios accidentales;
   - sin imports o variables sin uso evidentes;
   - comportamiento solicitado respaldado por el cambio;
   - archivos tocados coherentes con el alcance.

7. **Clasificar resultados**
   - `PASS`: comprobacion superada.
   - `WARNING`: no bloquea el commit, pero conviene revisar.
   - `FAIL`: no hacer commit hasta corregirlo.
   - `NOT VERIFIED`: no existe evidencia suficiente para comprobarlo.

8. **Emitir veredicto**
   - **LISTO PARA COMMIT**: 0 FAIL y sin NOT VERIFIED critico.
   - **LISTO CON OBSERVACIONES**: 0 FAIL y solo warnings no bloqueantes.
   - **NO HACER COMMIT**: existe al menos un FAIL o falta una verificacion critica.

## Reglas especificas

### Git

- No asumir que un working tree sucio es un fallo: distinguir cambios esperados, previos y generados.
- No hacer staging automaticamente salvo peticion explicita.
- No restaurar archivos del usuario fuera del alcance.
- No cambiar ramas.

### Dependencias

Si `package.json` o lockfile cambian:
- confirmar que la tarea requeria la dependencia;
- identificar paquetes agregados o eliminados;
- marcar `WARNING` si el lockfile cambio sin una razon clara;
- marcar `FAIL` si se introdujo una dependencia no autorizada y la tarea prohibia instalar librerias.

### Secretos

Marcar `FAIL` si el diff contiene credenciales, tokens o claves privadas versionables. No copiar el secreto completo en la salida.

### Evidencia visual

Esta skill no sustituye a `responsive-qa`. Si el cambio afecta UI y no existe una auditoria visual reciente, marcar `WARNING` o `NOT VERIFIED` y recomendar ejecutar `responsive-qa` antes del commit.

## Salida

Usar `references/report-template.md`. Mantener el reporte concreto y accionable. No recomendar commit si existe un `FAIL`.
