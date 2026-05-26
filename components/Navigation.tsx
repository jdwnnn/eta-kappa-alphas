"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Chapter", href: "/#legacy" },
  { label: "Principles", href: "/#principles" },
  { label: "Impact", href: "/#impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Connect", href: "/#connect" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11">
            <Image
              src="/images/emblem-gold.jpg"
              alt="Eta Kappa Chapter Emblem"
              fill
              sizes="44px"
              className="rounded-full object-cover ring-1 ring-gold/30 group-hover:ring-gold/60 transition-all duration-500"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[13px] tracking-wide2 text-bone">
              ETA KAPPA
            </span>
            <span className="font-body text-[10px] tracking-editorial text-gold/80">
              ALPHA PHI ALPHA
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => {
            const isActive =
              link.href.startsWith("/") && !link.href.includes("#")
                ? pathname === link.href
                : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[11px] uppercase tracking-editorial transition-colors duration-500 ${
                  isActive
                    ? "text-gold"
                    : "text-bone/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:alphalatech@gmail.com"
            className="font-body text-[11px] uppercase tracking-editorial text-bone/90 border-b border-gold pb-1 hover:text-gold transition-colors duration-500"
          >
            Become An Alpha
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-bone"
        >
          <Menu className="h-6 w-6" strokeWidth={1.25} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-ink-deep md:hidden"
          >
            <div className="container-edge flex items-center justify-between py-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image
                    src="/images/emblem-gold.jpg"
                    alt=""
                    fill
                    sizes="40px"
                    className="rounded-full object-cover ring-1 ring-gold/40"
                  />
                </div>
                <span className="font-display text-[13px] tracking-wide2 text-bone">
                  ETA KAPPA
                </span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-bone"
              >
                <X className="h-6 w-6" strokeWidth={1.25} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {},
              }}
              className="container-edge flex flex-col gap-6 pt-12"
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-3xl tracking-wide text-bone border-b border-white/10 pb-5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="mailto:alphalatech@gmail.com"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group mt-6 self-start btn-gold"
              >
                Become An Alpha
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
