"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/site";
export function Gallery() {
  const [filter, setFilter] = useState("All"),
    [active, setActive] = useState<number | null>(null);
  const items = gallery.filter(
    (p) => filter === "All" || p.category === filter,
  );
  const current = active === null ? null : items[active];
  return (
    <section id="gallery" className="gallery-section section-pad">
      <div className="section-heading" data-reveal>
        <h2>
          Our world.
          <br />
          Through the lens.
        </h2>
        <p>
          From paving details to machines at work. A closer look at the people,
          products and places behind RCB.
        </p>
      </div>
      <Tabs
        value={filter}
        onValueChange={(v) => {
          setFilter(v);
          setActive(null);
        }}
      >
        <TabsList className="gallery-tabs" aria-label="Filter gallery">
          {["All", "Paving", "Machinery", "Construction", "Events"].map((f) => (
            <TabsTrigger value={f} key={f}>
              {f}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button
            key={item.src}
            className="gallery-item"
            onClick={() => setActive(i)}
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.description}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 45vw"
            />
            <div>
              <h3>{item.title}</h3>
              <ArrowUpRight size={25} />
            </div>
          </button>
        ))}
      </div>
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="gallery-dialog">
          {current && (
            <>
              <DialogTitle>{current.title}</DialogTitle>
              <DialogDescription>{current.description}</DialogDescription>
              <div className="lightbox-image">
                <Image
                  src={current.src}
                  alt={current.description}
                  fill
                  sizes="90vw"
                />
              </div>
              <div className="lightbox-nav">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Previous image"
                  onClick={() =>
                    setActive(((active ?? 0) - 1 + items.length) % items.length)
                  }
                >
                  <ChevronLeft />
                </Button>
                <span>
                  {(active ?? 0) + 1} / {items.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Next image"
                  onClick={() => setActive(((active ?? 0) + 1) % items.length)}
                >
                  <ChevronRight />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
