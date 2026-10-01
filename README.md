# JEFF Santos // Plataforma Personal Profesional (Monorepo Editorial)

Plataforma personal y portfolio editorial de **JEFF Santos** (*Jose Jefferson Santos Panaifo*) diseñada bajo los estándares de la guía de marca [`JEFF_SANTOS_WEB_DESIGN_SKILL.md`](file:///.agents/skills/editorial-design/JEFF_SANTOS_WEB_DESIGN_SKILL.md).

> **Premisa visual:** "Un artículo interactivo y portfolio editorial donde se descubre una historia profesional mientras se hace scroll; no un dashboard SaaS, ni un CV genérico."

---

## 🎨 Sistema de Marca & Diseño (JEFF Santos Web Design)

- **Nombre e Identidad:** `JEFF Santos` / Isotipo geométrico **JS** (caja cuadrada con letras proporcionadas y acento verde fluorescente).
- **Tipografía Display:** `Anton` para enunciados principales, números editoriales y títulos de capítulo.
- **Tipografía Cuerpo:** `Sora` para párrafos, navegación, botones y metadatos.
- **Color Principal:** `Fluorescent Green` (`#39FF14`) empleado para CTAs primarios, enlaces activos, líneas de progreso y detalles de marca.
- **Paleta de Contraste:** `Ink` (`#0B0D0C`), fondo cálido editorial (`#F7F1E3`), noche mate (`#101210`), bordes sutiles (`#D9DDD8`).
- **Geometría:** Radios estructurados de `6px`, `10px` y `14px`, evitando píldoras sobredimensionadas.

---

## 🌐 Arquitectura i18n & Contenido No Hardcodeado (DB Ready)

Todos los títulos, subtítulos, textos narrativos y metadatos están completamente desacoplados de las plantillas `.astro`:

1. **Tipados Formales:** Definidos en [`packages/types/src/i18n.ts`](file:///packages/types/src/i18n.ts) (`I18nDictionary`, `SupportedLocale`).
2. **Diccionarios Dinámicos:**
   - [`packages/content/src/i18n/es.ts`](file:///packages/content/src/i18n/es.ts) (Español)
   - [`packages/content/src/i18n/en.ts`](file:///packages/content/src/i18n/en.ts) (English)
3. **Proveedor Desacoplado:** [`getDictionary(locale)`](file:///packages/content/src/index.ts) actúa como capa de abstracción. Cuando decidas conectar una base de datos (PostgreSQL, Supabase) o CMS, solo necesitas reemplazar esta función por tu cliente de base de datos sin tocar ninguno de los componentes `.astro`.
4. **Selector de Idioma:** Selector `ES / EN` integrado en el encabezado con soporte de rutas `/` y `/en`.

```txt
personal-platform/
├── apps/
│   ├── web/                    # Capa de presentación (Astro + TypeScript + Tailwind + MDX)
│   └── (preparado para admin/) # Listo para agregar apps/admin (Next.js / React) en el futuro
│
├── packages/
│   ├── types/                  # Modelos e interfaces TypeScript puras
│   ├── content/                # Datos editoriales, narrativa y colecciones desacopladas de Astro
│   ├── utils/                  # Helpers DOM, formatos y detección de preferencias
│   ├── ui/                     # Componentes interactivos reutilizables (React Islands)
│   └── config/                 # Configuraciones compartidas
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

### Principio de Desacoplamiento

> **La lógica de negocio y los modelos de contenido NO dependen de Astro.**  
> Si en el futuro decides migrar `apps/web` de Astro a Next.js o Remix, los paquetes `packages/types`, `packages/content`, `packages/utils` y `packages/ui` se conservan intactos sin necesidad de reescribir la plataforma.

---

## 🚀 Stack Tecnológico

- **Gestor de paquetes:** `pnpm` (workspaces)
- **Monorepo runner:** `Turborepo`
- **Framework de presentación:** `Astro 5` con `View Transitions` (`ClientRouter`)
- **Tipado:** `TypeScript` (strict)
- **Estilos:** `Tailwind CSS` con paleta editorial personalizada y tipografía serif/mono
- **Contenido estructurado:** `MDX` para ensayos editoriales y manifiesto
- **Animaciones:**
  - `motion` (JavaScript puro): para reveals, microinteracciones, staggers, scroll progress nativo.
  - `gsap` + `ScrollTrigger`: reservado para momentos narrativos especiales (timeline del capítulo dos, scroll bridge, revelación secuencial de soluciones).
- **React:** Empleado selectivamente solo donde se requiere estado reactivo (`PerspectiveToggle` en el header), sin convertir toda la landing a React.
- **Scroll:** Scroll nativo suave (`html { scroll-behavior: smooth; }`), sin dependencias pesadas de smooth scrolling.
- **Accesibilidad:** Soporte integral para `@media (prefers-reduced-motion: reduce)`.

---

## 🎬 Arquitectura de Animaciones

Todas las animaciones están desacopladas de las plantillas `.astro` y ubicadas en `apps/web/src/animations/`:

```txt
apps/web/src/animations/
├── cleanup.ts         # Coordinador central de ciclo de vida (elimina timelines, triggers y listeners)
├── reveal.ts          # Revelación individual y en bloque con Motion
├── stagger.ts         # Efectos en cascada para listas e ítems
├── scrollProgress.ts  # Indicador superior de lectura con Motion scroll()
├── heroStory.ts       # Entrada calmada del Hero y puente narrativo
├── chapterStory.ts    # Línea de tiempo sincronizada del Método (Capítulo 01)
├── areasStory.ts      # Composición tipográfica de áreas de impacto
├── projectsStory.ts   # Artículos editoriales de proyectos y máscaras de imagen
├── solutionsStory.ts  # Storytelling con ScrollTrigger para intervenciones tácticas
├── timelineStory.ts   # Progreso de línea temporal con Motion scroll()
└── index.ts           # Orquestador con listeners para Astro View Transitions (astro:page-load, astro:before-swap)
```

### Limpieza y View Transitions

`apps/web/src/animations/cleanup.ts` garantiza que cada instancia de GSAP, `ScrollTrigger` y listeners de `motion` se eliminen al navegar entre páginas o antes de cada swap del cliente, evitando fugas de memoria o disparadores duplicados.

---

## 📖 Estructura del Relato (Capítulos)

1. **Capítulo 00 — Hero:** *"Siempre me han llamado la atención los problemas pequeños. Esos que parecen normales."*
2. **Puente Narrativo:** *"Con el tiempo entendí que muchas buenas ideas empiezan ahí."*
3. **Capítulo 01 — El Método:** *"Primero quería saber cómo funcionaban las cosas. Después quise saber cómo mejorarlas. Aprender a programar me dio una herramienta. Antes de hacer, hay que entender."*
4. **Capítulo 02 — Áreas:** Educación, Salud, Datos, Gestión, Procesos institucionales y Productos digitales organizados en una composición tipográfica fluida.
5. **Capítulo 03 — Proyectos:** 3 artículos editoriales destacados (MedMind, SIGAE Admisiones, Cortex Lens) con alternancia texto/imagen e interactividad sutil.
6. **Capítulo 04 — Soluciones:** Intervenciones tácticas enfocadas (flujos, automatizaciones, estructuras de datos).
7. **Capítulo 05 — Contexto:** Instituciones presentadas como espacios de aprendizaje e impacto real.
8. **Capítulo 06 — Divulgación:** Conferencias y charlas con estado visual discreto (Preparando, Idea).
9. **Capítulo 07 — Actividades:** Timeline reciente (2026) con avance visual sincronizado con el scroll.
10. **Capítulo 08 — Ahora:** Estado en tiempo real (Aprendiendo, Construyendo, Preparando, Explorando).
11. **Apéndice Editorial:** Página `/manifiesto` con soporte nativo de MDX.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar todas las dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción (compila y verifica todos los paquetes)
pnpm run build

# Verificar tipos TypeScript en todo el monorepo
pnpm run check

# Formatear código con Prettier
pnpm run format
```
