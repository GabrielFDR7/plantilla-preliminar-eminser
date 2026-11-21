import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import cleaningImage from "@/assets/hero-cleaning.jpg";
import teamImage from "@/assets/social-impact.jpg";

const posts = [
  {
    category: "Cuidado de espacios",
    title: "Espacios limpios para trabajar mejor",
    description: "Conoce ideas y buenas prácticas para cuidar tus instalaciones y crear ambientes más agradables para tu equipo.",
    image: cleaningImage,
    position: "center",
    alt: "Profesional de aseo trabajando en un espacio corporativo",
  },
  {
    category: "Nuestro equipo",
    title: "Las personas detrás de cada servicio",
    description: "Un espacio para compartir historias, aprendizajes y el valor de las personas que hacen posible el cuidado de tus espacios.",
    image: teamImage,
    position: "center",
    alt: "Equipo de trabajo reunido con uniformes de la empresa",
  },
  {
    category: "Consejos prácticos",
    title: "El cuidado está en los detalles",
    description: "Explora recomendaciones sobre aseo y mantenimiento para acompañar el día a día de tu organización.",
    image: cleaningImage,
    position: "right",
    alt: "Detalle del servicio de limpieza en instalaciones corporativas",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" aria-labelledby="blog-preview-title" className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Blog / noticias</p>
            <h2 id="blog-preview-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>Ideas, historias y novedades</h2>
            <p className="mt-4 text-muted-foreground">Una mirada al cuidado de los espacios y las personas.</p>
          </div>
          <Link to="/blog" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">Ver todo el blog <ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col overflow-hidden rounded-3xl bg-card border border-border/40">
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img src={post.image} alt={post.alt} loading="lazy" width={1920} height={1088} className="h-full w-full object-cover" style={{ objectPosition: post.position }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/15" />
                <p className="absolute bottom-7 left-8 right-8 text-xl font-semibold text-white">{post.category}</p>
              </div>
              <div className="flex flex-1 flex-col items-start p-8 xl:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">{post.title}</h3>
                <p className="mt-5 mb-8 leading-relaxed text-muted-foreground">{post.description}</p>
                <Link to="/blog" className="mt-auto inline-flex items-center gap-3 rounded-xl bg-muted px-5 py-3 text-sm font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={`Ir al blog: ${post.title}`}>Explorar el blog <ArrowRight aria-hidden="true" className="size-4" /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Contenido de ejemplo para esta propuesta de diseño.</p>
      </div>
    </section>
  );
}
