"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Household Management",
    body: "From staff selection to daily operations — we coordinate and manage every aspect of your household with precision.",
  },
  {
    title: "Lifestyle Management",
    body: "Reservations, travel, private events, personal assistance. Your lifestyle, handled with care and discretion.",
  },
  {
    title: "Relocation & Set-Up",
    body: "Moving to Amsterdam? We set up your household from scratch, so you arrive to a home that already feels like home.",
  },
];

export default function ServicesOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 md:py-40 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.35em] uppercase font-sans text-gold mb-5"
          >
            What We Do
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              What we do
            </motion.h2>
          </div>
        </div>

        {/* Service rows */}
        <div className="space-y-0 divide-y divide-border mb-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-12 items-start hover:pl-2 transition-all duration-500"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif font-normal text-text-primary text-2xl md:text-3xl mb-3 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{s.body}</p>
              </div>
              <span className="text-border group-hover:text-gold transition-colors duration-300 text-xl">
                ↗
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/services"
            data-cursor-hover
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase font-sans text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-300"
          >
            View all services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
