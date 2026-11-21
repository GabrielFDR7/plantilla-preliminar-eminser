import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import teamImage from "@/assets/social-impact.jpg";
import cleaningImage from "@/assets/hero-cleaning.jpg";

// Años, hitos e imágenes de referencia pendientes de validación con Eminser.
const milestones = [
  { year: "1997", title: "El inicio de una vocación de servicio", description: "Una historia que comienza con el propósito de cuidar los espacios y construir relaciones cercanas con las personas. Este texto es una propuesta para el primer hito.", image: teamImage },
  { year: "2005", title: "Nuevos espacios, nuevos retos", description: "Una etapa para contar cómo evolucionaron los servicios y las necesidades de nuestros clientes. Aquí compartiremos los momentos que marcaron este camino.", image: cleaningImage },
  { year: "2012", title: "Un equipo que crece unido", description: "Las personas son protagonistas de nuestra historia. Este espacio reunirá los aprendizajes y las experiencias que han fortalecido al equipo de Eminser.", image: teamImage },
  { year: "2018", title: "Una mirada integral al servicio", description: "Aquí contaremos cómo se han conectado nuestras soluciones para acompañar a las organizaciones en el cuidado de sus instalaciones.", image: cleaningImage },
  { year: "2022", title: "El propósito nos conecta", description: "Un espacio para destacar iniciativas de bienestar, inclusión y cuidado del entorno. Los proyectos y sus fechas se incorporarán con la información definitiva.", image: teamImage },
  { year: "2026", title: "Seguimos construyendo el futuro", description: "El siguiente capítulo se escribe con las personas y las organizaciones que nos acompañan. Aquí presentaremos los retos y proyectos de esta nueva etapa.", image: cleaningImage },
];

export function CompanyHistory() {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: false });
  const [selected, setSelected] = useState(0);
  const yearRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const syncSelection = useCallback(() => {
    if (api) setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    syncSelection();
    api.on("select", syncSelection);
    api.on("reInit", syncSelection);
    return () => { api.off("select", syncSelection); api.off("reInit", syncSelection); };
  }, [api, syncSelection]);

  useEffect(() => {
    const button = yearRefs.current[selected];
    if (button?.parentElement) {
      button.parentElement.scrollTo({ left: button.offsetLeft - button.parentElement.clientWidth / 2 + button.clientWidth / 2, behavior: "smooth" });
    }
  }, [selected]);

  return (
    <section id="historia" aria-labelledby="historia-title" className="bg-muted/40 py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Nuestra trayectoria</p>
        <h2 id="historia-title" className="text-3xl sm:text-4xl font-bold tracking-tight">Una historia que seguimos construyendo</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Recorre los años y descubre los momentos de nuestro camino.</p>
        <p className="mt-3 text-xs text-muted-foreground">Cronología de ejemplo: años, hitos e imágenes pendientes de validación.</p>

        <div role="group" aria-label="Seleccionar año de la historia" className="relative mt-12 flex items-center gap-8 sm:gap-12 overflow-x-auto pb-6 border-b border-border">
          {milestones.map((milestone, index) => <button key={milestone.year} ref={(node) => { yearRefs.current[index] = node; }} type="button" aria-pressed={selected === index} aria-controls={`historia-${milestone.year}`} onClick={() => api?.scrollTo(index)} onKeyDown={(event) => {
            let next = index;
            if (event.key === "ArrowRight") next = Math.min(index + 1, milestones.length - 1);
            else if (event.key === "ArrowLeft") next = Math.max(index - 1, 0);
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = milestones.length - 1;
            else return;
            event.preventDefault(); api?.scrollTo(next); yearRefs.current[next]?.focus();
          }} className={`shrink-0 min-w-20 sm:min-w-28 h-24 sm:h-32 font-bold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg ${selected === index ? "text-5xl sm:text-7xl text-foreground" : "text-2xl sm:text-4xl text-muted-foreground hover:text-foreground"}`}>{milestone.year}</button>)}
        </div>

        <div ref={viewportRef} className="overflow-hidden mt-10" role="region" aria-roledescription="carrusel" aria-label="Hitos de nuestra historia">
          <div className="flex -ml-6 items-stretch touch-pan-y">
            {milestones.map((milestone, index) => <div key={milestone.year} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-6 pt-4 pb-2" role="group" aria-label={`${index + 1} de ${milestones.length}: ${milestone.year}`}>
              <article id={`historia-${milestone.year}`} className={`h-full overflow-hidden rounded-3xl bg-card border transition-[transform,border-color] duration-300 motion-reduce:transition-none ${selected === index ? "-translate-y-3 border-primary" : "border-border/50"}`}>
                <div className="relative h-60 sm:h-64"><img src={milestone.image} alt="Imagen de referencia para la historia de Eminser" width={1920} height={1088} loading="lazy" className="h-full w-full object-cover" /><span className="absolute top-5 left-5 rounded-full bg-card px-4 py-2 text-sm font-bold">{milestone.year}</span></div>
                <div className="p-7 sm:p-8"><h3 className="text-2xl font-semibold tracking-tight">{milestone.title}</h3><p className="mt-5 text-muted-foreground leading-relaxed">{milestone.description}</p></div>
              </article>
            </div>)}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4">
          <p aria-live="polite" aria-atomic="true" className="text-sm text-muted-foreground">{milestones[selected].year} · {selected + 1} de {milestones.length}</p>
          <div className="flex gap-3">
            <button type="button" aria-label="Hito anterior" disabled={selected === 0} onClick={() => api?.scrollPrev()} className="rounded-full border border-border bg-card p-3 disabled:opacity-30 hover:border-primary"><ArrowLeft className="size-5" /></button>
            <button type="button" aria-label="Hito siguiente" disabled={selected === milestones.length - 1} onClick={() => api?.scrollNext()} className="rounded-full border border-border bg-card p-3 disabled:opacity-30 hover:border-primary"><ArrowRight className="size-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
