import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";

const phrases = [
  "detailing auto premium.",
  "dezvoltare personală.",
  "tehnologie & creativitate.",
  "experiențe cinematice.",
];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % phrases.length);
        }
      }
    }, del ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient-blue">
      {text}
      <span className="inline-block w-[3px] h-[1em] align-middle bg-primary ml-1 animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Mașină premium într-un studio de detailing" className="w-full h-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            <Sparkles size={14} className="text-primary" />
            Personal · Detailing · Blog
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.02]">
            Salut, eu sunt <span className="text-gradient">Adam Daniel</span>.
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl">
            Pasionat de mașini, <Typed />
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#despre" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all glow hover:scale-[1.02]">
              Descoperă povestea mea
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#detailing" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong hover:border-primary/50 transition-colors font-medium">
              Detailing Auto
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border hover:bg-white/5 transition-colors font-medium">
              Contactează-mă
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            {[
              { v: "120+", l: "Mașini detailing" },
              { v: "98%", l: "Clienți mulțumiți" },
              { v: "500h", l: "Pasiune & muncă" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-display font-bold text-gradient-blue">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative glass-strong rounded-3xl p-2 glow">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-primary/10 to-transparent grid place-items-center">
                <div className="text-center px-6">
                  <div className="text-7xl font-display font-bold text-gradient">A.D</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">est. 2007</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#despre" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs">
        <span className="uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={18} className="animate-bounce text-primary" />
      </a>
    </section>
  );
}
