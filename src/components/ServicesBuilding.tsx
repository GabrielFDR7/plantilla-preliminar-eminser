import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import {
  ArrowRight, BugOff, Coffee, MousePointerClick, ShieldCheck, Sparkles, Sprout, Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceId = "aseo" | "cafeteria" | "mantenimiento" | "jardineria" | "fumigacion";

type Service = {
  id: ServiceId;
  short: string;
  title: string;
  zone: string;
  icon: LucideIcon;
  paragraphs: string[];
  callout?: string;
};

const SERVICES: Service[] = [
  {
    id: "aseo",
    short: "Aseo",
    title: "Servicio de Aseo",
    zone: "Oficinas y áreas comunes",
    icon: Sparkles,
    paragraphs: [
      "Suministramos personal seleccionado, capacitado en técnicas de aseo, manejo adecuado de residuos sólidos, entre otras, debidamente uniformado, con sus elementos básicos de protección personal que hacen la actividad más segura, con productos, elementos y equipos de última tecnología que garantizan la conservación y mantenimiento de las áreas.",
      "También prestamos asesorías para la recuperación y mantenimiento de las diferentes superficies.",
    ],
  },
  {
    id: "cafeteria",
    short: "Cafetería",
    title: "Servicio de Cafetería",
    zone: "Primer piso",
    icon: Coffee,
    paragraphs: [
      "Para este servicio seleccionamos personal con un alto grado de servicio, capacitado en atención al cliente, etiqueta, protocolo, manejo adecuado de residuos sólidos y manipulación de alimentos.",
      "Utilizamos insumos como el café de impacto social, derivado en su mayoría de criterios sostenibles o negocios verdes que incorporan prácticas con enfoque ambiental, social y comunitario, desarrollados por poblaciones en situación de vulnerabilidad. También utilizamos grecas ecológicas que ayudan al cuidado del medio ambiente.",
    ],
  },
  {
    id: "mantenimiento",
    short: "Mantenimiento",
    title: "Servicio de Mantenimiento",
    zone: "Cubierta e instalaciones",
    icon: Wrench,
    paragraphs: [
      "Contamos con un Departamento Operativo y con aliados especializados en obras civiles de gran impacto, así como asesoría e interventoría en construcción, remodelación, mantenimiento y reparaciones locativas menores especializadas.",
      "También ofrecemos servicios básicos de mantenimientos en electricidad, plomería y reparaciones locativas básicas.",
    ],
  },
  {
    id: "jardineria",
    short: "Jardinería",
    title: "Servicio de Jardinería",
    zone: "Zonas verdes",
    icon: Sprout,
    paragraphs: [
      "Contamos con personal capacitado e idóneo en el mantenimiento básico y recuperación de zonas verdes, plantas y jardines con aplicación de fertilizantes de uso común, así como trasplante y reemplazo de plantas, utilizando maquinaria especializada.",
    ],
  },
  {
    id: "fumigacion",
    short: "Fumigación",
    title: "Servicio de Fumigación, Desinfección Ambiental y Desratización",
    zone: "Sótanos y áreas técnicas",
    icon: BugOff,
    paragraphs: [
      "Contamos con personal capacitado e idóneo en prevención, control de plagas y según la necesidad, usamos métodos como la aspersión o micro nebulización. Para este servicio utilizamos insumos que no generan riesgos para la salud humana. Hacemos control de roedores con colocación de cebos o gel según el caso y suministramos las trampas si el cliente lo requiere.",
    ],
    callout:
      "Para la aplicación de estos servicios contamos con el concepto favorable expedido por la Secretaría de Salud.",
  },
];

type Rect = { x: number; y: number; width: number; height: number };

/** Interactive area of each zone in the SVG (also used as its highlight). */
const ZONE_AREAS: Record<ServiceId, Rect[]> = {
  mantenimiento: [{ x: 168, y: 30, width: 304, height: 96 }],
  aseo: [{ x: 176, y: 126, width: 288, height: 248 }],
  cafeteria: [{ x: 176, y: 374, width: 288, height: 98 }],
  jardineria: [
    { x: 4, y: 334, width: 168, height: 138 },
    { x: 468, y: 334, width: 168, height: 138 },
  ],
  fumigacion: [{ x: 176, y: 476, width: 288, height: 116 }],
};

/** Where each numbered marker sits (on the edge of its zone). */
const MARKERS: Record<ServiceId, { cx: number; cy: number }> = {
  mantenimiento: { cx: 168, cy: 78 },
  aseo: { cx: 464, cy: 160 },
  cafeteria: { cx: 176, cy: 423 },
  jardineria: { cx: 88, cy: 334 },
  fumigacion: { cx: 464, cy: 534 },
};

export function ServicesBuilding() {
  const [active, setActive] = useState<ServiceId>("aseo");
  const [explored, setExplored] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (id: ServiceId) => {
    setActive(id);
    setExplored(true);
  };

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = SERVICES.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    select(SERVICES[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
      {/* Building */}
      <div className="rounded-2xl border border-border/60 bg-background overflow-hidden shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
        <BuildingIllustration active={active} explored={explored} onSelect={select} />
      </div>

      {/* Detail */}
      <div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MousePointerClick className="w-4 h-4 text-primary flex-shrink-0" />
          Pasa el cursor o toca cada zona del edificio.
        </p>

        <div role="tablist" aria-label="Servicios" className="flex flex-wrap gap-2 mb-5">
          {SERVICES.map((s, i) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                type="button"
                role="tab"
                id={`servicio-tab-${s.id}`}
                aria-selected={isActive}
                aria-controls={`servicio-panel-${s.id}`}
                tabIndex={isActive ? 0 : -1}
                onMouseEnter={() => select(s.id)}
                onClick={() => select(s.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border pl-1.5 pr-3.5 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-background text-muted-foreground hover:text-foreground hover:border-primary/40",
                )}
              >
                <span
                  className={cn(
                    "grid place-items-center w-6 h-6 rounded-full text-[11px] font-bold transition-colors duration-200",
                    isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary",
                  )}
                >
                  {i + 1}
                </span>
                {s.short}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-border/60 bg-background p-7 sm:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
          {/* All panels share one grid cell so the card keeps the height of the longest one. */}
          <div className="grid">
            {SERVICES.map((s) => {
              const isActive = active === s.id;
              return (
                <div
                  key={s.id}
                  id={`servicio-panel-${s.id}`}
                  role="tabpanel"
                  aria-labelledby={`servicio-tab-${s.id}`}
                  className={cn(
                    "col-start-1 row-start-1 transition-[opacity,transform,visibility] duration-300 ease-out",
                    isActive ? "opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1.5",
                  )}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{s.zone}</p>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground" style={{ lineHeight: "1.2" }}>
                    {s.title}
                  </h3>

                  {s.paragraphs.map((p) => (
                    <p key={p} className="mt-3 text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
                      {p}
                    </p>
                  ))}

                  {s.callout && (
                    <div className="mt-5 flex items-start gap-3 rounded-xl bg-primary/10 border border-primary/20 p-4">
                      <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium leading-relaxed">{s.callout}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <a
            href="#contacto"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Solicita una cotización
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── SVG illustration ─── */

function BuildingIllustration({
  active,
  explored,
  onSelect,
}: {
  active: ServiceId;
  explored: boolean;
  onSelect: (id: ServiceId) => void;
}) {
  const zone = (id: ServiceId, drawing: ReactNode) => (
    <g key={id} className="cursor-pointer" onMouseEnter={() => onSelect(id)} onClick={() => onSelect(id)}>
      {drawing}
      {ZONE_AREAS[id].map((a, i) => (
        <rect
          key={i}
          {...a}
          rx={12}
          fill="var(--primary)"
          stroke="var(--primary)"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          style={{
            fillOpacity: active === id ? 0.1 : 0,
            strokeOpacity: active === id ? 0.9 : 0,
            transition: "fill-opacity 300ms ease, stroke-opacity 300ms ease",
          }}
        />
      ))}
    </g>
  );

  return (
    <svg
      viewBox="0 0 640 600"
      className="building-illustration block w-full h-auto select-none"
      role="img"
      aria-labelledby="bld-title"
    >
      <title id="bld-title">Edificio ilustrado con las zonas donde prestamos cada servicio</title>
      <defs>
        <linearGradient id="bld-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--b-sky-top)" />
          <stop offset="1" stopColor="var(--b-sky-bottom)" />
        </linearGradient>
        <pattern id="bld-soil" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="5" r="1.3" fill="var(--b-earth-dark)" />
          <circle cx="13" cy="13" r="1" fill="var(--b-earth-dark)" />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="640" height="470" fill="url(#bld-sky)" />
      <g fill="var(--b-cloud)">
        <ellipse cx="96" cy="100" rx="36" ry="11" />
        <ellipse cx="114" cy="91" rx="20" ry="11" />
        <ellipse cx="556" cy="96" rx="30" ry="9" />
        <ellipse cx="540" cy="89" rx="16" ry="9" />
      </g>
      <rect y="470" width="640" height="130" fill="var(--b-earth)" />
      <rect y="470" width="640" height="130" fill="url(#bld-soil)" />
      <rect y="467" width="640" height="5" fill="var(--b-slab)" />

      {/* 3 · Mantenimiento — cubierta */}
      {zone("mantenimiento", <Rooftop />)}
      {/* 1 · Aseo — pisos de oficina */}
      {zone("aseo", <OfficeFloors />)}
      {/* 2 · Cafetería — primer piso */}
      {zone("cafeteria", <GroundFloor />)}
      {/* 4 · Jardinería — zonas verdes */}
      {zone("jardineria", <Gardens />)}
      {/* 5 · Fumigación — sótano */}
      {zone("fumigacion", <Basement />)}

      {/* Numbered markers */}
      {SERVICES.map((s, i) => {
        const { cx, cy } = MARKERS[s.id];
        const isActive = active === s.id;
        return (
          <g key={s.id} className="cursor-pointer" onMouseEnter={() => onSelect(s.id)} onClick={() => onSelect(s.id)}>
            {!explored && !isActive && (
              <circle cx={cx} cy={cy} r={13} fill="none" stroke="var(--primary)" strokeWidth={2} className="bld-ping" />
            )}
            <circle
              cx={cx}
              cy={cy}
              r={13}
              stroke="var(--primary)"
              strokeWidth={2}
              style={{ fill: isActive ? "var(--primary)" : "var(--card)", transition: "fill 200ms ease" }}
            />
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={12}
              fontWeight={700}
              style={{ fill: isActive ? "var(--primary-foreground)" : "var(--primary)", transition: "fill 200ms ease" }}
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Rooftop() {
  return (
    <g>
      {/* Water tank */}
      <rect x="210" y="98" width="4" height="18" fill="var(--b-frame)" />
      <rect x="246" y="98" width="4" height="18" fill="var(--b-frame)" />
      <rect x="200" y="64" width="60" height="36" rx="7" fill="var(--b-equip)" />
      <rect x="200" y="75" width="60" height="2.5" fill="var(--b-equip-dark)" />
      <rect x="200" y="88" width="60" height="2.5" fill="var(--b-equip-dark)" />
      {/* HVAC units */}
      <rect x="282" y="80" width="62" height="36" rx="3" fill="var(--b-equip)" />
      <circle cx="313" cy="98" r="11" fill="var(--b-equip-dark)" />
      <path d="M313 89v18M304 98h18" stroke="var(--b-equip)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="352" y="90" width="42" height="26" rx="3" fill="var(--b-equip)" />
      <path d="M359 97h28M359 103h28M359 109h28" stroke="var(--b-equip-dark)" strokeWidth="2" />
      {/* Access hut + antenna */}
      <rect x="408" y="74" width="44" height="42" fill="var(--b-facade-side)" />
      <rect x="404" y="69" width="52" height="6" rx="2" fill="var(--b-slab)" />
      <rect x="422" y="88" width="16" height="28" rx="1.5" fill="var(--b-frame)" />
      <path d="M446 69V42" stroke="var(--b-frame)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M440 52h12M442 46h8" stroke="var(--b-frame)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="446" cy="39" r="3" fill="var(--primary)" />
      {/* Parapet */}
      <rect x="174" y="114" width="292" height="12" rx="2" fill="var(--b-slab)" />
    </g>
  );
}

function OfficeFloors() {
  const floors = [0, 1, 2, 3];
  const cols = [0, 1, 2, 3, 4];
  return (
    <g>
      <rect x="180" y="126" width="280" height="248" fill="var(--b-facade)" />
      <rect x="180" y="126" width="8" height="248" fill="var(--b-facade-side)" />
      <rect x="452" y="126" width="8" height="248" fill="var(--b-facade-side)" />
      {floors.map((f) => {
        const y0 = 126 + f * 62;
        return (
          <g key={f}>
            {cols.map((c) => {
              const x = 198 + c * 51;
              const y = y0 + 10;
              return (
                <g key={c}>
                  <rect x={x} y={y} width="40" height="38" rx="2" fill="var(--b-glass)" />
                  <path d={`M${x + 6} ${y + 38}L${x + 24} ${y}h9L${x + 15} ${y + 38}z`} fill="var(--b-glass-hi)" opacity="0.55" />
                  <rect x={x - 2} y={y + 38} width="44" height="3" rx="1" fill="var(--b-slab)" />
                </g>
              );
            })}
            <rect x="180" y={y0 + 56} width="280" height="6" fill="var(--b-slab)" />
          </g>
        );
      })}
      {/* Window-cleaning gondola */}
      <path d="M364 126V252M416 126V252" stroke="var(--b-frame)" strokeWidth="1.2" />
      <rect x="350" y="252" width="80" height="3" rx="1" fill="var(--b-frame)" />
      <path d="M354 255v12M376 255v12M404 255v12M426 255v12" stroke="var(--b-frame)" strokeWidth="1.5" />
      <rect x="348" y="266" width="84" height="7" rx="1.5" fill="var(--primary)" />
    </g>
  );
}

function Awning({ x, y, segments, segment }: { x: number; y: number; segments: number; segment: number }) {
  const r = segment / 2;
  return (
    <g>
      {Array.from({ length: segments }, (_, i) => {
        const sx = x + i * segment;
        return (
          <path
            key={i}
            d={`M${sx} ${y}h${segment}v8a${r} ${r} 0 0 1 ${-segment} 0z`}
            fill={i % 2 === 0 ? "var(--primary)" : "var(--b-awning-alt)"}
          />
        );
      })}
    </g>
  );
}

function CafeWindow({ x }: { x: number }) {
  const spots = [x + 20, x + 56];
  return (
    <g>
      <rect x={x} y="404" width="76" height="56" rx="2" fill="var(--b-warm)" />
      {spots.map((cx) => (
        <g key={cx} fill="var(--b-ink)">
          <path d={`M${cx} 404v9`} stroke="var(--b-ink)" strokeWidth="1.2" />
          <path d={`M${cx - 6} 419a6 6 0 0 1 12 0z`} />
          <rect x={cx - 4} y="438" width="6" height="6" rx="1" />
          <rect x={cx - 11} y="444" width="22" height="3" rx="1" />
          <rect x={cx - 1} y="447" width="2" height="13" />
        </g>
      ))}
      <rect x={x - 2} y="460" width="80" height="3" rx="1" fill="var(--b-slab)" />
    </g>
  );
}

function GroundFloor() {
  return (
    <g>
      <rect x="180" y="374" width="280" height="96" fill="var(--b-facade)" />
      <rect x="180" y="374" width="8" height="96" fill="var(--b-facade-side)" />
      <rect x="452" y="374" width="8" height="96" fill="var(--b-facade-side)" />
      <CafeWindow x={198} />
      <CafeWindow x={366} />
      <Awning x={194} y={386} segments={6} segment={14} />
      <Awning x={362} y={386} segments={6} segment={14} />
      {/* Entrance */}
      <rect x="288" y="396" width="64" height="74" rx="2" fill="var(--b-glass)" />
      <path d="M294 470L312 396h7L301 470z" fill="var(--b-glass-hi)" opacity="0.5" />
      <rect x="319" y="396" width="2" height="74" fill="var(--b-facade)" />
      <rect x="313" y="426" width="2" height="16" rx="1" fill="var(--b-facade)" />
      <rect x="325" y="426" width="2" height="16" rx="1" fill="var(--b-facade)" />
      <rect x="280" y="386" width="80" height="6" rx="2" fill="var(--b-frame)" />
    </g>
  );
}

function Gardens() {
  return (
    <g>
      {/* Left */}
      <path d="M0 472V458Q90 446 176 458V472Z" fill="var(--b-lawn)" />
      <rect x="76" y="396" width="9" height="66" rx="2" fill="var(--b-trunk)" />
      <circle cx="58" cy="404" r="20" fill="var(--b-leaf-dark)" />
      <circle cx="104" cy="402" r="21" fill="var(--b-leaf-dark)" />
      <circle cx="80" cy="384" r="30" fill="var(--b-leaf)" />
      <circle cx="70" cy="373" r="11" fill="var(--b-leaf-hi)" opacity="0.7" />
      <ellipse cx="32" cy="458" rx="22" ry="12" fill="var(--b-leaf)" />
      <rect x="118" y="444" width="54" height="24" rx="12" fill="var(--b-leaf-dark)" />
      <g fill="var(--b-flower)">
        <circle cx="130" cy="451" r="2.5" />
        <circle cx="146" cy="447" r="2.5" />
        <circle cx="160" cy="453" r="2.5" />
        <circle cx="24" cy="452" r="2.2" />
        <circle cx="40" cy="455" r="2.2" />
      </g>
      {/* Right */}
      <path d="M464 472V458Q550 446 640 458V472Z" fill="var(--b-lawn)" />
      <rect x="566" y="430" width="7" height="34" rx="2" fill="var(--b-trunk)" />
      <ellipse cx="569" cy="398" rx="22" ry="48" fill="var(--b-leaf-dark)" />
      <ellipse cx="563" cy="392" rx="9" ry="32" fill="var(--b-leaf)" opacity="0.8" />
      <ellipse cx="502" cy="456" rx="28" ry="14" fill="var(--b-leaf)" />
      <ellipse cx="616" cy="460" rx="20" ry="11" fill="var(--b-leaf-dark)" />
      <g fill="var(--b-flower)">
        <circle cx="490" cy="450" r="2.5" />
        <circle cx="506" cy="446" r="2.5" />
        <circle cx="518" cy="453" r="2.5" />
        <circle cx="610" cy="455" r="2.2" />
      </g>
    </g>
  );
}

function Basement() {
  return (
    <g>
      <rect x="184" y="480" width="272" height="106" rx="4" fill="var(--b-foundation)" />
      <rect x="194" y="490" width="252" height="86" rx="2" fill="var(--b-basement)" />
      <rect x="194" y="570" width="252" height="6" fill="var(--b-slab)" />
      {/* Pipes */}
      <path d="M194 502H446" stroke="var(--b-pipe)" strokeWidth="6" />
      <path d="M194 514H410" stroke="var(--b-pipe)" strokeWidth="3" />
      <rect x="258" y="497" width="6" height="10" fill="var(--b-equip-dark)" />
      <rect x="338" y="497" width="6" height="10" fill="var(--b-equip-dark)" />
      <path d="M424 502V570" stroke="var(--b-pipe)" strokeWidth="6" />
      <circle cx="424" cy="532" r="5" fill="var(--b-equip-dark)" />
      {/* Micro-nebulizer */}
      <rect x="287" y="531" width="12" height="6" rx="2" fill="var(--b-frame)" />
      <rect x="282" y="536" width="22" height="34" rx="6" fill="var(--primary)" />
      <path d="M304 546C318 546 318 530 330 530" stroke="var(--b-frame)" strokeWidth="2" fill="none" />
      <path d="M330 530l10-4" stroke="var(--b-frame)" strokeWidth="3" strokeLinecap="round" />
      <g fill="var(--primary)" opacity="0.25">
        <circle cx="350" cy="522" r="5" />
        <circle cx="360" cy="515" r="7" />
        <circle cx="372" cy="523" r="6" />
        <circle cx="363" cy="531" r="4" />
        <circle cx="381" cy="513" r="4" />
      </g>
      {/* Bait stations */}
      <rect x="214" y="554" width="36" height="16" rx="3" fill="var(--b-ink)" />
      <path d="M228 570v-5a4 4 0 0 1 8 0v5z" fill="var(--b-basement)" />
      <rect x="380" y="554" width="36" height="16" rx="3" fill="var(--b-ink)" />
      <path d="M394 570v-5a4 4 0 0 1 8 0v5z" fill="var(--b-basement)" />
    </g>
  );
}
