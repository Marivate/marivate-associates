import { motion } from "motion/react";

const QUOTES = [
  { quote: "MARIVATE & ASSOCIATES handled the most consequential transaction in our company's history with absolute composure. Their counsel was strategic, not just legal.", name: "Group CEO", role: "JSE-listed financial services" },
  { quote: "Precise, calm, decisive. They argued our matter as if the institution itself were on the line — because, frankly, it was.", name: "General Counsel", role: "National healthcare provider" },
  { quote: "Few firms in South Africa combine technical rigour with this calibre of commercial reading. We retain them on every major mandate.", name: "Managing Director", role: "Industrial holdings group" },
  { quote: "A standard of service I have only encountered at the very top of the global market.", name: "Founder & Chair", role: "Technology unicorn" },
];

export function Testimonials() {
  // Duplicate for seamless marquee
  const items = [...QUOTES, ...QUOTES];
  return (
    <section className="bg-[var(--navy-deep)] text-ivory py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-16">
        <div className="eyebrow eyebrow-line mb-6">Client Voices</div>
        <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl text-balance">
          Trust earned. <span className="italic text-gold">Then re-earned.</span>
        </h2>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--navy-deep)] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--navy-deep)] to-transparent z-10" />
        <motion.div
          className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]"
        >
          {items.map((q, i) => (
            <figure key={i} className="w-[420px] md:w-[520px] border border-white/10 bg-[var(--navy)] p-10 flex-shrink-0">
              <div className="font-display text-7xl text-gold leading-none mb-4">“</div>
              <blockquote className="font-display text-xl lg:text-2xl leading-snug text-ivory/95 italic">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm font-medium tracking-wide">{q.name}</div>
                <div className="text-xs text-ivory/60 mt-1 tracking-[0.18em] uppercase">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
