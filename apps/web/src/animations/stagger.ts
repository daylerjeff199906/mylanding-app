import { animate, inView, stagger } from "motion";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

export interface StaggerOptions {
  staggerInterval?: number;
  y?: number;
  duration?: number;
  delay?: number;
  easing?: [number, number, number, number] | string;
  amount?: number | "some" | "all";
}

/**
 * Reveal children of a container sequentially
 */
export function revealChildren(
  container: HTMLElement | null,
  childSelector: string,
  options: StaggerOptions = {}
): (() => void) | undefined {
  if (!container) return;

  const reduced = prefersReducedMotion();
  const children = Array.from(container.querySelectorAll<HTMLElement>(childSelector));
  if (children.length === 0) return;

  const {
    staggerInterval = 0.08,
    y = 18,
    duration = 0.5,
    delay = 0,
    easing = [0.16, 1, 0.3, 1],
    amount = 0.2
  } = options;

  if (reduced) {
    children.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  children.forEach((child) => {
    child.style.opacity = "0";
    child.style.transform = `translateY(${y}px)`;
  });

  const stopInView = inView(
    container,
    () => {
      animate(
        children as any,
        { opacity: [0, 1], y: [y, 0] } as any,
        {
          delay: stagger(staggerInterval, { startDelay: delay }),
          duration,
          ease: easing as any
        }
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
