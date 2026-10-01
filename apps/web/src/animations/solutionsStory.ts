import gsap from "gsap";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Solutions narrative:
 * 1. "No todo necesita convertirse en un gran proyecto."
 * 2. Sequential statements:
 *    - "A veces basta con mejorar un flujo."
 *    - "Automatizar una tarea."
 *    - "Ordenar información."
 *    - "O encontrar otra forma de resolver algo."
 * 3. Followed by discrete tactical solution items.
 */
export function initSolutionsStory(): void {
  const container = document.querySelector<HTMLElement>("[data-story='solutions']");
  if (!container) return;

  const reduced = prefersReducedMotion();

  const introLead = container.querySelector<HTMLElement>("[data-part='solutions-lead']");
  const statements = Array.from(container.querySelectorAll<HTMLElement>("[data-part='statement']"));
  const solutionItems = Array.from(container.querySelectorAll<HTMLElement>("[data-part='solution-card']"));

  if (reduced) {
    if (introLead) introLead.style.opacity = "1";
    statements.forEach((el) => (el.style.opacity = "1"));
    solutionItems.forEach((el) => (el.style.opacity = "1"));
    return;
  }

  // Set initial states
  if (introLead) {
    introLead.style.opacity = "0";
    introLead.style.transform = "translateY(16px)";
  }

  statements.forEach((el) => {
    el.style.opacity = "0.2";
    el.style.transform = "translateY(10px)";
  });

  solutionItems.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 75%",
      end: "bottom 85%",
      toggleActions: "play none none reverse"
    }
  });

  if (introLead) {
    tl.to(introLead, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  }

  if (statements.length > 0) {
    tl.to(
      statements,
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.45,
        ease: "power2.out"
      },
      "-=0.1"
    );
  }

  if (solutionItems.length > 0) {
    tl.to(
      solutionItems,
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "power2.out"
      },
      "+=0.1"
    );
  }

  if (tl.scrollTrigger) {
    animationCoordinator.registerScrollTrigger(tl.scrollTrigger);
  }
  animationCoordinator.registerGsap(tl);
}
