import { useState } from "react";
import { Instagram, Facebook, MapPin, Mail, Phone, Send } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Contact & programări"
          title="Hai să vorbim"
          subtitle="Pentru o programare detailing sau o colaborare, scrie-mi în formular sau pe rețelele de mai jos."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <Reveal className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8 h-full flex flex-col gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Locație</div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-0.5" size={18} />
                  <div>
                    <div className="font-medium">Comuna Sipoteni</div>
                    <div className="text-sm text-muted-foreground">Programări la cerere · zona Călărași</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <a href="mailto:contact@danikspage.md" className="hover:text-primary transition-colors text-sm">contact@danikspage.md</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <a href="tel:+40000000000" className="hover:text-primary transition-colors text-sm">+40 000 000 000</a>
              </div>

              <div className="mt-auto">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Social</div>
                <div className="flex gap-3">
                  <a href="#" className="h-11 w-11 rounded-xl glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="h-11 w-11 rounded-xl glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-strong rounded-3xl p-8 grid gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nume" name="nume" placeholder="Adam Daniel" />
                <Field label="Telefon" name="telefon" placeholder="07xx xxx xxx" />
              </div>
              <Field label="Email" name="email" type="email" placeholder="adresa@email.com" />
              <Field label="Dată preferată" name="data" type="date" />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Mesaj</label>
                <textarea
                  required rows={4}
                  placeholder="Descrie pe scurt ce ai nevoie — interior, extracție, programare..."
                  className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all glow-sm hover:glow"
              >
                {sent ? "Mesaj trimis ✓" : (
                  <>
                    Trimite mesajul
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={type !== "date"}
        className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </div>
  );
}
