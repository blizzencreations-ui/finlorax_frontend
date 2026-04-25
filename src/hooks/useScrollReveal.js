import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every `.reveal` element.
 * Uses a small RAF delay so it runs after React has flushed the new DOM.
 */
export function useScrollReveal() {
  useEffect(() => {
    let observer;

    const init = () => {
      const els = document.querySelectorAll(".reveal");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              setTimeout(
                () => entry.target.classList.add("visible"),
                idx * 80
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      els.forEach((el) => {
        // Reset so elements animate again on page change
        el.classList.remove("visible");
        observer.observe(el);
      });
    };

    // Delay one frame so the new DOM is painted
    const raf = requestAnimationFrame(() => setTimeout(init, 60));

    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  });          // ← runs after every render (page key changes trigger re-mount)
}
