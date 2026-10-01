import { animate, stagger } from "motion";
import gsap from "gsap";
import { prefersReducedMotion } from "@platform/utils";
import { animationCoordinator } from "./cleanup";

/**
 * Hero narrative storytelling:
 * 1. Progressive calm reveal of the lead statement:
 *    "Siempre me han llamado la atención" -> "los problemas pequeños."
 * 2. Followed by "Esos que parecen normales."
 * 3. Followed by observations:
 *    "Un proceso con demasiados pasos."
 *    "Una plataforma difícil de entender."
 *    "Información que existe, pero no ayuda."
 * 4. Scroll bridge into the next chapter:
 *    "Con el tiempo entendí que muchas buenas ideas empiezan ahí."
 */
export function initHeroStory(): void {
  const heroRoot = document.querySelector<HTMLElement>("[data-story='hero']");
  if (!heroRoot) return;

  const reduced = prefersReducedMotion();

  const eyebrow = heroRoot.querySelector<HTMLElement>("[data-hero-part='eyebrow']");
  const phraseLead = heroRoot.querySelector<HTMLElement>("[data-hero-part='lead']");
  const subheading = heroRoot.querySelector<HTMLElement>("[data-hero-part='subheading']");
  const desc = heroRoot.querySelector<HTMLElement>("[data-hero-part='desc']");
  const observations = Array.from(heroRoot.querySelectorAll<HTMLElement>("[data-hero-part='observation']"));
  const bridgeText = document.querySelector<HTMLElement>("[data-story='bridge'] [data-bridge-text]");

  if (reduced) {
    if (eyebrow) eyebrow.style.opacity = "1";
    if (phraseLead) phraseLead.style.opacity = "1";
    if (subheading) subheading.style.opacity = "1";
    if (desc) desc.style.opacity = "1";
    observations.forEach((el) => (el.style.opacity = "1"));
    if (bridgeText) bridgeText.style.opacity = "1";
    return;
  }

  // Initial states with max 16-20px movement
  const elements = [eyebrow, phraseLead, subheading, desc, ...observations].filter(Boolean) as HTMLElement[];
  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
  });

  // Timed entrance sequence via Motion
  if (eyebrow) {
    animate(eyebrow as any, { opacity: [0, 1], y: [14, 0] } as any, { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any });
  }

  if (phraseLead) {
    animate(phraseLead as any, { opacity: [0, 1], y: [18, 0] } as any, { duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] as any });
  }

  if (subheading) {
    animate(subheading as any, { opacity: [0, 1], y: [14, 0] } as any, { duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] as any });
  }

  if (desc) {
    animate(desc as any, { opacity: [0, 1], y: [14, 0] } as any, { duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] as any });
  }

  if (observations.length > 0) {
    animate(
      observations as any,
      { opacity: [0, 1], y: [14, 0] } as any,
      {
        delay: stagger(0.12, { startDelay: 1.05 }),
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1]
      }
    );
  }

  // Narrative bridge to Chapter 2 powered by GSAP ScrollTrigger
  if (bridgeText) {
    const bridgeTl = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-story='bridge']",
        start: "top 80%",
        end: "top 45%",
        scrub: 0.6
      }
    });

    bridgeTl.fromTo(
      bridgeText,
      { opacity: 0.2, y: 20 },
      { opacity: 1, y: 0, ease: "power2.out" }
    );

    if (bridgeTl.scrollTrigger) {
      animationCoordinator.registerScrollTrigger(bridgeTl.scrollTrigger);
    }
    animationCoordinator.registerGsap(bridgeTl);
  }
}
