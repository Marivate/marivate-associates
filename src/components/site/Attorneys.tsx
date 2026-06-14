import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import managing from "@/assets/attorney-managing-partner.jpg";

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

        {/* Featured: Managing Director */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--navy-deep)]">
              <img src={managing} alt="Kateka Marivate, Managing Director" className="w-full h-full object-cover" loading="lazy" width={900} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block w-32 h-32 border-2 border-gold -z-0" />
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow eyebrow-line mb-6">Managing Director</div>
            <h3 className="font-display text-5xl lg:text-7xl leading-[1] tracking-tight">
              Kateka
              <br />
              <span className="italic text-[var(--navy)]">Marivate</span>
            </h3>
            <div className="gold-rule my-8 max-w-[120px]" />
            <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              <p>
                Kateka Marivate is the Founder and Managing Director of the
                firm and an admitted Attorney of the High Court of South
                Africa. He provides strategic legal services to individuals,
                entrepreneurs, corporate clients and organs of State across a
                broad spectrum of legal matters.
              </p>
              <p>
                Recognised for his commercial acumen, meticulous attention to
                detail, and unwavering commitment to excellence, Mr Marivate
                approaches every mandate with professionalism, integrity, and
                a results-oriented mindset.
              </p>
              <p>
                Under his leadership, the firm is dedicated to delivering
                sophisticated legal solutions, fostering enduring client
                relationships, and upholding the highest standards of legal
                practice.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/KatekaMarivate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-[var(--navy-deep)]/20 flex items-center justify-center text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-gold transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:Kateka@MarivateAssociates.co.za"
                aria-label="Email"
                className="w-10 h-10 border border-[var(--navy-deep)]/20 flex items-center justify-center text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-gold transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
