import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Link as LinkIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { galleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Chapter Gallery | Eta Kappa Chapter of Alpha Phi Alpha",
  description:
    "Moments from the brothers of Eta Kappa — service, scholarship, and brotherhood in practice.",
};

export default function GalleryPage() {
  return (
    <main className="bg-ink">
      <Navigation />
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-28 border-b border-white/5">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center justify-between gap-6 mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-editorial text-bone/55 hover:text-gold transition-colors duration-500"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                Back to Chapter
              </Link>
              <a
                href="https://linktr.ee/latechalphas"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-gold/60 px-4 py-2.5 sm:px-5 sm:py-3 font-body text-[10px] sm:text-[11px] uppercase tracking-editorial text-bone hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500 ease-cinematic"
              >
                <LinkIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>HK Linktree</span>
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Chapter Gallery</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[clamp(2.4rem,6vw,5rem)] uppercase max-w-4xl">
              Moments In
              <br />
              <span className="text-gold">Brotherhood.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl font-body text-[15px] leading-relaxed text-bone/65">
              A living archive of service, scholarship, and the everyday work of
              brotherhood — captured by and of the men of Eta Kappa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-edge">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
