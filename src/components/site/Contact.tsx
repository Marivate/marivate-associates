import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone required").max(40),
  area: z.string().trim().min(1, "Select practice area").max(80),
  message: z.string().trim().min(10, "Please share at least 10 characters").max(2000),
});

const AREAS = [
  "Debt Collection",
  "Sports & Entertainment Law",
  "Personal Injury Claims",
  "Legal Compliance",
  "Contract Law",
  "Comprehensive Legal Opinions",
  "Corporate & Commercial Law",
  "Litigation & Dispute Resolution",
  "Labour & Employment Law",
  "Family Law",
  "Criminal Defence",
  "Intellectual Property Law",
  "Wills & Estate",
  "Other",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Consultation request received. We'll be in touch within one business day.");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="bg-[var(--navy-deep)] text-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="eyebrow eyebrow-line mb-6">Contact</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
            Schedule a private
            <span className="italic text-gold"> consultation.</span>
          </h2>
          <p className="mt-8 text-ivory/70 font-light leading-relaxed max-w-md">
            All enquiries are received in confidence. A partner-level response
            within one business day.
          </p>

          <div className="mt-12 space-y-7">
            <ContactRow icon={MapPin} label="Office">
              155 West Street, Sandton<br />Johannesburg 2196, South Africa
            </ContactRow>
            <ContactRow icon={Phone} label="Direct">
              <a href="tel:+27110000000" className="hover:text-gold">+27 11 000 0000</a>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href="mailto:counsel@marivate.law" className="hover:text-gold">counsel@marivate.law</a>
            </ContactRow>
            <ContactRow icon={Clock} label="Hours">
              Mon — Fri · 08:00 – 18:00 SAST
            </ContactRow>
          </div>

          {/* Map */}
          <div className="mt-10 aspect-[16/9] overflow-hidden border border-white/10">
            <iframe
              title="MARIVATE & ASSOCIATES — office location"
              src="https://www.google.com/maps?q=Sandton%20Johannesburg&output=embed"
              className="w-full h-full grayscale contrast-110"
              loading="lazy"
            />
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-[var(--navy)] p-8 lg:p-12 border border-white/10"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full Name" name="name" required maxLength={100} />
            <Field label="Email" name="email" type="email" required maxLength={255} />
            <Field label="Phone" name="phone" required maxLength={40} />
            <Field as="select" label="Practice Area" name="area" required>
              <option value="">Select…</option>
              {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
            </Field>
          </div>
          <div className="mt-6">
            <Field as="textarea" label="Message" name="message" required maxLength={2000} rows={5} />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-10 inline-flex items-center gap-3 bg-gold text-[var(--navy-deep)] px-8 py-4 text-[0.78rem] tracking-[0.24em] uppercase font-medium hover:bg-[var(--gold-soft)] transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Request Consultation"}
            <ArrowRight size={16} />
          </button>
          <p className="mt-6 text-xs text-ivory/50 leading-relaxed">
            By submitting, you consent to MARIVATE & ASSOCIATES contacting you
            about your enquiry. Information is treated in strict confidence.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, children }: { icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-gold" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-[0.65rem] tracking-[0.28em] uppercase text-gold/80 mb-1">{label}</div>
        <div className="text-ivory/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  as?: "input" | "textarea" | "select";
  type?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  children?: React.ReactNode;
};
function Field({ label, name, as = "input", children, ...rest }: FieldProps) {
  const id = `f-${name}`;
  const cls = "w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors";
  return (
    <div>
      <label htmlFor={id} className="block text-[0.65rem] tracking-[0.28em] uppercase text-ivory/60 mb-2">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={id} name={name} className={cls} {...rest} />
      ) : as === "select" ? (
        <select id={id} name={name} className={`${cls} appearance-none`} {...rest}>
          {children}
        </select>
      ) : (
        <input id={id} name={name} className={cls} {...rest} />
      )}
    </div>
  );
}
