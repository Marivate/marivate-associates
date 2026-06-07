import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MARIVATE & Associates" },
      { name: "description", content: "Schedule a private consultation with MARIVATE & Associates. Partner-level response within one business day." },
      { property: "og:title", content: "Contact — MARIVATE & Associates" },
      { property: "og:description", content: "Schedule a private consultation." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => <div className="pt-20"><Contact /></div>,
});
