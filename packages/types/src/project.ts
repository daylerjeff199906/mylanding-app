export interface Project {
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
