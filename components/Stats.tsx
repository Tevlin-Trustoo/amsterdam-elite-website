"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 47, suffix: "+", label: "Private Households", description: "Currently under management" },
  { value: 15, suffix: "", label: "Years of Experience", description: "In luxury household services" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Year over year" },
  { value: 24, suffix: "/7", label: "Availability", description: "Always reachable, always ready" },
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-sans mb-16 md:mb-20 text-center"
        >
          By the Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-left"
            >
              <div
                className="font-serif font-normal text-gold mb-2"
                style={{ fontSize: "clamp(48px, 5vw, 80px)", lineHeight: 1 }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} active={inView} />
              </div>
              <p className="font-sans text-white text-sm font-medium mb-1">{stat.label}</p>
              <p className="font-sans text-white/40 text-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
