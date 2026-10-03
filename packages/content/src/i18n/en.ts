import type { I18nDictionary, I18nProjectItem } from "@platform/types";

const enProjects: I18nProjectItem[] = [
  {
    id: "medmind",
    number: "01",
    title: "MedMind",
    tagline: "Education + Healthcare",
    discipline: "Interaction & Development",
    category: "Healthcare & Education",
    year: "2026",
    client: "Healthcare Sector / Medical Residents",
    description:
      "Clinical decision training platform for medical residents. My work focused on transforming dense static manuals into interactive simulations with immediate formative feedback.",
    role: ["Product", "Development", "UX"],
    tags: ["TypeScript", "Motion", "UX Research", "Design Systems"],
    link: "#medmind",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Editorial interface of the MedMind clinical learning system"
    },
    featured: true
  },
  {
    id: "sigae-core",
    number: "02",
    title: "SIGAE Core",
    tagline: "Management + Institutional Processes",
    discipline: "Architecture & Systems",
    category: "Development & Architecture",
    year: "2025",
    client: "Institutional Admissions",
    description:
      "Complete modernization of the institutional admissions platform. Contributed to flow redesign, cutting redundant steps by 64% and eliminating drop-off.",
    role: ["Frontend Architecture", "Flows", "UI Engineering"],
    tags: ["Turborepo", "Astro", "Tailwind", "Accessibility"],
    link: "#sigae-core",
    image: {
      src: "/images/project-sigae.svg",
      alt: "Simplified admission workflow interface"
    },
    featured: true
  },
  {
    id: "cortex-analytics",
    number: "03",
    title: "Cortex Lens",
    tagline: "Data + Digital Products",
    discipline: "Design & Development",
    category: "Design & UX",
    year: "2025",
    client: "Operations Intelligence Lab",
    description:
      "Real-time operational metrics and correlations exploration tool. Designed around the tenet that data only delivers value when visualization does not compete with decisions.",
    role: ["Product Design", "Prototyping", "Frontend"],
    tags: ["Data Visualization", "GSAP", "Micro-interactions", "Performance"],
    link: "#cortex-analytics",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Data correlations in Cortex Lens"
    },
    featured: true
  },
  {
    id: "turboui-core",
    number: "04",
    title: "TurboUI Core",
    tagline: "Design Systems & Tooling",
    discipline: "Design Systems & Tooling",
    category: "Development & Architecture",
    year: "2025",
    client: "Multi-platform Ecosystem",
    description:
      "Agnostic library of semantic tokens, accessible primitives, and typographic scales for distributed applications within monorepos.",
    role: ["Design Systems Lead", "CSS Architecture", "A11y"],
    tags: ["Vanilla CSS", "Radix Primitives", "Tokens", "A11y"],
    link: "#turboui-core",
    image: {
      src: "/images/project-cortex.svg",
      alt: "TurboUI Design tokens and primitives"
    },
    featured: true
  },
  {
    id: "docusync-engine",
    number: "05",
    title: "DocuSync Flow",
    tagline: "Validation & Automation",
    discipline: "Interaction & Fullstack",
    category: "Development & Architecture",
    year: "2024",
    client: "Government Document Management",
    description:
      "Reactive reconciliation and digital signature engine for legally dense workflows featuring offline-first local storage and idempotent sync.",
    role: ["Frontend Engineering", "Offline PWA", "Security"],
    tags: ["IndexedDB", "Web Workers", "Micro-frontends", "TypeScript"],
    link: "#docusync-engine",
    image: {
      src: "/images/project-sigae.svg",
      alt: "DocuSync document sync engine"
    },
    featured: true
  },
  {
    id: "bioviz-atlas",
    number: "06",
    title: "BioViz Atlas",
    tagline: "Bioinformatics + Data Science",
    discipline: "Data Visualization & WebGL",
    category: "Research & Science",
    year: "2024",
    client: "Applied Research Lab",
    description:
      "High-resolution canvas visualizer for gene expression maps and complex genomic sequences rendering at 60 FPS without memory bloat.",
    role: ["Graphics Developer", "Optimization", "Algorithms"],
    tags: ["WebGL", "Canvas API", "WebAssembly", "Data Viz"],
    link: "#bioviz-atlas",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Bioinformatics atlas visualization"
    },
    featured: false
  },
  {
    id: "clinicflow-os",
    number: "07",
    title: "ClinicFlow OS",
    tagline: "Agile Healthcare Management",
    discipline: "Product Design & Frontend",
    category: "Healthcare & Education",
    year: "2024",
    client: "Regional Healthcare Network",
    description:
      "Emergency bed allocation and triage interface engineered to eliminate data-entry errors under intense medical staff stress.",
    role: ["User Research", "Prototyping", "UI Dev"],
    tags: ["Crisis UX", "Design Tokens", "Vue", "Web Sockets"],
    link: "#clinicflow-os",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Clinical triage board"
    },
    featured: false
  },
  {
    id: "pulse-analytics",
    number: "08",
    title: "Pulse Analytics",
    tagline: "Telemetry & Performance",
    discipline: "Architecture & Observability",
    category: "Development & Architecture",
    year: "2023",
    client: "Fintech Infrastructure",
    description:
      "Latency monitoring dashboard for transaction gateways with predictive audio-visual alarms before network saturation thresholds.",
    role: ["Frontend Architecture", "Dashboarding", "Metrics"],
    tags: ["Grafana API", "Tailwind", "EventSource", "TypeScript"],
    link: "#pulse-analytics",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Telemetry dashboard"
    },
    featured: false
  },
  {
    id: "aether-motion",
    number: "09",
    title: "Aether Motion",
    tagline: "Interaction & Micro-narrative",
    discipline: "Creative Coding & Interaction",
    category: "Design & UX",
    year: "2023",
    client: "Digital Creative Studio",
    description:
      "Suite of fluid micro-interactions, elastic physics interpolations, and page transitions for internationally awarded websites.",
    role: ["Creative Developer", "Motion Specialist"],
    tags: ["GSAP", "Lenis Scroll", "Framer", "Modern CSS"],
    link: "#aether-motion",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Physics and micro-interactions playground"
    },
    featured: false
  },
  {
    id: "neurocare-sim",
    number: "10",
    title: "NeuroCare Sim",
    tagline: "Neuroscience & 3D Modeling",
    discipline: "Simulation & UI Engineering",
    category: "Healthcare & Education",
    year: "2023",
    client: "School of Medicine",
    description:
      "Anatomical neural pathway simulator for early diagnosis of peripheral neuropathies through guided clinical case studies.",
    role: ["3D Web Developer", "Clinical UX"],
    tags: ["Three.js", "GLTF", "Accessibility", "TypeScript"],
    link: "#neurocare-sim",
    image: {
      src: "/images/project-medmind.svg",
      alt: "Neural pathway simulator"
    },
    featured: false
  },
  {
    id: "kairos-digital",
    number: "11",
    title: "Kairos Digital",
    tagline: "Publishing & Editorial Typography",
    discipline: "Editorial Web & Typography",
    category: "Design & UX",
    year: "2023",
    client: "Contemporary Essay Publication",
    description:
      "Digital reading canvas supporting vertical grid rhythms, variable font axes, and a low-luminance calm night reading mode.",
    role: ["Digital Art Director", "Editorial Frontend"],
    tags: ["Variable Fonts", "CSS Grid", "Zen Reader", "Performance"],
    link: "#kairos-digital",
    image: {
      src: "/images/project-cortex.svg",
      alt: "Kairos editorial platform"
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
    email: "contacto@jeffsantos.dev",
    phone: "+51 927 847 430",
    phoneDisplay: "+51 927 847 430",
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
