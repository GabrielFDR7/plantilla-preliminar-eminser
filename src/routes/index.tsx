import { BlogPreview } from "@/components/BlogPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { Reviews } from "@/components/Reviews";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake, Users, Target, ShieldCheck, ArrowRight,
} from "lucide-react";
import { ServicesBuilding } from "@/components/ServicesBuilding";
import heroBg from "@/assets/hero-cleaning.jpg";
import socialImg from "@/assets/social-impact.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Servicios integrales de aseo — Espacios que inspiran" },
      { name: "description", content: "Redefinimos la experiencia de uso de espacios físicos con servicios integrales de aseo que inspiran productividad, bienestar y compromiso social." },
      { property: "og:title", content: "Servicios integrales de aseo — Espacios que inspiran" },
      { property: "og:description", content: "Redefinimos la experiencia de uso de espacios físicos con servicios integrales de aseo que inspiran productividad, bienestar y compromiso social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Statistics />
      <ValueProposition />
      <BlogPreview />
      <Reviews />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col" style={{ background: "#0a2428" }}>
      <img
        src={heroBg}
        alt="Profesional de aseo limpiando un espacio corporativo moderno y luminoso"
        width={1920}
        height={1088}
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(10,36,40,0.92), rgba(10,36,40,0.55), rgba(10,36,40,0.15))" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(10,36,40,0.3), transparent, rgba(10,36,40,0.4))" }} />

      <SiteNavigation overlay />

      {/* Hero content */}
      <div className="relative z-10 w-full flex flex-1 items-center px-5 py-12 sm:px-8 sm:py-20 lg:px-[15vw]">
        <div className="w-full max-w-4xl">
          <ScrollReveal delay={80}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-left" style={{ lineHeight: "1.08" }}>
              Cuidamos tus espacios. Impulsamos tu bienestar.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-3xl text-lg text-white/90 text-left" style={{ textWrap: "pretty", lineHeight: "1.6" }}>
              Integramos aseo, cafetería y mantenimiento para que tu organización funcione mejor, con un equipo comprometido y un servicio que genera oportunidades y transforma vidas.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-7 py-3.5 text-sm font-bold hover:bg-primary/90 transition-all duration-200 active:scale-[0.97] shadow-lg shadow-primary/25"
              >
                Solicita una cotización
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.97]"
              >
                Conócenos
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Servicios ─── */
function Services() {
  return (
    <section id="servicios" className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Servicios</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>
              Cuidamos cada espacio de tu edificio
            </h2>
            <p className="mt-4 text-muted-foreground" style={{ textWrap: "pretty" }}>
              De la cubierta al sótano: recorre el edificio y descubre el servicio que prestamos en cada una de sus zonas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ServicesBuilding />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Estadísticas: cifras provisionales ─── */
function Statistics() {
  const stats = [
    { value: "350+", label: "Clientes", description: "Organizaciones que confían en nosotros" },
    { value: "2.500+", label: "Empleados", description: "Personas que hacen la diferencia cada día" },
    { value: "28", label: "Ciudades", description: "Ciudades donde operamos en Colombia" },
  ];

  return (
    <section id="estadisticas" aria-labelledby="estadisticas-titulo" className="bg-[#0a2428] py-20 sm:py-28 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Eminser en cifras</p>
          <h2 id="estadisticas-titulo" className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ lineHeight: "1.15" }}>
            Un equipo que crece. Un alcance que conecta.
          </h2>
        </div>
        <dl className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-5 text-center">
              <dt className="order-2 mt-4 text-lg font-semibold">{stat.label}</dt>
              <dd className="order-1 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight tabular-nums text-primary">{stat.value}</dd>
              <dd className="order-3 mt-2 max-w-56 text-sm leading-relaxed text-white/70">{stat.description}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-12 text-center text-xs text-white/50">Cifras de ejemplo para esta propuesta de diseño.</p>
      </div>
    </section>
  );
}

/* ─── Propuesta de valor ─── */
function ValueProposition() {
  const pillars = [
    {
      icon: Target,
      image: heroBg,
      imageAlt: "Servicio de aseo en un espacio corporativo",
      imagePosition: "center",
      title: "Soluciones a tu medida",
      description: "Integramos aseo, cafetería y mantenimiento según las necesidades de tu organización, para que cada espacio acompañe el ritmo de tu operación.",
    },
    {
      icon: ShieldCheck,
      image: heroBg,
      imageAlt: "Profesional de aseo cuidando los detalles de las instalaciones",
      imagePosition: "right",
      title: "Confianza en cada detalle",
      description: "Cuidamos tus instalaciones con un equipo preparado, atención cercana y seguimiento al servicio, para darte tranquilidad en el día a día.",
    },
    {
      icon: HeartHandshake,
      image: socialImg,
      imageAlt: "Equipo de trabajo con uniformes de la empresa",
      imagePosition: "center",
      title: "Personas con propósito",
      description: "Ponemos a las personas en el centro del servicio, promoviendo el trabajo digno y el bienestar de quienes cuidan y utilizan tus espacios.",
    },
  ];

  return (
    <section id="nosotros" className="py-28 border-y border-border/40">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Propuesta de valor</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>
              Tres pilares para cuidar lo que importa
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid auto-rows-fr lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={(index + 1) * 80}>
              <div className="overflow-hidden rounded-2xl bg-card border border-border/60 h-full shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
                <img src={pillar.image} alt={pillar.imageAlt} width={1920} height={1088} loading="lazy" className="h-60 sm:h-72 w-full object-cover" style={{ objectPosition: pillar.imagePosition }} />
                <div className="p-8 xl:p-10">
                <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-5 shadow-lg shadow-primary/15">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
                  {pillar.description}
                </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA final ─── */
function FinalCTA() {
  return (
    <section id="trabaja-con-nosotros" className="relative overflow-hidden py-28" style={{ background: "#0a2428" }}>
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, #0a2428, transparent, #0a2428)" }} />

      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
        <ScrollReveal>
          <Users className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ lineHeight: "1.15" }}>
            Tu talento tiene un lugar en Eminser
          </h2>
          <p className="mt-4 text-white/80 max-w-md mx-auto" style={{ textWrap: "pretty" }}>
            Súmate a un equipo que cuida los espacios y valora a las personas. Conoce nuestras vacantes y encuentra una oportunidad para aportar tu talento y crecer con nosotros.
          </p>
          <Link
            to="/trabaja-con-nosotros"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.97] shadow-lg shadow-primary/25"
          >
            Trabaja con nosotros
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Scroll reveal wrapper ─── */
function ScrollReveal({ children }: { children: React.ReactNode; delay?: number }) {
  return <>{children}</>;
}
