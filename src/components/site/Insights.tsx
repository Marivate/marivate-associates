import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import i1 from "@/assets/insight-1.jpg";
import i2 from "@/assets/insight-2.jpeg";
import i3 from "@/assets/insight-3.jpeg";

const POSTS = [
  { img: i1, category: "Corporate Law Insights", date: "Mar 12, 2026", title: "The new POPIA enforcement landscape: what boards must know in 2026." },
  { img: i2, category: "Regulatory Changes", date: "Feb 28, 2026", title: "Companies Amendment Act: a practitioner's guide to the structural shifts." },
  { img: i3, category: "Litigation News", date: "Feb 04, 2026", title: "When arbitration outpaces the courts — a strategic reading for in-house counsel." },
];

export function Insights() {
  return (
    <section id="insights" className="bg-card py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <div className="eyebrow eyebrow-line mb-6">Insights & Publications</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight max-w-2xl text-balance">
              Thinking that shapes
              <span className="italic"> the practice.</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[var(--navy-deep)] hover:text-gold transition-colors">
            All Insights <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1200} height={800} />
                <div className="absolute inset-0 bg-[var(--navy-deep)]/0 group-hover:bg-[var(--navy-deep)]/30 transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.24em] uppercase text-gold mb-3">
                {p.category}
                <span className="text-muted-foreground/60">·</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-display text-2xl leading-snug group-hover:text-[var(--navy)] transition-colors">
                {p.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[var(--navy-deep)] group-hover:text-gold transition-colors">
                Read <ArrowUpRight size={13} className="group-hover:rotate-45 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
