"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grain isolate min-h-[100svh] w-full overflow-hidden bg-ink-deep"
    >
      {/* Backdrop layered imagery */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/backdrop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/70 via-ink-deep/85 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,162,74,0.12),transparent_55%)]" />
      </div>

      {/* Faint emblem watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[80vh] w-[80vh] hidden lg:block"
      >
        <Image
          src="/images/emblem-mono.png"
          alt=""
          fill
          sizes="80vh"
          className="object-contain"
        />
      </motion.div>

      <div className="container-edge relative z-10 flex min-h-[100svh] flex-col justify-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="rule-gold" />
          <span className="eyebrow">
            363<span className="lowercase">rd</span> House of Alpha
            <span className="mx-3 text-gold/40">·</span>
            Est. April 23, 1971
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="display text-[clamp(2.6rem,9vw,7.5rem)] uppercase"
        >
          Eta Kappa
          <br />
          <span className="text-gold">Chapter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="mt-8 max-w-xl font-body text-[15px] sm:text-base leading-relaxed text-bone/75"
        >
          Alpha Phi Alpha Fraternity, Inc. — the first intercollegiate
          Greek-letter fraternity established by African American men. The Eta
          Kappa Chapter carries that legacy forward at Louisiana Tech University
          and across North Louisiana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mt-8 flex items-center gap-3 font-body text-[11px] uppercase tracking-editorial text-bone/55"
        >
          <span>Developing Leaders</span>
          <span className="h-px w-6 bg-gold/60" />
          <span>Serving Communities</span>
          <span className="h-px w-6 bg-gold/60" />
          <span className="hidden sm:inline">Building Legacy</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a href="#legacy" className="group btn-gold">
            <span>Discover The Chapter</span>
            <ArrowDownRight
              className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>
          <a href="/gallery" className="group btn-ghost">
            <span>View Gallery</span>
          </a>
        </motion.div>

        {/* Bottom meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="absolute bottom-10 left-0 right-0"
        >
          <div className="container-edge flex items-center justify-between text-[10px] uppercase tracking-editorial text-bone/45">
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-gold/80" />
              <span>Ruston, Louisiana</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>Scroll</span>
              <span className="h-px w-10 bg-bone/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
