import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/quienes-somos")({
  component: () => <ContentPage title="Quiénes somos" sections={[
    { id: "responsabilidad-corporativa", title: "Responsabilidad corporativa" },
    { id: "mision", title: "Misión" },
    { id: "vision", title: "Visión" },
  ]} />,
  head: () => ({ meta: [{ title: "Quiénes somos | Eminser" }] }),
});
