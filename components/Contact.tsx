"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const fields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
  { id: "phone", label: "Phone (optional)", type: "tel", placeholder: "+31 6 ..." },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="contact" className="py-24 md:py-40 bg-bg">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text + photo */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase font-sans text-text-muted mb-5"
            >
              Get in Touch
            </motion.p>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif font-normal text-text-primary leading-tight"
                style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
              >
                Begin your
                <br />
                <em className="not-italic font-normal">extraordinary life</em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-text-muted text-base leading-relaxed mb-10 max-w-sm"
            >
              We take on a limited number of new households each year. Reach out and we will be
              in touch within 24 hours to arrange a private conversation.
            </motion.p>

            {/* Photo with parallax */}
            <div ref={imgRef} className="relative h-64 overflow-hidden hidden lg:block">
              <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
                <Image
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85"
                  alt="Luxury Amsterdam home"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </motion.div>
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div className="py-20 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mx-auto mb-6">
                    <span className="text-dark text-xl">✓</span>
                  </div>
                  <p className="font-serif italic text-text-primary text-2xl mb-3">Thank you.</p>
                  <p className="font-sans text-text-muted text-sm">We will be in touch shortly.</p>
                </motion.div>
              </div>
            ) : (
              <form
                action="mailto:info@amsterdamelitehousehold.com"
                method="post"
                encType="text/plain"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-0"
              >
                {fields.map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                    className="relative pt-6 pb-2 border-b border-border"
                  >
                    <label
                      htmlFor={field.id}
                      className={`absolute top-6 left-0 text-[10px] tracking-[0.2em] uppercase font-sans transition-all duration-300 pointer-events-none ${
                        focused === field.id ? "-translate-y-4 text-gold text-[9px]" : "text-text-muted"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.type !== "tel"}
                      className="w-full bg-transparent font-sans text-text-primary text-base focus:outline-none pt-4 pb-1"
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gold"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focused === field.id ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative pt-6 pb-2 border-b border-border"
                >
                  <label
                    htmlFor="message"
                    className={`absolute top-6 left-0 text-[10px] tracking-[0.2em] uppercase font-sans transition-all duration-300 pointer-events-none ${
                      focused === "message" ? "-translate-y-4 text-gold text-[9px]" : "text-text-muted"
                    }`}
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-transparent font-sans text-text-primary text-base focus:outline-none pt-4 pb-1 resize-none"
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gold"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focused === "message" ? 1 : 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="pt-10"
                >
                  <button
                    type="submit"
                    className="group w-full bg-gold text-dark font-sans text-[11px] tracking-[0.25em] uppercase py-4 relative overflow-hidden hover:bg-gold-dark transition-colors duration-500"
                    data-cursor-hover
                  >
                    <span className="relative z-10">Send Enquiry</span>
                  </button>
                  <p className="text-center font-sans text-text-muted text-xs mt-4 tracking-wider">
                    All enquiries are treated with complete discretion.
                  </p>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
