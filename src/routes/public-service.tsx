import { createFileRoute } from "@tanstack/react-router";
import { Users, Sprout, Building2, ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import communityImg from "@/assets/community.jpg";
import speakingImg from "@/assets/speaking.jpg";
import bioImg from "@/assets/bio.jpg";
import mediaImg from "@/assets/media.jpg";

export const Route = createFileRoute("/public-service")({
  head: () => ({
    meta: [
      { title: "Public Service & Impact — Rehema Kiteto" },
      { name: "description", content: "The work of Assistant County Commissioner Rehema Kiteto — community projects, youth leadership, and government coordination across Bomet." },
      { property: "og:title", content: "Public Service & Impact — Rehema Kiteto" },
      { property: "og:description", content: "A portfolio of community projects, youth empowerment, and government coordination across Bomet, Kenya." },
    ],
  }),
  component: PublicService,
});

const cards = [
  { icon: Sprout, title: "Community Projects", body: "Water reticulation in Longisa, women's table-banking cooperatives in Sotik, and tree-planting drives across four sub-locations.", stat: "40+ projects" },
  { icon: Users, title: "Youth Leadership", body: "Founder of the Bomet Youth Civic Academy — a monthly forum mentoring 200+ young leaders in governance, conflict resolution, and entrepreneurship.", stat: "200+ mentees" },
  { icon: Building2, title: "Government Coordination", body: "Chairs the sub-county security and development committee, coordinating eight national-government agencies and county departments.", stat: "8 agencies" },
];

const gallery = [
  { src: communityImg, alt: "Barazas in the community", span: "md:col-span-2 md:row-span-2" },
  { src: speakingImg, alt: "Speaking at a youth forum", span: "" },
  { src: bioImg, alt: "Official portrait", span: "" },
  { src: mediaImg, alt: "Press conference", span: "md:col-span-2" },
];

function PublicService() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Public Service & Impact"
        title={<>The work of a <span className="italic text-gold">Commissioner</span> is mostly the work of showing up.</>}
        subtitle="As Assistant County Commissioner for a sub-county in Bomet, Rehema coordinates the everyday architecture of government — and the slow, patient work of community trust."
        image={speakingImg}
      />

      {/* CARDS */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="bg-background p-10 md:p-12 h-full group">
                  <c.icon className="w-8 h-8 text-gold" strokeWidth={1.25} />
                  <p className="eyebrow text-forest mt-8">{c.stat}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mt-3">{c.title}</h3>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{c.body}</p>
                  <span className="mt-8 inline-flex items-center gap-2 eyebrow group-hover:text-forest transition-colors">
                    Read Case Study <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DAY IN THE LIFE MASONRY */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-forest mb-4">A Day in the Life</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">From the morning baraza to the evening report — moments from the office of the ACC.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 0.06} className={g.span}>
                <div className="overflow-hidden group h-full">
                  <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
