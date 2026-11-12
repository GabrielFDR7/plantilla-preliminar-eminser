import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const pages = [
  { to: "/quienes-somos", label: "Quiénes somos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
  { to: "/blog", label: "Blog / noticias" },
  { to: "/empleados", label: "Empleados actuales" },
] as const;

export function SiteNavigation({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const linkStyle = overlay ? "text-white hover:text-white/70" : "text-foreground hover:text-primary";
  return (
    <nav aria-label="Navegación principal" className={`relative z-20 w-full shrink-0 ${overlay ? "text-white" : "border-b border-border bg-card text-foreground"}`}>
      <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" aria-label="Eminser — Inicio" onClick={() => setOpen(false)} className="block w-36 shrink-0 sm:w-48">
          <img src="/logo-eminser-transparent.png" alt="Eminser — Empresa de Servicios Integrales" width={1869} height={842} className="block h-auto w-full" />
        </Link>
        <div className="hidden xl:flex items-center gap-8 text-sm font-bold">
          {pages.map((page) => <Link key={page.to} to={page.to} className={`${linkStyle} transition-colors`} activeProps={{ "aria-current": "page", className: "font-bold underline underline-offset-8" }}>{page.label}</Link>)}
        </div>
        <Link to="/" hash="contacto" className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${overlay ? "border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm" : "border-border hover:bg-muted"}`}>
          Contáctanos <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-site-menu" onClick={() => setOpen(!open)} className="xl:hidden rounded-lg border border-current/30 p-2">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        {open && <div id="mobile-site-menu" className="basis-full space-y-2 rounded-xl bg-card text-foreground font-bold border border-border p-3 shadow-lg xl:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-muted">Inicio</Link>
          {pages.map((page) => <Link key={page.to} to={page.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-muted" activeProps={{ "aria-current": "page", className: "font-bold bg-muted" }}>{page.label}</Link>)}
          <Link to="/" hash="contacto" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-muted">Contáctanos</Link>
        </div>}
      </div>
    </nav>
  );
}
