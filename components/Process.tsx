"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Confidential Intake",
    description:
      "We begin with a personal and completely private introduction. No obligations, no pressure. We simply take the time to understand your household, your lifestyle and where you need support. This conversation is the foundation of everything we do.",
  },
  {
    number: "02",
    title: "Tailored Approach",
    description:
      "Based on our intake conversation, we develop a service plan built entirely around your needs. We identify the right people, the right processes and the right level of involvement — and we present this to you before anything begins.",
  },
  {
    number: "03",
    title: "Seamless Execution",
    description:
      "We take full responsibility from here. Staff are briefed, suppliers are coordinated, systems are in place. You do not need to manage, follow up or chase. We handle it — and you will notice only the result.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Your household evolves, and so does our service. We check in regularly, adjust where needed and remain available whenever something requires attention. Our goal is a long-term relationship built on trust — not a one-time fix.",
  },
];

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="text-center pb-20 last:pb-0"
    >
      {/* Step number */}
      <motion.span
        animate={inView ? { color: "#C9A84C" } : { color: "#7A7570" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="block font-sans text-xs tracking-[0.3em] uppercase mb-5"
      >
        {step.number}
      </motion.span>

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif font-normal text-text-primary leading-tight mb-5"
        style={{ fontSize: "clamp(22px, 2vw, 34px)" }}
      >
        {step.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-text-muted text-base leading-[1.85] max-w-xs mx-auto"
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
}

export default function Process() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-15%" });

  return (
    <section className="py-24 md:py-40 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">

        {/* Centered heading */}
        <div ref={titleRef} className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.35em] uppercase font-sans text-gold mb-5"
          >
            How It Works
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={titleInView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Simple for you.
              <br />
              <em className="font-normal">Thorough from our side.</em>
            </motion.h2>
          </div>
        </div>

        {/* Steps — 2-column centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {steps.map((step, i) => (
            <StepItem key={step.number} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
