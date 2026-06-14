import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "./Header";

export function Footer() {
  return (
    <footer className="bg-ink text-white/85 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link to="/" className="font-serif text-3xl tracking-wide text-white">
            Rehema <span className="text-gold italic">Kiteto</span>
          </Link>
          <p className="eyebrow text-white/50 mt-3">Administrator · Speaker · Author · Counselor</p>
          <p className="mt-8 max-w-sm text-white/65 leading-relaxed">
            Public service rooted in courage, scholarship, and the quiet conviction that institutions are built by patient hands.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Twitter, href: "#", label: "X" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Mail, href: "/contact", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 grid place-items-center border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <s.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-gold mb-5">Explore</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-gold mb-5">The Dispatch</p>
          <p className="text-white/65 leading-relaxed mb-6">
            Monthly essays on leadership, faith, and the long work of governance. No noise.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-white/25 focus-within:border-gold transition-colors">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 bg-transparent py-3 text-white placeholder:text-white/40 outline-none"
            />
            <button type="submit" className="text-gold inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase pl-4">
              Join <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Rehema Kiteto. All rights reserved.</p>
          <p>Bomet · Nairobi · Kwale</p>
        </div>
      </div>
    </footer>
  );
}
