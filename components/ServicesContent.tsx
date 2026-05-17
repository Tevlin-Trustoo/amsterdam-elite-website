"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Household Management",
    short: "Full operational oversight of your home",
    intro:
      "A well-run household does not happen by accident. It takes structure, oversight, and the right people in the right roles. We provide all three.",
    items: [
      "Full coordination and management of your household",
      "Selection, screening and placement of household staff",
      "Day-to-day supervision and performance management of domestic staff",
      "Scheduling, planning and daily household organisation",
      "Supplier management — maintenance, repairs, deliveries and contractors",
      "Quality control and continuous improvement",
    ],
  },
  {
    number: "02",
    title: "Lifestyle Management",
    short: "Personal life, handled with care",
    intro:
      "Your personal life deserves the same level of care as your professional one. We handle the details so you can be fully present for what matters.",
    items: [
      "Restaurant reservations and exclusive access to private events",
      "Private dining, in-home entertaining and hospitality coordination",
      "Personal assistance — appointments, errands, correspondence",
      "Travel planning, itineraries and logistics",
      "Concierge support for guests and visiting family",
    ],
  },
  {
    number: "03",
    title: "Relocation & Set-Up",
    short: "Arriving in Amsterdam, ready from day one",
    intro:
      "Moving to Amsterdam is exciting. The process of getting there is not. We handle the setup so you can start living from the moment you arrive.",
    items: [
      "Full household setup and launch coordination",
      "Furniture sourcing, supplier coordination and move-in management",
      "Registration of utilities, services and subscriptions",
      "Building your local network — schools, doctors, trusted suppliers",
      "Ongoing support during the transition period",
      "Guidance and advice for expat families new to the Netherlands",
    ],
  },
];

function PageOpener() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-24 md:pt-36 pb-16 md:pb-24 bg-bg px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Big heading — 8 cols */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase font-sans text-gold mb-8 md:mb-10"
            >
              Our Services
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif font-normal text-text-primary leading-[1.02]"
                style={{ fontSize: "clamp(48px, 6.5vw, 104px)" }}
              >
                Every detail.
                <br />
                <em>Every day.</em>
              </motion.h1>
            </div>
          </div>

          {/* Intro text — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-4 lg:pb-4"
          >
            <p className="font-sans text-text-muted text-base leading-relaxed">
              Our services are fully tailored to each client. Below is an overview of what we
              take off your hands — completely and without you having to ask twice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceIndex() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section ref={ref} className="bg-bg px-8 md:px-16 lg:px-24 pb-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-border mb-0 origin-left"
        />
        {services.map((s, i) => (
          <IndexRow key={s.number} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function IndexRow({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="grid grid-cols-12 items-baseline border-b border-border py-8 md:py-10 gap-4"
    >
      <span className="col-span-1 font-sans text-[10px] tracking-[0.25em] text-gold">{service.number}</span>
      <h2
        className="col-span-7 md:col-span-6 font-serif font-normal text-text-primary leading-none"
        style={{ fontSize: "clamp(22px, 2.5vw, 40px)" }}
      >
        {service.title}
      </h2>
      <p className="col-span-12 md:col-span-5 font-sans text-text-muted text-sm leading-relaxed md:text-right">
        {service.short}
      </p>
    </motion.div>
  );
}

function ServiceDetails() {
  return (
    <section className="py-24 md:py-36 bg-bg">
      {services.map((s, i) => (
        <ServicePanel key={s.number} service={s} index={i} />
      ))}
    </section>
  );
}

function ServicePanel({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`px-8 md:px-16 lg:px-24 py-20 md:py-28 ${isEven ? "bg-bg" : "bg-surface-2"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        {/* Left: number + title + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
            {service.number}
          </span>
          <h3
            className="font-serif font-normal text-text-primary leading-tight mb-8"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            {service.title}
          </h3>
          <p className="font-sans text-text-muted text-base leading-[1.85]">{service.intro}</p>
        </motion.div>

        {/* Right: items */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:pt-16"
        >
          <ul className="space-y-0">
            {service.items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-5 font-sans text-sm text-text-muted leading-relaxed py-4 border-b border-border first:border-t"
              >
                <span className="mt-2.5 w-4 h-px bg-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-32 md:py-52 bg-surface-2 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[9px] tracking-[0.4em] uppercase font-sans text-gold mb-8"
          >
            Pricing
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 56px)" }}
            >
              Tailored
              <br />
              to you.
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="font-sans text-text-muted text-base leading-relaxed mb-5">
            Our services are fully tailored and designed around each client's individual needs.
            We do not offer fixed packages, because no two households are the same.
          </p>
          <p className="font-sans text-text-muted text-base leading-relaxed mb-12">
            Pricing is available upon request. We are happy to discuss your situation and provide
            a personalised proposal after our initial conversation.
          </p>
          <Link
            href="/contact"
            data-cursor-hover
            className="inline-flex items-center gap-4 font-sans text-[10px] tracking-[0.3em] uppercase bg-gold text-dark px-8 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Request a proposal
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesContent() {
  return (
    <>
      <PageOpener />
      <ServiceIndex />
      <ServiceDetails />
      <PricingSection />
    </>
  );
}
