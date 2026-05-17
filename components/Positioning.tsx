"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Positioning() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-24 md:py-40 bg-surface-2">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Photo */}
        <div ref={imgRef} className="relative h-[480px] md:h-[620px] overflow-hidden">
          <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
            <Image
              src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=85"
              alt="Amsterdam canal at golden hour"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Gold corner accent */}
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold pointer-events-none z-10" />
        </div>

        {/* Text */}
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.35em] uppercase font-sans text-gold mb-6"
          >
            Our Approach
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              You have better
              <br />
              <em className="font-normal">things to do.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-5 font-sans text-text-muted text-base leading-relaxed mb-10"
          >
            <p>
              Your time is valuable. Your standards are high. And your household should reflect
              that, without you having to manage it.
            </p>
            <p>
              We act as a discreet extension of your home. From staff and suppliers to daily
              logistics and lifestyle management, we make sure everything runs exactly as it
              should — without you ever having to ask twice.
            </p>
            <p>
              Our clients are executives, diplomats, entrepreneurs and families who expect the
              highest level of service. People who understand that true luxury is not about
              possessions. It is about time, calm, and having everything in order.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/about"
              data-cursor-hover
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-sans text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-300"
            >
              Learn about us
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
