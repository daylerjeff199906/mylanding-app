import React, { useState } from "react";

export interface PerspectiveToggleProps {
  initialMode?: "narrativa" | "resumen";
  onModeChange?: (mode: "narrativa" | "resumen") => void;
}

/**
 * Interactive React component demonstrating state-driven interaction
 * while keeping 95%+ of the landing page in lightweight Astro & native JS.
 */
export const PerspectiveToggle: React.FC<PerspectiveToggleProps> = ({
  initialMode = "narrativa",
  onModeChange
}) => {
  const [mode, setMode] = useState<"narrativa" | "resumen">(initialMode);

  const handleToggle = (nextMode: "narrativa" | "resumen") => {
    setMode(nextMode);
    onModeChange?.(nextMode);

    // Dispatch custom DOM event for Astro / Vanilla JS animation coordinators
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("perspective:change", {
          detail: { mode: nextMode }
        })
      );
    }
  };

  return (
    <div
      role="group"
      aria-label="Selector de perspectiva de lectura"
      className="inline-flex items-center gap-1 p-1 bg-stone-100/90 dark:bg-stone-900/90 border border-stone-200/80 dark:border-stone-800/80 rounded-full backdrop-blur-md text-xs font-mono transition-colors duration-300"
    >
      <button
        type="button"
        onClick={() => handleToggle("narrativa")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          mode === "narrativa"
            ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs font-medium"
            : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
        }`}
        aria-pressed={mode === "narrativa"}
      >
        Narrativa
      </button>
      <button
        type="button"
        onClick={() => handleToggle("resumen")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          mode === "resumen"
            ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs font-medium"
            : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
        }`}
        aria-pressed={mode === "resumen"}
      >
        Síntesis
      </button>
    </div>
  );
};
