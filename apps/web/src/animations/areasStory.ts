import { animate, inView, stagger } from "motion";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Typographic arrangement of impact areas:
 * Subtle floating entrance without bulky card borders.
 */
export function initAreasStory(): void {
  const container = document.querySelector<HTMLElement>("[data-story='areas']");
  if (!container) return;

  const reduced = prefersReducedMotion();
  const lead = container.querySelector<HTMLElement>("[data-areas-lead]");
  const items = Array.from(container.querySelectorAll<HTMLElement>("[data-area-item]"));

  if (reduced) {
    if (lead) lead.style.opacity = "1";
    items.forEach((item) => (item.style.opacity = "1"));
    return;
  }

  if (lead) {
    lead.style.opacity = "0";
    lead.style.transform = "translateY(14px)";
  }

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(16px)";
  });

  const stopInView = inView(
    container,
    () => {
      if (lead) {
        animate(lead as any, { opacity: [0, 1], y: [14, 0] } as any, { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any });
      }

      animate(
        items as any,
        { opacity: [0, 1], y: [16, 0] } as any,
        {
          delay: stagger(0.09, { startDelay: 0.2 }),
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] as any
        }
      );
    },
    { amount: 0.25 }
  );

  const cleanup = () => {
    stopInView();
  };

  animationCoordinator.register(cleanup);
}
