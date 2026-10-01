import gsap from "gsap";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Chapter Two narrative animation:
 * "Primero quería saber cómo funcionaban las cosas."
 * ↓
 * "Después quise saber cómo mejorarlas."
 * ↓
 * "Aprender a programar me dio una herramienta."
 * ↓
 * "Antes de hacer, hay que entender." (Visual weight / emphasis)
 */
export function initChapterStory(): void {
  const container = document.querySelector<HTMLElement>("[data-story='chapter-two']");
  if (!container) return;

  const reduced = prefersReducedMotion();

  const phrase1 = container.querySelector<HTMLElement>("[data-chapter-part='phrase-1']");
  const phrase2 = container.querySelector<HTMLElement>("[data-chapter-part='phrase-2']");
  const toolPhrase = container.querySelector<HTMLElement>("[data-chapter-part='tool-phrase']");
  const principle = container.querySelector<HTMLElement>("[data-chapter-part='principle']");

  if (reduced) {
    [phrase1, phrase2, toolPhrase, principle].forEach((el) => {
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
    return;
  }

  // Create synchronized narrative timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 75%",
      end: "bottom 80%",
      toggleActions: "play none none reverse"
    }
  });

  if (phrase1) {
    tl.fromTo(phrase1, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  }

  if (phrase2) {
    tl.fromTo(phrase2, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "+=0.15");
  }

  if (toolPhrase) {
    tl.fromTo(toolPhrase, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "+=0.1");
  }

  if (principle) {
    tl.fromTo(
      principle,
      { opacity: 0, y: 22, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      "+=0.15"
    );
  }

  if (tl.scrollTrigger) {
    animationCoordinator.registerScrollTrigger(tl.scrollTrigger);
  }
  animationCoordinator.registerGsap(tl);
}
