"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fields = [
  { id: "name", label: "Full Name", type: "text", required: true },
  { id: "email", label: "Email Address", type: "email", required: true },
  { id: "phone", label: "Phone Number", type: "tel", required: false, note: "optional" },
];

function FormField({
  field,
  focused,
  setFocused,
  delay,
  inView,
}: {
  field: (typeof fields)[0];
  focused: string | null;
  setFocused: (id: string | null) => void;
  delay: number;
  inView: boolean;
}) {
  const isActive = focused === field.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="relative pt-7 pb-2 border-b border-border"
    >
      <label
        htmlFor={field.id}
        className={`absolute left-0 font-sans tracking-[0.15em] uppercase pointer-events-none transition-all duration-300 ${
          isActive ? "top-0 text-gold text-[10px]" : "top-7 text-text-primary text-xs"
        }`}
      >
        {field.label}
        {field.note && (
          <span className="ml-2 normal-case tracking-normal text-[9px] text-text-muted/60">
            ({field.note})
          </span>
        )}
      </label>
      <input
        id={field.id}
        type={field.type}
        required={field.required}
        onFocus={() => setFocused(field.id)}
        onBlur={() => setFocused(null)}
        className="w-full bg-transparent font-sans text-text-primary text-lg pt-6 pb-2 focus:outline-none"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ContactContent() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-5%" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Page header ── pure typography, no image, no dark bg */}
      <section
        ref={headerRef}
        className="pt-24 md:pt-36 pb-20 md:pb-32 bg-bg px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-6 mb-10 md:mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-gold">
              Private Enquiry
            </span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={headerInView ? { y: "0%" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif font-normal text-text-primary leading-[1.05]"
                style={{ fontSize: "clamp(44px, 5.5vw, 88px)" }}
              >
                We are ready
                <br />
                when you are.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-3"
            >
              <p className="font-sans text-text-muted text-base leading-relaxed">
                We take on a limited number of new households each year. Reach out and we will
                be in touch within one business day to arrange a private conversation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Form + contact details ── */}
      <section className="bg-surface-2 px-8 md:px-16 lg:px-24 py-24 md:py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Contact details — 4 cols left */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-4 space-y-12"
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-sans text-text-primary font-medium mb-4">Email</p>
              <a
                href="mailto:info@amsterdamelitehousehold.com"
                className="font-sans text-text-primary text-sm hover:text-gold transition-colors duration-300 break-all"
              >
                info@amsterdamelitehousehold.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-sans text-text-primary font-medium mb-4">Phone</p>
              <a
                href="tel:0642021559"
                className="font-sans text-text-primary text-sm hover:text-gold transition-colors duration-300"
              >
                06-42021559
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-sans text-text-primary font-medium mb-4">Location</p>
              <p className="font-sans text-text-muted text-sm">Amsterdam and surrounding area</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-sans text-text-primary font-medium mb-4">Hours</p>
              <p className="font-sans text-text-muted text-sm">Available around the clock for existing clients. New enquiries responded to within one business day.</p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="font-serif italic text-text-primary text-base leading-relaxed">
                "Every enquiry is treated with complete discretion from the first message."
              </p>
            </div>
          </motion.aside>

          {/* Form — 7 cols right */}
          <div ref={formRef} className="lg:col-span-7 lg:col-start-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-24 flex flex-col items-start"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-12 h-px bg-gold mb-12 origin-left"
                />
                <p
                  className="font-serif font-normal text-text-primary mb-4"
                  style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
                >
                  Thank you.
                </p>
                <p className="font-sans text-text-muted text-base">
                  We will be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form
                action="mailto:info@amsterdamelitehousehold.com"
                method="post"
                encType="text/plain"
                onSubmit={handleSubmit}
              >
                <div className="space-y-0 mb-0">
                  {fields.map((field, i) => (
                    <FormField
                      key={field.id}
                      field={field}
                      focused={focused}
                      setFocused={setFocused}
                      delay={0.1 + i * 0.08}
                      inView={formInView}
                    />
                  ))}

                  {/* Message field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="relative pt-7 pb-2 border-b border-border"
                  >
                    <label
                      htmlFor="message"
                      className={`absolute left-0 font-sans tracking-[0.15em] uppercase pointer-events-none transition-all duration-300 ${
                        focused === "message" ? "top-0 text-gold text-[10px]" : "top-7 text-text-primary text-xs"
                      }`}
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent font-sans text-text-primary text-lg pt-6 pb-2 focus:outline-none resize-none"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gold"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focused === "message" ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={formInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="pt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  <button
                    type="submit"
                    data-cursor-hover
                    className="inline-flex items-center gap-4 bg-gold text-dark font-sans text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
                  >
                    Send Enquiry
                    <span>→</span>
                  </button>
                  <p className="font-sans text-text-muted text-xs tracking-wider">
                    All enquiries are treated with complete discretion.
                  </p>
                </motion.div>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
