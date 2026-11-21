import { Award, ShieldCheck, Leaf, Lightbulb } from "lucide-react";

const certifications = [
  { title: "Calidad", icon: Award, description: "Un enfoque orientado a la consistencia del servicio y la satisfacción de nuestros clientes." },
  { title: "HSIQ", icon: ShieldCheck, description: "El cuidado de las personas y las buenas prácticas como parte de la operación diaria." },
  { title: "Ambiental", icon: Leaf, description: "Una mirada responsable al uso de los recursos y al cuidado de nuestro entorno." },
  { title: "Innovación CCB", icon: Lightbulb, description: "Nuevas ideas para evolucionar nuestros servicios y responder a los retos de cada organización." },
];
const processes = [
  { title: "Escuchamos y planificamos", description: "Identificamos las necesidades de cada espacio y definimos cómo acompañar la operación." },
  { title: "Preparamos al equipo", description: "Organizamos los recursos y orientamos a las personas para prestar el servicio." },
  { title: "Hacemos seguimiento", description: "Revisamos la ejecución y recogemos observaciones para reconocer oportunidades de mejora." },
  { title: "Mejoramos continuamente", description: "Convertimos los aprendizajes en acciones para fortalecer la calidad del servicio." },
];

export function CorporateResponsibility() {
  return (
    <section id="responsabilidad-corporativa" aria-labelledby="responsabilidad-title" className="py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Nuestro compromiso</p>
          <h2 id="responsabilidad-title" className="text-3xl sm:text-4xl font-bold tracking-tight">Responsabilidad Corporativa</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">El cuidado de las personas, los espacios y el entorno guía nuestra forma de trabajar.</p>
        </div>

        <section aria-labelledby="certificaciones-title">
          <div className="mb-8"><p className="text-xs font-semibold tracking-widest text-primary mb-3">01</p><h3 id="certificaciones-title" className="text-2xl sm:text-3xl font-semibold tracking-tight">Certificaciones</h3><p className="mt-3 text-muted-foreground">Áreas de compromiso que acompañan nuestra gestión.</p></div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {certifications.map((item) => <article key={item.title} className="rounded-2xl border border-border/60 bg-card p-7 sm:p-8">
              <span className="grid place-items-center size-14 rounded-2xl bg-primary/10 text-primary mb-6"><item.icon aria-hidden="true" className="size-7" /></span>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">Información y soporte pendientes de validación.</p>
            </article>)}
          </div>
        </section>

        <section aria-labelledby="procesos-title" className="mt-16 sm:mt-20 rounded-3xl bg-[#0a2428] text-white p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl"><p className="text-xs font-semibold tracking-widest text-primary mb-3">02</p><h3 id="procesos-title" className="text-2xl sm:text-3xl font-semibold tracking-tight">Procesos de Calidad</h3><p className="mt-4 leading-relaxed text-white/70">Un ciclo de atención, seguimiento y aprendizaje para cuidar cada detalle del servicio.</p></div>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {processes.map((process, index) => <li key={process.title} className="border-t border-white/20 pt-6"><span className="text-3xl font-bold text-primary">{String(index + 1).padStart(2, "0")}</span><h4 className="mt-5 text-lg font-semibold">{process.title}</h4><p className="mt-3 text-sm leading-relaxed text-white/70">{process.description}</p></li>)}
          </ol>
          <p className="mt-10 text-xs text-white/50">Contenido provisional para revisión del equipo de Eminser.</p>
        </section>
      </div>
    </section>
  );
}
