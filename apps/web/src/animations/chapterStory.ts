import gsap from "gsap";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Chapter Two narrative animation:
 * "De entender el problema a construir la solución"
 * 1. Entender → 2. Simplificar → 3. Construir
 */
export function initChapterStory(): void {
  const container = document.querySelector<HTMLElement>("[data-story='chapter-two']");
  if (!container) return;

  const reduced = prefersReducedMotion();

  const title = container.querySelector<HTMLElement>("[data-chapter-part='title']");
  const steps = container.querySelectorAll<HTMLElement>("[data-chapter-part^='step-']");

  if (reduced) {
    if (title) title.style.opacity = "1";
    steps.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  // Create synchronized narrative timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      end: "bottom 75%",
      toggleActions: "play none none reverse"
    }
  });

  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }

  if (steps.length > 0) {
    tl.fromTo(
      steps,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.14, ease: "power2.out" },
      "-=0.25"
    );
  }

  if (tl.scrollTrigger) {
    animationCoordinator.registerScrollTrigger(tl.scrollTrigger);
  }
  animationCoordinator.registerGsap(tl);
}
