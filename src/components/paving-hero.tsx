"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/button";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const rows = 7;
const columns = 11;

/** Image fragments follow the ground's perspective, revealing the actual paving. */
const blocks = Array.from({ length: rows * columns }, (_, index) => {
  const row = Math.floor(index / columns);
  const column = index % columns;
  const top = 0.57 + (row / rows) * 0.43;
  const bottom = 0.57 + ((row + 1) / rows) * 0.43;
  const offset = row % 2 ? 0.5 : 0;
  const left = (column - offset) / (columns - 1);
  const right = (column + 1 - offset) / (columns - 1);
  return {
    top, bottom, left, right,
    start: (row * columns + Math.abs(column - 7) * 0.8) / (rows * columns + 5),
  };
});

export function PavingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chaptersRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!section || !scene || !canvas || !context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mobile = window.matchMedia("(max-width: 800px)");
    const before = new window.Image();
    const after = new window.Image();
    const pointer = { x: 0.5, y: 0.5, active: false };
    let frame = 0;
    let disposed = false;
    let visible = true;
    let loaded = false;
    let width = 0;
    let height = 0;
    let progress = 0;
    let targetProgress = 0;
    let storyProgress = 0;
    let targetStory = 0;
    let currentChapter = -1;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      frame = 0;
      if (!loaded || disposed || !width || !height) return;
      const still = reduced.matches || paused;
      targetProgress = still ? 1 : targetProgress;
      progress = still ? targetProgress : progress + (targetProgress - progress) * 0.16;
      if (Math.abs(targetProgress - progress) < 0.001) progress = targetProgress;
      pointerX += ((still ? 0 : (pointer.x - 0.5) * 14) - pointerX) * 0.12;
      pointerY += ((still ? 0 : (pointer.y - 0.5) * 8) - pointerY) * 0.12;
      section.style.setProperty("--scene-x", `${pointerX.toFixed(2)}px`);
      section.style.setProperty("--scene-y", `${pointerY.toFixed(2)}px`);
      section.style.setProperty("--lay-progress", `${progress.toFixed(4)}`);
      storyProgress = still || mobile.matches ? 0 : storyProgress + (targetStory - storyProgress) * 0.16;
      if (Math.abs(targetStory - storyProgress) < 0.001) storyProgress = targetStory;
      const opening = 1 - clamp((storyProgress - 0.19) / 0.19);
      const detail = clamp((storyProgress - 0.38) / 0.12);
      section.style.setProperty("--opening-opacity", `${opening.toFixed(4)}`);
      section.style.setProperty("--opening-y", `${(-32 * (1 - opening)).toFixed(2)}px`);
      section.style.setProperty("--detail-opacity", `${detail.toFixed(4)}`);
      section.style.setProperty("--detail-y", `${(26 * (1 - detail)).toFixed(2)}px`);
      section.style.setProperty("--camera-scale", `${(still || mobile.matches ? 1 : 1.07 - storyProgress * 0.07).toFixed(4)}`);
      section.style.setProperty("--story-progress", `${storyProgress.toFixed(4)}`);
      const chapter = targetStory < 0.3 ? 0 : targetStory < 0.75 ? 1 : 2;
      if (chapter !== currentChapter) {
        currentChapter = chapter;
        chaptersRef.current?.querySelectorAll("button").forEach((button, index) => {
          if (index === chapter) button.setAttribute("aria-current", "step");
          else button.removeAttribute("aria-current");
        });
      }

      const scale = Math.max(width / after.naturalWidth, height / after.naturalHeight);
      const imageWidth = after.naturalWidth * scale;
      const imageHeight = after.naturalHeight * scale;
      const imageX = (width - imageWidth) * (mobile.matches ? 0.66 : 0.5);
      const imageY = (height - imageHeight) * 0.52;
      const drawPhoto = (photo: HTMLImageElement) => context.drawImage(photo, imageX, imageY, imageWidth, imageHeight);
      context.clearRect(0, 0, width, height);
      drawPhoto(before);

      if (progress >= 0.999) {
        drawPhoto(after);
      } else {
        for (const block of blocks) {
          const amount = clamp((progress - block.start) / 0.13);
          if (amount === 0) continue;
          const eased = 1 - Math.pow(1 - amount, 3);
          const x = imageX + block.left * imageWidth;
          const y = imageY + block.top * imageHeight;
          const blockWidth = (block.right - block.left) * imageWidth + 1;
          const blockHeight = (block.bottom - block.top) * imageHeight + 1;
          context.save();
          context.globalAlpha = eased;
          context.translate(0, -22 * (1 - eased));
          context.beginPath();
          context.rect(x, y, blockWidth, blockHeight);
          context.clip();
          drawPhoto(after);
          context.restore();
        }
      }

      // A small, local response on the laid ground; never replaces the cursor.
      if (pointer.active && !still && finePointer.matches) {
        const px = (pointer.x * width - imageX) / imageWidth;
        const py = (pointer.y * height - imageY) / imageHeight;
        const block = (py > 0.79 || (py > 0.62 && px < 0.5)) && blocks.find(b => px >= b.left && px < b.right && py >= b.top && py < b.bottom && progress > b.start + 0.1);
        if (block) {
          context.fillStyle = "rgba(255, 239, 207, 0.1)";
          context.strokeStyle = "rgba(255, 239, 207, 0.65)";
          context.lineWidth = 1;
          const x = imageX + block.left * imageWidth;
          const y = imageY + block.top * imageHeight;
          const w = (block.right - block.left) * imageWidth;
          const h = (block.bottom - block.top) * imageHeight;
          context.fillRect(x + 2, y + 2, w - 4, h - 4);
          context.strokeRect(x + 2, y + 2, w - 4, h - 4);
        }
      }
      const settling = Math.abs(targetProgress - progress) > 0.001 ||
        (!mobile.matches && !still && Math.abs(targetStory - storyProgress) > 0.001) ||
        Math.abs((still ? 0 : (pointer.x - 0.5) * 14) - pointerX) > 0.05 ||
        Math.abs((still ? 0 : (pointer.y - 0.5) * 8) - pointerY) > 0.05;
      if (settling && visible && !still && !document.hidden) frame = requestAnimationFrame(paint);
    };

    const schedule = () => {
      if (!frame && visible && loaded && !document.hidden) frame = requestAnimationFrame(paint);
    };
    const update = () => {
      if (!visible || document.hidden) return;
      const bounds = section.getBoundingClientRect();
      const pin = section.querySelector<HTMLElement>(".paving-hero-pin");
      const distance = mobile.matches ? Math.max(260, bounds.height * 0.5) : Math.max(1, bounds.height - (pin?.offsetHeight ?? window.innerHeight - 72));
      targetStory = reduced.matches || paused ? 0 : clamp((72 - bounds.top) / distance);
      targetProgress = reduced.matches || paused ? 1 : clamp(0.04 + targetStory * 1.2);
      schedule();
    };
    const resize = () => {
      const rect = scene.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      update();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reduced.matches || paused) return;
      const bounds = scene.getBoundingClientRect();
      pointer.x = clamp((event.clientX - bounds.left) / bounds.width);
      pointer.y = clamp((event.clientY - bounds.top) / bounds.height);
      pointer.active = true;
      schedule();
    };
    const onPointerLeave = () => {
      pointer.x = 0.5;
      pointer.y = 0.5;
      pointer.active = false;
      schedule();
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else update();
    };
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) update();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    before.src = "/paving-craftsman-base.webp";
    after.src = "/paving-craftsman.webp";
    Promise.all([before.decode(), after.decode()]).then(() => {
      if (disposed) return;
      loaded = true;
      resize();
      progress = reduced.matches || paused ? 1 : targetProgress;
      paint();
      setReady(true);
    }).catch(() => { /* The semantic image stays visible if canvas assets fail. */ });
    resizeObserver.observe(scene);
    visibilityObserver.observe(section);
    window.addEventListener("scroll", update, { passive: true });
    section.addEventListener("pointermove", onPointerMove, { passive: true });
    section.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", update);
    mobile.addEventListener("change", resize);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("scroll", update);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", update);
      mobile.removeEventListener("change", resize);
    };
  }, [paused]);

  const goToChapter = (index: number) => {
    const section = sectionRef.current;
    const pin = section?.querySelector<HTMLElement>(".paving-hero-pin");
    if (!section || !pin) return;
    const distance = Math.max(1, section.offsetHeight - pin.offsetHeight);
    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 72;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight + [0, 0.62, 0.96][index] * distance;
    window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <section className="paving-hero" ref={sectionRef} aria-labelledby="hero-title" data-paused={paused} data-ready={ready}>
      <div className="paving-hero-pin">
        <div className="craft-scene" ref={sceneRef}>
          <Image src="/paving-craftsman.webp" alt="Illustrative scene of a craftsman carefully laying charcoal interlock paving in a tropical courtyard" fill preload unoptimized sizes="100vw" />
          <canvas ref={canvasRef} className={ready ? "paving-canvas is-ready" : "paving-canvas"} aria-hidden="true" />
        </div>
        <div className="craft-scrim" aria-hidden="true" />
        <div className="craft-copy">
          <h1 id="hero-title">Build something<br /><span>that lasts.</span></h1>
          <p>Good spaces start with good foundations. <br />Interlock paving and machinery for what comes next.</p>
          <div className="craft-actions">
            <InteractiveHoverButton href="#paving" variant="hero-primary" size="lg">Explore paving</InteractiveHoverButton>
            <a className="craft-secondary" href="#machinery">Discover machinery <ArrowUpRight size={18} /></a>
          </div>
          <a href="#calculator" className="craft-plan-link">Have a space in mind? <span>Plan your paving <ArrowUpRight size={15} /></span></a>
        </div>
        <div className="craft-next" aria-hidden="true">
          <p>Precision in<br /><span>every placement.</span></p>
          <span className="craft-next-description">Thoughtful detail.<br />Every step of the way.</span>
        </div>
        <div className="craft-bottom">
          <a href="#solutions" className="craft-scroll"><span className="craft-scroll-icon"><ArrowDown size={20} /></span><span>One block at a time.<small className="motion-instruction">Scroll to lay the groundwork</small><small className="still-instruction">Discover what’s possible</small></span></a>
          <div className="craft-chapters" ref={chaptersRef} aria-label="Paving sequence">
            {["Groundwork", "Placement", "Finish"].map((label, index) => <button type="button" key={label} onClick={() => goToChapter(index)} aria-label={`Show ${label.toLowerCase()} chapter`} aria-current={index === 0 ? "step" : undefined}><span className="chapter-mark" aria-hidden="true" /><span>{label}</span></button>)}
            <div className="craft-progress" aria-hidden="true"><span /></div>
          </div>
          <div className="craft-tools">
            <button className="motion-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Enable hero motion" : "Show still scene"} aria-pressed={paused} title={paused ? "Enable motion" : "Show still scene"}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>
          </div>
        </div>
        <span className="craft-image-note">Craftsmanship study · illustrative scene</span>
      </div>
    </section>
  );
}
