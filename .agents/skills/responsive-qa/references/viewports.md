# Matriz responsive IMPULSATECH

Usar estos viewports por defecto salvo que la tarea indique otros.

## Desktop
- 1366×768
- 1440×900
- 1920×1080

Comprobar:
- alineación general y ancho máximo del contenido;
- hover sin layout shift;
- cards/columnas con alturas y gaps coherentes;
- CTA, iconos y flechas dentro de sus contenedores;
- header/fixed elements sin solapamientos.

## Tablet
- 820×900

Comprobar:
- transición limpia entre desktop y mobile;
- número de columnas/cards esperado para el breakpoint;
- no asumir que tablet debe imitar mobile;
- carruseles o grids sin estados intermedios rotos.

## Mobile
- 430×932
- 400×642
- 390×844
- 384×854
- 375×667

Comprobar:
- cero overflow horizontal;
- wrapping de títulos/CTA;
- contenido accesible en viewports bajos;
- botones `fixed` (especialmente WhatsApp) sin tapar contenido importante;
- carruseles centrados y navegables;
- primer elemento: control anterior disabled cuando aplique;
- elementos intermedios: ambos controles activos cuando aplique;
- último elemento: control siguiente disabled cuando aplique;
- tamaño táctil y separación suficiente;
- ausencia de hover persistente en touch.

## Criterios generales

### Carruseles
Evaluar el estado detenido, no un frame intermedio del movimiento. Verificar snap, centrado, orden, conteo de hijos, disabled states y que flechas/CTA no salgan de la card.

### Elementos fixed/sticky
Revisar especialmente viewports de poca altura. Un elemento flotante puede ser correcto en 430×932 y solapar contenido en 400×642.

### Texto
Tratar como fallo si queda cortado, inaccesible o provoca overflow. Tratar wrapping natural como válido si conserva jerarquía y legibilidad.

### Hover y touch
Hover decorativo solo debe afectar dispositivos con hover real. Mobile no debe depender de hover para descubrir acciones esenciales.

### Reduced motion
Las animaciones decorativas deben reducirse o eliminarse cuando `prefers-reduced-motion: reduce` está activo.
