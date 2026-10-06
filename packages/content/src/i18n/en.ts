import type { I18nDictionary, I18nProjectItem } from "@platform/types";

const enProjects: I18nProjectItem[] = [
  {
    id: "medmind",
    number: "01",
    title: "MedMind",
    tagline: "Healthcare / Medical Education",
    discipline: "Interaction & Development",
    category: "Healthcare & Data",
    year: "2026",
    client: "Healthcare Sector / Medical Education",
    description:
      "Training and exam preparation platform for physicians that transforms traditional study into an active, personalized learning experience. Integrates smart practice, simulations, learning paths, and progress tracking.",
    role: ["Product Design", "Interaction", "Development"],
    tags: ["TypeScript", "UX/UI", "Motion", "Product Design"],
    link: "https://medmind.com.pe/",
    image: {
      src: "/images/project-medmind.svg",
      alt: "MedMind - Training and exam preparation platform for physicians"
    },
    featured: true
  },
  {
    id: "sigae",
    number: "02",
    title: "SIGAE",
    tagline: "Education / Academic Management",
    discipline: "Product & Development",
    category: "Education & Management",
    year: "2026",
    client: "Education Sector / Academic Management",
    description:
      "Academic management system for faculty and students that centralizes courses, content, syllabi, and grade records within a clear, accessible institutional experience.",
    role: ["Product", "Development", "UX/UI"],
    tags: ["JavaScript", "APIs", "SQL", "UX/UI"],
    image: {
      src: "/images/project-sigae.svg",
      alt: "SIGAE - Institutional academic management system"
    },
    featured: true
  },
  {
    id: "sala-situacional-geresa",
    number: "03",
    title: "Sala Situacional GERESA",
    tagline: "Public Health / Data Analytics",
    discipline: "Data & Development",
    category: "Healthcare & Data",
    year: "2026",
    client: "Public Health Sector / Data",
    description:
      "Platform engineered to transform epidemiological data from disparate sources into actionable intelligence for surveillance and decision-making. Integrates indicators, interactive maps, and visualizations for diseases such as dengue, malaria, ARI, and ADD.",
    role: ["Data Visualization", "Fullstack Development", "GeoJSON"],
    tags: ["Python", "APIs", "Data Visualization", "GeoJSON"],
    image: {
      src: "/images/project-cortex.svg",
      alt: "Sala Situacional GERESA - Epidemiological surveillance and data analytics"
    },
    featured: true
  },
  {
    id: "fonoteca-iiap",
    number: "04",
    title: "Fonoteca IIAP",
    tagline: "Biodiversity / Bioacoustics",
    discipline: "Architecture & Development",
    category: "Biodiversity & Science",
    year: "2025—2026",
    client: "Biodiversity / Bioacoustics",
    description:
      "Digital acoustic library built to systematize, manage, and explore audio recordings of Amazonian wildlife. Integrates species taxonomy, geographic locations, metadata, audio playback, waveforms, and spectrograms in a specialized scientific platform.",
    role: ["Architecture", "Development", "Audio Engine"],
    tags: ["Astro", "React", "NestJS", "PostgreSQL", "MinIO"],
    link: "https://fonoteca.iiap.gob.pe/",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Fonoteca IIAP - Digital acoustic library of Amazonian wildlife"
    },
    featured: true
  },
  {
    id: "anfibios-reptiles-iiap",
    number: "05",
    title: "Anfibios y Reptiles IIAP",
    tagline: "Biodiversity / Research",
    discipline: "Frontend & UX/UI",
    category: "Biodiversity & Science",
    year: "2025—2026",
    client: "Biodiversity / Research",
    description:
      "Digital platform dedicated to the dissemination and exploration of scientific data on Amazonian amphibian and reptile species. Developed and refined user interfaces focused on making scientific knowledge clear and accessible.",
    role: ["Frontend Development", "UX/UI Design"],
    tags: ["React", "Next.js", "TypeScript", "Figma"],
    link: "https://vertebrados.iiap.gob.pe/",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Anfibios y Reptiles IIAP - Scientific catalog of Amazonian species"
    },
    featured: false
  },
  {
    id: "portal-web-iiap",
    number: "06",
    title: "Portal Web IIAP",
    tagline: "Institutional / Amazonian Science",
    discipline: "Frontend Development",
    category: "Biodiversity & Science",
    year: "2025—2026",
    client: "Institutional / Amazonian Science",
    description:
      "Modernization and continuous maintenance of the institutional portal for the Research Institute of the Peruvian Amazon (IIAP), working on UI components, content architecture, and responsive layouts to improve access to scientific knowledge.",
    role: ["Frontend Development", "Web Modernization"],
    tags: ["React", "Next.js", "TypeScript", "Figma"],
    image: {
      src: "/images/project-sigae.svg",
      alt: "Portal Web IIAP - Institutional scientific research portal"
    },
    featured: false
  },
  {
    id: "admision-postgrado-unap",
    number: "07",
    title: "Admisión Postgrado UNAP",
    tagline: "Education / Institutional Management",
    discipline: "Software Development",
    category: "Education & Management",
    year: "2024—2026",
    client: "Education Sector / Institutional Management",
    description:
      "Digital platform to manage and streamline the graduate school admission process at Universidad Nacional de la Amazonía Peruana, centralizing applicant records, verification, and admission pipelines.",
    role: ["Software Development", "Database Architecture", "UX/UI"],
    tags: ["JavaScript", "PHP", "SQL", "UX/UI"],
    link: "https://admision.postgradounap.edu.pe/",
    image: {
      src: "/images/project-sigae.svg",
      alt: "Admisión Postgrado UNAP - Institutional admission and application platform"
    },
    featured: false
  }
];

