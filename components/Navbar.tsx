"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlayMode = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: isHome ? 2.2 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-border"
            : isHome
            ? "bg-transparent"
            : "bg-bg border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 md:h-20 flex items-center justify-between">
          {/* Logo / wordmark */}
          <Link href="/" data-cursor-hover aria-label="Amsterdam Elite Household Concierge">
            <div className="flex flex-col">
              <span className={`font-serif text-base tracking-[0.15em] transition-colors duration-500 ${overlayMode ? "text-white" : "text-text-primary"}`}>
                AEHC
              </span>
              <span className={`text-[8px] tracking-[0.3em] uppercase font-sans hidden md:block transition-colors duration-500 ${overlayMode ? "text-white/50" : "text-text-muted"}`}>
                Amsterdam
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  className={`text-[10px] tracking-[0.25em] uppercase font-sans transition-colors duration-300 relative group ${
                    overlayMode
                      ? active ? "text-gold" : "text-white/70 hover:text-white"
                      : active ? "text-gold" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              data-cursor-hover
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 ${
                overlayMode
                  ? "bg-gold text-dark hover:bg-gold-dark"
                  : "bg-dark text-bg hover:bg-gold hover:text-dark"
              }`}
            >
              Contact
            </Link>

            <button
              className="md:hidden p-1 flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-cursor-hover
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className={`block w-6 h-px transition-colors ${overlayMode ? "bg-white" : "bg-dark"}`}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className={`block w-6 h-px transition-colors ${overlayMode ? "bg-white" : "bg-dark"}`}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className={`block w-6 h-px transition-colors ${overlayMode ? "bg-white" : "bg-dark"}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-serif font-normal text-4xl ${pathname === link.href ? "text-gold" : "text-text-primary"}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-block px-8 py-3 bg-gold text-dark text-[10px] tracking-[0.25em] uppercase font-sans"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
