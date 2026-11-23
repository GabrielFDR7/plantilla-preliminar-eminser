import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { quotationUrl, type Service, type ServiceCategory } from "@/data/services";

function QuoteLink({ service }: { service: Service }) {
  return <a href={quotationUrl(service)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-3 text-sm font-semibold hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label={`Solicita una cotización de ${service.title} por WhatsApp (abre en otra pestaña)`}>Solicita una cotización</a>;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col h-full">
      <img src={service.image} alt={service.alt} width={1000} height={640} loading="lazy" className="w-full aspect-[16/10] rounded-xl object-cover" />
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
      <p className="mt-3 mb-6 text-base text-muted-foreground leading-relaxed">{service.description}</p>
      <div className="mt-auto flex flex-col items-start gap-3">
        <QuoteLink service={service} />
        <Dialog>
          <DialogTrigger asChild><button type="button" className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-muted transition-colors" aria-label={`Más información sobre ${service.title}`}>Más información</button></DialogTrigger>
          <DialogContent className="w-[calc(100%_-_2rem)] max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl p-6 sm:p-8">
            <DialogHeader className="pr-6 text-left">
              <DialogTitle className="text-2xl sm:text-3xl leading-tight">{service.title}</DialogTitle>
              <DialogDescription className="pt-3 text-base leading-relaxed">{service.description}</DialogDescription>
            </DialogHeader>
            <img src={service.image} alt={service.alt} width={1000} height={640} className="w-full h-48 sm:h-64 rounded-xl object-cover" />
            <p className="text-base leading-relaxed text-muted-foreground">{service.details}</p>
            <div><h4 className="text-lg font-semibold mb-3">¿Cómo te acompañamos?</h4><ul className="list-disc pl-5 space-y-2 text-muted-foreground">{service.scope.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <p className="text-sm text-muted-foreground">El alcance, la frecuencia y los recursos se definen según la evaluación y la cotización de tu servicio.</p>
            <div className="pt-2"><QuoteLink service={service} /></div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function ServiceCategorySection({ category, alternate }: { category: ServiceCategory; alternate: boolean }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  useEffect(() => {
    if (!api) return;
    const update = () => { setSelected(api.selectedScrollSnap()); setSnaps(api.scrollSnapList()); };
    update(); api.on("select", update); api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  return (
    <section id={category.id} aria-labelledby={`${category.id}-title`} className={`scroll-mt-6 py-16 sm:py-20 ${alternate ? "bg-muted/40" : "bg-background"}`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 id={`${category.id}-title`} className="text-3xl sm:text-4xl font-semibold tracking-tight">{category.title}</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{category.description}</p>
        </div>
        <Carousel setApi={setApi} opts={{ align: "start", slidesToScroll: 1 }} aria-label={`Servicios de ${category.title}`}>
          <CarouselContent className="-ml-6">
            {category.services.map((service) => <CarouselItem key={service.id} className="pl-6 basis-[90%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><ServiceCard service={service} /></CarouselItem>)}
          </CarouselContent>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-1" role="group" aria-label={`Posiciones del carrusel de ${category.title}`}>
              {snaps.length > 1 && snaps.map((_, index) => <button key={index} type="button" onClick={() => api?.scrollTo(index)} aria-label={`Ir a la posición ${index + 1}`} aria-pressed={selected === index} className="flex h-10 min-w-8 items-center justify-center rounded-lg focus-visible:ring-2 focus-visible:ring-primary"><span className={`block h-1.5 rounded-full ${selected === index ? "w-7 bg-primary" : "w-1.5 bg-muted-foreground/30"}`} /></button>)}
            </div>
            <div className="flex gap-3">
              <CarouselPrevious aria-label={`Servicios anteriores de ${category.title}`} className="static size-10 translate-y-0" />
              <CarouselNext aria-label={`Más servicios de ${category.title}`} className="static size-10 translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
