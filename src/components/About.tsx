import { MapPin, GraduationCap, User, Heart } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Reveal, SectionTitle } from "./Reveal";

const traits = ["ambițios", "creativ", "energic", "sociabil", "pasionat", "prietenos"];

const timeline = [
  { year: "2007", title: "Începutul drumului", text: "Născut în Comuna Sipoteni — primii pași într-o lume plină de curiozitate." },
  { year: "2018", title: "Prima pasiune: mașinile", text: "Descopăr fascinația pentru mașini, sunet și estetică." },
  { year: "2022", title: "Liceul Teoretic „Mihai Eminescu”", text: "Ani de formare, prietenii și descoperire de sine." },
  { year: "2024", title: "Detailing & voluntariat", text: "Transform pasiunea în servicii și implicare comunitară." },
];

export function About() {
  return (
    <section id="despre" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Despre mine" title="Cine sunt eu, dincolo de ecran" />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl" />
              <div className="relative glass-strong rounded-3xl p-2 overflow-hidden">
                <img src={portrait} alt="Portret Adam Daniel" loading="lazy" width={896} height={1152}
                  className="w-full rounded-2xl object-cover aspect-[4/5]" />
              </div>
              <div className="absolute -bottom-5 -right-5 glass-strong rounded-2xl px-5 py-3 glow-sm">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Vârstă</div>
                <div className="font-display text-2xl font-bold text-gradient-blue">17 ani</div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sunt un tânăr <span className="text-foreground">ambițios și creativ</span>, pasionat de detailing auto,
                muzică și tehnologie. Îmi place să evoluez constant, să descopăr lucruri noi și să transform pasiunea
                pentru mașini într-o <span className="text-primary">experiență premium</span>.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: User, label: "Nume", value: "Adam Daniel" },
                { icon: MapPin, label: "Localitate", value: "Comuna Sipoteni" },
                { icon: GraduationCap, label: "Instituție", value: "L.T. „Mihai Eminescu”" },
                { icon: Heart, label: "Pasiuni", value: "Auto · Muzică · Tech" },
              ].map((c, i) => (
                <Reveal key={c.label} delay={150 + i * 80}>
                  <div className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors h-full">
                    <c.icon size={20} className="text-primary mb-3" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="font-medium mt-1">{c.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-2 pt-2">
                {traits.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full glass text-sm capitalize hover:border-primary/50 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold mb-10 text-center">Drumul până aici</h3>
          </Reveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                    <div className="glass rounded-2xl p-5 inline-block hover:glow-sm transition-shadow">
                      <div className="text-xs uppercase tracking-widest text-primary">{t.year}</div>
                      <div className="font-display text-lg font-semibold mt-1">{t.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{t.text}</div>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full bg-primary glow-sm ring-4 ring-background" />
                  <div />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
