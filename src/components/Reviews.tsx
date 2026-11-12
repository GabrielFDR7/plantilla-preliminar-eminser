import { Star } from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";

// Contenido ficticio para revisar el diseño; reemplazar antes de publicar.
const reviews = [
  { name: "Laura Martínez", company: "Empresa Horizonte", rating: 5, description: "El equipo ha sido muy atento y organizado. Nuestros espacios se mantienen impecables y la comunicación ha sido excelente desde el primer día." },
  { name: "Carlos Ramírez", company: "Grupo Andino", rating: 5, description: "Encontramos un aliado para el cuidado de nuestras instalaciones. Destacamos la puntualidad del personal y la atención a los detalles en cada servicio." },
  { name: "Ana Torres", company: "Oficinas Central", rating: 4, description: "La coordinación del servicio ha sido sencilla y cercana. El equipo responde a nuestras necesidades y se adapta bien a la operación de nuestras oficinas." },
  { name: "Jorge Gómez", company: "Industrias Aurora", rating: 5, description: "Valoramos el compromiso de las personas que nos acompañan a diario. Su trabajo nos permite concentrarnos en nuestra operación con mayor tranquilidad." },
  { name: "Diana López", company: "Centro Empresarial Norte", rating: 5, description: "La presentación de nuestras zonas comunes ha mejorado mucho. Recibimos un servicio constante, con buena disposición para atender cada solicitud." },
  { name: "Andrés Pérez", company: "Soluciones Prisma", rating: 4, description: "Un equipo amable y dispuesto a escuchar. Nos han acompañado en la organización de nuestros espacios con un servicio que se ajusta a nuestros horarios." },
  { name: "Mariana Castro", company: "Corporación Albor", rating: 5, description: "Nos gusta contar con personas que cuidan los espacios con dedicación. La atención es cercana y el seguimiento del servicio nos da confianza." },
  { name: "Felipe Ruiz", company: "Comercial Nova", rating: 5, description: "El servicio ha sido una buena experiencia para nuestro equipo. Destacamos el orden, el cumplimiento y la disposición para resolver nuestras inquietudes." },
];

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 sm:py-28 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Reseñas</p>
          <h2 id="reviews-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>Experiencias que nos inspiran</h2>
          <p className="mt-4 text-muted-foreground">Reseñas ficticias para visualizar esta sección.</p>
        </div>
        <Carousel opts={{ align: "start", loop: true, slidesToScroll: 1 }} aria-label="Ocho reseñas de ejemplo" className="w-full">
          <CarouselContent className="-ml-6">
            {reviews.map((review, index) => (
              <CarouselItem key={review.name} aria-label={`Reseña ${index + 1} de ${reviews.length}`} className="pl-6 md:basis-1/2 lg:basis-1/3 flex">
                <article className="w-full rounded-2xl border border-border/60 bg-card p-7 sm:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
                  <h3 className="text-lg font-semibold text-foreground">{review.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{review.company}</p>
                  <div role="img" aria-label={`${review.rating} de 5 estrellas`} className="mt-5 flex gap-1">
                    {Array.from({ length: 5 }, (_, star) => <Star key={star} aria-hidden="true" className={`size-4 ${star < review.rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground/30"}`} />)}
                  </div>
                  <hr className="my-6 border-border" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{review.description}</p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious aria-label="Reseña anterior" className="static size-11 translate-y-0" />
            <span className="text-xs text-muted-foreground">8 reseñas de ejemplo</span>
            <CarouselNext aria-label="Reseña siguiente" className="static size-11 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
