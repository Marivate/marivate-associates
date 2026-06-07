import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero1.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--navy-deep)] text-ivory">
      {/* Background image with parallax-ready transform */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Modern luxury boardroom at dusk"
          className="w-full h-full object-cover opacity-55"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/70 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/85 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow eyebrow-line mb-8"
        >
          South Africa
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl text-balance"
        >
          Excellence in Law.
          <br />
          <span className="italic text-gold">Excellence</span> in Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 max-w-2xl text-lg lg:text-xl text-ivory/75 leading-relaxed font-light"
        >
          Building businesses. Protecting people. Solving problems.
          We combine modern thinking with legal expertise.
          Because every great move starts with the right advice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-gold text-[var(--navy-deep)] px-8 py-4 text-[0.78rem] tracking-[0.24em] uppercase font-medium hover:bg-[var(--gold-soft)] transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/practice-areas"
            className="inline-flex items-center justify-center gap-3 border border-ivory/30 text-ivory px-8 py-4 text-[0.78rem] tracking-[0.24em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>

        {/* Decorative bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex items-end justify-between"
        >
          <div className="flex items-center gap-3 text-ivory/60 text-xs tracking-[0.3em] uppercase">
            <ArrowDown size={14} className="animate-bounce" />
            Scroll
          </div>
          <div className="hidden md:flex items-center gap-8 text-ivory/60 text-xs tracking-[0.24em] uppercase">
            <span>Pretoria</span>
            <span className="w-8 h-px bg-gold/50" />
            <span>Johannesburg</span>
            <span className="w-8 h-px bg-gold/50" />
            <span>Cape Town</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
