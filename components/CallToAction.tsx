"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CallToAction() {
  return (
    <section
      id="connect"
      className="relative isolate overflow-hidden bg-ink-deep py-28 sm:py-36 lg:py-44"
    >
      {/* faint emblem watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] opacity-[0.04]">
        <Image
          src="/images/emblem-mono.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-edge relative">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Carry The Legacy Forward</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="display mt-10 text-[clamp(2.4rem,6.5vw,5.5rem)] uppercase leading-[1.02]">
              Step Into A
              <br />
              House Of <span className="text-gold">Purpose.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl font-body text-[15px] sm:text-base leading-relaxed text-bone/70">
              Whether you are a prospective member, an alumnus seeking to
              reconnect, or a community partner ready to build alongside us —
              we welcome the conversation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="mailto:alphalatech@gmail.com"
                className="group btn-gold"
              >
                <span>Begin The Conversation</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://instagram.com/latechalphas"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-ghost"
              >
                <span>Follow @latechalphas</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
