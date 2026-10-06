import type { Project } from "@platform/types";

export const allProjects: Project[] = [
  {
    id: "medmind",
    number: "01",
    title: "MedMind",
    tagline: "Sector Salud / Educación Médica",
    discipline: "Interaction & Development",
    category: "Salud & Datos",
    year: "2026",
    client: "Sector Salud / Educación Médica",
    description:
      "Plataforma de entrenamiento y preparación para médicos que transforma el estudio tradicional en una experiencia activa y personalizada. Integra práctica inteligente, simulacros, rutas de aprendizaje y seguimiento del progreso.",
    role: ["Product Design", "Interaction", "Development"],
    tags: ["TypeScript", "UX/UI", "Motion", "Product Design"],
    link: "https://medmind.com.pe/",
    image: {
      src: "/images/project-medmind.svg",
      alt: "MedMind - Plataforma de entrenamiento y preparación para médicos"
    },
    featured: true
  },
  {
    id: "sigae",
    number: "02",
    title: "SIGAE",
    tagline: "Sector Educación / Gestión Académica",
    discipline: "Product & Development",
    category: "Educación & Gestión",
    year: "2026",
    client: "Sector Educación / Gestión Académica",
    description:
      "Sistema académico para docentes y estudiantes que centraliza procesos como cursos, contenidos, sílabos y calificaciones dentro de una experiencia institucional más clara y accesible.",
    role: ["Product", "Development", "UX/UI"],
    tags: ["JavaScript", "APIs", "SQL", "UX/UI"],
    image: {
      src: "/images/project-sigae.svg",
      alt: "SIGAE - Sistema de gestión académica institucional"
    },
    featured: true
  },
  {
    id: "sala-situacional-geresa",
    number: "03",
    title: "Sala Situacional GERESA",
    tagline: "Sector Salud Pública / Datos",
    discipline: "Data & Development",
    category: "Salud & Datos",
    year: "2026",
    client: "Sector Salud Pública / Datos",
    description:
      "Plataforma para transformar datos epidemiológicos provenientes de distintas fuentes en información útil para vigilancia y toma de decisiones. Integra indicadores, mapas y visualizaciones de enfermedades como dengue, malaria, IRAs y EDAs.",
    role: ["Data Visualization", "Fullstack Development", "GeoJSON"],
    tags: ["Python", "APIs", "Data Visualization", "GeoJSON"],
    image: {
      src: "/images/project-cortex.svg",
      alt: "Sala Situacional GERESA - Vigilancia epidemiológica y analítica de datos"
    },
    featured: true
  },
  {
    id: "fonoteca-iiap",
    number: "04",
    title: "Fonoteca IIAP",
    tagline: "Biodiversidad / Bioacústica",
    discipline: "Architecture & Development",
    category: "Biodiversidad & Ciencia",
    year: "2025—2026",
    client: "Biodiversidad / Bioacústica",
    description:
      "Biblioteca acústica digital para sistematizar, administrar y explorar registros sonoros de fauna amazónica. Integra especies, taxonomía, ubicaciones, metadatos, reproducción de audio, waveforms y espectrogramas dentro de una plataforma especializada.",
    role: ["Architecture", "Development", "Audio Engine"],
    tags: ["Astro", "React", "NestJS", "PostgreSQL", "MinIO"],
    link: "https://fonoteca.iiap.gob.pe/",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Fonoteca IIAP - Biblioteca acústica digital de fauna amazónica"
    },
    featured: true
  },
  {
    id: "anfibios-reptiles-iiap",
    number: "05",
    title: "Anfibios y Reptiles IIAP",
    tagline: "Biodiversidad / Investigación",
    discipline: "Frontend & UX/UI",
    category: "Biodiversidad & Ciencia",
    year: "2025—2026",
    client: "Biodiversidad / Investigación",
    description:
      "Plataforma digital orientada a la difusión y consulta de información sobre especies amazónicas de anfibios y reptiles. Participé en el desarrollo y mejora de interfaces enfocadas en organizar información científica de manera clara y accesible.",
    role: ["Frontend Development", "UX/UI Design"],
    tags: ["React", "Next.js", "TypeScript", "Figma"],
    link: "https://vertebrados.iiap.gob.pe/",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Anfibios y Reptiles IIAP - Catálogo científico de especies amazónicas"
    },
    featured: false
  },
  {
    id: "portal-web-iiap",
    number: "06",
    title: "Portal Web IIAP",
    tagline: "Institucional / Ciencia Amazónica",
    discipline: "Frontend Development",
    category: "Biodiversidad & Ciencia",
    year: "2025—2026",
    client: "Institucional / Ciencia Amazónica",
    description:
      "Modernización y mantenimiento del portal institucional del Instituto de Investigaciones de la Amazonía Peruana, trabajando en interfaces, estructura de contenidos y componentes orientados a mejorar el acceso a información científica e institucional.",
    role: ["Frontend Development", "Web Modernization"],
    tags: ["React", "Next.js", "TypeScript", "Figma"],
    image: {
      src: "/images/project-sigae.svg",
      alt: "Portal Web IIAP - Portal institucional de investigación científica"
    },
    featured: false
  },
  {
    id: "admision-postgrado-unap",
    number: "07",
    title: "Admisión Postgrado UNAP",
    tagline: "Sector Educación / Gestión Institucional",
    discipline: "Software Development",
    category: "Educación & Gestión",
    year: "2024—2026",
    client: "Sector Educación / Gestión Institucional",
    description:
      "Plataforma para gestionar y facilitar el proceso de admisión de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana, centralizando información y procesos vinculados a la postulación.",
    role: ["Software Development", "Database Architecture", "UX/UI"],
    tags: ["JavaScript", "PHP", "SQL", "UX/UI"],
    link: "https://admision.postgradounap.edu.pe/",
    image: {
      src: "/images/project-sigae.svg",
      alt: "Admisión Postgrado UNAP - Plataforma de postulación y admisión"
    },
    featured: false
  }
];

export const featuredProjects: Project[] = allProjects.filter((p) => p.featured);
