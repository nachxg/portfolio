# Sistema visual

> Borrador armado a partir de las capturas. **Los hex son aproximados:** reemplazarlos por los valores reales que ya están en el código del hero.
> Referencias: `design-refs/` (`01-mi-hero.png` = lo que ya está hecho, `inspo-*.png` = la estética objetivo).

## Concepto
Collage gráfico tech-pop: interfaz de navegador desarmada y mezclada con ilustración plana, texturas granuladas y formas geométricas sueltas sobre fondo casi negro. Se siente hecho a mano y juguetón, no corporativo.

## Paleta

| Token | Aprox. | Uso |
|---|---|---|
| `ink` | `#121212` | Fondo principal |
| `ink-line` | `#222222` | Arcos/curvas decorativas del fondo |
| `lime` | `#DDEB8A` | Acento principal, CTAs, pill del logo |
| `violet` | `#6E68FF` | Paneles grandes, palabra destacada en títulos |
| `royal` | `#2F25D1` | Bloques sólidos, botones con texto blanco |
| `pink` | `#F7A6DF` | Acento secundario, formas, botones |
| `paper` | `#FFFFFF` | Texto principal, contornos |

**Contraste:**
- Sobre `ink`: `paper`, `lime` y `pink` sirven para texto de cualquier tamaño.
- `violet` sobre `ink` solo en texto grande (títulos). Verificar AA.
- `royal` sobre `ink` **nunca para texto**: solo para formas o como fondo con texto `paper`.

## Tipografía
- **Display:** grotesca condensada muy bold, en mayúsculas (el "NACHO"). Firma: la "O" se reemplaza por una pill con contorno `lime`.
- **Subtítulo:** sans bold en mayúsculas, con una palabra en `violet`.
- **Cuerpo:** sans geométrica regular, en `paper`, con buen interlineado.

## Formas y componentes
- **Ventana de navegador:** contorno fino `paper`, tres círculos arriba a la izquierda, iconos o X arriba a la derecha. Es un recurso más, no una regla: no todo tiene que ir enmarcado. Dónde se usa lo decide Nacho a medida que se arma cada sección.
- **Pills:** botones y tags en dos variantes, rellena y solo contorno.
- **Globo de diálogo** con `</>`, `{ }` o `CSS`.
- Paneles con radio medio (≈16–24px), planos.
- **Decoración:** estrellas de puntas, asteriscos/destellos, engranajes, triángulos, aros, grilla de líneas finas, checklists, manos ilustradas, cursor.
- **Textura:** grano/stipple tipo risografía sobre las formas de color.

## Composición
- Elementos que se superponen y rompen los bordes del marco que los contiene.
- Asimetría controlada: el texto alineado y legible, el caos va en la ilustración.
- Arcos grandes `ink-line` en el fondo para dar profundidad.

## Movimiento
- Algunas figuras decorativas sueltas (estrellas, engranajes, triángulos, etc.) tienen una animación flotante suave. Ya está implementada en el hero: **deducir del código** qué elementos la tienen, cómo está hecha (keyframes, duración, easing, desfases entre figuras) y documentarlo acá como patrón reutilizable.
- Toda animación se desactiva o reduce con `prefers-reduced-motion`.

## Lo que NO
- Sombras suaves, glassmorphism, gradientes, blur.
- Look de template SaaS: cards blancas con sombra, grises neutros, iconos de librería sin intervenir.
- Animaciones que no respeten `prefers-reduced-motion`.
- Decoración que tape texto o que no esté oculta para lectores de pantalla.

## Abierto (se define iterando)
- Comportamiento en mobile del collage: ¿se simplifica? ¿qué elementos sobreviven?
- Microinteracciones: hover de pills, entrada de elementos decorativos.
- Dónde se usa el marco de ventana de navegador y dónde no.
