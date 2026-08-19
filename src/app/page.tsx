"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/animations";
import { FloatingHearts } from "@/components/floating-hearts";
import { SectionDivider } from "@/components/section-divider";
import { FoldCard, FoldSection } from "@/components/fold-card";
import { ImageModal } from "@/components/image-modal";
import Image from "next/image";

/*
  ╔══════════════════════════════════════════════════╗
  ║  ✏️  EDIT YOUR TIMELINE HERE                    ║
  ║  Each object = one card on the page.            ║
  ║  Change title, time, date, description freely.  ║
  ╚══════════════════════════════════════════════════╝
*/

interface TimelineItem {
  emoji: string;
  date: string;
  title: string;
  description: string;
  image?: string | null;
  images?: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    emoji: "💬",
    date: "Late October 2022",
    title: "Primele mesaje",
    description: "Buna seara, Istanbul de pe Scolii",
    images: ["/images/1.PNG"],
  },
  {
    emoji: "💬",
    date: "Early November 2022",
    title: "Primele date-uri",
    description: "BA UNDE I ALIN",
    images: ["/images/2.PNG", "/images/3.PNG"],
  },
  {
    emoji: "💘",
    date: "14 December 2022",
    title: "The Confession and first kiss",
    description: "We don't talk out it :)))",
    images: ["/images/26.PNG"],
  },
  {
    emoji: "🧸",
    date: "23 January 2023",
    title: "They Said Yes",
    description: "Top 3 momenets OAT, DAR N-AM POZA",
    images: ["/images/27.PNG"],
  },
  {
    emoji: "💕",
    date: "23 February 2023",
    title: "Prima Lunaaa",
    description: "Cute cute cute",
    images: ["/images/4.PNG"],
  },
  {
    emoji: "🦋",
    date: "In reeeest",
    title: "Getting to Know Each Other",
    description:
      "Replace this with a meaningful conversation or detail you discovered about each other.",
    images: [
      "/images/5.PNG",
      "/images/6.PNG",
      "/images/7.PNG",
      "/images/8.PNG",
      "/images/9.PNG",
      "/images/10.PNG",
      "/images/11.PNG",
      "/images/12.PNG",
      "/images/13.PNG",
      "/images/14.PNG",
      "/images/15.PNG",
      "/images/16.PNG",
      "/images/17.PNG",
      "/images/18.PNG",
      "/images/19.PNG",
      "/images/21.PNG",
      "/images/22.PNG",
      "/images/23.PNG",
    ],
  },
  {
    emoji: "🤗",
    date: "ORICAND SI IN ORICE ZI",
    title: "MARCUS",
    description: "GOGOSI????",
    image: "/images/20.PNG",
  },
  {
    emoji: "💍",
    date: "19 August 2026",
    title: "Making It Official ????",
    description: "Facem o poza? Plsss",
    image: null,
  },
];

/*
  ╔══════════════════════════════════════════════════╗
  ║  ✏️  EDIT YOUR "YOU & ME" WORDS HERE            ║
  ║  These float around the centre piece.           ║
  ╚══════════════════════════════════════════════════╝
*/

