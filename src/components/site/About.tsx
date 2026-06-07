import { motion } from "motion/react";
import aboutImg from "@/assets/about-library.jpg";

const STATS = [
  { value: "500+", label: "Cases Successfully Resolved" },
  { value: "50+", label: "Corporate Clients" },
  { value: "15+", label: "Years of Excellence" },
  { value: "9", label: "Provinces Covered" },
];

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Law library interior"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={1100}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-[var(--navy-deep)] text-ivory p-8 max-w-xs">
              <div className="font-display text-5xl text-gold leading-none">15</div>
              <div className="mt-2 text-xs tracking-[0.24em] uppercase text-ivory/70">
                Years defining<br />legal excellence
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="eyebrow eyebrow-line mb-6">About the firm</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              A tradition of
              <span className="italic text-[var(--navy)]"> excellence</span>,
              built on trust.
            </h2>
            <div className="gold-rule my-10 max-w-[120px]" />
            <p className="text-lg leading-relaxed text-muted-foreground font-light">
              MARIVATE & ASSOCIATES is a premier South African law firm dedicated
              to delivering exceptional legal services with integrity, precision,
              and unwavering commitment to our clients. From boardrooms to
              courtrooms, our counsel anchors every decision that defines a
              business — and every right that must be defended.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-y-10 gap-x-8">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="border-l-2 border-gold pl-5"
                >
                  <div className="font-display text-4xl lg:text-5xl text-[var(--navy-deep)]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
