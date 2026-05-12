import { HeartHandshake, Users } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const orgs = [
  {
    icon: HeartHandshake,
    name: "Crucea Roșie Călărași",
    role: "Voluntar activ",
    text: "Implicare în campanii de informare, ajutor umanitar și activități de sprijin pentru comunitățile locale.",
  },
  {
    icon: Users,
    name: "Moldova Project",
    role: "Voluntar comunitar",
    text: "Proiecte sociale dedicate familiilor și copiilor — educație, sprijin material și speranță.",
  },
];

export function Volunteering() {
  return (
    <section id="voluntariat" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Voluntariat"
          title="Comunitatea pe primul loc"
          subtitle="Cred că faptele bune, făcute împreună, schimbă lumea — pas cu pas."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {orgs.map((o, i) => (
            <Reveal key={o.name} delay={i * 100}>
              <div className="group glass-strong rounded-3xl p-8 hover:border-primary/50 transition-colors h-full">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl metallic grid place-items-center ring-1 ring-primary/30 group-hover:glow-sm transition-shadow">
                    <o.icon className="text-primary" size={26} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-primary">{o.role}</div>
                    <div className="font-display text-2xl font-semibold mt-1">{o.name}</div>
                    <p className="text-muted-foreground mt-3">{o.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <blockquote className="max-w-3xl mx-auto text-center italic text-xl text-muted-foreground">
            „Adevărata bogăție nu e în ce primești, ci în <span className="text-foreground">ce reușești să oferi</span> celor din jur.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
