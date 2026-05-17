"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-28 md:py-44 bg-bg px-8 md:px-16 lg:px-24 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="w-8 h-px bg-gold mx-auto mb-10 origin-left"
        />

        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-serif font-normal text-text-primary"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            Ready to let go?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-text-muted text-base leading-relaxed mb-10"
        >
          Let us show you what it feels like when everything is taken care of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/contact"
            data-cursor-hover
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-dark text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
          >
            Get in touch
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14"
        >
          <div className="w-8 h-px bg-border mx-auto mb-6" />
          <p className="font-serif italic text-text-muted text-lg">
            "True luxury is having everything taken care of, without having to think about it."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
