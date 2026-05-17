"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Confidential Intake",
    body: "We begin with a personal and completely private introduction. No obligations, no pressure. We simply take the time to understand your household, your lifestyle and where you need support. This conversation is the foundation of everything we do.",
  },
  {
    number: "02",
    title: "Tailored Approach",
    body: "Based on our intake conversation, we develop a service plan built entirely around your needs. We identify the right people, the right processes and the right level of involvement — and we present this to you before anything begins.",
  },
  {
    number: "03",
    title: "Seamless Execution",
    body: "We take full responsibility from here. Staff are briefed, suppliers are coordinated, systems are in place. You do not need to manage, follow up or chase. We handle it — and you will notice only the result.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    body: "Your household evolves, and so does our service. We check in regularly, adjust where needed and remain available whenever something requires attention. Our goal is a long-term relationship built on trust — not a one-time fix.",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative pt-12 pb-16 border-t border-border"
    >
      {/* Ghost number */}
      <div
        className="absolute top-6 right-0 font-serif text-border select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(80px, 10vw, 160px)" }}
        aria-hidden
      >
        {step.number}
      </div>

      {/* Gold dot */}
      <motion.div
        className="w-2 h-2 rounded-full bg-border mb-8"
        animate={inView ? { backgroundColor: "#C9A84C" } : {}}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.4 }}
      />

      <h3
        className="font-serif font-normal text-text-primary leading-snug mb-6 relative z-10"
        style={{ fontSize: "clamp(26px, 2.8vw, 44px)" }}
      >
        {step.title}
      </h3>
      <p className="font-sans text-text-muted text-base leading-[1.85] max-w-sm relative z-10">
        {step.body}
      </p>
    </motion.div>
  );
}

function PageOpener() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-24 md:pt-36 pb-20 md:pb-28 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-6 mb-10 md:mb-14"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-gold">How We Work</span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-sans text-[10px] text-text-muted tracking-wider">04 steps</span>
        </motion.div>

        {/* Heading + intro side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary leading-[1.05]"
              style={{ fontSize: "clamp(44px, 5.5vw, 88px)" }}
            >
              Simple for you.
              <br />
              <em className="text-gold">Thorough</em>
              <br />
              from our side.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:self-end lg:pb-4"
          >
            <p className="font-sans text-text-muted text-base leading-[1.85] mb-6">
              Every client relationship begins with a private conversation and ends with a
              household that runs exactly as it should — without you ever having to ask why.
            </p>
            <p className="font-sans text-text-muted text-base leading-[1.85]">
              Our process is built around clarity, trust and meticulous follow-through.
              Below is how we go from first introduction to fully operational.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StepsGrid() {
  return (
    <section className="py-20 md:py-32 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-28">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-surface-2 px-8 md:px-16 lg:px-24 py-24 md:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Full-width statement */}
        <div className="overflow-hidden mb-20 md:mb-28">
          <motion.p
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-normal text-text-primary"
            style={{ fontSize: "clamp(22px, 3vw, 48px)" }}
          >
            "You should only ever notice the result — never the effort behind it."
          </motion.p>
        </div>

        {/* Three commitment pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { label: "Always available", body: "Your point of contact is reachable whenever something requires attention — not just during business hours." },
            { label: "Fully accountable", body: "We take ownership. If something is not right, we fix it. Without being asked, and without excuses." },
            { label: "Completely confidential", body: "Our clients' details, needs and households are never shared. Discretion is not a feature — it is foundational." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
              className="px-0 md:px-10 first:pl-0 last:pr-0 py-10 md:py-0"
            >
              <div className="w-6 h-px bg-gold mb-6" />
              <h4 className="font-serif font-normal text-text-primary text-xl mb-4">{item.label}</h4>
              <p className="font-sans text-text-muted text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-36 md:py-52 bg-dark text-white px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[9px] tracking-[0.4em] uppercase font-sans text-gold mb-8"
          >
            Begin Now
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-white leading-tight"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              It starts with
              <br />
              a conversation.
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <p className="font-sans text-white/50 text-sm mb-8 max-w-xs">
            Completely confidential. No commitment required. We respond within one business day.
          </p>
          <Link
            href="/contact"
            data-cursor-hover
            className="inline-flex items-center gap-4 bg-gold text-dark font-sans text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Get in touch
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProcessContent() {
  return (
    <>
      <PageOpener />
      <StepsGrid />
      <Commitment />
      <ClosingCTA />
    </>
  );
}
