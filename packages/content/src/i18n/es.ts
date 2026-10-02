import type { I18nDictionary } from "@platform/types";

export const esDictionary: I18nDictionary = {
  locale: "es",
  site: {
    brandName: "JEFF Santos",
    fullName: "Jose Jefferson Santos Panaifo",
    monogram: "JS",
    tagline: "Software Engineer · Systems & Editorial Digital Products",
    defaultTitle: "JEFF Santos // Storytelling, Arquitectura & Producto",
    defaultDescription:
      "Observar problemas pequeños → entender contexto → aportar soluciones → aprender → compartir. Plataforma profesional y narrativa de JEFF Santos."
  },
  nav: {
    projects: "Proyectos",
    solutions: "Soluciones",
    context: "Contexto",
    talks: "Charlas",
    activities: "Actividades",
    now: "Ahora",
    manifesto: "Manifiesto",
    contact: "Contacto"
  },
  hero: {
    eyebrow: "Producto · Tecnología · Experiencia",
    headline: "¿Y si lo simple nos acercara a lo que necesitamos?",
    headlineLead: "¿Y si lo simple",
    headlineAccent: "nos acercara a lo que necesitamos?",
    subheading: "A veces, una pequeña mejora puede cambiar mucho más de lo que parece.",
    description: "Puede significar entender algo más rápido, completar un proceso sin frustración o encontrar la información correcta en el momento adecuado.",
    observations: [
      "Menos pasos innecesarios.",
      "Plataformas más fáciles de entender.",
      "Información que realmente orienta.",
      "Experiencias pensadas para las personas."
    ],
    scrollCue: "Desliza para continuar →",
    ctaExplore: "Comenzar historia"
  },
  bridge: {
    quote: "Con el tiempo entendí que muchas buenas ideas empiezan ahí."
  },
  chapterTwo: {
    sectionTag: "El método",
    title: "De entender el problema a construir la solución",
    subtitle: "Un enfoque estructurado en tres momentos clave para transformar la complejidad en claridad y soluciones digitales funcionales.",
    steps: [
      {
        step: "01",
        title: "1. Entender",
        description: "Observar el contexto, escuchar a las personas e identificar qué está dificultando realmente la experiencia."
      },
      {
        step: "02",
        title: "2. Simplificar",
        description: "Convertir problemas complejos en flujos más claros, decisiones más simples y soluciones fáciles de usar."
      },
      {
        step: "03",
        title: "3. Construir",
        description: "Transformar esas ideas en productos digitales funcionales, medibles y listos para evolucionar."
      }
    ]
  },
  areas: {
    sectionTag: "Perfil",
    titlePrefix: "Soy",
    titleName: "JOSÉ JEFFERSON SANTOS",
    statementLead: "Egresado de Ingeniería de Sistemas e Informática. Me dedico al desarrollo de software, pero mi trabajo no empieza únicamente escribiendo código. Me gusta entender cómo funciona un proceso, detectar qué puede mejorarse y convertir esas ideas en productos digitales que sean más simples de usar y mantener.",
    dedicationTitle: "A lo que me dedico",
    dedicationText: "Desarrollo de software, experiencia de usuario (UX), arquitectura frontend, implementación de funcionalidades y optimización de procesos.",
    areasTitle: "Áreas en las que participo",
    areasList: "Educación · Salud · Datos · Gestión institucional · Productos digitales · Impacto ambiental",
    statementImpact: "Me interesa especialmente construir tecnología que no solo funcione, sino que resuelva mejor, reduzca fricción y genere un impacto positivo en las personas y su entorno.",
    imageAlt: "José Jefferson Santos - Retrato editorial"
  },
  projects: {
    sectionTag: "Proyectos destacados",
    lead: "Algunos proyectos en los que he sido parte.",
    subtitle: "Iniciativas reales donde la comprensión del problema guió la arquitectura y la experiencia.",
    roleLabel: "Mi participación",
    ctaCase: "Explorar caso",
    ctaViewMore: "Ver más proyectos",
    items: [
      {
        id: "medmind",
        number: "01",
        title: "MedMind",
        tagline: "Educación + Salud",
        description:
          "Plataforma de entrenamiento clínico y toma de decisiones para residentes médicos. Mi participación se centró en transformar protocolos densos de manuales estáticos en simulaciones interactivas con retroalimentación inmediata.",
        role: ["Producto", "Desarrollo", "UX"],
        tags: ["TypeScript", "Motion", "UX Research", "Diseño de Sistemas"],
        link: "#medmind",
        image: {
          src: "/images/project-medmind.svg",
          alt: "Interfaz editorial del sistema MedMind para aprendizaje clínico"
        },
        featured: true
      },
      {
        id: "sigae-core",
        number: "02",
        title: "SIGAE Admisiones",
        tagline: "Gestión + Procesos Institucionales",
        description:
          "Modernización integral de la plataforma de admisión y expediente institucional. Aporté en el rediseño de flujos, reduciendo en un 64% los pasos redundantemente requeridos y eliminando el abandono.",
        role: ["Arquitectura Frontend", "Flujos", "UI Engineering"],
        tags: ["Turborepo", "Astro", "Tailwind", "Accesibilidad"],
        link: "#sigae-core",
        image: {
          src: "/images/project-sigae.svg",
          alt: "Panel y flujos de trámite simplificado de admisión institucional"
        },
        featured: true
      },
      {
        id: "cortex-analytics",
        number: "03",
        title: "Cortex Lens",
        tagline: "Datos + Productos Digitales",
        description:
          "Sistema de exploración de métricas y correlaciones en tiempo real para equipos de operaciones. Trabajé en el diseño de interfaz bajo el principio de que los datos solo tienen valor cuando la visualización no compite con la decisión.",
        role: ["Diseño de Producto", "Prototipado", "Frontend"],
        tags: ["Visualización de Datos", "GSAP", "Microinteracciones", "Performance"],
        link: "#cortex-analytics",
        image: {
          src: "/images/project-cortex.svg",
          alt: "Composición de datos y correlaciones visuales en Cortex Lens"
        },
        featured: true
      }
    ]
  },
  solutions: {
    sectionTag: "Soluciones tácticas",
    lead: "No todo necesita convertirse en un gran proyecto.",
    statements: [
      "A veces basta con mejorar un flujo.",
      "Automatizar una tarea.",
      "Ordenar información.",
      "O encontrar una forma diferente de resolver algo."
    ],
    ctaExplore: "Explorar soluciones",
    items: [
      {
        id: "flujo-registro",
        number: "01",
        title: "Simplificación de flujo de verificación",
        type: "Flujo",
        description:
          "Reducción de 7 pasos a 2 en la validación de identidad para usuarios no técnicos, eliminando la tasa de abandono en soporte.",
        impact: "85% menos tickets de asistencia"
      },
      {
        id: "pipeline-reportes",
        number: "02",
        title: "Script de conciliación de reportes académicos",
        type: "Automatización",
        description:
          "Automatización de generación y cotejo de actas que ahorra 14 horas de labor manual semanal a los coordinadores.",
        impact: "Ahorro de 14 horas/semana"
      },
      {
        id: "catalogo-unificado",
        number: "03",
        title: "Normalización de taxonomía documental",
        type: "Estructura de Datos",
        description:
          "Estructuración coherente de más de 4,000 registros normativos dispersos en carpetas y formatos heterogéneos.",
        impact: "Búsqueda en <2 segundos"
      }
    ]
  },
  institutions: {
    sectionTag: "Contexto y aprendizaje",
    lead: "He aprendido trabajando en contextos diferentes.",
    roleLabel: "Rol / Participación",
    items: [
      {
        id: "unap",
        name: "Universidad Nacional del Altiplano",
        role: "Desarrollo e Innovación de Software Académico",
        area: "Educación Superior y Gestión de Trámites",
        period: "2023 — Presente",
        context:
          "Diseño y desarrollo de plataformas institucionales de admisión, posgrado y matrícula que atienden a decenas de miles de postulantes y estudiantes."
      },
      {
        id: "minsa-red",
        name: "Red de Salud & Servicios Clínicos",
        role: "Consultoría de Experiencia y Flujos Digitales",
        area: "Salud Pública",
        period: "2024",
        context:
          "Auditoría y rediseño de interfaz en módulos de triaje y admisión de historias clínicas para reducir tiempos de espera en ventanilla."
      },
      {
        id: "lab-investigacion",
        name: "Laboratorio de Informática y Ciencia de Datos",
        role: "Investigador / Desarrollador Frontend",
        area: "Investigación Aplicada",
        period: "2022 — 2024",
        context:
          "Desarrollo de herramientas de visualización interactiva para conjuntos de datos de bioinformática y modelos climáticos regionales."
      }
    ]
  },
  talks: {
    sectionTag: "Divulgación",
    lead: "Lo que aprendo también quiero compartirlo.",
    items: [
      {
        id: "talk-01",
        number: "01",
        title: "Construir productos desde problemas reales",
        status: "preparing",
        statusLabel: "Preparando",
        summary:
          "Cómo identificar la fricción invisible en organizaciones antes de escribir código y por qué la empatía operativa supera a los frameworks de moda.",
        year: "2026"
      },
      {
        id: "talk-02",
        number: "02",
        title: "De escribir código a pensar en producto",
        status: "idea",
        statusLabel: "Idea",
        summary:
          "La evolución del rol técnico: entender incentivos humanos, el valor de las restricciones y la simplificación como máxima sofisticación.",
        year: "2026"
      },
      {
        id: "talk-03",
        number: "03",
        title: "Tecnología aplicada a educación",
        status: "idea",
        statusLabel: "Idea",
        summary:
          "Experiencias diseñando sistemas para miles de estudiantes en contextos con conectividad dispar y trámites críticos.",
        year: "2026"
      }
    ]
  },
  activities: {
    sectionTag: "Registro de actividades",
    lead: "Registro de actividades y pasos recientes.",
    groups: [
      {
        year: "2026",
        items: [
          {
            id: "act-1",
            type: "Evento",
            title: "Encuentro de Innovación y Arquitectura de Software",
            detail: "Mesa redonda sobre optimización de interfaces críticas en el sector público.",
            period: "Primer Trimestre 2026"
          },
          {
            id: "act-2",
            type: "Capacitación",
            title: "Taller Avanzado de Patrones de Rendimiento Web & Accesibilidad",
            detail: "Formación especializada en Core Web Vitals, animaciones nativas y renderizado híbrido.",
            period: "Febrero 2026"
          },
          {
            id: "act-3",
            type: "Participación",
            title: "Comité Técnico de Digitalización de Trámites",
            detail: "Evaluación de estándares para la eliminación de fricción en procesos de admisión.",
            period: "Enero 2026"
          }
        ]
      }
    ]
  },
  now: {
    sectionTag: "Enfoque presente",
    lead: "Ahora",
    subtitle: "En qué estoy enfocando mi energía y curiosidad en este momento.",
    lastUpdatedLabel: "Actualizado",
    lastUpdatedDate: "Octubre 2026",
    items: [
      {
        category: "Aprendiendo",
        description: "Arquitecturas modulares para monorepos de escala editorial y patrones de renderizado progresivo.",
        detail: "Explorando la frontera entre interactividad sutil en el cliente y ligereza en el servidor."
      },
      {
        category: "Construyendo",
        description: "Ecosistema de interfaces para procesos institucionales con foco en accesibilidad absoluta.",
        detail: "Eliminando pantallas superfluas y creando flujos que respeten el tiempo de las personas."
      },
      {
        category: "Preparando",
        description: "Charla 'Construir productos desde problemas reales' y notas sobre UX pragmático.",
        detail: "Sintetizando lecciones aprendidas en proyectos de alto tráfico institucional."
      },
      {
        category: "Explorando",
        description: "Técnicas de micro-storytelling y animación declarativa que no comprometen el rendimiento.",
        detail: "Priorizando fluidez nativa y respeto por las preferencias de movimiento reducido."
      }
    ]
  },
  footer: {
    brandStatement: "JEFF Santos // Jose Jefferson Santos Panaifo · Diseñado bajo arquitectura monorepo desacoplada.",
    philosophyQuote: "Antes de hacer, hay que entender.",
    backToTop: "Volver al inicio",
    github: "GitHub",
    contact: "Contacto",
    rights: "Todos los derechos reservados"
  }
};
