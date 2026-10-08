import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { brands } from "../data/brands";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Ecosystem() {
  const { activeFilter } = useSelector((s) => s.brands);
  const filtered =
    activeFilter === "all" ? brands : brands.filter((b) => b.category === activeFilter);

  return (
    <section id="ecosystem" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-ember mb-3 text-shadow-sm">
            The Ecosystem
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-shadow-sm mb-4">
            One vision. Many expressions.
          </h2>
          <p className="max-w-2xl mx-auto text-ink/70">
            Each initiative is distinct — yet they share the same DNA: design,
            purpose, people, and place.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b, i) => (
            <motion.a
              key={b.id}
              href={b.link}
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 border border-ink/5 hover:border-ember/40 transition-colors shadow-sm hover:shadow-[0_24px_60px_rgba(26,22,20,0.12)]"
            >
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ember/5 via-transparent to-ink/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                className="relative w-12 h-12 rounded-full mb-6 flex items-center justify-center text-cream font-display text-xl text-shadow-sm"
                style={{ backgroundColor: b.accent }}
              >
                {b.name.charAt(0)}
              </div>
              <h3 className="font-display text-2xl text-ink mb-1 text-shadow-sm">
                {b.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-ember mb-4">
                {b.tagline}
              </p>
              <p className="text-sm text-ink/70 leading-relaxed mb-6">
                {b.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-ember transition-colors">
                {b.cta}
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}