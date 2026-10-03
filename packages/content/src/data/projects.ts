import type { Project } from "@platform/types";

export const allProjects: Project[] = [
  {
    id: "medmind",
    number: "01",
    title: "MedMind",
    tagline: "Educación + Salud",
    discipline: "Interaction & Development",
    category: "Salud & Educación",
    year: "2026",
    client: "Sector Salud / Residentes Médicos",
    description:
      "Plataforma de entrenamiento clínico y toma de decisiones para residentes médicos. Transformó un protocolo denso de manuales estáticos en simulaciones interactivas con retroalimentación inmediata.",
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
    title: "SIGAE Core",
    tagline: "Gestión + Procesos Institucionales",
    discipline: "Architecture & Systems",
    category: "Desarrollo & Arquitectura",
    year: "2025",
    client: "Admisiones Institucionales",
    description:
      "Modernización integral de la plataforma de admisión y expediente institucional. Se redujeron en un 64% los pasos redundantemente requeridos y se eliminó el abandono en la etapa de carga documental.",
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
    discipline: "Design & Development",
    category: "Diseño & UX",
    year: "2025",
    client: "Operations Intelligence Lab",
    description:
      "Sistema de exploración de métricas y correlaciones en tiempo real para equipos de operaciones. Diseñado bajo el principio de que los datos solo tienen valor cuando la visualización no compite con la decisión.",
    role: ["Diseño de Producto", "Prototipado", "Frontend"],
    tags: ["Visualización de Datos", "GSAP", "Microinteracciones", "Performance"],
    link: "#cortex-analytics",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Composición de datos y correlaciones visuales en Cortex Lens"
    },
    featured: true
  },
  {
    id: "turboui-core",
    number: "04",
    title: "TurboUI Core",
    tagline: "Sistemas de Diseño & Monorepos",
    discipline: "Design Systems & Tooling",
    category: "Desarrollo & Arquitectura",
    year: "2025",
    client: "Ecosistema Multiplataforma",
    description:
      "Biblioteca agnóstica de tokens semánticos, componentes accesibles y guías tipográficas para aplicaciones distribuidas en arquitecturas monorepo.",
    role: ["Design Systems Lead", "Arquitectura CSS", "A11y"],
    tags: ["Vanilla CSS", "Radix Primitives", "Tokens Semánticos", "A11y"],
    link: "#turboui-core",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Tokens y componentes de TurboUI"
    },
    featured: true
  },
  {
    id: "docusync-engine",
    number: "05",
    title: "DocuSync Flow",
    tagline: "Validación & Automatización",
    discipline: "Interaction & Fullstack",
    category: "Desarrollo & Arquitectura",
    year: "2024",
    client: "Gestión Documental Gubernamental",
    description:
      "Motor reactivo de conciliación y firma digital para trámites de alta densidad legal con soporte offline y sincronización idempotente.",
    role: ["Ingeniería Frontend", "PWA Offline", "Seguridad"],
    tags: ["IndexedDB", "Web Workers", "Micro-frontends", "TypeScript"],
    link: "#docusync-engine",
    image: {
      src: "/images/project-sigae.svg",
      alt: "Motor de sincronización de documentos"
    },
    featured: true
  },
  {
    id: "bioviz-atlas",
    number: "06",
    title: "BioViz Atlas",
    tagline: "Bioinformática + Ciencia de Datos",
    discipline: "Data Visualization & WebGL",
    category: "Investigación & Ciencia",
    year: "2024",
    client: "Centro de Investigación Aplicada",
    description:
      "Visualizador de mapas de expresión génica y secuencias complejas en canvas de alta resolución con renderizado a 60 FPS sin saturar la memoria.",
    role: ["Desarrollador Gráfico", "Optimización", "Algoritmos"],
    tags: ["WebGL", "Canvas API", "WebAssembly", "Data Viz"],
    link: "#bioviz-atlas",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Visualización de atlas bioinformático"
    },
    featured: false
  },
  {
    id: "clinicflow-os",
    number: "07",
    title: "ClinicFlow OS",
    tagline: "Gestión Hospitalaria Ágil",
    discipline: "Product Design & Frontend",
    category: "Salud & Educación",
    year: "2024",
    client: "Red Asistencial",
    description:
      "Interfaz de triaje y asignación de camas de urgencia diseñada para reducir errores de digitación bajo situaciones de estrés extremo del personal médico.",
    role: ["Investigación de Usuario", "Prototipado", "UI Dev"],
    tags: ["UX de Crisis", "Design Tokens", "Vue", "Web Sockets"],
    link: "#clinicflow-os",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Tablero de triaje clínico"
    },
    featured: false
  },
  {
    id: "pulse-analytics",
    number: "08",
    title: "Pulse Analytics",
    tagline: "Telemetría & Rendimiento",
    discipline: "Architecture & Observability",
    category: "Desarrollo & Arquitectura",
    year: "2023",
    client: "Infraestructura Fintech",
    description:
      "Tablero de control de latencia en pasarelas de pago con alertas acústicas y visuales predictivas antes de incidentes de saturación de red.",
    role: ["Arquitectura Frontend", "Dashboarding", "Métricas"],
    tags: ["Grafana API", "Tailwind", "EventSource", "TypeScript"],
    link: "#pulse-analytics",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Panel de telemetría y salud del sistema"
    },
    featured: false
  },
  {
    id: "aether-motion",
    number: "09",
    title: "Aether Motion",
    tagline: "Interacción & Micro-narrativa",
    discipline: "Creative Coding & Interaction",
    category: "Diseño & UX",
    year: "2023",
    client: "Estudio Digital",
    description:
      "Suite de microinteracciones fluidas, interpolaciones de física elástica y transiciones de página para sitios web galardonados internacionalmente.",
    role: ["Creative Developer", "Motion Specialist"],
    tags: ["GSAP", "Lenis Scroll", "Framer", "CSS Moderno"],
    link: "#aether-motion",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Experimentos de física y microinteracción"
    },
    featured: false
  },
  {
    id: "neurocare-sim",
    number: "10",
    title: "NeuroCare Sim",
    tagline: "Neurociencia & Modelado 3D",
    discipline: "Simulation & UI Engineering",
    category: "Salud & Educación",
    year: "2023",
    client: "Facultad de Medicina Humana",
    description:
      "Simulador anatómico y de vías neuronales para diagnóstico temprano de neuropatías periféricas mediante casos clínicos guiados.",
    role: ["Desarrollador 3D Web", "UX Clínico"],
    tags: ["Three.js", "GLTF", "Accesibilidad", "TypeScript"],
    link: "#neurocare-sim",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Simulador anatómico neuronal"
    },
    featured: false
  },
  {
    id: "kairos-digital",
    number: "11",
    title: "Kairos Digital",
    tagline: "Publicación & Tipografía Editorial",
    discipline: "Editorial Web & Typography",
    category: "Diseño & UX",
    year: "2023",
    client: "Revista de Ensayos Contemporáneos",
    description:
      "Lienzo de lectura digital con soporte de ritmos verticales de rejilla, fuentes tipográficas de eje variable y modo nocturno de baja luminancia.",
    role: ["Director de Arte Digital", "Frontend Editorial"],
    tags: ["Variable Fonts", "CSS Grid", "Lector Zen", "Performance"],
    link: "#kairos-digital",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Plataforma editorial Kairos"
    },
    featured: false
  }
];

export const featuredProjects: Project[] = allProjects.filter((p) => p.featured);
