# Formato de reporte Responsive QA

Usar esta estructura por defecto.

## Responsive QA — [sección/página]

**Veredicto:** APROBAR | APROBAR CON OBSERVACIONES | NO APROBAR

### Resumen
- Bloqueadores: N
- Warnings: N
- No verificado: N

### Matriz
| Viewport / área | Estado | Evidencia / hallazgo |
|---|---|---|
| Desktop 1366×768 | PASS/WARNING/FAIL/NOT VERIFIED | ... |
| Desktop 1440×900 | ... | ... |
| Desktop 1920×1080 | ... | ... |
| Tablet 820×900 | ... | ... |
| Mobile 430×932 | ... | ... |
| Mobile 400×642 | ... | ... |
| Mobile 390×844 | ... | ... |
| Mobile 384×854 | ... | ... |
| Mobile 375×667 | ... | ... |

### Validaciones técnicas
- `npx.cmd tsc --noEmit`: PASS/FAIL/NOT RUN
- `npm.cmd run build`: PASS/FAIL/NOT RUN
- `git diff --check`: PASS/FAIL/NOT RUN
- `git status --short`: [resumen]

### Hallazgos
1. **[severidad] [título corto]**
   - Viewport/selectores: ...
   - Evidencia: ...
   - Impacto: ...
   - Recomendación: ...

Omitir esta sección si no hay hallazgos.

### Qué no se pudo verificar
Indicar explícitamente cualquier validación visual o técnica sin evidencia suficiente. No inventar resultados.

### Recomendación final
Una frase clara: aprobar, aprobar con observaciones o corregir antes de commit.
