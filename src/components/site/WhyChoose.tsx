import { motion } from "motion/react";
import { Award, Heart, Brain, Map, Sparkles, Handshake } from "lucide-react";

const REASONS = [
  { icon: Award, title: "Proven Legal Expertise", desc: "Decades of combined experience across high-stakes matters." },
  { icon: Heart, title: "Client-Centered Approach", desc: "Every brief is personal. Every outcome, measured by yours." },
  { icon: Brain, title: "Strategic Business Insight", desc: "Counsel that reads boardrooms as fluently as case law." },
  { icon: Map, title: "Nationwide Reach", desc: "Active across all nine provinces and select cross-border work." },
  { icon: Sparkles, title: "Innovative Legal Solutions", desc: "Modern frameworks for modern commercial realities." },
  { icon: Handshake, title: "Trusted Relationships", desc: "Long-term partnerships built on discretion and results." },
];

export function WhyChoose() {
  return (
    <section className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="eyebrow justify-center mb-6">
            <span className="w-10 h-px bg-gold" />
            Why MARIVATE
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Six pillars of <span className="italic">distinction</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
                className="group bg-ivory p-10 lg:p-12 hover:bg-card transition-colors"
              >
                <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold transition-colors">
                  <Icon size={22} strokeWidth={1.25} className="text-gold group-hover:text-[var(--navy-deep)] transition-colors" />
                </div>
                <h3 className="font-display text-2xl mb-3 leading-tight">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
