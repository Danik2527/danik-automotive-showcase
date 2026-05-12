import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const posts = [
  { cat: "Detailing", title: "Anatomia unei curățări perfecte", excerpt: "De la pre-spălare la finisare — pașii care fac diferența între curat și impecabil.", date: "12 Mai 2025", featured: true },
  { cat: "Personal", title: "Cum mi-am transformat pasiunea în meserie", excerpt: "Drumul de la curiozitate de adolescent la primii clienți reali." },
  { cat: "Voluntariat", title: "O zi cu Crucea Roșie Călărași", excerpt: "Lecții de empatie, organizare și implicare în comunitate." },
  { cat: "Tech", title: "Setup-ul meu pentru gaming & studiu", excerpt: "Echilibru între performanță, estetică și buget realist de elev." },
  { cat: "Lifestyle", title: "5 obiceiuri care m-au schimbat în acest an", excerpt: "Mici ritualuri zilnice cu impact mare pe termen lung." },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Blog personal"
          title="Gânduri, povești, experiențe"
          subtitle="Notițe despre detailing, viața de elev, voluntariat și lucrurile care mă inspiră."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {posts.slice(0, 1).map((p) => (
            <Reveal key={p.title} className="lg:col-span-2 lg:row-span-2">
              <article className="group h-full glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[420px] hover:border-primary/40 transition-colors">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                    <span className="h-1 w-1 rounded-full bg-primary" /> Featured · {p.cat}
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold mt-5 leading-tight group-hover:text-gradient-blue transition-colors">{p.title}</h3>
                  <p className="mt-4 text-muted-foreground max-w-xl">{p.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Citește <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}

          {posts.slice(1).map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 cursor-pointer">
                <div className="text-[11px] uppercase tracking-[0.25em] text-primary">{p.cat}</div>
                <h3 className="font-display text-lg font-semibold mt-3 group-hover:text-gradient-blue transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  Citește articolul <ArrowUpRight size={12} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