export default function Home() {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="relative overflow-x-hidden">
      <FloatingHearts />

      {/* ═══════════ HERO ═══════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6"
      >
        {/* Gradient orbs — smaller on mobile */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-orchid/20 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-plum/15 blur-[60px] sm:h-80 sm:w-80 sm:blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-powder/10 blur-[50px] sm:h-64 sm:w-64 sm:blur-[80px]" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10"
        >
          <Reveal variant="fadeDown" duration={0.8}>
            <motion.p
              className="text-xs font-medium tracking-[0.3em] uppercase text-plum sm:text-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.p>
          </Reveal>

          <Reveal variant="scaleUp" delay={0.2} duration={1}>
            <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight sm:mt-6 sm:text-8xl md:text-9xl">
              <motion.span
                className="bg-gradient-to-r from-plum via-saffron to-powder bg-[length:300%_100%] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Matia & Sonia
              </motion.span>
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.9}>
            <motion.a
              href="#our-story"
              className="animate-pulse-glow group mt-8 inline-flex items-center gap-2 rounded-full border border-orchid/30 bg-orchid/10 px-6 py-2.5 text-xs font-medium text-plum backdrop-blur-sm transition-all duration-300 hover:border-orchid/60 hover:bg-orchid/20 sm:mt-10 sm:px-8 sm:py-3 sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.a>
          </Reveal>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0e0b16] to-transparent sm:h-32" />
      </section>

      {/* ═══════════ TIMELINE — folding cards ═══════════ */}
      <section id="our-story" className="relative px-4 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="fadeUp">
            <h2 className="text-center font-heading text-3xl tracking-wide text-plum sm:text-4xl md:text-5xl">
              <motion.span
                whileInView={{ backgroundSize: ["0% 2px", "100% 2px"] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFAAEA, #98C1D9)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom center",
                  backgroundSize: "0% 2px",
                  paddingBottom: 4,
                }}
              >
                Our Story
              </motion.span>
            </h2>
            <p className="mt-3 text-center text-xs text-white/40 sm:mt-4 sm:text-sm">
              Promit ca n-am facut cu AI, dar nici nu-s romantic
            </p>
          </Reveal>

          {/* Timeline with fold-in cards */}
          <div className="relative mt-8 space-y-8 sm:mt-20 sm:space-y-12">
            {/* Vertical line — desktop only */}
            <motion.div
              className="absolute left-1/2 top-0 hidden h-full w-px sm:block"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(99,29,118,0.6), rgba(255,170,234,0.3), transparent)",
                transformOrigin: "top",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {TIMELINE.map((item, i) => {
              const gallery =
                item.images && item.images.length > 0
                  ? item.images
                  : item.image
                    ? [item.image]
                    : [];

              return (
                <FoldCard key={i} index={i} className="relative">
                  <div
                    className={`flex items-start sm:gap-16 ${
                      i % 2 === 0
                        ? "sm:flex-row"
                        : "sm:flex-row-reverse sm:text-right"
                    }`}
                  >
                    {/* Dot on timeline — desktop only */}
                    <div className="absolute left-1/2 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:flex">
                      <motion.span
                        className="absolute h-4 w-4 rounded-full border-2 border-orchid bg-[#0e0b16]"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                      <motion.span
                        className="absolute h-2 w-2 rounded-full bg-plum"
                        whileInView={{ scale: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      />
                    </div>

                    {/* Content card */}
                    <div
                      className={`w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-300 hover:border-orchid/20 hover:bg-white/[0.06] sm:w-[calc(50%-2rem)] ${
                        i % 2 === 0 ? "" : "sm:ml-auto"
                      }`}
                    >
                      {/* Text content */}
                      <div className="p-4 sm:p-6">
                        <div
                          className={`flex items-center gap-2 sm:gap-3 ${
                            i % 2 !== 0 ? "sm:flex-row-reverse" : ""
                          }`}
                        >
                          <motion.span
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-orchid/20 text-base sm:h-8 sm:w-8"
                            whileInView={{ rotate: [0, 10, -10, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                          >
                            {item.emoji}
                          </motion.span>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-white/25 sm:text-[10px]">
                              {item.date}
                            </span>
                          </div>
                        </div>
                        <h3 className="mt-2 font-display text-lg text-white sm:mt-3 sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-white/50 sm:mt-2 sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      {/* Small image gallery — tap to open modal */}
                      {gallery.length > 0 && (
                        <div className="border-t border-white/5 p-3 sm:p-4">
                          <div
                            className={`grid gap-2.5 ${
                              gallery.length === 1
                                ? "grid-cols-1"
                                : "grid-cols-2"
                            }`}
                          >
                            {gallery.map((src, index) => (
                              <button
                                key={`${item.title}-${src}-${index}`}
                                type="button"
                                onClick={() =>
                                  setModalImage({
                                    src,
                                    alt: `${item.title} ${index + 1}`,
                                  })
                                }
                                className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] active:opacity-80"
                              >
                                <div className="relative h-72 w-full overflow-hidden sm:h-56">
                                  <Image
                                    src={src}
                                    alt={`${item.title} ${index + 1}`}
                                    width={500}
                                    height={360}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                  />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </FoldCard>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Image lightbox modal */}
      <ImageModal
        src={modalImage?.src ?? null}
        alt={modalImage?.alt ?? ""}
        onClose={() => setModalImage(null)}
      />
    </main>
  );
}
