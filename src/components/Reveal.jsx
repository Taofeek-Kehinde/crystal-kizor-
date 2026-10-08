import { motion } from "framer-motion";

const defaultTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.2,
}) {
  const directions = {
    up: { y: 48 },
    down: { y: -48 },
    left: { x: 48 },
    right: { x: -48 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction], filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
