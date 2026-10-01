import { animate, inView } from "motion";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

export interface RevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  easing?: [number, number, number, number] | string;
  amount?: number | "some" | "all";
}

/**
 * Reusable reveal animation for a single element when it enters the viewport
 */
export function revealElement(
  element: HTMLElement | null,
  options: RevealOptions = {}
): (() => void) | undefined {
  if (!element) return;

  const reduced = prefersReducedMotion();
  const {
    y = 16,
    duration = 0.5,
    delay = 0,
    easing = [0.16, 1, 0.3, 1],
    amount = 0.2
  } = options;

  if (reduced) {
    element.style.opacity = "1";
    element.style.transform = "none";
    return;
  }

  // Initial state
  element.style.opacity = "0";
  element.style.transform = `translateY(${y}px)`;

  const stopInView = inView(
    element,
    () => {
      animate(
        element as any,
        { opacity: [0, 1], y: [y, 0] } as any,
        { duration, delay, ease: easing as any }
      );
    },
    { amount: amount as any }
  );

  const cleanup = () => {
    stopInView();
  };

  animationCoordinator.register(cleanup);
  return cleanup;
}

/**
 * Batch reveal all elements matching a selector
 */
export function revealAll(
  selector: string,
  parent: Document | HTMLElement = document,
  options: RevealOptions = {}
): void {
  const elements = parent.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el, index) => {
    revealElement(el, {
      ...options,
      delay: (options.delay || 0) + index * 0.08
    });
  });
}
