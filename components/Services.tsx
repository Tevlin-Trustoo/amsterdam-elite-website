"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Household Management",
    short: "Seamless daily operations",
    description:
      "Complete management of your household — from scheduling and vendor coordination to budgeting and reporting. Your home runs flawlessly, always.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    alt: "Luxury Amsterdam interior",
    tags: ["Daily Operations", "Vendor Management", "Household Budgets"],
  },
  {
    number: "02",
    title: "Private Staffing",
    short: "Exceptional people, placed precisely",
    description:
      "We recruit, vet, and place private chefs, butlers, housekeepers, nannies, drivers and personal assistants — each selected to match your household's precise standards.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85",
    alt: "Fine dining service",
    tags: ["Chefs & Butlers", "Household Staff", "Drivers & PAs"],
  },
  {
    number: "03",
    title: "Property & Estates",
    short: "Your properties, always pristine",
    description:
      "Maintenance scheduling, contractor supervision, security management and property inspections across all your residences — in Amsterdam and beyond.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85",
    alt: "Luxury property Amsterdam",
    tags: ["Maintenance", "Security", "Multi-Property"],
  },
  {
    number: "04",
    title: "Lifestyle Curation",
    short: "The art of living, elevated",
    description:
      "Bespoke shopping, restaurant reservations at fully-booked venues, art acquisition, wellness programs, children's activities — every detail of life refined.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=85",
    alt: "Luxury lifestyle curation",
    tags: ["Reservations", "Shopping", "Art & Wellness"],
  },
  {
    number: "05",
    title: "Travel & Experiences",
    short: "Journeys without compromise",
    description:
      "Private jet arrangements, yacht charters, bespoke itineraries and on-the-ground support in every destination — travel as it should be.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85",
    alt: "Private jet travel",
    tags: ["Private Aviation", "Yachts", "Bespoke Itineraries"],
  },
  {
    number: "06",
    title: "Family Office Support",
    short: "Confidential. Meticulous. Trusted.",
    description:
      "Administrative support, event planning for private occasions, correspondence management and complete discretion in all personal affairs.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85",
    alt: "Private family office",
    tags: ["Administration", "Private Events", "Correspondence"],
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-border pt-8 pb-10"
    >
      {/* Number */}
      <div className="mb-5">
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-text-muted">
          {service.number}
        </span>
      </div>

      <h3 className="font-serif font-normal text-2xl md:text-3xl mb-3 leading-snug text-text-primary">
        {service.title}
      </h3>

      <p className="font-sans text-sm mb-6 leading-relaxed text-text-muted">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] tracking-[0.2em] uppercase font-sans px-3 py-1 border border-border text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-24 md:py-40 px-8 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase font-sans text-text-muted mb-5"
            >
              What We Offer
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={titleInView ? { y: "0%" } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif font-normal text-text-primary leading-tight"
                style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
              >
                Six pillars of
                <br />
                <em className="not-italic font-normal">exceptional living</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-text-muted text-base leading-relaxed max-w-sm md:ml-auto"
          >
            Each service is tailored precisely to you. We begin with a private consultation
            to understand your household before we propose anything.
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="font-serif italic text-text-primary text-xl">
            "Every service, perfectly delivered."
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-gold border-b border-gold pb-0.5 hover:gap-6 transition-all duration-300"
            data-cursor-hover
          >
            Start a Conversation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
