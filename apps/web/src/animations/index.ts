import { animationCoordinator } from "./cleanup";
import { initScrollProgressBar } from "./scrollProgress";
import { initHeroStory } from "./heroStory";
import { initChapterStory } from "./chapterStory";
import { initAreasStory } from "./areasStory";
import { initProjectsStory } from "./projectsStory";
import { initSolutionsStory } from "./solutionsStory";
import { initTimelineStory } from "./timelineStory";
import { revealAll } from "./reveal";

export * from "./cleanup";
export * from "./reveal";
export * from "./stagger";
export * from "./scrollProgress";
export * from "./heroStory";
export * from "./chapterStory";
export * from "./areasStory";
export * from "./projectsStory";
export * from "./solutionsStory";
export * from "./timelineStory";

/**
 * Main initializer for all page animations.
 * Safe for Astro View Transitions: cleans previous triggers and reinitializes cleanly.
 */
export function initAllAnimations(): void {
  // Always clean any prior instances before setting up
  animationCoordinator.cleanup();

  // 1. Reading / scroll progress bar
  const progressBar = document.querySelector<HTMLElement>("[data-scroll-indicator]");
  initScrollProgressBar(progressBar);

  // 2. Stories
  initHeroStory();
  initChapterStory();
  initAreasStory();
  initProjectsStory();
  initSolutionsStory();
  initTimelineStory();

  // 3. Generic editorial reveals for institutions, talks, now
  revealAll("[data-reveal-editorial]");
}

// Setup Astro page lifecycle listeners
if (typeof window !== "undefined") {
  document.addEventListener("astro:page-load", () => {
    initAllAnimations();
  });

  document.addEventListener("astro:before-swap", () => {
    animationCoordinator.cleanup();
  });

  window.addEventListener("beforeunload", () => {
    animationCoordinator.cleanup();
  });
}
