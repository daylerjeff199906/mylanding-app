# JEFF Santos — Recursos Oficiales de Marca (Brand Assets)

Carpeta centralizada de activos de identidad visual para la plataforma personal de **JEFF Santos** (*Jose Jefferson Santos Panaifo*).

Todos los archivos han sido construidos con geometría vectorial pura (SVG), optimizados para escalabilidad infinita, pantallas Retina/High-DPI y soporte estricto de **Modo Claro y Modo Oscuro**.

---

## 📁 Catálogo de Archivos

| Archivo | Tipo | Tamaño / ViewBox | Uso recomendado |
| :--- | :--- | :--- | :--- |
| **[`isotipo.svg`](./isotipo.svg)** | Isotipo Principal (Dark) | `64 × 64` | Avatar para redes, perfiles, fondos oscuros |
| **[`isotipo-light.svg`](./isotipo-light.svg)** | Isotipo (Light Warm) | `64 × 64` | Fondos claros, papelería, fondo editorial `#F7F1E3` |
| **[`isotipo-monochrome.svg`](./isotipo-monochrome.svg)** | Isotipo Monocromático | `64 × 64` | Impresión a una tinta, sellos, grabado |
| **[`logo-horizontal-dark.svg`](./logo-horizontal-dark.svg)** | Logotipo Horizontal (Dark) | `320 × 64` | Headers oscuros, presentaciones, decks |
| **[`logo-horizontal-light.svg`](./logo-horizontal-light.svg)** | Logotipo Horizontal (Light) | `320 × 64` | Headers claros, documentos, facturas |
| **[`logo-vertical.svg`](./logo-vertical.svg)** | Logotipo Vertical (Stack) | `200 × 180` | Portadas centradas, posters, splash screens |
| **[`favicon.svg`](./favicon.svg)** | Favicon Web Escalable | `64 × 64` | Pestaña del navegador (vectorial nítido) |
| **[`apple-touch-icon.svg`](./apple-touch-icon.svg)** | Icono Web App / iOS | `180 × 180` | Pantalla de inicio de iPhone / iPad / Android |
| **[`og-image.svg`](./og-image.svg)** | Open Graph Banner | `1200 × 630` | Previsualización en LinkedIn, Twitter/X, WhatsApp |
| **[`brand-assets.json`](./brand-assets.json)** | Manifiesto de Marca | JSON | Metadatos legibles por código y APIs futuras |

---

## 🎨 Paleta Cromática Oficial

```css
:root {
  --primary: #39FF14;     /* Fluorescent Green — CTA, highlights, acentos */
  --ink: #0B0D0C;         /* Tinta profunda — Textos y contrastes */
  --background: #F7F1E3;  /* Fondo editorial cálido */
  --dark: #101210;        /* Canvas editorial oscuro */
  --surface: #FFFFFF;     /* Superficie clara limpia */
  --muted: #6B706D;       /* Texto secundario y metadatos */
  --border: #D9DDD8;      /* Separadores sutiles */
}
```

---

## 🔤 Tipografías del Sistema

- **Titulares / Display:** `Anton`, `Arial Narrow`, sans-serif (condensada, estructurada, geométrica).
- **Cuerpo / Lectura:** `Sora`, system-ui, sans-serif (humana, legible, editorial).
- **Código y Metadatos:** `JetBrains Mono`, `Geist Mono`, monospace.

---

## 📐 Reglas de Uso del Monograma "JS"

1. Mantener las letras `J` y `S` exactamente en la misma proporción y peso visual.
2. La letra `J` en blanco (`#FFFFFF`) o tinta (`#0B0D0C`), la letra `S` siempre en verde fluorescente (`#39FF14`).
3. El punto indicador verde en la esquina inferior derecha simboliza observación y activación.
4. No deformar las proporciones ni aplicar sombras o degradados exagerados.
