import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, PendingAction } from "@/components/ContentPage";

export const Route = createFileRoute("/servicios")({
  component: () => <ContentPage title="Servicios" sections={[
    { id: "cotizacion", title: "Solicita una cotización", content: <PendingAction>Solicitar cotización</PendingAction> },
    { id: "normativo", title: "Normativo" },
    { id: "soft-services", title: "Soft Services" },
    { id: "hard-services", title: "Hard Services" },
    { id: "protect-management", title: "Protect management" },
  ]} />,
  head: () => ({ meta: [{ title: "Servicios | Eminser" }] }),
});
