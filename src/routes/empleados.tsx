import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, PendingAction } from "@/components/ContentPage";

export const Route = createFileRoute("/empleados")({
  component: () => <ContentPage title="Empleados actuales" sections={[
    { id: "reglamento", title: "Reglamento interno de trabajo", content: <PendingAction>Consultar reglamento (PDF)</PendingAction> },
    { id: "certificados", title: "Certificados laborales", content: <PendingAction>Solicitar certificado en Oasis</PendingAction> },
    { id: "beneficios", title: "Plan de beneficios" },
  ]} />,
  head: () => ({ meta: [{ title: "Empleados actuales | Eminser" }] }),
});
