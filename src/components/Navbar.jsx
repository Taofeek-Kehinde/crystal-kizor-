import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu, setScrolled } from "../features/navigation/navSlice";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Work", href: "#work" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const { isOpen, scrolled } = useSelector((s) => s.nav);

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 40));
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.2em] text-ink text-shadow-sm"
        >
          CRYSTAL KIZOR
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium uppercase tracking-widest text-ink/80 hover:text-ember transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-ink text-cream text-xs uppercase tracking-widest hover:bg-ember transition-colors text-shadow-sm"
            >
              Work with me
            </a>
          </li>
        </ul>

        <button
          aria-label="Menu"
          onClick={() => dispatch(toggleMenu())}
          className="md:hidden text-ink"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-lg border-t border-ink/10"
          >
            <ul className="flex flex-col p-6 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => dispatch(closeMenu())}
                    className="block text-lg font-display tracking-wide text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}