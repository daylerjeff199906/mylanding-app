export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  discipline?: string;
  category?: string;
  year?: string;
  client?: string;
  description: string;
  role: string[];
  tags: string[];
  link?: string;
  image?: {
    src: string;
    alt: string;
  };
  featured: boolean;
}
