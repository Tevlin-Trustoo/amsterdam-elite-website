"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-28 md:py-44 px-8 md:px-16 lg:px-24 bg-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-px bg-gold mx-auto mb-10 origin-left"
        />

        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif font-normal text-text-primary leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
          >
            Where exceptional standards meet
            <br />
            <em className="font-normal">complete peace of mind.</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-5 font-sans text-text-muted text-base leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            Amsterdam Elite Household Concierge offers exclusive, fully personalised support for
            international executives and high-end families in Amsterdam.
          </p>
          <p>
            We take care of everything. Quietly, precisely, and always one step ahead.
          </p>
          <p>
            Whether you are relocating to Amsterdam, managing a demanding schedule, or simply
            expecting more from your home environment — we are the partner you never have to think
            about, because everything is already handled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 w-8 h-px bg-gold mx-auto"
        />
      </div>
    </section>
  );
}
