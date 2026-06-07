import { motion } from "motion/react";
import {
  Landmark, Cpu, Building, Stethoscope, HardHat, Factory, Zap, Radio, ShoppingBag,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Landmark, label: "Financial Services" },
  { icon: Cpu, label: "Technology" },
  { icon: Building, label: "Real Estate" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: HardHat, label: "Construction" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Zap, label: "Energy" },
  { icon: Radio, label: "Telecommunications" },
  { icon: ShoppingBag, label: "Retail" },
];

export function Industries() {
  return (
    <section className="bg-[var(--navy)] text-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow eyebrow-line mb-6">Industries</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Sector fluency that
            <span className="italic text-gold"> moves markets.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-10">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group flex items-center gap-5 border-b border-white/10 pb-6 hover:border-gold transition-colors"
              >
                <Icon size={24} strokeWidth={1.25} className="text-gold flex-shrink-0" />
                <span className="font-display text-2xl lg:text-3xl group-hover:text-gold transition-colors">
                  {ind.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
