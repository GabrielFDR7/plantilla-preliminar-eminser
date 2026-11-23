import { createFileRoute } from "@tanstack/react-router";
import { SiteNavigation } from "@/components/SiteNavigation";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceCategorySection } from "@/components/ServiceCategorySection";
import { serviceCategories } from "@/data/services";

export const Route = createFileRoute("/servicios")({
  component: ServicesPage,
  head: () => ({ meta: [{ title: "Servicios | Eminser" }, { name: "description", content: "Explora los servicios de Eminser: Facility Services, Hard Services, Proyectos Personalizados y Experiencia 360°. Encuentra una solución para tu organización." }] }),
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavigation />
      <main>
        <header className="bg-muted/40 border-b border-border/40 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Servicios Eminser</p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Una solución para cada espacio</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground">Integramos servicios, personas y proyectos para cuidar tus instalaciones y acompañar las necesidades de tu organización.</p>
            <nav aria-label="Categorías de servicios" className="mt-9 flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => <a key={category.id} href={`#${category.id}`} className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">{category.title}</a>)}
            </nav>
          </div>
        </header>
        {serviceCategories.map((category, index) => <ServiceCategorySection key={category.id} category={category} alternate={index % 2 === 1} />)}
        <p className="max-w-[1440px] mx-auto px-5 sm:px-8 pb-10 text-sm text-muted-foreground">Imágenes de referencia y textos preliminares, sujetos a revisión por Eminser.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
