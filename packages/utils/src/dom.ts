/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Safely query an element by selector
 */
export function querySafe<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: Document | HTMLElement = document
): T | null {
  return parent.querySelector<T>(selector);
}

/**
 * Safely query multiple elements by selector
 */
export function queryAllSafe<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: Document | HTMLElement = document
): T[] {
  return Array.from(parent.querySelectorAll<T>(selector));
}
