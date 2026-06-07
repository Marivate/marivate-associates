import { createFileRoute } from "@tanstack/react-router";
import { Apply } from "@/components/site/Apply";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — MARIVATE & Associates" },
      { name: "description", content: "Apply to join MARIVATE & Associates. Submit your application and supporting documents for graduate programmes, articles, lateral and support roles." },
      { property: "og:title", content: "Apply — MARIVATE & Associates" },
      { property: "og:description", content: "Submit your application and supporting documents." },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: () => <Apply />,
});
