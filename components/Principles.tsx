"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const principles = [
  {
    no: "01",
    title: "Brotherhood",
    line: "Bonds that outlast the chapter room.",
    body: "We hold one another to a higher standard — sharpening character, defending dignity, and walking together through every season of life.",
  },
  {
    no: "02",
    title: "Scholarship",
    line: "The mind, disciplined and free.",
    body: "Academic excellence is the foundation of our fraternity. We invest in the intellectual rigor of our members and the educational advancement of our community.",
  },
  {
    no: "03",
    title: "Leadership",
    line: "Servant first. Always.",
    body: "From classrooms to city halls, our brothers shape the institutions around them — leading not by title, but by example and consequence.",
  },
  {
    no: "04",
    title: "Service",
    line: "The rent we pay for living.",
    body: "Service is not seasonal. Through mentorship, voter engagement, and direct community work, the Eta Kappa Chapter shows up where it matters most.",
  },
];

export default function Principles() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="principles"
      className="relative bg-ink-deep py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">The Four Pillars</span>
            </div>
            <h2 className="display mt-8 text-[clamp(2rem,4.5vw,3.5rem)] uppercase">
              Principles
              <br />
              <span className="text-gold">In Practice.</span>
            </h2>
            <p className="mt-8 max-w-md font-body text-[15px] leading-relaxed text-bone/65">
              The four cardinal principles of Alpha Phi Alpha are not abstract
              ideals. They are commitments — daily, deliberate, and
              non-negotiable.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {principles.map((p, i) => {
                const isActive = active === i;
                return (
                  <li key={p.no}>
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group block w-full text-left py-8 sm:py-10 px-1 transition-colors duration-500"
                    >
                      <div className="flex items-baseline justify-between gap-8">
                        <div className="flex items-baseline gap-6 sm:gap-10">
                          <span
                            className={`font-body text-[11px] uppercase tracking-editorial transition-colors duration-500 ${
                              isActive ? "text-gold" : "text-bone/40"
                            }`}
                          >
                            {p.no}
                          </span>
                          <h3
                            className={`display text-[clamp(1.8rem,3.6vw,3rem)] uppercase transition-colors duration-500 ${
                              isActive ? "text-bone" : "text-bone/55"
                            }`}
                          >
                            {p.title}
                          </h3>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{
                            width: isActive ? 64 : 16,
                            opacity: isActive ? 1 : 0.4,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-px bg-gold flex-none"
                        />
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-0 sm:pl-[5.5rem] pt-5 max-w-2xl">
                          <p className="font-display italic text-gold/90 text-base sm:text-lg">
                            {p.line}
                          </p>
                          <p className="mt-3 font-body text-[15px] leading-relaxed text-bone/75">
                            {p.body}
                          </p>
                        </div>
                      </motion.div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
