import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: ReactNode; subtitle?: string; image?: string }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-ink text-white overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        </>
      )}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="eyebrow text-gold mb-6">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-8 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
