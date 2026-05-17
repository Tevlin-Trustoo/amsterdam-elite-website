"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "We moved to Amsterdam with three children and no idea where to begin. Within two weeks, our home was fully staffed, the schools were arranged, and our social calendar was fuller than it had been in years. Utterly extraordinary.",
    name: "M. & S. van Houten",
    location: "Oud-Zuid, Amsterdam",
  },
  {
    quote:
      "I travel for work more than 200 days a year. Knowing that my home and family are managed with complete professionalism allows me to focus entirely on my work. The peace of mind is invaluable.",
    name: "J. Bergmann",
    location: "Grachtengordel, Amsterdam",
  },
  {
    quote:
      "The level of discretion and attention to detail is unlike anything I have experienced elsewhere. They anticipate needs before I have even articulated them myself.",
    name: "Anonymous Client",
    location: "Private",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 md:py-40 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.3em] uppercase font-sans text-text-muted mb-4"
          >
            Client Voices
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif font-normal text-text-primary"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Words from those
              <br />
              <em className="not-italic font-normal">we serve</em>
            </motion.h2>
          </div>
        </div>

        {/* Swiper — left-aligned */}
        <div className="max-w-3xl mr-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            className="!overflow-visible"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="pb-4">
                  <div className="font-serif text-6xl text-border leading-none mb-6 select-none">"</div>
                  <blockquote
                    className="font-serif font-normal text-text-primary leading-relaxed mb-8"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}
                  >
                    {t.quote}
                  </blockquote>
                  <cite className="not-italic">
                    <p className="font-sans text-sm font-medium text-text-primary">{t.name}</p>
                    <p className="font-sans text-xs text-text-muted tracking-wider mt-1">{t.location}</p>
                  </cite>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="flex items-center gap-3 mt-10">
            <div className="testimonial-pagination !relative !bottom-auto flex gap-2 [&_.swiper-pagination-bullet]:w-6 [&_.swiper-pagination-bullet]:h-px [&_.swiper-pagination-bullet]:rounded-none [&_.swiper-pagination-bullet]:bg-border [&_.swiper-pagination-bullet-active]:bg-gold [&_.swiper-pagination-bullet-active]:w-12 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
