export type ActivityType = "Evento" | "Capacitación" | "Participación" | "Taller" | "Proyecto";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  detail: string;
  period: string;
}

export interface ActivityYearGroup {
  year: string;
  items: ActivityItem[];
}
