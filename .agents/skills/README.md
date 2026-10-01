# Skills del Workspace (`.agents/skills/`)

Este directorio contiene las **Skills** personalizadas del proyecto reconocidas automáticamente por el asistente.

Cada skill es una subcarpeta que contiene un archivo `SKILL.md` obligatorio con frontmatter YAML (`name` y `description`).

## Estructura recomendada

```txt
.agents/
└── skills/
    ├── editorial-design/      # Pautas de diseño editorial, tipografía, paletas y narrativa
    │   └── SKILL.md
    │
    ├── micro-interactions/    # (Ejemplo futuro) Patrones de microinteracciones con Motion
    │   └── SKILL.md
    │
    └── data-storytelling/     # (Ejemplo futuro) Visualización de datos y gráficos
        └── SKILL.md
```

## Formato del archivo `SKILL.md`

```markdown
---
name: nombre-de-la-skill
description: Breve descripción de cuándo y cómo utilizar esta skill.
---

# Título de la Skill

Instrucciones, directrices, snippets de código y reglas de diseño...
```
