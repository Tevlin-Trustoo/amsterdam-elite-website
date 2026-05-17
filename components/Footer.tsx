import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/60">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif text-white text-xl tracking-[0.15em] mb-4">AEHC</p>
            <p className="font-sans text-xs leading-relaxed text-white/40 mb-6">
              Your household, fully managed. Your life, fully yours.
            </p>
            <a
              href="mailto:info@amsterdamelitehousehold.com"
              className="font-sans text-xs text-white/60 hover:text-gold transition-colors duration-300"
              data-cursor-hover
            >
              info@amsterdamelitehousehold.com
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-4">
            <p className="text-[9px] tracking-[0.3em] uppercase font-sans text-white/30 mb-2">Navigation</p>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase font-sans text-white/50 hover:text-gold transition-colors duration-300"
                data-cursor-hover
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Quote */}
          <div className="max-w-xs">
            <p className="text-[9px] tracking-[0.3em] uppercase font-sans text-white/30 mb-4">Our Belief</p>
            <p className="font-serif italic text-white/70 text-lg leading-relaxed">
              "True luxury is having everything taken care of, without having to think about it."
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] tracking-[0.2em] uppercase font-sans text-white/25">
            © {year} Amsterdam Elite Household Concierge. All rights reserved.
          </p>
          <p className="text-[9px] tracking-[0.2em] uppercase font-sans text-white/25">
            Amsterdam, The Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
