import type { I18nDictionary } from "@platform/types";
import { allProjects, featuredProjects } from "../data/projects";

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
    statementLead: "Bachiller de **Ingeniería de Sistemas e Informática**. Desarrollo software enfocado en **entender procesos, detectar mejoras y convertir ideas en productos digitales simples, útiles y sostenibles.**",
    dedicationTitle: "A lo que me dedico",
    dedicationText: "Desarrollo de software, experiencia de usuario (UX), arquitectura frontend, implementación de funcionalidades y optimización de procesos.",
    areasTitle: "Áreas en las que participo",
    areasList: "Educación · Salud · Datos · Gestión institucional · Productos digitales · Impacto ambiental",
    statementImpact: "Me interesa especialmente construir tecnología que no solo funcione, sino que resuelva mejor, reduzca fricción y genere un impacto positivo en las personas y su entorno.",
    imageAlt: "José Jefferson Santos - Retrato editorial"
  },
  projects: {
    sectionTag: "Trabajos recientes",
    lead: "Trabajos & Proyectos Seleccionados",
    subtitle: "Iniciativas reales donde la comprensión del problema guió la arquitectura y la experiencia de usuario.",
    roleLabel: "Disciplina",
    ctaCase: "Explorar caso",
    ctaViewMore: "Ver todos los proyectos",
    moreWorkLabel: "Más proyectos",
    items: featuredProjects,
    allProjects: allProjects
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
          "Reducción de 7 pasos a 3 mediante validación asíncrona de identidad.",
        impact: "Disminución del 42% en tasa de abandono en onboarding."
      },
      {
        id: "pipeline-export",
        number: "02",
        title: "Generador reactivo de informes",
        type: "Automatización",
        description:
          "Sustitución de reportes manuales en hojas de cálculo por exportación estructurada con un clic.",
        impact: "Ahorro de ~6 horas semanales por equipo operativo."
      },
      {
        id: "taxonomia-datos",
        number: "03",
        title: "Normalización de nomenclaturas clínicas",
        type: "Estructura",
        description:
          "Glosario unificado y mapeo semántico para evitar duplicidad de diagnósticos en registros hospitalarios.",
        impact: "Cero discrepancias en auditoría de historias clínicas."
      },
      {
        id: "accesibilidad-core",
        number: "04",
        title: "Auditoría y corrección de contraste dinámico",
        type: "Accesibilidad",
        description:
          "Adaptación de paleta a normas WCAG AAA para usuarios con baja visión en entornos clínicos con luz dispar.",
        impact: "Cumplimiento normativo del 100% en inspección."
      }
    ]
  },
  institutions: {
    sectionTag: "Contexto",
    lead: "Lugares donde he aprendido a entender problemas.",
    roleLabel: "Rol / Periodo",
    items: [
      {
        id: "inst-1",
        name: "Universidad Nacional de la Amazonía Peruana",
        role: "Desarrollador / Líder Técnico Frontend",
        area: "Dirección de Tecnologías de Información",
        period: "2023 — 2025",
        context:
          "Liderazgo en la reingeniería del sistema de admisiones y gestión curricular. Implementación de monorepos y estándares de accesibilidad para más de 12,000 postulantes."
      },
      {
        id: "inst-2",
        name: "Red de Salud Regional Loreto",
        role: "Consultor de Experiencia y Sistemas Clínicos",
        area: "Transformación Digital en Salud",
        period: "2024 — Presente",
        context:
          "Diagnóstico de flujos hospitalarios y diseño de interfaces simplificadas para personal asistencial en postas médicas de zonas periféricas."
      },
      {
        id: "inst-3",
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
    sectionTag: "Visión & Presentaciones",
    lead: "Compartiendo ideas, debatiendo el futuro y creando impacto.",
    subtitle:
      "Creo firmemente que el software de calidad no nace de seguir tendencias a ciegas, sino de comprender profundamente la fricción humana y liderar con rigor arquitectónico.",
    manifestoQuote:
      "Aspiro a liderar equipos donde la arquitectura técnica conviva con la empatía humana: sistemas robustos por dentro, invisibles y calmos por fuera.",
    manifestoAuthor: "JEFF Santos · Visión Profesional",
    visionTitle: "Hacia dónde voy // Lo que busco construir",
    visionPillars: [
      {
        number: "01",
        title: "Arquitectura de Software & Liderazgo Técnico",
        desc: "Diseñar la columna vertebral de plataformas institucionales que atiendan a millones de personas sin interrupciones ni perder coherencia estética."
      },
      {
        number: "02",
        title: "Divulgador & Mentor de Producto",
        desc: "Llevar la conversación técnica más allá de las sintaxis: enfocar a los ingenieros en resolver problemas reales, tangibles y de negocio."
      },
      {
        number: "03",
        title: "Pionero en UX de Misión Crítica",
        desc: "Especialización en interfaces médicas y sistemas de alta carga cognitiva, donde un clic incorrecto tiene consecuencias humanas directas."
      }
    ],
    speakerCta: "¿Organizas una conferencia, meetup o podcast? Charlemos",
    items: [
      {
        id: "talk-01",
        number: "01",
        title: "Construir productos desde problemas reales",
        status: "preparing",
        statusLabel: "En preparación · 2026",
        summary:
          "Cómo identificar la fricción invisible en organizaciones antes de escribir código y por qué la empatía operativa supera a los frameworks de moda.",
        year: "2026",
        location: "Conferencia Principal",
        eventType: "Keynote"
      },
      {
        id: "talk-02",
        number: "02",
        title: "Arquitectura Frontend Resiliente & Rendimiento Extremo",
        status: "scheduled",
        statusLabel: "Confirmado · 2026",
        summary:
          "Estrategias de monorepos distribuidos, Core Web Vitals y microinteracciones de 60 FPS sin sacrificar accesibilidad.",
        year: "2026",
        location: "Workshop Técnico",
        eventType: "Masterclass"
      },
      {
        id: "talk-03",
        number: "03",
        title: "De escribir código a pensar en producto",
        status: "presented",
        statusLabel: "Realizado · 2025",
        summary:
          "La evolución del rol técnico: entender incentivos humanos, el valor de las restricciones y la simplificación como máxima sofisticación.",
        year: "2025",
        location: "Tech Summit",
        eventType: "Panel"
      },
      {
        id: "talk-04",
        number: "04",
        title: "Interfaces clínicas y diseño para situaciones de alta carga cognitiva",
        status: "presented",
        statusLabel: "Realizado · 2025",
        summary:
          "Lecciones diseñando software para personal de salud donde la claridad visual y la velocidad de respuesta salvan vidas.",
        year: "2025",
        location: "Simposio de Informática Médica",
        eventType: "Conferencia"
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
  contact: {
    sectionTag: "Contacto",
    headingLine1: "Trabajemos",
    headingLine2: "juntos",
    ctaButton: "Hablemos",
    email: "daylersan@gmail.com",
    phone: "+51966870897",
    phoneDisplay: "+51 966 870 897",
    location: "Lima, Perú",
    timeZone: "17:48 COT (UTC-5)",
    availability: "Disponible para proyectos selectos y consultoría de producto",
    arrowLabel: "Contáctame"
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
