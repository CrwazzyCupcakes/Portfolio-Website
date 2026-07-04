import { useEffect } from "react";

/**
 * Adds an `in-view` class to every element matching `selector` once it
 * scrolls into the viewport, so CSS (see `.reveal` / `.reveal.in-view`
 * in App.css) can fade + rise them into place.
 *
 * Falls back to marking everything visible immediately if
 * IntersectionObserver isn't available.
 */
export function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
