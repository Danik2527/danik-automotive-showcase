import { Instagram, Facebook, ArrowUp } from "lucide-react";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#detailing", label: "Detailing" },
  { href: "#galerie", label: "Galerie" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 mt-10 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl metallic grid place-items-center glow-sm">
                <span className="text-primary font-display font-bold">D</span>
              </div>
              <div>
                <div className="font-display font-semibold">Danik's Page</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Adam Daniel</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Brand personal premium — pasiune pentru mașini, tehnologie și implicare în comunitate.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Navigare</div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Conectează-te</div>
            <div className="flex gap-3 mb-4">
              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-xl glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-xl glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <a href="#hero" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowUp size={14} /> Înapoi sus
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Danik's Page · Adam Daniel. Toate drepturile rezervate.</div>
          <div className="uppercase tracking-[0.25em]">Made with passion · Sipoteni</div>
        </div>
      </div>
    </footer>
  );
}
