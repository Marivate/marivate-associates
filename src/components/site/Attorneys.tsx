import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import managing from "@/assets/attorney-managing-partner.jpg";
import a2 from "@/assets/attorney-2.jpg";
import a3 from "@/assets/attorney-3.jpg";
import a4 from "@/assets/attorney-4.jpg";

const TEAM = [
  { name: "Naledi Khumalo", title: "Senior Partner", specialty: "Corporate & M&A", img: a2 },
  { name: "Sipho Ndlovu", title: "Partner", specialty: "Litigation", img: a3 },
  { name: "Lerato Mthembu", title: "Partner", specialty: "Labour & Employment", img: a4 },
];

export function Attorneys() {
  return (
    <section id="attorneys" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="eyebrow mb-6 justify-center">
            <span className="w-10 h-px bg-gold" />
            Our Attorneys
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Counsel of <span className="italic">distinction</span>.
          </h2>
        </div>

        {/* Featured: Managing Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28"
        >
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--navy-deep)]">
              <img src={managing} alt="Kateka Marivate, Managing Partner" className="w-full h-full object-cover" loading="lazy" width={900} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block w-32 h-32 border-2 border-gold -z-0" />
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow eyebrow-line mb-6">Managing Partner</div>
            <h3 className="font-display text-5xl lg:text-7xl leading-[1] tracking-tight">
              Kateka
              <br />
              <span className="italic text-[var(--navy)]">Marivate</span>
            </h3>
            <div className="gold-rule my-8 max-w-[120px]" />
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              At the forefront of corporate and commercial practice, Kateka leads the firm with a distinctive philosophy: rigorous legal craft inseparable from commercial judgment. He advises boards, executives, and founders on the matters that shape and define their institutions.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-[var(--navy-deep)]/20 flex items-center justify-center text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-gold transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:tintswalo@marivate.law" aria-label="Email" className="w-10 h-10 border border-[var(--navy-deep)]/20 flex items-center justify-center text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-gold transition-colors">
                <Mail size={16} />
              </a>
              <span className="text-xs tracking-[0.22em] uppercase text-muted-foreground ml-2">
                Corporate · M&A · Governance
              </span>
            </div>
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {TEAM.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--navy-deep)] mb-6">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" width={900} height={1200} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-gold text-[var(--navy-deep)] flex items-center justify-center"><Linkedin size={14} /></a>
                  <a href="#" aria-label="Email" className="w-9 h-9 bg-ivory text-[var(--navy-deep)] flex items-center justify-center"><Mail size={14} /></a>
                </div>
              </div>
              <div className="text-[0.7rem] tracking-[0.24em] uppercase text-gold mb-2">{p.title}</div>
              <h4 className="font-display text-2xl leading-tight">{p.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{p.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
