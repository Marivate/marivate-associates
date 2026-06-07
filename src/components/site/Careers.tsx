import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const TRACKS = [
  { title: "Graduate Programmes", desc: "A structured pathway for outstanding LLB graduates." },
  { title: "Candidate Attorneys", desc: "Two-year articles under partner-led supervision." },
  { title: "Experienced Lawyers", desc: "Lateral opportunities for specialist practitioners." },
  { title: "Legal Support Staff", desc: "Paralegal, knowledge, and operations roles." },
];

export function Careers() {
  return (
    <section id="careers" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="eyebrow eyebrow-line mb-6">Careers</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
            Build your future with
            <span className="italic text-[var(--navy)]"> MARIVATE.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed max-w-md">
            We invest in lawyers who think rigorously, write precisely, and
            advocate with conviction. Find your place on our bench.
          </p>
          <a href="#" className="mt-10 inline-flex items-center gap-3 bg-[var(--navy-deep)] text-ivory px-8 py-4 text-[0.78rem] tracking-[0.24em] uppercase hover:bg-gold hover:text-[var(--navy-deep)] transition-colors">
            Apply Now <ArrowRight size={16} />
          </a>
        </motion.div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-border border-t border-b border-border">
            {TRACKS.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group flex items-center justify-between py-8 cursor-pointer"
              >
                <div>
                  <h3 className="font-display text-3xl group-hover:text-gold transition-colors">{t.title}</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">{t.desc}</p>
                </div>
                <ArrowRight size={20} className="text-muted-foreground group-hover:text-gold group-hover:translate-x-2 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
