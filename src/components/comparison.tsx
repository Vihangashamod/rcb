"use client";
import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Comparison() {
  const [value, setValue] = useState(50);
  return (
    <section className="comparison-section section-pad" id="inspiration">
      <div className="section-heading" data-reveal>
        <h2>
          Same space.
          <br />A whole new possibility.
        </h2>
        <p>
          See what a considered paving pattern can bring to a space. Drag to
          explore the transformation.
        </p>
      </div>
      <div className="comparison-frame" data-reveal>
        <div className="comparison-images">
          <Image
            src="/paving-after.webp"
            alt="Illustrative courtyard with completed interlock paving"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div
            className="comparison-before"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <Image
              src="/paving-before.webp"
              alt="The same illustrative courtyard before paving"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
          <span className="compare-label before">Before</span>
          <span className="compare-label after">After</span>
          <div className="comparison-line" style={{ left: `${value}%` }}>
            <span>
              <MoveHorizontal size={22} />
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Reveal before and after paving"
            aria-valuetext={`${value}% before, ${100 - value}% after`}
            className="comparison-range"
            suppressHydrationWarning
          />
        </div>
        <div className="comparison-caption">
          <div>
            <strong>A better welcome, from the ground up.</strong>
            <span>
              Illustrative design visualization · not a completed RCB project
            </span>
          </div>
          <Button asChild variant="outline">
            <a href="#paving">
              Find your paving <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
