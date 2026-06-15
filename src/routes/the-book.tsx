import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, MessageCircle, MapPin, ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import daringImg from "@/assets/daring.jpg";

export const Route = createFileRoute("/the-book")({
  head: () => ({
    meta: [
      { title: "DARING — A Book by Rehema Kiteto" },
      { name: "description", content: "DARING — the memoir on faith, leadership, and women who refuse to wait their turn. Buy on Amazon, WhatsApp, or local bookstores." },
      { property: "og:title", content: "DARING — A Book by Rehema Kiteto" },
      { property: "og:description", content: "Read the synopsis, reader reactions, and order your copy of DARING by Rehema Kiteto." },
      { property: "og:image", content: "/src/assets/daring.jpg" },
    ],
  }),
  component: TheBook,
});

const testimonials = [
  { quote: "DARING reads like a letter from a sister who got there first. It is brave, unhurried, and impossible to put down.", name: "Hon. Martha Karua", role: "Former Cabinet Minister, Kenya" },
  { quote: "A generational book. Every young woman in East Africa should read this before her thirtieth birthday.", name: "Caroline Mutoko", role: "Broadcaster & Author" },
  { quote: "Rehema writes about power the way only those who carry it lightly can — with grace, and without flinching.", name: "Prof. Wandia Njoya", role: "Daystar University" },
];

function TheBook() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <PageShell>
      {/* HERO with 3D book */}
      <section className="relative pt-36 md:pt-48 pb-20 bg-gradient-to-b from-forest-dark to-ink text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-gold mb-6">New Release · 2024</p>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] mb-6">DARING</h1>
            <p className="font-serif italic text-2xl text-gold-soft mb-10">a memoir by Rehema Kiteto</p>
            <p className="text-lg text-white/80 leading-relaxed max-w-md mb-10">
              A candid account of the women who refuse to wait their turn — and what it costs to lead before you feel ready.
            </p>
            <a href="#buy" className="group inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-soft transition-colors">
              Order Your Copy
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative perspective-[2000px] flex justify-center">
              <motion.div
                initial={{ rotateY: -25, opacity: 0 }}
                animate={{ rotateY: -18, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotateY: -8 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-[260px] md:w-[340px]"
              >
                <img src={daringImg} alt="DARING book cover" width={800} height={1100} className="w-full aspect-[4/5.5] object-cover shadow-[0_50px_120px_-20px_rgba(0,0,0,0.7)]" />
                <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/40 to-transparent" style={{ transform: "translateZ(-10px)" }} />
                <div className="absolute -left-1 top-1 bottom-1 w-2 bg-forest-dark" style={{ transform: "rotateY(90deg) translateZ(4px)", transformOrigin: "left" }} />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYNOPSIS */}
      <section className="py-24 md:py-36">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-forest mb-5">The Synopsis</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10">
              A book about <span className="italic">arriving</span> before the world has decided you are allowed to.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                DARING is the story of a girl from Kwale who walked into rooms that did not expect her — and learned, slowly, that the rooms had been waiting all along.
              </p>
              <p>
                Across twelve essays, Rehema Kiteto braids her own coming-of-age with the lives of the Kenyan women who shaped her: her mother, her teachers, the Chiefs and farmers and matatu drivers who taught her that leadership is mostly the art of staying.
              </p>
              <p className="font-serif italic text-xl text-forest">
                "I wrote this for the woman who is one decision away from saying yes. I want her to know the cost — and then I want her to say it anyway."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-20 md:py-28 bg-forest text-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-gold mb-10">Reader Testimonials</p>
            <Quote className="w-10 h-10 text-gold mx-auto mb-8" strokeWidth={1} />
          </Reveal>
          <div className="min-h-[260px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-2xl md:text-4xl leading-snug italic"
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-10">
              <p className="font-serif text-xl">{t.name}</p>
              <p className="eyebrow text-gold mt-2">{t.role}</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} aria-label="Previous" className="w-11 h-11 grid place-items-center border border-white/30 hover:border-gold hover:text-gold transition-colors">
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-px transition-all ${i === index ? "bg-gold w-10" : "bg-white/30 w-5"}`} />
              ))}
            </div>
            <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} aria-label="Next" className="w-11 h-11 grid place-items-center border border-white/30 hover:border-gold hover:text-gold transition-colors">
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* BUY GRID */}
      <section id="buy" className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="eyebrow text-forest mb-4">Buy Now</p>
            <h2 className="font-serif text-4xl md:text-5xl">Choose your preferred channel.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShoppingBag, title: "Amazon", desc: "Kindle, paperback, and hardcover. Worldwide shipping.", cta: "Order on Amazon" },
              { icon: MessageCircle, title: "WhatsApp", desc: "Signed copies delivered across Kenya. Pay on delivery.", cta: "Order via WhatsApp" },
              { icon: MapPin, title: "Local Bookstores", desc: "Available at Text Book Centre, Prestige, and Bookstop nationwide.", cta: "Find a Stockist" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <a href="#" className="block bg-background p-10 group h-full hover:bg-forest hover:text-white transition-colors duration-500">
                  <c.icon className="w-8 h-8 text-gold" strokeWidth={1.25} />
                  <h3 className="font-serif text-2xl md:text-3xl mt-8">{c.title}</h3>
                  <p className="mt-3 text-foreground/70 group-hover:text-white/75 transition-colors">{c.desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 eyebrow border-b border-current pb-1">
                    {c.cta} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
export default TheBook
