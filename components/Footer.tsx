"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

const nav = [
  { label: "Chapter", href: "/#legacy" },
  { label: "Principles", href: "/#principles" },
  { label: "Impact", href: "/#impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Connect", href: "/#connect" },
];

const external = [
  {
    label: "LA Tech Involve",
    href: "https://latech.presence.io/organization/alpha-phi-alpha-eta-kappa-chapter",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/5">
      <div className="container-edge py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Emblem + chapter */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14">
                <Image
                  src="/images/emblem-gold.jpg"
                  alt="Eta Kappa Chapter Emblem"
                  fill
                  sizes="56px"
                  className="rounded-full object-cover ring-1 ring-gold/40"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base tracking-wide text-bone">
                  ETA KAPPA CHAPTER
                </div>
                <div className="font-body text-[11px] uppercase tracking-editorial text-gold/80 mt-1">
                  Alpha Phi Alpha Fraternity, Inc.
                </div>
              </div>
            </div>
            <p className="mt-8 max-w-sm font-display italic text-bone/70 text-sm leading-relaxed">
              &ldquo;First of All, Servants of All, We Shall Transcend
              All.&rdquo;
            </p>
            <p className="mt-4 font-body text-[11px] uppercase tracking-editorial text-bone/40">
              363<span className="lowercase">rd</span> House of Alpha · Est.
              April 23, 1971
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="eyebrow">Navigate</div>
            <ul className="mt-6 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-bone/70 hover:text-gold transition-colors duration-500"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {external.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-body text-sm text-bone/70 hover:text-gold transition-colors duration-500"
                  >
                    {l.label}
                    <ArrowUpRight
                      className="h-3 w-3 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + actions */}
          <div className="md:col-span-4">
            <div className="eyebrow">Connect</div>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:alphalatech@gmail.com"
                  className="group flex items-center gap-3 font-body text-sm text-bone/80 hover:text-gold transition-colors duration-500"
                >
                  <Mail
                    className="h-4 w-4 text-gold/80 group-hover:text-gold transition-colors duration-500"
                    strokeWidth={1.25}
                  />
                  alphalatech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/latechalphas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-body text-sm text-bone/80 hover:text-gold transition-colors duration-500"
                >
                  <Instagram
                    className="h-4 w-4 text-gold/80 group-hover:text-gold transition-colors duration-500"
                    strokeWidth={1.25}
                  />
                  @latechalphas
                </a>
              </li>
              <li>
                <a
                  href="mailto:jwashing@latech.edu"
                  className="group flex items-center gap-3 font-body text-sm text-bone/80 hover:text-gold transition-colors duration-500"
                >
                  <Mail
                    className="h-4 w-4 text-gold/80 group-hover:text-gold transition-colors duration-500"
                    strokeWidth={1.25}
                  />
                  <span className="flex flex-col leading-tight">
                    <span>Advisor</span>
                    <span className="text-[10px] uppercase tracking-editorial text-bone/45 mt-0.5">
                      jwashing@latech.edu
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-10 flex flex-col gap-3 max-w-[240px]">
              <a
                href="https://cash.app/$HKAlphas"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 border border-gold/70 px-5 py-3 font-body text-[11px] uppercase tracking-editorial text-bone hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500 ease-cinematic"
              >
                <span>Donate</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="mailto:alphalatech@gmail.com"
                className="group inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-editorial text-bone/60 hover:text-gold transition-colors duration-500"
              >
                <span>Become An Alpha</span>
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 hairline" />

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-body text-[10px] uppercase tracking-editorial text-bone/40">
          <span>
            © {new Date().getFullYear()} Eta Kappa Chapter of Alpha Phi Alpha
            Fraternity, Inc.
          </span>
          <span>Ruston, Louisiana</span>
        </div>
      </div>
    </footer>
  );
}
