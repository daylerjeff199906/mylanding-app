export type SupportedLocale = "es" | "en";

export interface I18nSiteInfo {
  brandName: string;
  fullName: string;
  monogram: string;
  tagline: string;
  defaultTitle: string;
  defaultDescription: string;
}

export interface I18nNav {
  projects: string;
  solutions: string;
  context: string;
  talks: string;
  activities: string;
  now: string;
  manifesto: string;
  contact: string;
}

export interface I18nHero {
  eyebrow?: string;
  eyebrowName?: string;
  eyebrowRole?: string;
  headline: string;
  headlineLead?: string;
  headlineAccent?: string;
  subheading: string;
  description?: string;
  observations: string[];
  scrollCue: string;
  ctaExplore?: string;
}

export interface I18nBridge {
  quote: string;
}

export interface I18nMethodStep {
  step: string;
  title: string;
  description: string;
}

export interface I18nChapterTwo {
  sectionTag?: string;
  title?: string;
  subtitle?: string;
  steps?: I18nMethodStep[];
  phraseOne?: string;
  phraseTwo?: string;
  toolPhrase?: string;
  realProjectsPhrase?: string;
  principleTag?: string;
  keyPrinciple?: string;
}

export interface I18nAreaItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
}

export interface I18nAreas {
  sectionTag?: string;
  lead: string;
  subtitle: string;
  items: I18nAreaItem[];
}

export interface I18nProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  role: string[];
  tags: string[];
  link?: string;
  image: {
    src: string;
    alt: string;
  };
  featured: boolean;
}

export interface I18nProjects {
  sectionTag?: string;
  lead: string;
  subtitle: string;
  roleLabel: string;
  ctaCase: string;
  ctaViewMore: string;
  items: I18nProjectItem[];
}

export interface I18nSolutionItem {
  id: string;
  number: string;
  title: string;
  type: string;
  description: string;
  impact: string;
}

export interface I18nSolutions {
  sectionTag?: string;
  lead: string;
  statements: string[];
  ctaExplore: string;
  items: I18nSolutionItem[];
}

export interface I18nInstitutionItem {
  id: string;
  name: string;
  role: string;
  area: string;
  period?: string;
  context: string;
}

export interface I18nInstitutions {
  sectionTag?: string;
  lead: string;
  roleLabel: string;
  items: I18nInstitutionItem[];
}

export interface I18nTalkItem {
  id: string;
  number: string;
  title: string;
  status: "idea" | "preparing" | "scheduled" | "presented";
  statusLabel: string;
  summary: string;
  year?: string;
}

export interface I18nTalks {
  sectionTag?: string;
  lead: string;
  items: I18nTalkItem[];
}

export interface I18nActivityItem {
  id: string;
  type: string;
  title: string;
  detail: string;
  period: string;
}

export interface I18nActivityYearGroup {
  year: string;
  items: I18nActivityItem[];
}

export interface I18nActivities {
  sectionTag?: string;
  lead: string;
  groups: I18nActivityYearGroup[];
}

export interface I18nNowItem {
  category: string;
  description: string;
  detail?: string;
}

export interface I18nNow {
  sectionTag?: string;
  lead: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  items: I18nNowItem[];
}

export interface I18nFooter {
  brandStatement: string;
  philosophyQuote: string;
  backToTop: string;
  github: string;
  contact: string;
  rights: string;
}

export interface I18nDictionary {
  locale: SupportedLocale;
  site: I18nSiteInfo;
  nav: I18nNav;
  hero: I18nHero;
  bridge: I18nBridge;
  chapterTwo: I18nChapterTwo;
  areas: I18nAreas;
  projects: I18nProjects;
  solutions: I18nSolutions;
  institutions: I18nInstitutions;
  talks: I18nTalks;
  activities: I18nActivities;
  now: I18nNow;
  footer: I18nFooter;
}
