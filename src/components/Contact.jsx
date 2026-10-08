import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Hello Crystal,",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `About: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/2348069321643?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-ember mb-4 text-shadow-sm">
            Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-shadow-sm mb-6">
            Let's build something meaningful.
          </h2>
          <p className="text-ink/70 mb-12">
            Whether it's a project, a talk, a collaboration, or a conversation —
            reach out and let's begin.
          </p>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="text-ember font-display text-2xl"
              >
                Thank you — your message has been received.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleSubmit}
                className="grid gap-4 text-left max-w-xl mx-auto"
              >
                <label className="grid gap-2 text-sm font-medium text-ink">
                  Your name
                  <motion.input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                    className="px-5 py-4 rounded-xl bg-white border border-ink/10 focus:border-ember outline-none shadow-sm"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink">
                  Email address
                  <motion.input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    whileFocus={{ scale: 1.01 }}
                    className="px-5 py-4 rounded-xl bg-white border border-ink/10 focus:border-ember outline-none shadow-sm"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink">
                  About your project
                  <motion.textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea"
                    whileFocus={{ scale: 1.01 }}
                    className="px-5 py-4 rounded-xl bg-white border border-ink/10 focus:border-ember outline-none resize-none shadow-sm"
                  />
                </label>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-ink text-cream rounded-full text-sm uppercase tracking-widest font-medium hover:bg-ember transition-colors text-shadow-sm"
                >
                  Send message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}