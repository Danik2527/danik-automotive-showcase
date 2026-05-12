import { SprayCan, Sofa, Sparkles, Wind, ShieldCheck, Droplets } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { Counter } from "./Counter";

const services = [
  { icon: SprayCan, title: "Curățare chimică interior", text: "Detergenți profesionali pentru tapițerie, mochete și plafon." },
  { icon: Sofa, title: "Extracție scaune", text: "Aspirație umedă cu extracție pentru pete adânci și mirosuri." },
  { icon: Sparkles, title: "Detailing interior complet", text: "Plastice, piele, sticlă — totul restabilit la nou." },
  { icon: Wind, title: "Reîmprospătare interior", text: "Tratament de ozon și parfumare premium de lungă durată." },
  { icon: ShieldCheck, title: "Protecție textile", text: "Strat hidrofob împotriva petelor și uzurii zilnice." },
  { icon: Droplets, title: "Curățare profesională", text: "Proces în pași clari, cu atenție la fiecare detaliu." },
];

export function Detailing() {
  return (
    <section id="detailing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Detailing Auto"
          title="O experiență premium, în fiecare detaliu"
          subtitle="Curățare chimică profesională, extracție și restaurare interior — pentru mașina ta, ca și nouă."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative h-full rounded-2xl p-6 metallic border border-white/5 overflow-hidden hover:border-primary/40 transition-all">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shine pointer-events-none" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center mb-5 ring-1 ring-primary/30 group-hover:glow-sm transition-shadow">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <div className="font-display text-lg font-semibold">{s.title}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-strong rounded-3xl p-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { v: 120, s: "+", l: "Mașini curățate" },
              { v: 98, s: "%", l: "Clienți mulțumiți" },
              { v: 500, s: "h", l: "Ore de muncă" },
            ].map((c) => (
              <div key={c.l}>
                <div className="font-display text-5xl sm:text-6xl font-bold text-gradient-blue">
                  <Counter to={c.v} suffix={c.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
