import { createFileRoute } from "@tanstack/react-router";
import { Careers } from "@/components/site/Careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — MARIVATE & Associates" },
      { name: "description", content: "Build your future with MARIVATE & Associates. Graduate programmes, articles, lateral hires, and support roles." },
      { property: "og:title", content: "Careers — MARIVATE & Associates" },
      { property: "og:description", content: "Build your future with MARIVATE." },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: () => <Careers />,
});
