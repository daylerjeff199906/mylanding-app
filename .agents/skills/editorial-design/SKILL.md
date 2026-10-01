---
name: editorial-design
description: Guía y directrices de diseño editorial digital, composición visual, tipografía y narrativa visual para la plataforma personal.
---

# Skill: Diseño Editorial Digital & Storytelling

Esta skill establece los principios visuales, tipográficos, cromáticos y de composición que rigen la plataforma personal y proyectos con enfoque editorial.

---

## 1. Principio Fundamental

> **"Un artículo interactivo y portfolio editorial, no una landing SaaS ni un CV genérico."**

El diseño debe transmitir:
- **Calma y serenidad:** Espacios amplios, contrastes suaves, ausencia de elementos estridentes.
- **Precisión:** Tipografía rigurosa, métricas claras, alineaciones con intención.
- **Curiosidad y progreso:** La información se descubre como un relato paso a paso.
- **Economía visual:** Antes de agregar una card o borde, evaluar si la composición tipográfica ya resuelve la jerarquía.

---

## 2. Tipografía y Jerarquía

La combinación tipográfica se apoya en tres familias:

| Rol | Familia | Uso |
| :--- | :--- | :--- |
| **Voz Narrativa / Reflexiva** | `Newsreader` (Serif con soporte óptico) | Títulos principales, citas clave, enunciados conceptuales, manifiestos. |
| **Voz Estructural / Funcional** | `Inter` (Sans-serif neutra) | Párrafos de lectura, descripciones de proyectos, textos de interfaz. |
| **Metadatos y Contexto** | `JetBrains Mono` / `Geist Mono` | Números (`01`, `02`), roles, etiquetas, fechas, indicadores técnicos. |

### Reglas Tipográficas
- No usar tamaños gigantescos sin justificación narrativa.
- Mantener `line-height` generoso (`leading-relaxed` o `leading-normal` en títulos).
- Enlaces editoriales: usar el patrón de expansión sutil `Ver proyecto →` donde la flecha se desplaza suavemente hacia la derecha en `:hover`.

---

## 3. Paleta Cromática y Atmósfera

### Modo Claro (Lienzo tipo Papel / Marfil)
- Fondo base: `#fbfbf9` (tono pergamino cálido)
- Superficie secundaria: `#f5f5f2`
- Texto principal: `#18181b` (antracita profundo, no negro puro `#000000`)
- Texto secundario / metadatos: `#71717a`
- Acentos sutiles: `#b85d36` (terracota / arcilla)

### Modo Oscuro (Noche Editorial)
- Fondo base: `#0c0c0d` (carbón mate profundo)
- Superficie de tarjetas / módulos: `#141416`
- Texto principal: `#f4f4f5` (blanco hueso cálido)
- Texto secundario: `#a1a1aa`
- Bordes: `rgba(244, 244, 245, 0.08)` (delicados, sin líneas pesadas)

---

## 4. Filosofía del Movimiento y Animación

1. **Prioridad de herramientas:**
   ```txt
   1. CSS (hover, transiciones de estado simples)
   ↓
   2. Motion (reveals al entrar al viewport, stagger de texto, scroll progress)
   ↓
   3. GSAP + ScrollTrigger (timelines sincronizados, narrativa de scroll, transiciones complejas)
   ```

2. **Ritmo de animación:**
   - Duraciones cortas: `200ms – 600ms`.
   - Easings suaves: `cubic-bezier(0.16, 1, 0.3, 1)` o `power2.out`.
   - Desplazamiento máximo: `12px – 24px`.
   - **Prohibido:** Rebotes exagerados (`elastic`, `bounce`), rotaciones arbitrarias o zooms agresivos.

3. **Accesibilidad Obligatoria:**
   - Respetar siempre `@media (prefers-reduced-motion: reduce)`.
   - Desactivar scrub, parallax y transformaciones complejas cuando el usuario solicite movimiento reducido.

---

## 5. Composición de Secciones

- **No abusar de cards rectangulares:** Prefiere composiciones tipográficas (como la sección *Áreas* o *Instituciones*).
- **Alternar ritmo visual:** En proyectos, intercalar `texto | imagen` con `imagen | texto`.
- **Storytelling de scroll:** Los capítulos deben tener un hilo conductor que invite a continuar deslizando de forma natural.
