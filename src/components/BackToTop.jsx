import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.75);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      title="Back to top"
      onClick={scrollToTop}
      className={[
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center",
        "rounded-full border border-cream/50 bg-ink text-cream shadow-2xl",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-ember hover:text-cream",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
