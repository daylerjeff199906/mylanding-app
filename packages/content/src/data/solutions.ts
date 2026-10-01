import type { Solution } from "@platform/types";

export const discreteSolutions: Solution[] = [
  {
    id: "flujo-registro",
    number: "01",
    title: "Simplificación de flujo de verificación",
    type: "Flujo",
    description:
      "Reducción de 7 pasos a 2 en la validación de identidad para usuarios no técnicos, eliminando la tasa de abandono en soporte.",
    impact: "85% menos tickets de asistencia"
  },
  {
    id: "pipeline-reportes",
    number: "02",
    title: "Script de conciliación de reportes académicos",
    type: "Automatización",
    description:
      "Automatización de generación y cotejo de actas que ahorra 14 horas de labor manual semanal a los coordinadores.",
    impact: "Ahorro de 14 horas/semana"
  },
  {
    id: "catalogo-unificado",
    number: "03",
    title: "Normalización de taxonomía documental",
    type: "Estructura de Datos",
    description:
      "Estructuración coherente de más de 4,000 registros normativos dispersos en carpetas y formatos heterogéneos.",
    impact: "Búsqueda en <2 segundos"
  },
  {
    id: "micro-feedback",
    number: "04",
    title: "Protocolo de retroalimentación inmediata en formularios",
    type: "Enfoque Alternativo",
    description:
      "Validación en tiempo real y asistencia contextual progresiva que orienta al usuario antes de cometer un error irreparable.",
    impact: "92% de envíos válidos al primer intento"
  }
];
