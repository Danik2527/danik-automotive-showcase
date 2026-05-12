import { useRef, useState } from "react";
import { Reveal, SectionTitle } from "./Reveal";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const projects = [
  { model: "Scaun textil — VW Golf", desc: "Pată profundă eliminată cu extracție și detergent enzimatic.", before: before1, after: after1 },
  { model: "Mochetă & podea — BMW Seria 3", desc: "Curățare profundă cu ridicare completă a fibrelor.", before: before2, after: after2 },
  { model: "Volan & bord — Audi A4", desc: "Restaurare suprafețe, recondiționare piele și plastice.", before: before3, after: after3 },
];

function Slider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => move(e.touches[0].clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt={`${alt} — după`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${alt} — înainte`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
      </div>

      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest glass-strong">Înainte</div>
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest bg-primary text-primary-foreground">După</div>

      <div className="absolute top-0 bottom-0 w-px bg-primary glow-sm" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold shadow-lg ring-4 ring-background group-hover:scale-110 transition-transform">
          ⇋
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="galerie" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Galerie"
          title="Înainte & După — transformări reale"
          subtitle="Trage de glisor pentru a descoperi diferența. Curățare chimică profesională, fără compromisuri."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.model} delay={i * 100}>
              <div className="glass rounded-3xl p-3 hover:glow-sm transition-shadow">
                <Slider before={p.before} after={p.after} alt={p.model} />
                <div className="px-4 py-4">
                  <div className="font-display text-lg font-semibold">{p.model}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
