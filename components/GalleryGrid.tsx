"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";

function spanClasses(span?: GalleryItem["span"]) {
  switch (span) {
    case "wide":
      return "sm:col-span-2 aspect-[16/10]";
    case "tall":
      return "sm:row-span-2 aspect-[3/4] sm:aspect-[3/5]";
    default:
      return "aspect-[4/5]";
  }
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 auto-rows-auto">
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: (i % 6) * 0.05,
            }}
            className={`group relative overflow-hidden bg-ink-soft text-left ${spanClasses(
              item.span
            )}`}
            aria-label={item.caption ?? item.alt}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover grayscale-[15%] transition-all duration-[1200ms] ease-cinematic group-hover:grayscale-0 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-cinematic">
              <div className="leading-tight">
                {item.caption && (
                  <div className="font-display text-base text-bone">
                    {item.caption}
                  </div>
                )}
                {item.year && (
                  <div className="font-body text-[10px] uppercase tracking-editorial text-gold/80 mt-1">
                    {item.year}
                  </div>
                )}
              </div>
              <span className="font-body text-[10px] uppercase tracking-editorial text-bone/60">
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-ink-deep/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-bone/80 hover:text-gold transition-colors duration-500"
            >
              <X className="h-6 w-6" strokeWidth={1.25} />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-bone/70 hover:text-gold transition-colors duration-500"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-bone/70 hover:text-gold transition-colors duration-500"
            >
              <ChevronRight className="h-8 w-8" strokeWidth={1.25} />
            </button>

            <motion.div
              key={items[active].src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between font-body text-[11px] uppercase tracking-editorial text-bone/60">
                <span>
                  {items[active].caption}
                  {items[active].year && (
                    <span className="text-gold/70 ml-3">
                      · {items[active].year}
                    </span>
                  )}
                </span>
                <span>
                  {active + 1} / {items.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
