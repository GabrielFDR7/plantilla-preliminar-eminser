import { CorporateResponsibility } from "@/components/CorporateResponsibility";
import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye } from "lucide-react";
import { SiteNavigation } from "@/components/SiteNavigation";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyHistory } from "@/components/CompanyHistory";
import teamImage from "@/assets/social-impact.jpg";

export const Route = createFileRoute("/quienes-somos")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "Quiénes somos | Eminser" }] }),
});

const purpose = [
  { id: "mision", title: "Misión", subtitle: "Lo que nos mueve cada día", icon: Target, description: "Redefinir la experiencia de uso de espacios físicos al ofrecer servicios integrales de aseo que inspiren a la productividad, el bienestar y al compromiso social, desde las necesidades de nuestros clientes." },
  { id: "vision", title: "Visión", subtitle: "El futuro que queremos construir", icon: Eye, description: "En 2033 seremos una empresa líder en la redefinición de espacios que inspiren a la sociedad colombiana y a otras en el mundo." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavigation />
      <main>
        <header className="bg-background overflow-hidden border-b border-border/40">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 lg:pt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="pb-4 lg:pb-16 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Quiénes somos · Eminser</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" style={{ lineHeight: "1.12" }}>
                Cuidamos espacios.<br />
                <span className="text-primary font-serif font-normal italic">Conectamos personas.</span><br />
                Construimos bienestar.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">Somos un equipo con vocación de servicio. Integramos el cuidado de tus instalaciones con el compromiso de generar bienestar para quienes las habitan y las hacen posibles.</p>
            </div>
            <div className="w-full max-w-xl mx-auto self-end overflow-hidden rounded-t-full bg-primary/10">
              <img src={teamImage} alt="Equipo de servicios integrales compartiendo en su lugar de trabajo" width={1280} height={960} className="w-full aspect-[1/1] sm:aspect-[6/5] lg:aspect-[1/1] object-cover object-center" fetchPriority="high" />
            </div>
          </div>
        </header>
        <section aria-labelledby="about-title" className="py-16 sm:py-24">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Misión y Visión</p>
              <h2 id="about-title" className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ lineHeight: "1.12" }}>Un propósito que nos une.<br />Un futuro que nos inspira.</h2>
              <p className="mt-6 text-lg text-muted-foreground">Cuidamos los espacios pensando en las personas que los hacen posibles.</p>
            </div>
            <div className="grid md:grid-cols-2 auto-rows-fr gap-6 sm:gap-8">
              {purpose.map((item) => <article key={item.id} id={item.id} className="rounded-3xl border border-border/60 bg-card p-8 sm:p-12 lg:p-16 flex flex-col items-start">
                <span className="grid place-items-center size-16 rounded-2xl bg-primary text-primary-foreground mb-8"><item.icon aria-hidden="true" className="size-8" /></span>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.subtitle}</p>
                <h3 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground" style={{ textWrap: "pretty" }}>{item.description}</p>
              </article>)}
            </div>
          </div>
        </section>
        <CompanyHistory />
        <CorporateResponsibility />
      </main>
      <SiteFooter />
    </div>
  );
}
