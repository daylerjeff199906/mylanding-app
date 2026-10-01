export type TalkStatus = "Preparando" | "Idea" | "Presentada";

export interface Talk {
  id: string;
  number: string;
  title: string;
  status: TalkStatus;
  summary?: string;
  year?: string;
}
