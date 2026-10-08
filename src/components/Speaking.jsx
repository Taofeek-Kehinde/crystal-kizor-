import { motion } from "framer-motion";
import speakingImg from "/images/Confident Designer in Studio Workspace.png";
import Reveal from "./Reveal";

const topics = [
  "Architecture & Climate",
  "African Cities",
  "Design Entrepreneurship",
  "The Built Environment",
  "Faith & Purpose",
];

export default function Speaking() {
  return (
    <section id="speaking" className="bg-ink text-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left" delay={0.1}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-sand mb-4 text-shadow-sm">
              Speaking
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-shadow mb-6">
              Conversations that shape how we build and live.
            </h2>
            <p className="text-cream/80 leading-relaxed mb-8">
              Crystal speaks on architecture, climate-responsive design, African cities,
              design entrepreneurship, and the built environment — bringing clarity,
              warmth, and depth to every room.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {topics.map((t, index) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="px-4 py-2 border border-cream/30 rounded-full text-xs uppercase tracking-widest text-cream/90 hover:border-sand hover:text-cream transition-colors"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-ember text-cream rounded-full text-sm uppercase tracking-widest font-medium hover:bg-cream hover:text-ink transition-all text-shadow-sm"
            >
              Book Crystal
            </motion.a>
          </motion.div>
        </Reveal>

        <Reveal direction="right" delay={0.15} className="group">
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={speakingImg}
              alt="Crystal Kizor speaking"
              className="w-full transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}