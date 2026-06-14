import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import bioImg from "@/assets/bio.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/my-story")({
  head: () => ({
    meta: [
      { title: "My Story — Rehema Kiteto" },
      { name: "description", content: "From the arid lands of Kwale to the halls of administration in Bomet — the long-form story of Rehema Kiteto." },
      { property: "og:title", content: "My Story — Rehema Kiteto" },
      { property: "og:description", content: "Egerton, Kwale, Bomet — the journey to becoming Kenya's youngest Assistant County Commissioner." },
    ],
  }),
  component: MyStory,
});

const timeline = [
  { year: "1995", title: "Born in Kwale", body: "The youngest of four, raised in the arid coastal plains where rain was rumor and resilience was inherited." },
  { year: "2013", title: "Egerton University", body: "Bachelor of Arts in Public Administration and Political Science. The first of her family to set foot in a lecture hall." },
  { year: "2017", title: "Public Service Cadet", body: "Joined the National Government Administration Officers training at the Kenya School of Government." },
  { year: "2019", title: "First Posting — Kilifi", body: "Deputy ward administrator. Learned that listening is half the brief." },
  { year: "2022", title: "Author of DARING", body: "Began drafting the manuscript that would become a national conversation on women, faith, and leadership." },
  { year: "2024", title: "ACC, Bomet", body: "Sworn in as Assistant County Commissioner — at 28, the youngest serving in Kenya." },
];

function MyStory() {
  return (
    <PageShell>
      <PageHero
        eyebrow="My Story"
        title={<>A life given to the <span className="italic text-gold">quiet work</span> of public service.</>}
        subtitle="From the arid lands of Kwale to the halls of administration in Bomet — this is the long story, told without rush."
        image={bioImg}
      />

      {/* EDITORIAL ARTICLE */}
      <section className="py-20 md:py-28">
        <div className="max-w-[760px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-forest mb-6">Chapter One · Kwale</p>
            <p className="font-serif text-3xl md:text-4xl leading-snug mb-12 first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:leading-[0.85] first-letter:text-forest">
              The first thing the wind in Kwale teaches you is that nothing soft survives — and yet, somehow, the women do.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-7 text-lg leading-relaxed text-foreground/80">
              <p>
                I grew up between the salt of the Indian Ocean and the iron of the inland red earth. My mother woke before the sun to walk three kilometers for water; my father taught at a primary school where the chalkboard was a piece of painted plywood. Neither of them ever told me I could not do something. They simply assumed I would.
              </p>
              <p>
                The first time I saw a uniformed government officer up close, I was nine. She was a Chief, and she had come to settle a dispute over a goat. I remember thinking that anyone allowed to wear that coat in this heat must matter very much. That image stayed with me through every classroom, every exam, every cold morning at Egerton when I wondered if a girl from Kwale had any business reading public administration.
              </p>
              <p>
                Years later, on the day I was sworn in as Assistant County Commissioner of a sub-county in Bomet, my mother — who had never traveled past Mombasa — sat in the third row. She did not cry. She watched, the way she has always watched, as if to say: <em>I told you the earth was not too heavy.</em>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="my-16">
              <img src={communityImg} alt="Community in Kwale" loading="lazy" className="w-full aspect-[16/10] object-cover" />
              <figcaption className="eyebrow text-muted-foreground mt-4 text-center">A women's collective in Lunga Lunga, 2023.</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-forest mb-6">Chapter Two · The Calling</p>
            <div className="space-y-7 text-lg leading-relaxed text-foreground/80">
              <p>
                Public service is not a job; it is a vow. You make it once, quietly, and then you keep it on the mornings when nobody is watching. I learned this in my first posting in Kilifi, when a 73-year-old farmer walked nine kilometers to my office to ask, not for money, but for someone to listen.
              </p>
              <p>
                I listened. That was the entire transaction. He left with no document, no stamp, no resolution — and he thanked me as if I had handed him the title to his land. That afternoon I understood the office I had stepped into. It is, before anything else, a chair pulled out for the next person who needs to sit down.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-forest mb-4">The Timeline</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-16">From Egerton to Bomet — the milestones.</h2>
          </Reveal>
          <ol className="relative border-l border-border ml-3">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="pl-10 pb-14 relative">
                  <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-cream" />
                  <p className="eyebrow text-forest">{t.year}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mt-2">{t.title}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed max-w-2xl">{t.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
