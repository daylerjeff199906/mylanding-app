import type { I18nDictionary, SupportedLocale } from "@platform/types";
import { esDictionary } from "./i18n/es";
import { enDictionary } from "./i18n/en";

export const DEFAULT_LOCALE: SupportedLocale = "es";
export const SUPPORTED_LOCALES: SupportedLocale[] = ["es", "en"];

const dictionaries: Record<SupportedLocale, I18nDictionary> = {
  es: esDictionary,
  en: enDictionary
};

/**
 * Retrieves the full content dictionary for a given locale.
 * Designed to seamlessly bridge with a future database/CMS API without modifying templates.
 */
export function getDictionary(locale: SupportedLocale = DEFAULT_LOCALE): I18nDictionary {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}

export * from "./data/narrative";
export * from "./data/areas";
export * from "./data/projects";
export * from "./data/solutions";
export * from "./data/institutions";
export * from "./data/talks";
export * from "./data/activities";
export * from "./data/now";
export { esDictionary, enDictionary };