export const enDictionary: I18nDictionary = {
  locale: "en",
  site: {
    brandName: "JEFF Santos",
    fullName: "Jose Jefferson Santos Panaifo",
    monogram: "JS",
    tagline: "Software Engineer · Systems & Editorial Digital Products",
    defaultTitle: "JEFF Santos // Storytelling, Architecture & Product",
    defaultDescription:
      "Observe small frictions → understand context → contribute solutions → learn → share. Personal and narrative platform of JEFF Santos."
  },
  nav: {
    projects: "Projects",
    solutions: "Solutions",
    context: "Context",
    talks: "Talks",
    activities: "Activities",
    now: "Now",
    manifesto: "Manifesto",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Product · Technology · Experience",
    headline: "What if simplicity brought us closer to what we need?",
    headlineLead: "What if simplicity",
    headlineAccent: "brought us closer to what we need?",
    subheading: "Sometimes, a small improvement can change far more than it seems.",
    description: "It can mean understanding something faster, completing a process without frustration, or finding the right information at the right moment.",
    observations: [
      "Fewer unnecessary steps.",
      "Platforms that are easier to understand.",
      "Information that truly guides.",
      "Experiences designed for people."
    ],
    scrollCue: "Scroll to continue →",
    ctaExplore: "Begin story"
  },
  bridge: {
    quote: "Over time, I understood that many good ideas start right there."
  },
  chapterTwo: {
    sectionTag: "The Method",
    title: "From understanding the problem to building the solution",
    subtitle: "A structured three-stage framework to turn complexity into clarity, intuitive flows, and functional digital products.",
    steps: [
      {
        step: "01",
        title: "1. Understand",
        description: "Observe the context, listen to people, and identify what is truly hindering the user experience."
      },
      {
        step: "02",
        title: "2. Simplify",
        description: "Turn complex problems into clearer flows, simpler decisions, and easy-to-use solutions."
      },
      {
        step: "03",
        title: "3. Build",
        description: "Transform those ideas into functional, measurable digital products ready to evolve."
      }
    ]
  },
  areas: {
    sectionTag: "Profile",
    titlePrefix: "I am",
    titleName: "JOSÉ JEFFERSON SANTOS",
    statementLead: "Bachelor of **Systems and Computer Engineering**. I build software focused on **understanding processes, spotting improvements, and turning ideas into simple, useful, and sustainable digital products.**",
    dedicationTitle: "What I do",
    dedicationText: "Software development, user experience (UX), frontend architecture, feature implementation, and process optimization.",
    areasTitle: "Areas of involvement",
    areasList: "Education · Healthcare · Data · Institutional management · Digital products · Environmental impact",
    statementImpact: "I am especially interested in building technology that not only works, but solves better, reduces friction, and generates a positive impact on people and their surroundings.",
    imageAlt: "José Jefferson Santos - Editorial portrait"
  },
  projects: {
    sectionTag: "Selected Works",
    lead: "Selected Works & Real-world Projects",
    subtitle: "Real initiatives where deep problem understanding guided architecture and user experience.",
    roleLabel: "Discipline",
    ctaCase: "Explore case",
    ctaViewMore: "View all projects",
    moreWorkLabel: "More work",
    items: enProjects.filter((p) => p.featured),
    allProjects: enProjects
  },
  solutions: {
    sectionTag: "Tactical Solutions",
    lead: "Not everything needs to become a massive project.",
    statements: [
      "Sometimes it is enough to streamline a flow.",
      "Automate a tedious task.",
      "Organize tangled information.",
      "Or find a radically simpler way forward."
    ],
    ctaExplore: "Explore solutions",
    items: [
      {
        id: "flujo-registro",
        number: "01",
        title: "Verification workflow simplification",
        type: "Workflow",
        description:
          "Reduced 7 disjointed screens to 3 steps with asynchronous identity validation.",
        impact: "42% drop in onboarding abandonment rate."
      },
      {
        id: "pipeline-export",
        number: "02",
        title: "Reactive report pipeline",
        type: "Automation",
        description:
          "Replaced manual spreadsheet gathering with structured single-click export.",
        impact: "~6 hours saved per operational team weekly."
      },
      {
        id: "taxonomia-datos",
        number: "03",
        title: "Clinical taxonomy standardization",
        type: "Structure",
        description:
          "Unified vocabulary and semantic mapping to prevent duplicate diagnosis records in hospitals.",
        impact: "Zero reconciliation discrepancies on medical audit."
      },
      {
        id: "accesibilidad-core",
        number: "04",
        title: "Dynamic contrast audit and remediation",
        type: "Accessibility",
        description:
          "Harmonized palette to WCAG AAA for low-vision medical personnel in varying ambient lighting.",
        impact: "100% regulatory accessibility compliance."
      }
    ]
  },
  institutions: {
    sectionTag: "Context",
    lead: "Environments where I learned to deeply understand problems.",
    roleLabel: "Role / Period",
    items: [
      {
        id: "inst-1",
        name: "National University of the Peruvian Amazon",
        role: "Frontend Developer / Technical Lead",
        area: "Information Technology Directorate",
        period: "2023 — 2025",
        context:
          "Spearheaded admissions and academic re-engineering. Monorepo architecture and accessibility standards for over 12,000 applicants."
      },
      {
        id: "inst-2",
        name: "Loreto Regional Health Network",
        role: "UX Consultant & Clinical Systems",
        area: "Healthcare Digital Transformation",
        period: "2024 — Present",
        context:
          "Assessed hospital workflows and designed simplified digital tools for frontline healthcare workers in remote outpatient clinics."
      },
      {
        id: "inst-3",
        name: "Computer Science & Data Lab",
        role: "Researcher / Frontend Developer",
        area: "Applied Research",
        period: "2022 — 2024",
        context:
          "Developed high-performance interactive visualizations for bioinformatics datasets and climate models."
      }
    ]
  },
  talks: {
    sectionTag: "Vision & Talks",
    lead: "Sharing ideas, shaping discussions, and building impact.",
    subtitle:
      "I believe great software is not born from chasing trends blindly, but from understanding human friction and leading with architectural rigor.",
    manifestoQuote:
      "I aspire to lead teams where technical architecture coexists with human empathy: robust systems within, calm and invisible outside.",
    manifestoAuthor: "JEFF Santos · Career Vision",
    visionTitle: "Where I'm heading // What I aim to build",
    visionPillars: [
      {
        number: "01",
        title: "Software Architecture & Tech Leadership",
        desc: "Designing the backbone of mission-critical platforms serving millions without downtime or loss of aesthetic precision."
      },
      {
        number: "02",
        title: "Product Mentor & Tech Evangelist",
        desc: "Taking engineering discussions beyond syntax: focusing builders on solving real, measurable business problems."
      },
      {
        number: "03",
        title: "Mission-Critical UX Pioneer",
        desc: "Specializing in healthcare and high-cognitive-load interfaces where an erroneous interaction has direct human consequences."
      }
    ],
    speakerCta: "Organizing a conference, meetup or podcast? Let's talk",
    items: [
      {
        id: "talk-01",
        number: "01",
        title: "Building Products from Real Problems",
        status: "preparing",
        statusLabel: "Preparing · 2026",
        summary:
          "How to uncover invisible organizational friction before writing code, and why operational empathy beats hyped frameworks.",
        year: "2026",
        location: "Main Stage",
        eventType: "Keynote"
      },
      {
        id: "talk-02",
        number: "02",
        title: "Resilient Frontend Architecture & Peak Performance",
        status: "scheduled",
        statusLabel: "Confirmed · 2026",
        summary:
          "Distributed monorepo patterns, Core Web Vitals optimization, and 60 FPS micro-interactions without sacrificing accessibility.",
        year: "2026",
        location: "Technical Workshop",
        eventType: "Masterclass"
      },
      {
        id: "talk-03",
        number: "03",
        title: "From Writing Code to Product Thinking",
        status: "presented",
        statusLabel: "Delivered · 2025",
        summary:
          "The evolution of the technical craft: understanding human incentives, embracing constraints, and recognizing simplification as the highest sophistication.",
        year: "2025",
        location: "Tech Summit",
        eventType: "Panel"
      },
      {
        id: "talk-04",
        number: "04",
        title: "Clinical Interfaces & Designing for High-Cognitive-Load Environments",
        status: "presented",
        statusLabel: "Delivered · 2025",
        summary:
          "Lessons learned designing software for medical teams where clarity and speed directly save lives.",
        year: "2025",
        location: "Medical Informatics Symposium",
        eventType: "Conference"
      }
    ]
  },
  activities: {
    sectionTag: "Activities Log",
    lead: "A log of recent activities and steps.",
    groups: [
      {
        year: "2026",
        items: [
          {
            id: "act-1",
            type: "Event",
            title: "Software Innovation & Architecture Summit",
            detail: "Panel discussion on optimizing mission-critical public interfaces.",
            period: "Q1 2026"
          },
          {
            id: "act-2",
            type: "Training",
            title: "Advanced Web Performance & Accessibility Workshop",
            detail: "Specialized training on Core Web Vitals, native animations, and hybrid rendering.",
            period: "February 2026"
          },
          {
            id: "act-3",
            type: "Participation",
            title: "Digital Procedures Technical Advisory Board",
            detail: "Standards evaluation to eliminate friction in student admissions.",
            period: "January 2026"
          }
        ]
      }
    ]
  },
  now: {
    sectionTag: "Current Focus",
    lead: "Now",
    subtitle: "Where I am focusing my energy and curiosity right now.",
    lastUpdatedLabel: "Updated",
    lastUpdatedDate: "October 2026",
    items: [
      {
        category: "Learning",
        description: "Modular architectures for editorial monorepos and progressive rendering patterns.",
        detail: "Probing the boundary between subtle client interactivity and server-side lightness."
      },
      {
        category: "Building",
        description: "An interface ecosystem for public institutions centered on unconditional accessibility.",
        detail: "Eliminating superfluous screens and crafting workflows that respect people's time."
      },
      {
        category: "Preparing",
        description: "Talk 'Building Products from Real Problems' and pragmatic UX notes.",
        detail: "Synthesizing lessons learned across high-volume institutional software."
      },
      {
        category: "Exploring",
        description: "Declarative micro-storytelling techniques that do not sacrifice performance on modest devices.",
        detail: "Prioritizing native browser fluidness and respecting reduced motion preferences."
      }
    ]
  },
  contact: {
    sectionTag: "Contact",
    headingLine1: "Let's work",
    headingLine2: "together",
    ctaButton: "Get in touch",
    email: "daylersan@gmail.com",
    phone: "+51966870897",
    phoneDisplay: "+51 966 870 897",
    location: "Lima, Peru",
    timeZone: "17:48 COT (UTC-5)",
    availability: "Available for select projects and product architecture consulting",
    arrowLabel: "Get in touch"
  },
  footer: {
    brandStatement: "JEFF Santos // Jose Jefferson Santos Panaifo · Decoupled monorepo architecture.",
    philosophyQuote: "Before building, you must understand.",
    backToTop: "Back to top",
    github: "GitHub",
    contact: "Contact",
    rights: "All rights reserved"
  }
};
