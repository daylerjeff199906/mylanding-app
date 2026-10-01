import { animate, inView, stagger } from "motion";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Editorial projects animation:
 * Sequential reveal per project piece:
 * number -> title -> context & description -> editorial image reveal
 */
export function initProjectsStory(): void {
  const projectElements = Array.from(document.querySelectorAll<HTMLElement>("[data-project-item]"));
  if (projectElements.length === 0) return;

  const reduced = prefersReducedMotion();

  projectElements.forEach((project) => {
    const num = project.querySelector<HTMLElement>("[data-part='number']");
    const title = project.querySelector<HTMLElement>("[data-part='title']");
    const meta = project.querySelector<HTMLElement>("[data-part='meta']");
    const desc = project.querySelector<HTMLElement>("[data-part='desc']");
    const image = project.querySelector<HTMLElement>("[data-part='image']");

    if (reduced) {
      [num, title, meta, desc, image].forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.clipPath = "none";
        }
      });
      return;
    }

    // Initial states
    const textGroup = [num, title, meta, desc].filter(Boolean) as HTMLElement[];
    textGroup.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
    });

    if (image) {
      image.style.opacity = "0";
      image.style.transform = "scale(1.02)";
      image.style.clipPath = "inset(12% 0% 12% 0%)";
    }

    const stopInView = inView(
      project,
      () => {
        // Text stagger
        animate(
          textGroup,
          { opacity: [0, 1], y: [16, 0] },
          {
            delay: stagger(0.08),
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }
        );

        // Image soft clip-path reveal
        if (image) {
          animate(
            image,
            {
              opacity: [0, 1],
              scale: [1.02, 1],
              clipPath: ["inset(12% 0% 12% 0%)", "inset(0% 0% 0% 0%)"]
            },
            {
              delay: 0.15,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1]
            }
          );
        }
      },
      { amount: 0.25 }
    );

    animationCoordinator.register(() => stopInView());
  });
}
