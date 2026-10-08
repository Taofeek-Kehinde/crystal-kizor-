export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-xl tracking-[0.2em] text-shadow-sm">
          CRYSTAL KIZOR
        </p>
        <p className="text-xs text-cream/60 uppercase tracking-widest">
          © {new Date().getFullYear()} — All rights reserved
        </p>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-ember transition-colors">Instagram</a>
          <a href="#" className="hover:text-ember transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-ember transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}