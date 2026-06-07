import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MARIVATE & Associates" },
      { name: "description", content: "A tradition of excellence. Meet the firm behind 15+ years of trusted South African legal counsel." },
      { property: "og:title", content: "About MARIVATE & Associates" },
      { property: "og:description", content: "A tradition of excellence, built on trust." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => <div className="pt-24"><About /><WhyChoose /><Testimonials /></div>,
});
