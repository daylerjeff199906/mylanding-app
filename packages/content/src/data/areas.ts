export interface AreaItem {
  id: string;
  name: string;
  tagline: string;
  positionHint: "left" | "right" | "center" | "offset-left" | "offset-right";
}

export const areasList: AreaItem[] = [
  {
    id: "educacion",
    name: "Educación",
    tagline: "Plataformas de aprendizaje y seguimiento estudiantil",
    positionHint: "left"
  },
  {
    id: "salud",
    name: "Salud",
    tagline: "Sistemas clínicos, diagnóstico y reducción de fricción médica",
    positionHint: "right"
  },
  {
    id: "datos",
    name: "Datos",
    tagline: "Modelado, análisis de patrones e interfaces analíticas",
    positionHint: "center"
  },
  {
    id: "gestion",
    name: "Gestión",
    tagline: "Optimización de flujos de trabajo e interconexión interna",
    positionHint: "offset-left"
  },
  {
    id: "procesos",
    name: "Procesos institucionales",
    tagline: "Modernización de trámites, admisiones y normativas complejas",
    positionHint: "offset-right"
  },
  {
    id: "productos",
    name: "Productos digitales",
    tagline: "Arquitectura frontend, experiencia de usuario e interfaces vivas",
    positionHint: "center"
  }
];
