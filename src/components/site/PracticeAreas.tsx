import { motion } from "motion/react";
import {
  Briefcase, Scale, Users, Heart, Shield, Lightbulb, FileCheck, ArrowUpRight,
  Banknote, Trophy, HeartPulse, ClipboardCheck, FileSignature, BookOpen,
} from "lucide-react";

const AREAS = [
  { icon: Banknote, title: "Debt Collection", desc: "Efficient and strategic debt recovery services." },
  { icon: Trophy, title: "Sports & Entertainment Law", desc: "Practical legal solutions to athletes, artists, entertainers, and industry stakeholders." },
  { icon: HeartPulse, title: "Personal Injury Claims", desc: "Road Accident Fund, Workplace Injuries, Public Liability & Medical Malpractice." },
  { icon: ClipboardCheck, title: "Legal Compliance", desc: "Identify, manage, and meet legal and regulatory obligations with confidence and precision." },
  { icon: FileSignature, title: "Contract Law", desc: "Drafting and reviewing agreements to resolving contractual disputes." },
  { icon: BookOpen, title: "Comprehensive Legal Opinions", desc: "Clear, well-researched, practical opinions to support informed decision-making and risk management." },
  { icon: Briefcase, title: "Corporate & Commercial Law", desc: "Commercial transactions, corporate governance, and day-to-day business operations." },
  { icon: Scale, title: "Litigation & Dispute Resolution", desc: "Resolving disputes through negotiation, mediation, arbitration, and court proceedings." },
  { icon: Users, title: "Labour & Employment Law", desc: "Assisting employers and employees with workplace matters and ensuring compliance with labour legislation." },
  { icon: Heart, title: "Family Law", desc: "Divorce, child custody, maintenance, and other family-related disputes." },
  { icon: Shield, title: "Criminal Defence", desc: "Bail proceedings." },
  { icon: Lightbulb, title: "Intellectual Property Law", desc: "Protect and enforce intellectual property rights, trademarks and copyrights." },
  { icon: FileCheck, title: "Wills & Estate", desc: "Wills, and administering deceased estates." },
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
              Comprehensive legal expertise
              <br />
              <span className="italic text-gold">across every discipline.</span>
            </h2>
          </div>
          <p className="text-ivory/70 text-lg font-light leading-relaxed max-w-lg lg:justify-self-end">
            Thirteen core practice areas, one unified standard of service. Each
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
