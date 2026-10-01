import { scroll, animate, inView, stagger } from "motion";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Activity timeline animation:
 * Smooth line progression tied to scroll using Motion scroll(),
 * plus staggered entry of the activity items.
 */
export function initTimelineStory(): void {
  const container = document.querySelector<HTMLElement>("[data-story='timeline']");
  if (!container) return;

  const reduced = prefersReducedMotion();

  const lineProgress = container.querySelector<HTMLElement>("[data-part='timeline-line']");
  const items = Array.from(container.querySelectorAll<HTMLElement>("[data-part='timeline-item']"));

  if (reduced) {
    if (lineProgress) {
      lineProgress.style.transform = "scaleY(1)";
    }
    items.forEach((item) => (item.style.opacity = "1"));
    return;
  }

  // Bind vertical line expansion to scroll through this specific container
  if (lineProgress) {
    lineProgress.style.transformOrigin = "top center";
    lineProgress.style.transform = "scaleY(0)";

    const stopScroll = scroll(
      animate(lineProgress, { scaleY: [0, 1] }, { ease: "linear" }),
      {
        target: container,
        offset: ["start 70%", "end 70%"]
      }
    );

    animationCoordinator.register(() => stopScroll());
  }

  // Items entrance
  items.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
  });

  const stopInView = inView(
    container,
    () => {
      animate(
        items as any,
        { opacity: [0, 1], y: [14, 0] } as any,
        {
          delay: stagger(0.1, { startDelay: 0.1 }),
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] as any
        }
      );
    },
    { amount: 0.2 }
  );

  animationCoordinator.register(() => stopInView());
}
