import type { Project } from "@platform/types";

export const featuredProjects: Project[] = [
  {
    id: "medmind",
    number: "01",
    title: "MedMind",
    tagline: "Educación + Salud",
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
    title: "SIGAE Admisiones",
    tagline: "Gestión + Procesos Institucionales",
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
  }
];
