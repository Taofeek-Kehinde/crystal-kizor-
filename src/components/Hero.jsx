import { motion } from "framer-motion";
import heroImg from "/images/Architectural Designer in Her Studio.png";

const floatingDots = [
  { size: "h-28 w-28", top: "top-24 left-[12%]", delay: 0 },
  { size: "h-40 w-40", top: "top-1/3 right-[18%]", delay: 1.2 },
  { size: "h-24 w-24", top: "bottom-24 left-[28%]", delay: 2.2 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Crystal Kizor in her studio"
          initial={{ scale: 1.12, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,22,20,0.35)_60%,rgba(26,22,20,0.82)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-cream/95" />
      </div>

      {floatingDots.map((dot, index) => (
        <motion.div
          key={index}
          className={`absolute ${dot.top} ${dot.size} rounded-full border border-cream/15 bg-cream/5 backdrop-blur-sm`}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, delay: dot.delay, ease: "easeInOut", repeat: Infinity }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-cream/90 mb-6 text-shadow"
        >
          Architect · Designer · Entrepreneur · Speaker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] text-shadow-lg mb-6"
        >
          Building spaces,<br />
          ideas & movements.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-cream/95 leading-relaxed text-shadow mb-10"
        >
          Crystal Kizor works across architecture, design, education, media, and faith —
          shaping a cohesive ecosystem of brands that serve people, place, and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#ecosystem"
            className="px-8 py-4 bg-cream text-ink rounded-full text-sm uppercase tracking-widest font-medium hover:bg-ember hover:text-cream transition-all shadow-lg text-shadow-sm"
          >
            Explore the ecosystem
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-cream/70 text-cream rounded-full text-sm uppercase tracking-widest font-medium hover:bg-cream/10 transition-all text-shadow-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs uppercase tracking-widest text-shadow-sm"
      >
        Scroll
      </motion.div>
    </section>
  );
}