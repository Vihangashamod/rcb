"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));

    // A single, scroll-linked typographic handoff from paving to machinery.
    const statement = document.querySelector<HTMLElement>("[data-scroll-statement]");
    const compactViewport = window.matchMedia("(max-width: 800px), (max-height: 600px)");
    let statementFrame = 0;
    let statementVisible = false;
    const paintStatement = () => {
      statementFrame = 0;
      if (!statement) return;
      const bounds = statement.getBoundingClientRect();
      const pin = statement.firstElementChild as HTMLElement;
      const progress = Math.max(0, Math.min(1, (72 - bounds.top) / Math.max(1, bounds.height - pin.offsetHeight)));
      statement.style.setProperty("--first-line", `${Math.min(1, progress / 0.45) * 100}%`);
      statement.style.setProperty("--second-line", `${Math.max(0, Math.min(1, (progress - 0.4) / 0.5)) * 100}%`);
    };
    const scheduleStatement = () => {
      if (statementVisible && !statementFrame && !document.hidden && !reduced.matches && !compactViewport.matches) {
        statementFrame = requestAnimationFrame(paintStatement);
      }
    };
    const configureStatement = () => {
      statement?.classList.toggle("has-motion", !reduced.matches && !compactViewport.matches);
      scheduleStatement();
    };
    const statementObserver = new IntersectionObserver(([entry]) => {
      statementVisible = entry.isIntersecting;
      if (statementVisible) scheduleStatement();
      else { cancelAnimationFrame(statementFrame); statementFrame = 0; }
    });
    if (statement) {
      configureStatement();
      statementObserver.observe(statement);
      window.addEventListener("scroll", scheduleStatement, { passive: true });
      window.addEventListener("resize", scheduleStatement, { passive: true });
      document.addEventListener("visibilitychange", scheduleStatement);
      reduced.addEventListener("change", configureStatement);
      compactViewport.addEventListener("change", configureStatement);
    }

    const surfaces = document.querySelectorAll<HTMLElement>(".machine-card, .gallery-item, .paver-row, .intro-products > a");
    let frame = 0;
    let active: HTMLElement | null = null;
    let x = 0;
    let y = 0;
    const paint = () => {
      frame = 0;
      if (!active) return;
      active.style.setProperty("--hover-x", x.toFixed(3));
      active.style.setProperty("--hover-y", y.toFixed(3));
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !finePointer.matches || event.pointerType === "touch") return;
      active = event.currentTarget as HTMLElement;
      const rect = active.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const reset = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      element.style.setProperty("--hover-x", "0");
      element.style.setProperty("--hover-y", "0");
      if (active === element) active = null;
    };
    surfaces.forEach(element => {
      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", reset);
    });
    return () => {
      observer.disconnect();
      statementObserver.disconnect();
      cancelAnimationFrame(statementFrame);
      window.removeEventListener("scroll", scheduleStatement);
      window.removeEventListener("resize", scheduleStatement);
      document.removeEventListener("visibilitychange", scheduleStatement);
      reduced.removeEventListener("change", configureStatement);
      compactViewport.removeEventListener("change", configureStatement);
      statement?.classList.remove("has-motion");
      cancelAnimationFrame(frame);
      surfaces.forEach(element => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
      });
    };
  }, []);
  return null;
}
