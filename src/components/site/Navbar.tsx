import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Attorneys", to: "/attorneys" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[var(--navy-deep)]/95 backdrop-blur-md border-b border-white/5 py-3"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gold flex items-center justify-center text-gold font-display text-xl">
            M
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-ivory text-lg tracking-wide">
              MARIVATE
            </span>
            <span className="text-[0.6rem] tracking-[0.32em] text-gold/80 uppercase mt-0.5">
              & Associates
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-ivory/80 hover:text-gold transition-colors duration-300 relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold hover:text-[var(--navy-deep)] transition-all duration-300"
        >
          Consult
        </Link>

        <button
          className="lg:hidden text-ivory p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[var(--navy-deep)] border-t border-white/5"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm tracking-[0.18em] uppercase text-ivory/85 hover:text-gold border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
