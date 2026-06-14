import { createFileRoute } from "@tanstack/react-router";
import { Download, Mic, ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import mediaImg from "@/assets/media.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Speaking — Rehema Kiteto" },
      { name: "description", content: "Press kit, speaker topics, official photography and downloadable bio for journalists and event organizers." },
      { property: "og:title", content: "Media & Speaking — Rehema Kiteto" },
      { property: "og:description", content: "Featured in Standard Media, Citizen TV, Nation. Book Rehema for keynotes, panels, and editorial features." },
    ],
  }),
  component: Media,
});

const outlets = ["Standard Media", "Citizen TV", "Nation", "KBC", "Capital FM", "K24", "NTV", "BBC Africa"];
const topics = [
  { title: "Women in Governance", body: "On building careers in the public service without losing your name." },
  { title: "Youth Empowerment", body: "Civic literacy, leadership, and the long apprenticeship of public life." },
  { title: "Faith & Public Office", body: "Holding conviction without becoming brittle — the inner life of a public servant." },
  { title: "Writing as Witness", body: "Memoir, journalism, and the discipline of telling true stories." },
];
const assets = [
  { label: "Official High-Res Portraits", size: "ZIP · 42MB" },
  { label: "Full Biography (PDF)", size: "PDF · 240KB" },
  { label: "Short Bio (Web)", size: "DOCX · 60KB" },
  { label: "Speaker One-Sheet", size: "PDF · 1.8MB" },
];

function Media() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Media & Speaking"
        title={<>For producers, editors <span className="italic text-gold">and program directors.</span></>}
        subtitle="Approved headshots, an official biography, and a current list of speaking topics — all cleared for editorial and conference use."
        image={mediaImg}
      />

      {/* OUTLETS */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-forest mb-10 text-center">Media Features</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {outlets.map((o, i) => (
              <Reveal key={o} delay={i * 0.03}>
                <div className="bg-background h-28 grid place-items-center font-serif italic text-2xl text-foreground/65 hover:text-forest transition-colors">
                  {o}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-forest mb-5 flex items-center gap-3"><Mic className="w-3.5 h-3.5" strokeWidth={1.5} /> Speaker Topics</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Available for keynotes, panels, and convocations.</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">Honoraria and travel terms shared on request. International bookings handled through the office of representation.</p>
          </Reveal>
          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <li className="flex items-start justify-between gap-6 py-8 group cursor-pointer">
                  <div className="flex items-baseline gap-6">
                    <span className="eyebrow text-gold w-8">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl group-hover:text-forest transition-colors">{t.title}</h3>
                      <p className="mt-2 text-foreground/65 max-w-md">{t.body}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-forest transition-colors mt-2" strokeWidth={1.5} />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* DOWNLOADABLE ASSETS */}
      <section className="py-20 md:py-28 bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow text-gold mb-4">Downloadable Assets</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Press kit — official portraits, biography, and one-sheets.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {assets.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.06}>
                <a href="#" className="bg-ink flex items-center justify-between p-8 md:p-10 group hover:bg-forest-dark transition-colors">
                  <div>
                    <p className="font-serif text-xl md:text-2xl">{a.label}</p>
                    <p className="eyebrow text-white/50 mt-2">{a.size}</p>
                  </div>
                  <Download className="w-5 h-5 text-gold group-hover:translate-y-0.5 transition-transform" strokeWidth={1.5} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
