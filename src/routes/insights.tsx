import { createFileRoute } from "@tanstack/react-router";
import { Insights } from "@/components/site/Insights";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — MARIVATE & Associates" },
      { name: "description", content: "Legal updates, regulatory analysis, and corporate law commentary from MARIVATE & Associates." },
      { property: "og:title", content: "Insights — MARIVATE & Associates" },
      { property: "og:description", content: "Thinking that shapes the practice." },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: () => <Insights />,
});
