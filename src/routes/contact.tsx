import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mic, Newspaper, BookOpen, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Rehema Kiteto" },
      { name: "description", content: "Speaking inquiries, media requests, and book orders — get in touch with the office of Rehema Kiteto." },
      { property: "og:title", content: "Contact & Bookings — Rehema Kiteto" },
      { property: "og:description", content: "For speaking, media, or book orders — start a conversation with the office of Rehema Kiteto." },
    ],
  }),
  component: Contact,
});

const categories = [
  { icon: Mic, label: "Speaking", note: "Keynotes, panels, university convocations." },
  { icon: Newspaper, label: "Media", note: "Press interviews, editorial features, broadcast." },
  { icon: BookOpen, label: "Book Orders", note: "Bulk orders, signed copies, library requests." },
];

function Contact() {
  const [active, setActive] = useState("Speaking");

  return (
    <PageShell>
      <section className="pt-32 md:pt-40 grid md:grid-cols-2 min-h-screen">
        {/* LEFT */}
        <div className="bg-forest text-white px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] mb-8">
              Begin a <span className="italic text-gold-soft">conversation.</span>
            </h1>
            <p className="text-white/75 leading-relaxed max-w-md mb-12">
              All messages are read by the office and personally reviewed weekly. We respond within five working days.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-gold mb-5">By Category</p>
            <ul className="space-y-1 mb-12">
              {categories.map((c) => (
                <li key={c.label}>
                  <button
                    onClick={() => setActive(c.label)}
                    className={`w-full text-left flex items-start gap-5 py-4 border-b border-white/15 transition-colors ${active === c.label ? "text-gold" : "text-white/85 hover:text-gold"}`}
                  >
                    <c.icon className="w-5 h-5 mt-1" strokeWidth={1.5} />
                    <span className="flex-1">
                      <span className="block font-serif text-2xl">{c.label}</span>
                      <span className="block eyebrow text-white/50 mt-1">{c.note}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 text-sm text-white/75">
              <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" strokeWidth={1.5} /> office@rehemakiteto.co.ke</p>
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" strokeWidth={1.5} /> +254 700 000 000</p>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} /> Bomet · Nairobi · Kwale</p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div className="bg-background px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-forest mb-4">Inquiry · <span className="text-gold">{active}</span></p>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">Send a message.</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8 max-w-lg">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="name" label="Full Name" />
                <Field id="email" label="Email" type="email" />
              </div>
              <Field id="org" label="Organization" />
              <Field id="subject" label="Subject" />
              <div>
                <label htmlFor="message" className="eyebrow text-muted-foreground block mb-3">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-border focus:border-forest outline-none py-3 text-lg font-serif resize-none transition-colors"
                />
              </div>
              <button type="submit" className="group inline-flex items-center gap-3 bg-forest text-white px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-forest-dark transition-colors">
                Send Inquiry
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-muted-foreground block mb-3">{label}</label>
      <input id={id} type={type} className="w-full bg-transparent border-b border-border focus:border-forest outline-none py-3 text-lg font-serif transition-colors" />
    </div>
  );
}
export default Contact
