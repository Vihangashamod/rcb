"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    title: "A great space starts underfoot.",
    description: "Interlock & paving",
    image: "/paving-after.webp",
    alt: "Illustrative tropical courtyard with patterned interlock paving",
    href: "#paving",
    theme: "paving",
    note: "Illustrative design study",
  },
  {
    title: "Big ambitions. Meet your machines.",
    description: "Construction machinery",
    image: "/wheel-loader.jpg",
    alt: "Yellow SDLG wheel loader from the RCB machinery collection",
    href: "#machinery",
    theme: "machinery",
  },
  {
    title: "Build your production.",
    description: "Block-making machinery",
    image: "/QT8-15.jpg",
    alt: "QT8-15 block-making machinery from the RCB collection",
    href: "/products?category=block-making-machinery",
    theme: "production",
  },
];

export function SolutionHighlights() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    setEnhanced(true);
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = track.scrollWidth - track.clientWidth;
        const items = Array.from(track.children) as HTMLElement[];
        const nearest = items.reduce((best, item, i) => {
          const position = Math.min(max, item.offsetLeft - items[0].offsetLeft);
          const previous = Math.min(max, items[best].offsetLeft - items[0].offsetLeft);
          return Math.abs(position - track.scrollLeft) < Math.abs(previous - track.scrollLeft) ? i : best;
        }, 0);
        setActive(nearest);
      });
    };
    const resize = new ResizeObserver(update);
    resize.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[index] as HTMLElement | undefined;
    const first = track.children[0] as HTMLElement;
    if (!item) return;
    track.scrollTo({
      left: item.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section id="solutions" className="solution-highlights" aria-labelledby="solutions-title">
      <div className="highlights-heading">
        <h2 id="solutions-title">From the first block.<br /><span>To the final finish.</span></h2>
        <div>
          <p>Some projects start with a sketch. Others with a patch of earth. Wherever yours begins, find the paving, blocks and machinery to move it forward with RCB Holdings.</p>
          <Link className="text-link" href="/about">Get to know RCB <ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <ul
        className="highlights-track"
        id="solutions-gallery"
        ref={trackRef}
        tabIndex={0}
        aria-label="Explore RCB solutions. Use the arrow keys or swipe to browse."
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const index = event.key === "ArrowRight" ? Math.min(active + 1, highlights.length - 1)
            : event.key === "ArrowLeft" ? Math.max(active - 1, 0)
            : event.key === "Home" ? 0
            : event.key === "End" ? highlights.length - 1 : null;
          if (index !== null) { event.preventDefault(); goTo(index); }
        }}
      >
        {highlights.map((item) => (
          <li className={`highlight-card highlight-${item.theme}`} key={item.theme}>
            <a href={item.href} className="highlight-link">
              <div className="highlight-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 85vw, (min-width: 1440px) 700px, 52vw" /></div>
              <div className="highlight-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
              {item.note && <small className="highlight-note">{item.note}</small>}
              <span className="highlight-arrow" aria-hidden="true"><ArrowUpRight size={21} /></span>
            </a>
          </li>
        ))}
      </ul>
      <div className="highlights-footer">
        <a className="text-link" href="#calculator">Have a space in mind? Plan your paving <ArrowUpRight size={18} /></a>
        {enhanced && <div className="highlights-controls">
          <span className="highlights-count" aria-live="polite" aria-atomic="true">{active + 1}<span> / {highlights.length}</span></span>
          <button type="button" aria-label="Previous solution" aria-controls="solutions-gallery" disabled={active === 0} onClick={() => goTo(active - 1)}><ArrowLeft size={19} /></button>
          <button type="button" aria-label="Next solution" aria-controls="solutions-gallery" disabled={active === highlights.length - 1} onClick={() => goTo(active + 1)}><ArrowRight size={19} /></button>
        </div>}
      </div>
    </section>
  );
}
