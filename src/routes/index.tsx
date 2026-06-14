import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Attorneys } from "@/components/site/Attorneys";

import { WhyChoose } from "@/components/site/WhyChoose";
import { Insights } from "@/components/site/Insights";
import { Testimonials } from "@/components/site/Testimonials";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MARIVATE & Associates — Excellence in Law. Excellence in Business." },
      { name: "description", content: "Premier South African law firm. Strategic counsel, exceptional advocacy, trusted relationships across corporate, litigation, labour, and more." },
      { property: "og:title", content: "MARIVATE & Associates" },
      { property: "og:description", content: "Excellence in Law. Excellence in Business." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Attorneys />
      
      <WhyChoose />
      <Insights />
      <Testimonials />
      <Careers />
      <Contact />
    </>
  );
}
