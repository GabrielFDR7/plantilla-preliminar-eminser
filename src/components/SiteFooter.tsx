import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card py-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <Link to="/" aria-label="Eminser — Inicio" className="block w-52 max-w-full self-start">
            <img src="/logo-eminser-transparent.png" alt="Eminser — Empresa de Servicios Integrales" width={1869} height={842} className="block w-full h-auto" />
          </Link>
          <div>
            <h2 className="font-semibold text-foreground">Explora</h2>
            <nav aria-label="Navegación del pie de página" className="mt-5 flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <Link to="/quienes-somos" className="hover:text-foreground">Quiénes somos</Link>
              <Link to="/servicios" className="hover:text-foreground">Servicios</Link>
              <Link to="/trabaja-con-nosotros" className="hover:text-foreground">Trabaja con nosotros</Link>
              <Link to="/blog" className="hover:text-foreground">Blog / noticias</Link>
              <Link to="/empleados" className="hover:text-foreground">Empleados actuales</Link>
            </nav>
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Redes sociales</h2>
            <div className="mt-5 flex flex-col items-start gap-4 text-sm text-muted-foreground">
              <div><button type="button" disabled className="flex items-center gap-2 cursor-not-allowed"><Instagram aria-hidden="true" className="size-4" />Instagram</button><p className="mt-1 text-xs">@eminser.ejemplo · Provisional</p></div>
              <a href="https://www.linkedin.com/company/eminser/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin aria-hidden="true" className="size-4" />LinkedIn<span className="sr-only"> (abre en otra pestaña)</span></a>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Canales de atención</h2>
            <p className="mt-5 text-sm text-muted-foreground">WhatsApp comercial</p>
            <a href="https://wa.me/573168322534" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"><MessageCircle aria-hidden="true" className="size-5" />+57 316 832 2534<span className="sr-only"> (abre WhatsApp en otra pestaña)</span></a>
          </div>
        </div>
        <p className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Eminser · Colombia</p>
      </div>
    </footer>
  );
}
