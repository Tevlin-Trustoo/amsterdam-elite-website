"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Discretion",
    body: "We operate quietly in the background. Your privacy is absolute — not a policy, but a principle embedded in everything we do.",
  },
  {
    number: "02",
    title: "Reliability",
    body: "We do what we say, when we say it. No exceptions, no excuses, no need to follow up. You should never have to wonder.",
  },
  {
    number: "03",
    title: "Precision",
    body: "Details are not an afterthought. We notice what others miss and act before you have to ask. Standards are not negotiated downward.",
  },
  {
    number: "04",
    title: "Personalisation",
    body: "No two households are alike. Our service is built entirely around yours — not adapted from a template, but designed from scratch.",
  },
];

function Opening() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section className="pt-24 md:pt-36 pb-20 md:pb-28 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Label + rule */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 mb-10 md:mb-14"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-gold">Who We Are</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Split heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          <div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif font-normal text-text-primary leading-[1.05]"
                style={{ fontSize: "clamp(44px, 5.5vw, 88px)" }}
              >
                Discreet
                <br />
                by nature.
                <br />
                <em className="text-gold">Exceptional</em>
                <br />
                by standard.
              </motion.h1>
            </div>
          </div>

          <div className="lg:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 font-sans text-text-muted text-base leading-[1.9]"
            >
              <p>
                Amsterdam Elite Household Concierge was founded with a single belief: that the
                people who carry the most responsibility deserve a home environment that carries none.
              </p>
              <p>
                We work with a carefully selected network of trusted professionals — household
                managers, vetted domestic staff, reliable suppliers and service partners. Every
                person is chosen for their expertise, their discretion and their commitment to
                quality without compromise.
              </p>
              <p>
                We do not offer a standard package. Every client relationship begins with a private
                consultation in which we take time to understand exactly how you live, what matters
                most, and where you need support. From there, we build around your life — not the
                other way around.
              </p>
              <p className="font-serif italic text-text-primary text-lg border-l-2 border-gold pl-5">
                We operate with complete discretion. What happens in your home stays in your home.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-surface-2 px-8 md:px-16 lg:px-24 py-24 md:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-20 md:mb-28">
          <div className="h-px bg-border flex-1" />
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-text-primary">
            Our Principles
          </span>
        </div>

        {/* Values — stacked full-width rows */}
        <div>
          {values.map((v, i) => (
            <ValueRow key={v.number} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueRow({ value, index }: { value: (typeof values)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-t border-border last:border-b items-baseline"
    >
      {/* Number */}
      <div className="col-span-2 md:col-span-1">
        <span className="font-serif text-gold/60" style={{ fontSize: "clamp(36px, 4vw, 64px)" }}>
          {value.number}
        </span>
      </div>

      {/* Title */}
      <div className="col-span-10 md:col-span-3">
        <h3
          className="font-serif font-normal text-text-primary"
          style={{ fontSize: "clamp(24px, 2.5vw, 40px)" }}
        >
          {value.title}
        </h3>
      </div>

      {/* Body */}
      <div className="col-span-12 md:col-span-7 md:col-start-6">
        <p className="font-sans text-text-muted text-base leading-relaxed">{value.body}</p>
      </div>
    </motion.div>
  );
}

function ManifestoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-32 md:py-52 bg-bg px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-px bg-gold mx-auto mb-14 origin-left"
        />
        <div className="overflow-hidden mb-14">
          <motion.p
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-serif italic font-normal text-text-primary leading-snug"
            style={{ fontSize: "clamp(28px, 3.5vw, 56px)" }}
          >
            "We work with people who understand that true luxury is not about possessions.
            It is about time, calm, and having everything in order."
          </motion.p>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="w-12 h-px bg-gold mx-auto origin-right"
        />
      </div>
    </section>
  );
}

function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="pb-32 md:pb-52 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[9px] tracking-[0.4em] uppercase font-sans text-gold mb-8"
          >
            Our Clients
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 56px)" }}
            >
              Built for those
              <br />
              who expect more.
            </motion.h2>
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="font-sans text-text-muted text-base leading-relaxed mb-5">
            We work with international executives, diplomats, entrepreneurs and established
            families — those who have relocated to Amsterdam and those who have long called it home.
          </p>
          <p className="font-sans text-text-muted text-base leading-relaxed mb-12">
            Our clients value time above all else. They trust us to protect it — and we take that
            responsibility seriously.
          </p>
          <Link
            href="/contact"
            data-cursor-hover
            className="inline-flex items-center gap-4 font-sans text-[10px] tracking-[0.3em] uppercase text-dark border border-dark px-8 py-4 hover:bg-dark hover:text-white transition-colors duration-500"
          >
            Schedule an introduction
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <>
      <Opening />
      <ValuesSection />
      <ManifestoStrip />
      <ClientsSection />
    </>
  );
}
