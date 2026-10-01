/**
 * Formats a single or double digit index into a 2-digit padded string (e.g. 1 -> "01")
 */
export function formatIndex(index: number): string {
  return String(index).padStart(2, "0");
}

/**
 * Join non-empty string tokens with a custom separator
 */
export function joinTokens(tokens: (string | undefined | null)[], separator = " · "): string {
  return tokens.filter(Boolean).join(separator);
}
