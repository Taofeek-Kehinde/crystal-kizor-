import { motion } from "framer-motion";
import aboutImg from "/images/Earthy Editorial Portrait by African Architecture.png";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left" className="relative group">
          <motion.div
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={aboutImg}
              alt="Crystal Kizor"
              className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute -bottom-6 -right-6 hidden md:block w-40 h-40 border-2 border-ember rounded-2xl"
          />
        </Reveal>

        <Reveal direction="right" delay={0.1} className="relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/images/Crystal Kizor Logo Collection.png"
              alt="Crystal Kizor logo collection"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md h-auto mb-6 rounded-xl bg-white/70 p-4 shadow-md border border-ink/5"
            />
            <p className="text-xs uppercase tracking-[0.4em] text-ember mb-4 text-shadow-sm">
              About Crystal
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6 text-shadow-sm">
              A designer of spaces, systems, and stories.
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              Crystal Kizor is an architect, designer, entrepreneur, speaker, and researcher
              building across architecture, education, product design, media, and faith.
            </p>
            <p className="text-ink/75 leading-relaxed mb-6">
              Her work sits at the intersection of thoughtful design and human flourishing —
              creating environments, products, and platforms that respond to context,
              climate, and culture.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <p className="font-display text-3xl text-ember">6+</p>
                <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">
                  Brands & initiatives
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <p className="font-display text-3xl text-ember">1</p>
                <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">
                  Cohesive vision
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}