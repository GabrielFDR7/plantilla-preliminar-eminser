import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, lorem } from "@/components/ContentPage";

export const Route = createFileRoute("/blog")({
  component: () => <ContentPage title="Blog / noticias" sections={[
    { id: "publicaciones", title: "Últimas publicaciones", content: <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {[1, 2, 3, 4].map((item) => <article key={item} className="rounded-2xl border border-border bg-card p-6"><p className="text-xs uppercase tracking-widest text-primary">{item % 2 ? "Blog" : "Noticias"} · Ejemplo</p><h3 className="mt-4 text-xl font-semibold">Lorem ipsum dolor sit amet</h3><p className="mt-4 text-sm text-muted-foreground leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><details className="mt-5"><summary className="cursor-pointer text-sm font-semibold text-primary">Leer contenido</summary><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{lorem}</p></details></article>)}
    </div> },
  ]} />,
  head: () => ({ meta: [{ title: "Blog y noticias | Eminser" }] }),
});
