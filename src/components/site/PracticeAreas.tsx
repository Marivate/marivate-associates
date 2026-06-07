import { motion } from "motion/react";
import {
  Briefcase, Scale, Users, Building2, Heart, Shield, Lightbulb, FileCheck, ArrowUpRight,
} from "lucide-react";

const AREAS = [
  { icon: Briefcase, title: "Corporate & Commercial Law", desc: "Business formation, mergers, acquisitions, and governance." },
  { icon: Scale, title: "Litigation & Dispute Resolution", desc: "Civil, commercial, and contractual disputes." },
  { icon: Users, title: "Labour & Employment Law", desc: "Workplace compliance and employment disputes." },
  { icon: Building2, title: "Property & Real Estate Law", desc: "Conveyancing and complex property transactions." },
  { icon: Heart, title: "Family Law", desc: "Divorce, custody, maintenance, and estates." },
  { icon: Shield, title: "Criminal Defence", desc: "Professional representation and legal defence." },
  { icon: Lightbulb, title: "Intellectual Property", desc: "Trademark, copyright, and business protection." },
  { icon: FileCheck, title: "Tax & Regulatory Compliance", desc: "Corporate compliance and tax advisory." },
];

export function PracticeAreas() {
  return (
    <section id="practice" className="relative bg-[var(--navy-deep)] text-ivory py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="eyebrow eyebrow-line mb-6">Practice Areas</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Comprehensive counsel
              <br />
              <span className="italic text-gold">across every discipline.</span>
            </h2>
          </div>
          <p className="text-ivory/70 text-lg font-light leading-relaxed max-w-lg lg:justify-self-end">
            Eight core practice areas, one unified standard of service. Each
            mandate is led by a senior practitioner and supported by specialists
            chosen for the matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.a
                key={area.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative bg-[var(--navy-deep)] p-8 lg:p-10 min-h-[280px] flex flex-col justify-between hover:bg-[var(--navy)] transition-colors duration-500"
              >
                <Icon size={28} className="text-gold mb-8" strokeWidth={1.25} />
                <div>
                  <h3 className="font-display text-2xl leading-tight mb-3 text-ivory group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-ivory/60 leading-relaxed font-light">
                    {area.desc}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="absolute top-8 right-8 text-ivory/30 group-hover:text-gold group-hover:rotate-45 transition-all duration-500"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
