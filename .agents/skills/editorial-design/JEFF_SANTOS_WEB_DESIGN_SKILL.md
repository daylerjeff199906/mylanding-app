---
name: jeff-santos-web-design
description: Apply the JEFF Santos personal-brand design system to landing pages, portfolio pages, project pages, talks, activities, components, and future web UI. Use when creating, reviewing, redesigning, or coding any part of the JEFF Santos website and when decisions are needed about colors, typography, spacing, layout, cards, buttons, motion, storytelling, imagery, or the JS monogram. Preserve a minimal editorial technology aesthetic, fluorescent-green primary accent, condensed bold display typography, and a balanced uppercase JS identity.
---

# JEFF Santos Web Design

Use this skill as the visual and interaction standard for the JEFF Santos personal website.

The website must feel like a **professional story being discovered while scrolling**, not a generic developer portfolio, SaaS dashboard, or collection of cards.

## 1. Brand direction

Build every screen around these qualities:

- editorial
- minimal
- technological
- human
- confident
- geometric
- clean
- intentional

Avoid visual noise. Prefer one strong idea per section.

The visual identity must communicate:

> Observe problems → understand context → contribute solutions → learn → share.

## 2. Brand name and identity

Primary public name:

**JEFF Santos**

Full-name reference when needed:

**Jose Jefferson Santos Panaifo**

Primary isotipo:

**JS**

Rules for the JS mark:

- Use uppercase `J` and uppercase `S` only.
- Keep both letters at the same visual size and weight.
- Center the composition.
- Use a compact, near-square silhouette.
- Prefer straight geometric construction.
- Allow only subtle corner rounding.
- Avoid excessive diagonal cuts, cyberpunk styling, circuit motifs, or an overly "electronic" appearance.
- The mark must remain recognizable at avatar/favicon size.
- The mark should work in black + green, white + green, and monochrome.

Do not redesign the logo differently from page to page.

## 3. Color system

### Primary

```css
--color-primary: #39FF14;
```

Name: **Fluorescent Green**

Use it for:

- primary CTA
- important links
- active states
- small highlights
- selected words inside large headlines
- progress/accent lines
- subtle branded details

Do not use large amounts of fluorescent green as the main page background except for short intentional moments.

### Ink / primary text

```css
--color-ink: #0B0D0C;
```

Use for:

- main text
- large headings
- dark sections
- borders when stronger contrast is needed

### Warm background

```css
--color-background: #F7F1E3;
```

Use as the preferred light editorial background when a warmer identity is desired.

### Pure light surface

```css
--color-surface: #FFFFFF;
```

Use for:

- clean article surfaces
- cards only when necessary
- high-contrast content zones

### Muted text

```css
--color-muted: #6B706D;
```

### Soft border

```css
--color-border: #D9DDD8;
```

### Dark surface

```css
--color-dark: #101210;
```

### Recommended token map

```css
:root {
  --primary: #39FF14;
  --ink: #0B0D0C;
  --background: #F7F1E3;
  --surface: #FFFFFF;
  --muted: #6B706D;
  --border: #D9DDD8;
  --dark: #101210;
}
```

## 4. Typography

Use two roles, not many competing fonts.

### Display / headlines

Preferred:

**Anton**

Use for:

- hero statements
- section titles
- large editorial numbers
- short highlighted phrases

Desired character:

- bold
- condensed
- tall
- squared/structured
- high visual presence

Suggested CSS:

```css
font-family: "Anton", "Arial Narrow", sans-serif;
font-weight: 400;
letter-spacing: -0.02em;
line-height: 0.9;
```

Do not use Anton for long paragraphs.

### Body / interface

Preferred:

**Sora**

Use for:

- paragraphs
- navigation
- buttons
- metadata
- project descriptions
- captions

Suggested CSS:

```css
font-family: "Sora", system-ui, sans-serif;
line-height: 1.55;
```

### Type hierarchy

Desktop starting point:

