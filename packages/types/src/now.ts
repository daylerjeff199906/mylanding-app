export type NowCategory = "Aprendiendo" | "Construyendo" | "Preparando" | "Explorando";

export interface NowSectionItem {
  category: NowCategory;
  description: string;
  detail?: string;
}

export interface NowData {
  lastUpdated: string;
  statusSummary: string;
  items: NowSectionItem[];
}
