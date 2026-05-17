"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1600&q=90",
    alt: "Amsterdam canal at dusk",
    caption: "Amsterdam · Evening",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90",
    alt: "Luxury interior living room",
    caption: "Private Residence · Jordaan",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90",
    alt: "Private chef fine dining",
    caption: "Private Dining · In-Home",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=90",
    alt: "Private jet travel",
    caption: "Private Aviation · On Demand",
  },
  {
    src: "https://images.unsplash.com/photo-1534351590666-13e3e96b5702?w=1600&q=90",
    alt: "Amsterdam aerial canal view",
    caption: "Amsterdam · From Above",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=90",
    alt: "Luxury Amsterdam property",
    caption: "Estate Management · Oud-Zuid",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 md:py-40 bg-bg overflow-hidden">
      {/* Header */}
      <div ref={ref} className="px-8 md:px-16 lg:px-24 mb-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase font-sans text-text-muted mb-4"
            >
              Our World
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif font-normal text-text-primary"
                style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
              >
                A glimpse into
                <br />
                <em className="not-italic font-normal">the extraordinary</em>
              </motion.h2>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <button
              className="gallery-prev w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300"
              data-cursor-hover
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              className="gallery-next w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-gold hover:border-gold hover:text-dark transition-all duration-300"
              data-cursor-hover
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Swiper — bleeds edge to edge */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1.15}
        centeredSlides={false}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{ prevEl: ".gallery-prev", nextEl: ".gallery-next" }}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 2.3, spaceBetween: 24 },
          1440: { slidesPerView: 2.8, spaceBetween: 28 },
        }}
        className="!overflow-visible pl-8 md:pl-16 lg:pl-24"
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-[10px] tracking-[0.2em] uppercase font-sans">
                  {photo.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
