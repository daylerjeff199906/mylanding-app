import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CleanupFn = () => void;

class AnimationCoordinator {
  private cleanups: Set<CleanupFn> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  /**
   * Register a cleanup callback (function, observer disconnect, or timeline kill)
   */
  register(cleanup: CleanupFn): void {
    this.cleanups.add(cleanup);
  }

  /**
   * Register a GSAP timeline or tween to be killed upon cleanup
   */
  registerGsap(anim: gsap.core.Animation): void {
    this.cleanups.add(() => {
      anim.kill();
    });
  }

  /**
   * Register a ScrollTrigger instance to be killed upon cleanup
   */
  registerScrollTrigger(trigger: ScrollTrigger): void {
    this.cleanups.add(() => {
      trigger.kill();
    });
  }

  /**
   * Clean up all registered animators, kill ScrollTriggers, and reset
   */
  cleanup(): void {
    this.cleanups.forEach((fn) => {
      try {
        fn();
      } catch (err) {
        console.warn("[AnimationCoordinator] Cleanup warning:", err);
      }
    });
    this.cleanups.clear();

    if (typeof window !== "undefined" && ScrollTrigger) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.refresh();
    }
  }
}

export const animationCoordinator = new AnimationCoordinator();
