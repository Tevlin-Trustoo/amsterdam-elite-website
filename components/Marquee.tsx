"use client";

import { motion } from "framer-motion";

const items = [
  "Household Management",
  "Private Staffing",
  "Property & Estates",
  "Lifestyle Curation",
  "Travel & Experiences",
  "Relocation & Set-Up",
  "Family Office Support",
  "Amsterdam · Since 2020",
];

function Track({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex shrink-0 gap-10 pr-10"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-[10px] tracking-[0.3em] uppercase font-sans text-text-muted">
            {item}
            <span className="text-gold text-xs">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-5 border-y border-border bg-surface overflow-hidden space-y-3">
      <Track />
      <Track reverse />
    </div>
  );
}
