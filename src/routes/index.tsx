import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Passions } from "@/components/Passions";
import { Detailing } from "@/components/Detailing";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Blog } from "@/components/Blog";
import { Volunteering } from "@/components/Volunteering";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Danik's Page — Adam Daniel · Detailing Auto & Blog Personal" },
      { name: "description", content: "Pagina personală a lui Adam Daniel — detailing auto premium, blog, portofoliu și voluntariat. Curățare chimică interior, extracție și transformări reale." },
      { property: "og:title", content: "Danik's Page — Adam Daniel" },
      { property: "og:description", content: "Brand personal premium: detailing auto, blog și pasiuni. Experiență cinematică, dark, modernă." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Passions />
        <Detailing />
        <BeforeAfter />
        <Blog />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
