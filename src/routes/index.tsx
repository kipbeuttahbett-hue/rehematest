import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Users, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import daringImg from "@/assets/daring.jpg";
import speakingImg from "@/assets/speaking.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rehema Kiteto — Administrator · Speaker · Author · Counselor" },
      { name: "description", content: "Official site of Rehema Kiteto, Kenya's youngest Assistant County Commissioner, author of DARING, and advocate for women and youth." },
      { property: "og:title", content: "Rehema Kiteto — Administrator · Speaker · Author · Counselor" },
      { property: "og:description", content: "From the arid lands of Kwale to the halls of administration in Bomet — explore the journey, the book, and the public service." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Rehema Kiteto portrait" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-gold mb-6"
          >
            Assistant County Commissioner · Bomet, Kenya
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] leading-[0.92] tracking-tight"
          >
            REHEMA<br />
            <span className="italic font-normal text-gold-soft">Kiteto</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-white/85 text-xs md:text-sm tracking-[0.3em] uppercase"
          >
            <span>Administrator</span><span className="text-gold/70">•</span>
            <span>Speaker</span><span className="text-gold/70">•</span>
            <span>Author</span><span className="text-gold/70">•</span>
            <span>Counselor</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link to="/the-book" className="group inline-flex items-center gap-3 bg-forest text-white px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-forest-dark transition-colors">
              Read DARING
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            </Link>
            <Link to="/contact" className="group inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:border-gold hover:text-gold transition-colors">
              Work With Me
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-6 md:right-10 text-white/50 text-[10px] tracking-[0.3em] uppercase rotate-180" style={{ writingMode: "vertical-rl" }}>
          Experience the Journey
        </div>
      </section>

      {/* AS FEATURED IN */}
      <section className="border-y border-border bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-6">
          <span className="eyebrow text-muted-foreground">As Featured In</span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 font-serif italic text-xl md:text-2xl text-foreground/70">
            <span>Standard Media</span>
            <span>Citizen TV</span>
            <span>Nation</span>
            <span>KBC</span>
            <span>Capital FM</span>
          </div>
        </div>
      </section>

      {/* TEASE: THE BOOK */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <img src={daringImg} alt="DARING book cover" width={800} height={1100} loading="lazy" className="w-full max-w-md mx-auto aspect-[4/5.5] object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]" />
              <div className="absolute -bottom-6 -right-2 md:-right-10 bg-gold text-ink px-6 py-4">
                <p className="eyebrow">New Release</p>
                <p className="font-serif text-2xl mt-1">2024</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <p className="eyebrow text-forest mb-5 flex items-center gap-3"><BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} /> The Book</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">
              <span className="italic">DARING</span> — a memoir of the women who refuse to wait their turn.
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed max-w-prose mb-10">
              From the arid plains of Kwale to the corridors of administration in Bomet, DARING is a candid account of faith, failure, and the audacity to lead before you feel ready.
            </p>
            <Link to="/the-book" className="group inline-flex items-center gap-3 bg-forest text-white px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-forest-dark transition-colors">
              Read the Synopsis
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TEASE: PUBLIC SERVICE */}
      <section className="relative py-24 md:py-36 bg-ink text-white overflow-hidden">
        <img src={speakingImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-gold mb-5 flex items-center gap-3"><Users className="w-3.5 h-3.5" strokeWidth={1.5} /> Public Service</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
              The youngest Assistant County Commissioner in <span className="italic text-gold-soft">Kenya.</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-10">
              Coordinating government services, mediating disputes, and convening community projects across Bomet — the work of building trust, one barazas at a time.
            </p>
            <Link to="/public-service" className="group inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold hover:text-ink transition-colors">
              Explore the Work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5 md:pl-8 self-end">
            <div className="grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div><p className="font-serif text-4xl text-gold">28</p><p className="eyebrow mt-2 text-white/60">Age Appointed</p></div>
              <div><p className="font-serif text-4xl text-gold">40+</p><p className="eyebrow mt-2 text-white/60">Community Projects</p></div>
              <div><p className="font-serif text-4xl text-gold">12</p><p className="eyebrow mt-2 text-white/60">Sub-Locations</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEASE: STORY */}
      <section className="py-24 md:py-36 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <Sparkles className="w-6 h-6 text-gold mx-auto mb-6" strokeWidth={1.5} />
            <p className="eyebrow text-forest mb-5">Experience the Journey</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
              From Kwale to Bomet — a life lived <span className="italic">in the open.</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Egerton University. The administration. The page. The podium. The pew. Read the long form story of a woman who said yes before she knew the cost.
            </p>
            <Link to="/my-story" className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase border-b border-foreground pb-1 hover:border-gold hover:text-gold transition-colors">
              Read My Story
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Index
