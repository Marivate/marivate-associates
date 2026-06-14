import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-ivory border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              {/*<div className="w-10 h-10 border border-gold flex items-center justify-center text-gold font-display text-xl">M</div>*/}
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wide font-extrabold">MARIVATE</span>
                <span className="text-[0.62rem] tracking-[0.32em] text-gold/80 uppercase mt-0.5 font-bold">& Associates inc.</span>
              </div>
            </Link>
            <p className="mt-8 text-ivory/60 max-w-sm font-light leading-relaxed">
              A premier South African law firm delivering strategic counsel and
              exceptional advocacy to those who shape industries.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Firm" links={[
            { label: "About Us", to: "/about" },
            { label: "Attorneys", to: "/attorneys" },
            { label: "Careers", to: "/careers" },
            { label: "Insights", to: "/insights" },
            { label: "Contact", to: "/contact" },
          ]} />
          <FooterCol title="Practice" links={[
            { label: "Corporate & Commercial", to: "/practice-areas" },
            { label: "Litigation", to: "/practice-areas" },
            { label: "Labour & Employment", to: "/practice-areas" },
            { label: "Property", to: "/practice-areas" },
            { label: "Tax & Compliance", to: "/practice-areas" },
          ]} />
          <FooterCol title="Office" links={[
            { label: "Centurion, Pretoria" },
            { label: "Mon — Fri · 08:00 – 16:30" },
            { label: "084 986 8671" },
            { label: "Kateka@MarivateAssociates.co.za" },
          ]} />
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© 2026 MARIVATE & ASSOCIATES. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type LinkItem = { label: string; to?: string };
function FooterCol({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-[0.65rem] tracking-[0.28em] uppercase text-gold mb-5">{title}</div>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            {l.to ? (
              <Link to={l.to} className="text-sm text-ivory/70 hover:text-gold transition-colors">{l.label}</Link>
            ) : (
              <span className="text-sm text-ivory/70">{l.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
