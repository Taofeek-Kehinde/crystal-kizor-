import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import studio1 from "/images/1.png";
import studio2 from "/images/2.jpeg";
import studio3 from "/images/3.jpeg";
import render1 from "/images/4.jpeg";
import render2 from "/images/6.jpeg";
import render3 from "/images/8.jpeg";

const slides = [
  { img: studio1, label: "Studio COKA · Office" },
  { img: studio2, label: "Studio COKA · Interior" },
  { img: studio3, label: "Studio COKA · Atrium" },
  { img: render1, label: "Climate-responsive residence" },
  { img: render2, label: "Warm material palette" },
  { img: render3, label: "Indoor-outdoor living" },
];

export default function BrandSwiper() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-sand mb-3 text-shadow-sm"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-display text-4xl md:text-5xl text-cream text-shadow"
        >
          Spaces with intention
        </motion.h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.2}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-16"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={s.img}
                alt={s.label}
                className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="absolute bottom-5 left-5 text-cream font-display text-lg text-shadow translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                {s.label}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}