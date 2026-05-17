"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll and pin to top while preloader is active
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      // Unlock scroll after exit animation completes (1s duration + 0.1s delay)
      setTimeout(() => {
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
      }, 1200);
    }, 2200);

    return () => {
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9998] bg-dark flex items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-serif text-gold text-[11px] tracking-[0.5em] uppercase mb-4"
            >
              Amsterdam Elite Household Concierge
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="h-px bg-gold/30 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
