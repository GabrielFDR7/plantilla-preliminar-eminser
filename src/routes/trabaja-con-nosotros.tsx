import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, PendingAction, lorem } from "@/components/ContentPage";

export const Route = createFileRoute("/trabaja-con-nosotros")({
  component: CareersPage,
  head: () => ({ meta: [{ title: "Trabaja con nosotros | Eminser" }] }),
});

function CareersPage() {
  return <ContentPage title="Trabaja con nosotros" sections={[
    { id: "vacantes", title: "Vacantes actuales", content: <div className="mt-8 space-y-4">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Vacantes de ejemplo</p>
      {[1, 2, 3].map((item) => <details key={item} className="rounded-xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">Lorem ipsum · Vacante {item}</summary><p className="mt-4 text-muted-foreground leading-relaxed">{lorem}</p><a href="#formulario-oasis" className="inline-block mt-4 text-sm font-semibold text-primary underline underline-offset-4">Ver formulario de postulación</a></details>)}
      <div id="formulario-oasis" className="scroll-mt-8 pt-6"><h3 className="text-xl font-semibold">Formulario Oasis</h3><p className="mt-3 text-muted-foreground leading-relaxed">{lorem}</p><PendingAction>Postularme en Oasis</PendingAction></div>
    </div> },
    { id: "preguntas-frecuentes", title: "Preguntas frecuentes", content: <div className="mt-8 space-y-4">
      {[1, 2, 3].map((item) => <details key={item} className="rounded-xl border border-border p-5"><summary className="cursor-pointer font-medium">Lorem ipsum dolor sit amet? · {item}</summary><p className="mt-4 text-muted-foreground leading-relaxed">{lorem}</p></details>)}
      <div className="pt-6"><h3 className="text-xl font-semibold">Asistente de WhatsApp</h3><p className="mt-3 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><PendingAction>Consultar por WhatsApp</PendingAction></div>
    </div> },
  ]} />;
}
