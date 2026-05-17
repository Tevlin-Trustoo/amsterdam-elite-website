"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ["0%", "10%"]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-end">
      {/* Parallax photo */}
      <motion.div className="absolute inset-0 scale-110 will-change-transform" style={{ y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90"
          alt="Luxury Amsterdam household interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full pb-20 md:pb-32 px-8 md:px-16 lg:px-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Supertitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-px bg-gold/60" />
          <span className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-sans">
            Amsterdam · Private Household & Lifestyle Management
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10 overflow-hidden">
          {["Your household, fully managed.", "Your life, fully yours."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 2.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-normal text-white leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(40px, 6.5vw, 92px)" }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subheadline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.9 }}
          className="flex flex-col sm:flex-row items-start sm:items-end gap-8"
        >
          <p className="text-white/55 text-sm font-sans leading-relaxed max-w-sm">
            We handle every detail behind the scenes, so you never have to think about it.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Gold filled */}
            <Link
              href="/contact"
              data-cursor-hover
              className="group relative overflow-hidden inline-flex items-center px-7 py-3.5 bg-gold text-dark text-[10px] tracking-[0.25em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
            >
              Contact
            </Link>

            {/* Outline */}
            <Link
              href="/services"
              data-cursor-hover
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-[10px] tracking-[0.25em] uppercase font-sans hover:border-gold hover:text-gold transition-all duration-300"
            >
              Discover More
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent to-white/40"
        />
        <span className="text-white/30 text-[8px] tracking-[0.3em] uppercase font-sans writing-mode-vertical">Scroll</span>
      </motion.div>
    </section>
  );
}
