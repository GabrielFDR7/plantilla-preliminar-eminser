import { SiteFooter } from "@/components/SiteFooter";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNavigation } from "@/components/SiteNavigation";

export const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export type ContentSection = { id: string; title: string; content?: ReactNode };

export function PendingAction({ children }: { children: ReactNode }) {
  return <div className="mt-6"><button type="button" disabled className="rounded-xl bg-primary/40 text-foreground px-6 py-3 text-sm font-semibold cursor-not-allowed">{children}</button><p className="mt-2 text-xs text-muted-foreground">Enlace próximamente disponible.</p></div>;
}

export function ContentPage({ title, sections }: { title: string; sections: ContentSection[] }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavigation />
      <main>
        <header className="bg-[#0a2428] text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <Link to="/" className="text-sm text-white/70 hover:text-white">Inicio</Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-primary">Eminser</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-5 py-12 sm:py-20 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside>
            <nav aria-label={`Secciones de ${title}`} className="lg:sticky lg:top-8 rounded-2xl border border-border bg-card p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">En esta página</p>
              <ul className="space-y-3">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-sm hover:text-primary transition-colors">{section.title}</a></li>)}</ul>
            </nav>
          </aside>
          <div className="min-w-0 space-y-12">
            {sections.map((section, i) => <section key={section.id} id={section.id} className="scroll-mt-8 border-b border-border pb-12 last:border-0">
              <p className="mb-3 text-xs font-semibold tracking-widest text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{section.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{lorem}</p>
              {section.content}
            </section>)}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
