import { createFileRoute } from "@tanstack/react-router";
import { PracticeAreas } from "@/components/site/PracticeAreas";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — MARIVATE & Associates" },
      { name: "description", content: "Thirteen core practice areas: debt collection, sports & entertainment, personal injury, compliance, contracts, opinions, corporate, litigation, labour, family, criminal, IP, and wills & estate." },
      { property: "og:title", content: "Practice Areas — MARIVATE & Associates" },
      { property: "og:description", content: "Comprehensive legal expertise across every discipline." },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: () => <PracticeAreas />,
});
