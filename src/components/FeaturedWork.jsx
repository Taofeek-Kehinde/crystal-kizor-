import { motion } from "framer-motion";
import render1 from "/images/IMG_2105 2.JPG";
import render2 from "/images/7.jpeg";
import render3 from "/images/31 2.jpeg";
import Reveal from "./Reveal";

const items = [
  { img: render1, title: "Earth House", tag: "Architecture" },
  { img: render2, title: "Warm Interiors", tag: "Interior Design" },
  { img: render3, title: "Quiet Retreat", tag: "Concept" },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-ember mb-3 text-shadow-sm">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-shadow-sm">
            Design that responds to climate, culture, and people.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 text-cream">
                <p className="text-xs uppercase tracking-widest text-sand mb-1">
                  {it.tag}
                </p>
                <h3 className="font-display text-2xl text-shadow">{it.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}