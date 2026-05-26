"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Legacy() {
  return (
    <section id="legacy" className="relative bg-ink py-28 sm:py-36 lg:py-44">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — editorial label */}
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Our Legacy</span>
            </div>
            <h2 className="display mt-8 text-[clamp(2rem,4.5vw,3.5rem)] uppercase">
              A House Built On
              <br />
              <span className="text-gold">Purpose.</span>
            </h2>
            <div className="mt-10 flex flex-col gap-1 font-body text-[11px] uppercase tracking-editorial text-bone/50">
              <span>Chartered · April 23, 1971</span>
              <span>Louisiana Tech University</span>
              <span>363rd House of Alpha</span>
            </div>
          </Reveal>

          {/* Center — narrative */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="font-body text-base sm:text-lg leading-[1.85] text-bone/80">
              For over five decades, the Eta Kappa Chapter has stood as a
              cornerstone of Black excellence in North Louisiana — cultivating
              scholars, civic leaders, and men of distinction who serve their
              communities with intention and grace.
            </p>
            <p className="mt-8 font-body text-base sm:text-lg leading-[1.85] text-bone/65">
              Our brotherhood is anchored in the founding vision of the 9
              Pioneers: that manly deeds, scholarship, and love for all mankind
              are not aspirations, but obligations carried into every room we
              enter.
            </p>
            <div className="mt-12 hairline" />
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "54+", v: "Years of Service" },
                { k: "300+", v: "Brothers Initiated" },
                { k: "1971", v: "Chartered at LA Tech" },
              ].map((stat) => (
                <div key={stat.v}>
                  <div className="font-display text-3xl sm:text-4xl text-gold">
                    {stat.k}
                  </div>
                  <div className="mt-2 font-body text-[10px] uppercase tracking-editorial text-bone/50">
                    {stat.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — vertical portrait */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/legacy-portrait.jpg"
                alt="Brothers of Alpha Phi Alpha"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-body text-[10px] uppercase tracking-editorial text-gold/90">
                  Brotherhood
                </div>
                <div className="mt-1 font-display text-base text-bone">
                  Bound by purpose.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
