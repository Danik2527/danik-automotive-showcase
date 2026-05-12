import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#pasiuni", label: "Pasiuni" },
  { href: "#detailing", label: "Detailing" },
  { href: "#galerie", label: "Galerie" },
  { href: "#blog", label: "Blog" },
  { href: "#voluntariat", label: "Voluntariat" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}>
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl metallic grid place-items-center glow-sm">
              <span className="text-primary font-display font-bold">D</span>
              <div className="absolute inset-0 rounded-xl ring-1 ring-primary/30" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold tracking-tight">Danik's Page</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Adam Daniel</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-glow transition-colors glow-sm">
            Programare
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
