import type { I18nDictionary } from "@platform/types";

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
    sectionTag: "Featured Projects",
    lead: "Some projects I have been part of.",
    subtitle: "Real initiatives where deep problem understanding guided architecture and experience.",
    roleLabel: "My contribution",
    ctaCase: "Explore case",
    ctaViewMore: "View more projects",
    items: [
      {
        id: "medmind",
        number: "01",
        title: "MedMind",
        tagline: "Education + Healthcare",
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
        title: "SIGAE Admissions",
        tagline: "Management + Institutional Processes",
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
      }
    ]
  },
  solutions: {
    sectionTag: "Tactical Solutions",
    lead: "Not everything needs to become a massive project.",
    statements: [
      "Sometimes it is enough to streamline a flow.",
      "Automate a tedious task.",
      "Structure unstructured information.",
      "Or find an entirely different angle to solve something."
    ],
    ctaExplore: "Explore solutions",
    items: [
      {
        id: "flujo-registro",
        number: "01",
        title: "Identity Verification Flow Simplification",
        type: "Flow",
        description:
          "Reduced validation from 7 steps to 2 for non-technical users, completely eliminating support drop-off.",
        impact: "85% fewer support tickets"
      },
      {
        id: "pipeline-reportes",
        number: "02",
        title: "Academic Report Reconciliation Script",
        type: "Automation",
        description:
          "Automated audit and certification generation saving academic coordinators 14 manual hours every week.",
        impact: "Saved 14 hours/week"
      },
      {
        id: "catalogo-unificado",
        number: "03",
        title: "Document Taxonomy Normalization",
        type: "Data Structure",
        description:
          "Harmonized over 4,000 regulatory documents previously dispersed across heterogeneous file folders.",
        impact: "Search latency < 2 seconds"
      }
    ]
  },
  institutions: {
    sectionTag: "Context & Experience",
    lead: "I have learned by working across different environments.",
    roleLabel: "Role / Participation",
    items: [
      {
        id: "unap",
        name: "National University of the Altiplano",
        role: "Software Engineering & Academic Innovation",
        area: "Higher Education & Digital Procedures",
        period: "2023 — Present",
        context:
          "Architecting institutional platforms for admissions, postgraduate programs, and student enrollments serving tens of thousands of applicants."
      },
      {
        id: "minsa-red",
        name: "Regional Health Network & Clinical Services",
        role: "Experience & Workflow Consultant",
        area: "Public Health",
        period: "2024",
        context:
          "Auditing and streamlining triage and digital medical chart admission interfaces to cut wait times at physical intake windows."
      },
      {
        id: "lab-investigacion",
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
    sectionTag: "Talks & Conferences",
    lead: "What I learn, I also want to share.",
    items: [
      {
        id: "talk-01",
        number: "01",
        title: "Building Products from Real Problems",
        status: "preparing",
        statusLabel: "Preparing",
        summary:
          "How to uncover invisible organizational friction before writing a line of code, and why operational empathy beats hyped frameworks.",
        year: "2026"
      },
      {
        id: "talk-02",
        number: "02",
        title: "From Writing Code to Product Thinking",
        status: "idea",
        statusLabel: "Idea",
        summary:
          "The evolution of the technical craft: understanding human incentives, embracing constraints, and recognizing simplification as the highest sophistication.",
        year: "2026"
      },
      {
        id: "talk-03",
        number: "03",
        title: "Applied Technology in Education",
        status: "idea",
        statusLabel: "Idea",
        summary:
          "Lessons learned building software for thousands of students under varied connectivity and high-stakes deadlines.",
        year: "2026"
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
  footer: {
    brandStatement: "JEFF Santos // Jose Jefferson Santos Panaifo · Decoupled monorepo architecture.",
    philosophyQuote: "Before building, you must understand.",
    backToTop: "Back to top",
    github: "GitHub",
    contact: "Contact",
    rights: "All rights reserved"
  }
};
