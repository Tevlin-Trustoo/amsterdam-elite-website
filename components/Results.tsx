"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-24 md:py-40 bg-dark text-white px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.35em] uppercase font-sans text-gold mb-6"
          >
            Results
          </motion.p>
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              What our clients
              <br />
              <em className="font-normal text-gold">experience</em>
            </motion.h2>
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-6"
        >
          <p className="font-sans text-white/60 text-base leading-relaxed">
            Time and mental clarity. Discreet and reliable execution. A household that runs effortlessly.
          </p>
          <p className="font-sans text-white/60 text-base leading-relaxed">
            Our clients do not have to follow up, chase suppliers, or manage staff. They simply
            live — and we take care of the rest.
          </p>

          {/* Three outcomes */}
          <div className="pt-6 space-y-4">
            {["Time and mental clarity", "Discreet, reliable execution", "A household that runs itself"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-4 h-px bg-gold flex-shrink-0" />
                <span className="font-sans text-sm text-white/70 tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
