import { createFileRoute } from "@tanstack/react-router";
import { Attorneys } from "@/components/site/Attorneys";

export const Route = createFileRoute("/attorneys")({
  head: () => ({
    meta: [
      { title: "Attorneys — MARIVATE & Associates" },
      { name: "description", content: "Meet the counsel behind MARIVATE & Associates — partners, associates, and specialists of distinction." },
      { property: "og:title", content: "Attorneys — MARIVATE & Associates" },
      { property: "og:description", content: "Counsel of distinction." },
    ],
    links: [{ rel: "canonical", href: "/attorneys" }],
  }),
  component: () => <Attorneys />,
});
