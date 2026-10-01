import { scroll, animate } from "motion";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Creates a subtle scroll progress indicator tied to the top bar
 */
export function initScrollProgressBar(progressBar: HTMLElement | null): (() => void) | undefined {
  if (!progressBar) return;

  if (prefersReducedMotion()) {
    progressBar.style.display = "none";
    return;
  }

  const stopScroll = scroll(
    animate(progressBar, { scaleX: [0, 1] }, { ease: "linear" })
  );

  const cleanup = () => {
    stopScroll();
  };

  animationCoordinator.register(cleanup);
  return cleanup;
}