```css
--text-display: clamp(4rem, 10vw, 9rem);
--text-h1: clamp(3rem, 7vw, 6.5rem);
--text-h2: clamp(2.2rem, 5vw, 4.5rem);
--text-h3: clamp(1.5rem, 3vw, 2.5rem);
--text-body-lg: 1.125rem;
--text-body: 1rem;
--text-small: 0.875rem;
```

Favor short lines and strong hierarchy.

## 5. Layout language

Prefer editorial compositions over dashboard grids.

Use:

- generous whitespace
- asymmetry when intentional
- strong vertical rhythm
- large typography
- alternating text/image compositions
- thin separators
- open sections rather than boxed cards

Recommended maximum widths:

```css
--container: 1200px;
--reading: 760px;
```

Main content container:

```css
width: min(1200px, calc(100% - 40px));
margin-inline: auto;
```

Paragraphs should usually stay between `620px` and `760px` wide.

## 6. Corners and geometry

The identity is squared and structured, but not harsh.

Preferred radii:

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
```

Avoid excessive pills and `24px+` rounding across every component.

Buttons may use a slightly rounded rectangle, not a capsule unless specifically needed.

## 7. Homepage storytelling

The homepage should follow this narrative order.

### Chapter 01 — Observation

Use this story direction:

> Siempre me han llamado la atención los problemas pequeños.
>
> Esos que parecen normales.
>
> Un proceso con demasiados pasos.  
> Una plataforma difícil de entender.  
> Información que existe, pero no ayuda.
>
> Con el tiempo entendí que muchas buenas ideas empiezan ahí.

Keep the screen visually quiet. Do not show the tech stack here.

### Chapter 02 — Understanding

Use this direction:

> Primero quería saber cómo funcionaban las cosas.
>
> Después quise saber cómo mejorarlas.
>
> Aprender a programar me dio una herramienta.
>
> Pero participar en proyectos reales me enseñó algo más importante:
>
> **antes de hacer, hay que entender.**

The final phrase should carry strong visual weight.

### Chapter 03 — Contexts / areas

Introduce the areas where JEFF has contributed without claiming absolute specialization.

Examples:

- Educación
- Salud
- Datos
- Gestión
- Procesos institucionales
- Productos digitales

Prefer a typographic composition rather than six identical cards.

### Chapter 04 — Projects

Projects represent initiatives JEFF was part of and contributed to.

Never imply ownership unless explicitly true.

Preferred heading:

> Algunos proyectos en los que he sido parte.

Show up to three featured projects on the homepage.

Each project should communicate:

- name
- context
- organization when relevant
- JEFF's participation
- contribution
- relevant skills
- short learning/result

Use language such as:

- "Participé en..."
- "Aporté en..."
- "Trabajé en..."
- "Mi participación se centró en..."

Avoid:

- "Mi producto" when it was not owned by JEFF
- "Creé" unless factually correct
- inflated impact claims without evidence

Include a discreet **Ver más proyectos** action.

### Chapter 05 — Solutions

This section is for smaller improvements, experiments, prototypes, UX proposals, automations, and technical solutions.

Story direction:

> No todo necesita convertirse en un gran proyecto.
>
> A veces basta con mejorar un flujo.  
> Automatizar una tarea.  
> Ordenar información.  
> O encontrar una forma diferente de resolver algo.

Show up to three items + **Explorar soluciones**.

### Chapter 06 — Institutions / experience

Present institutions as contexts where JEFF participated, learned, and contributed.

Do not turn the homepage into a chronological CV.

Show:

- institution
- area/context
- concise participation

Use logos only when they improve recognition.

### Chapter 07 — Talks and conferences

This represents what JEFF wants to share from lived experience and ongoing learning.

Preferred heading:

> Lo que aprendo también quiero compartirlo.

Possible statuses:

- `idea`
- `preparing`
- `scheduled`
- `presented`

Treat talks as editorial entries, not event cards full of badges.

### Chapter 08 — Activities

Use for:

- events attended
- workshops
- training
- communities
- professional participation
- relevant learning moments

Keep this section light, like a professional log.

### Chapter 09 — Now

Show a few current items:

- Aprendiendo
- Construyendo
- Preparando
- Explorando

Do not make this a dense status dashboard.

## 8. Components

### Buttons

Primary:

```css
background: var(--primary);
color: var(--ink);
border: 1px solid var(--primary);
border-radius: 8px;
font-family: "Sora", sans-serif;
font-weight: 700;
```

Hover:

- move arrow slightly right, or
- darken surrounding surface while preserving the primary green

Avoid glow effects.

### Cards

Use cards only when content benefits from containment.

Prefer:

- border rather than heavy shadow
- flat surfaces
- subtle radius
- generous padding

Avoid a page made entirely of floating cards.

### Links

Use one of:

- animated underline
- arrow extension
- slight horizontal movement

Do not use exaggerated hover effects.

## 9. Imagery

Prefer:

- real project screenshots
- interface crops
- process details
- documentary/professional photography
- restrained abstract shapes only when needed

Avoid generic stock photos of programmers.

Project imagery must support the story rather than decorate empty space.

## 10. Motion and transitions

Use this order of preference:

1. CSS
2. Motion
3. GSAP + ScrollTrigger
4. React only when interaction/state requires it

### Motion

Use for:

- reveal
- fade
- small translate
- stagger
- viewport entry
- subtle hover interaction

### GSAP + ScrollTrigger

Reserve for:

- narrative scroll scenes
- pinned storytelling sections
- synchronized text/image transitions
- complex timelines

Do not use GSAP for every fade-in.

### Motion feel

Movement should feel:

- calm
- deliberate
- precise
- editorial

Avoid:

- bounce
- excessive zoom
- constant movement
- large rotations
- gaming-style effects
- glowing cyber effects

Typical reveal distance:

```txt
12–24px
```

Typical duration:

```txt
200–600ms
```

Always respect `prefers-reduced-motion`.

## 11. Responsive behavior

Design mobile intentionally.

On smaller screens:

- reduce display type scale
- avoid long pinned sections
- remove unnecessary parallax
- keep one narrative idea per viewport
- stack project compositions naturally
- preserve spacing rather than compressing everything

Do not reproduce desktop effects blindly on mobile.

## 12. Navigation

Keep navigation minimal.

Suggested items:

- Projects
- Solutions
- Talks
- About / Experience

The logo or `JEFF Santos` returns to home.

Contact should be visible but not aggressive.

## 13. Technical direction

For the current public website prefer:

- Astro
- TypeScript
- Tailwind CSS
- MDX / content collections
- Motion
- GSAP + ScrollTrigger when justified

Do not require React for static sections.

Keep content/models independent from Astro when practical so a future migration to Next.js remains possible.

## 14. Design decision test

Before adding an element, ask:

1. Does it help tell the story?
2. Does it make the content easier to understand?
3. Does it reinforce the JEFF Santos identity?
4. Is there a simpler version?

If the answer to the first three is no, remove it.

## 15. Do / Don't

### Do

- Use fluorescent green selectively.
- Let typography carry the identity.
- Keep the JS mark balanced and compact.
- Use concise storytelling.
- Give projects context and attribution.
- Use whitespace as part of the design.
- Prefer editorial layouts.

### Don't

- Build a generic developer portfolio.
- Lead with a wall of technologies.
- Use skill percentage bars.
- Overuse gradients.
- Add neon glows.
- Use cyberpunk motifs.
- Fill every section with cards.
- Over-round every component.
- Turn the homepage into a CV.
- Use animations that compete with the content.

## 16. Output expectation

When asked to design or implement a new page/component:

1. preserve these tokens and visual rules;
2. keep the storytelling concise;
3. explain deviations only when necessary;
4. reuse existing patterns before inventing new ones;
5. prioritize clarity, hierarchy, responsiveness, and accessibility.

The final experience should feel like:

> **An editorial personal technology brand with a strong point of view — not a template.**
