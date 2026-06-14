import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import bioImg from "@/assets/bio.jpg";
import speakingImg from "@/assets/speaking.jpg";
import communityImg from "@/assets/community.jpg";
import mediaImg from "@/assets/media.jpg";
import daringImg from "@/assets/daring.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Essays by Rehema Kiteto" },
      { name: "description", content: "Essays on leadership, motivation and empowerment by Rehema Kiteto." },
      { property: "og:title", content: "Insights — Essays by Rehema Kiteto" },
      { property: "og:description", content: "Writing on leadership, faith, and the long work of governance." },
    ],
  }),
  component: Blog,
});

const featured = {
  title: "The Long Apprenticeship: On Becoming Useful Before Becoming Visible",
  excerpt: "We are raising a generation that has been taught to perform leadership before they have practiced it. There is another way — older, slower, and much harder to fake.",
  category: "Leadership",
  date: "May 18, 2026",
  read: "9 min read",
  image: bioImg,
};

const posts = [
  { title: "What the Baraza Taught Me About Listening", category: "Public Service", date: "Apr 30, 2026", read: "6 min", image: communityImg },
  { title: "A Letter to the Woman Who Was Almost Chosen", category: "Empowerment", date: "Apr 02, 2026", read: "5 min", image: speakingImg },
  { title: "Faith in the Office: Holding Conviction in Public Life", category: "Faith", date: "Mar 14, 2026", read: "7 min", image: mediaImg },
  { title: "Why I Wrote DARING — Notes on a Difficult Book", category: "Writing", date: "Feb 20, 2026", read: "8 min", image: daringImg },
];

function Blog() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title={<>Essays on leadership, faith, <span className="italic text-gold">and the long view.</span></>}
        subtitle="Notes from the office, the page, and the pew — published when there is something to say."
      />

      {/* FEATURED */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <a href="#" className="group grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 overflow-hidden">
                <img src={featured.image} alt={featured.title} loading="lazy" className="w-full aspect-[5/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow text-gold mb-4">Featured · {featured.category}</p>
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">{featured.title}</h2>
                <p className="mt-6 text-foreground/75 text-lg leading-relaxed">{featured.excerpt}</p>
                <div className="mt-8 flex items-center justify-between">
                  <p className="eyebrow text-muted-foreground">{featured.date} · {featured.read}</p>
                  <span className="inline-flex items-center gap-2 eyebrow border-b border-foreground pb-1 group-hover:text-forest group-hover:border-forest transition-colors">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FEED */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="flex items-end justify-between mb-14">
            <h2 className="font-serif text-3xl md:text-4xl">Recent Essays</h2>
            <a href="#" className="eyebrow inline-flex items-center gap-2 hover:text-forest transition-colors">Archive <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} /></a>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group">
                  <a href="#" className="block">
                    <div className="overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="mt-6">
                      <p className="eyebrow text-forest">{p.category}</p>
                      <h3 className="font-serif text-2xl md:text-3xl mt-3 leading-snug group-hover:text-forest transition-colors">{p.title}</h3>
                      <div className="mt-5 flex items-center justify-between">
                        <p className="eyebrow text-muted-foreground">{p.date} · {p.read}</p>
                        <span className="inline-flex items-center gap-2 eyebrow text-foreground border-b border-foreground pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                          Read Article <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
