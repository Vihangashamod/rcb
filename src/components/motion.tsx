"use client";
import { useEffect } from "react";
export function ScrollMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!hero || media.matches) return;
      const progress = Math.min(
        Math.max(window.scrollY / hero.offsetHeight, 0),
        1,
      );
      hero.style.setProperty("--hero-shift", `${progress * 85}px`);
      hero.style.setProperty("--hero-scale", `${1.035 + progress * 0.055}`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);
  return null;
}
