import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/site/Industries";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — MARIVATE & Associates" },
      { name: "description", content: "Sector fluency across financial services, technology, real estate, healthcare, energy, and more." },
      { property: "og:title", content: "Industries — MARIVATE & Associates" },
      { property: "og:description", content: "Sector fluency that moves markets." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => <div className="pt-20"><Industries /></div>,
});
