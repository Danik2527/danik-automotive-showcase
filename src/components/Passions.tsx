import { Car, Gamepad2, Music, HandHeart, Cpu } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const items = [
  { icon: Car, title: "Detailing Auto", text: "Transform fiecare mașină într-o experiență premium." },
  { icon: Gamepad2, title: "Jocuri Video", text: "Strategie, reflexe și prietenii formate online." },
  { icon: Music, title: "Muzică", text: "Soundtrack-ul fiecărei zile, basul fiecărei călătorii." },
  { icon: HandHeart, title: "Voluntariat", text: "Cred în puterea comunității și a faptelor mici." },
  { icon: Cpu, title: "Tehnologie", text: "Curios mereu de viitor, AI, gadgets și design digital." },
];

export function Passions() {
  return (
    <section id="pasiuni" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Pasiuni & interese" title="Lucrurile care mă mișcă" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="group relative glass rounded-2xl p-6 h-full overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl metallic grid place-items-center mb-4 group-hover:glow-sm transition-shadow">
                    <it.icon size={22} className="text-primary" />
                  </div>
                  <div className="font-display text-lg font-semibold">{it.title}</div>
                  <div className="text-sm text-muted-foreground mt-1.5">{it.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
