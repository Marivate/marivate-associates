import { createFileRoute } from "@tanstack/react-router";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Industries } from "@/components/site/Industries";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — MARIVATE & Associates" },
      { name: "description", content: "Comprehensive legal counsel across corporate, litigation, labour, property, family, criminal, IP, and tax." },
      { property: "og:title", content: "Practice Areas — MARIVATE & Associates" },
      { property: "og:description", content: "Comprehensive counsel across every discipline." },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: () => <div className="pt-20"><PracticeAreas /><Industries /></div>,
});
