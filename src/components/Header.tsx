import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "My Story", to: "/my-story" },
  { label: "The Book", to: "/the-book" },
  { label: "Public Service", to: "/public-service" },
  { label: "Media", to: "/media" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${transparent ? "bg-transparent" : "glass"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-wider ${transparent ? "text-white" : "text-foreground"}`}>
            REHEMA <span className="text-gold">KITETO</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[11px] tracking-[0.22em] uppercase font-medium transition-colors ${transparent ? "text-white/85 hover:text-gold" : "text-foreground/75 hover:text-forest"}`}
                activeProps={{ className: transparent ? "text-gold" : "text-forest" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 -mr-2 transition-colors ${transparent ? "text-white" : "text-foreground"}`}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-forest-dark"
          >
            <div className="h-20 px-6 md:px-10 flex items-center justify-between max-w-[1400px] mx-auto">
              <span className="font-serif text-xl md:text-2xl tracking-wider text-white">REHEMA <span className="text-gold">KITETO</span></span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white p-2 -mr-2">
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-6">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    to={l.to}
                    className="font-serif text-4xl md:text-6xl text-white/90 hover:text-gold transition-colors"
                    activeProps={{ className: "text-gold" }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
