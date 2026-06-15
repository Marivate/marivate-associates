import { motion } from "motion/react";
import { ArrowRight, Upload, X, FileText } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { sendApplication } from "@/lib/email.functions";


const PROGRAMMES = [
  "Graduate Programme",
  "Candidate Attorney (Articles)",
  "Experienced Lawyer (Lateral Hire)",
  "Paralegal",
  "Legal Support / Operations",
  "Knowledge Management",
];

const schema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone required").max(40),
  programme: z.string().trim().min(1, "Please select a programme"),
  qualification: z.string().trim().min(1, "Qualification required").max(200),
  coverLetter: z.string().trim().min(20, "Cover letter must be at least 20 characters").max(3000),
});

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ACCEPTED = [".pdf", ".doc", ".docx"];

export function Apply() {
  const [submitting, setSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const arr = Array.from(incoming);
    const valid: File[] = [];
    for (const f of arr) {
      const ext = "." + f.name.split(".").pop()?.toLowerCase();
      if (!ACCEPTED.includes(ext)) {
        toast.error(`${f.name}: unsupported format. Use PDF or Word.`);
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        toast.error(`${f.name}: exceeds 10MB limit.`);
        continue;
      }
      valid.push(f);
    }
    setFiles((prev) => [...prev, ...valid].slice(0, 6));
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    if (files.length === 0) {
      toast.error("Please attach at least your CV.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Application received. Our recruitment team will respond within 10 business days.");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setFiles([]);
    }, 900);
  };

  return (
    <section className="bg-[var(--navy-deep)] text-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="eyebrow eyebrow-line mb-6">Apply</div>
          <h1 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
            Submit your
            <span className="italic text-gold"> application.</span>
          </h1>
          <p className="mt-8 text-ivory/70 font-light leading-relaxed max-w-md">
            Select the programme you are applying for and upload your supporting
            documents. All applications are reviewed by our recruitment partners
            in confidence.
          </p>

          <div className="mt-12 border-t border-white/10 pt-8 space-y-6 text-sm text-ivory/70">
            <div>
              <div className="text-[0.65rem] tracking-[0.28em] uppercase text-gold/80 mb-2">Required documents</div>
              <ul className="space-y-1.5 leading-relaxed">
                <li>— Curriculum Vitae</li>
                <li>— Academic Transcripts</li>
                <li>— Cover Letter (or use field on right)</li>
                <li>— Identification Document (optional)</li>
              </ul>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.28em] uppercase text-gold/80 mb-2">Accepted formats</div>
              <p>PDF or Word (.doc, .docx) · Max 10MB per file · Up to 6 files</p>
            </div>
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
            <Field label="Full Name" name="name" required maxLength={120} />
            <Field label="Email" name="email" type="email" required maxLength={255} />
            <Field label="Phone" name="phone" required maxLength={40} />
            <Field as="select" label="Programme" name="programme" required>
              <option value="" className="bg-[var(--navy)] text-ivory">Select programme…</option>
              {PROGRAMMES.map((p) => (
                <option key={p} value={p} className="bg-[var(--navy)] text-ivory">{p}</option>
              ))}
            </Field>
            <div className="sm:col-span-2">
              <Field label="Highest Qualification / Institution" name="qualification" required maxLength={200} />
            </div>
          </div>

          <div className="mt-6">
            <Field as="textarea" label="Cover Letter / Motivation" name="coverLetter" required maxLength={3000} rows={5} />
          </div>

          {/* Upload */}
          <div className="mt-8">
            <label className="block text-[0.65rem] tracking-[0.28em] uppercase text-ivory/60 mb-3">
              Supporting Documents
            </label>
            <label
              htmlFor="docs"
              className="flex flex-col items-center justify-center gap-3 border border-dashed border-white/20 hover:border-gold/60 px-6 py-10 cursor-pointer transition-colors"
            >
              <Upload size={20} className="text-gold" strokeWidth={1.5} />
              <div className="text-sm text-ivory/80">
                <span className="text-gold">Click to upload</span> or drag and drop
              </div>
              <div className="text-xs text-ivory/40">PDF, DOC, DOCX · 10MB max each</div>
              <input
                id="docs"
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => onFiles(e.target.files)}
              />
            </label>

            {files.length > 0 && (
              <ul className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 border border-white/10 px-4 py-3 text-sm">
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText size={16} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                      <span className="truncate">{f.name}</span>
                      <span className="text-ivory/40 text-xs flex-shrink-0">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                    <button type="button" onClick={() => removeFile(i)} className="text-ivory/50 hover:text-gold transition-colors" aria-label={`Remove ${f.name}`}>
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-10 inline-flex items-center gap-3 bg-gold text-[var(--navy-deep)] px-8 py-4 text-[0.78rem] tracking-[0.24em] uppercase font-medium hover:bg-[var(--gold-soft)] transition-colors disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit Application"}
            <ArrowRight size={16} />
          </button>
          <p className="mt-6 text-xs text-ivory/50 leading-relaxed">
            By submitting, you consent to MARIVATE & ASSOCIATES processing your
            personal information in accordance with POPIA for recruitment purposes.
          </p>
        </motion.form>
      </div>
    </section>
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
  const cls = "w-full bg-[var(--navy)] border-b border-white/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors";
  return (
    <div>
      <label htmlFor={id} className="block text-[0.65rem] tracking-[0.28em] uppercase text-ivory/60 mb-2">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={id} name={name} className={cls} {...rest} />
      ) : as === "select" ? (
        <select id={id} name={name} className={`${cls} appearance-none cursor-pointer`} {...rest}>
          {children}
        </select>
      ) : (
        <input id={id} name={name} className={cls} {...rest} />
      )}
    </div>
  );
}
