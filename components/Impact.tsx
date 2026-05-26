"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * To swap in real chapter photos:
 *   Replace the files at /public/images/impact/{mentorship|scholarship|civic}.jpg
 *   (keep the same filenames — no code changes needed)
 */
const pillars = [
  {
    tag: "Mentorship",
    title: "Go-To-High-School, Go-To-College",
    img: "/images/impact/mentorship.jpg",
    body: "Guiding the next generation of young men toward higher education through tutoring, college tours, and personal mentorship.",
  },
  {
    tag: "Scholarship",
    title: "The Alpha Endowment",
    img: "/images/impact/scholarship.jpg",
    body: "Awarding annual scholarships to scholars of distinction across Louisiana — investing directly in the leaders of tomorrow.",
  },
  {
    tag: "Civic Engagement",
    title: "A Voteless People Is A Hopeless People",
    img: "/images/impact/civic.jpg",
    body: "Driving voter registration, civic literacy, and engagement initiatives that strengthen our community at every level of government.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="relative bg-ink py-28 sm:py-36 lg:py-44">
      <div className="container-edge">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 sm:mb-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Community Impact</span>
            </div>
            <h2 className="display mt-8 text-[clamp(2rem,4.5vw,3.5rem)] uppercase max-w-3xl">
              Service Is The
              <br />
              <span className="text-gold">Standard.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md font-body text-[15px] leading-relaxed text-bone/65">
              Three national programs of Alpha Phi Alpha — carried out locally,
              with intention, by the brothers of Eta Kappa.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.1}>
              <article className="group relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-[1200ms] ease-cinematic group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                  <div className="absolute top-5 left-5 right-5 flex items-center gap-3">
                    <span className="font-body text-[10px] uppercase tracking-editorial text-gold">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-gold/40" />
                    <span className="font-body text-[10px] uppercase tracking-editorial text-bone/70">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-xl sm:text-2xl leading-tight text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-bone/65">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Voter engagement CTAs */}
        <Reveal delay={0.2}>
          <div className="mt-20 sm:mt-24 lg:mt-28 border-t border-white/10 pt-14 sm:pt-16">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <span className="eyebrow">Make Your Voice Count</span>
                <span className="h-px w-8 bg-gold" />
              </div>
              <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-bone/70">
                A voteless people is a hopeless people. Whether you&rsquo;re a
                first-time voter or returning to the ballot, the State of
                Louisiana makes it simple.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-gold"
                >
                  <span>Register To Vote</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="https://voterportal.sos.la.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-ghost"
                >
                  <span>Check Registration</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
