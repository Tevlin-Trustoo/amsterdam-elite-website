import Image from "next/image";

export default function Quote() {
  return (
    <section className="relative h-[560px] md:h-[680px] flex items-center justify-center overflow-hidden">
      {/* Full-bleed photo */}
      <Image
        src="https://images.unsplash.com/photo-1534351590666-13e3e96b5702?w=2400&q=85"
        alt="Aerial view of Amsterdam canals at golden hour"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <svg
          className="mx-auto mb-8 opacity-40"
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="white"
        >
          <path d="M0 24V14.4C0 6.4 5.333 1.467 16 0l1.6 2.4C12.267 3.467 9.333 6.133 8.8 10.4H14V24H0zm18 0V14.4C18 6.4 23.333 1.467 34 0l1.6 2.4C30.267 3.467 27.333 6.133 26.8 10.4H32V24H18z" />
        </svg>

        <blockquote className="font-serif italic font-normal text-white text-2xl md:text-3xl lg:text-4xl leading-snug">
          Working with Amsterdam Elite Household Concierge transformed every aspect of
          our life in the city. Nothing was too much to ask.
        </blockquote>

        <div className="w-8 h-px bg-white/30 mx-auto my-8" />

        <cite className="not-italic text-white/60 text-[10px] tracking-[0.25em] uppercase font-sans">
          M. van den Berg · Amsterdam
        </cite>
      </div>
    </section>
  );
}
