import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — MARIVATE & Associates" },
      { name: "description", content: "MARIVATE & Associates legal disclaimer. Important information about the use of this website and our services." },
      { property: "og:title", content: "Disclaimer — MARIVATE & Associates" },
      { property: "og:description", content: "Important information about the use of this website and our services." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <section className="bg-[var(--navy-deep)] text-ivory">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-28">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">Disclaimer</h1>
        <div className="mt-4 gold-rule" />
        <p className="mt-8 text-ivory/60 text-sm leading-relaxed">
          Last updated: January 2026
        </p>

        <div className="mt-12 space-y-10 text-ivory/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-gold mb-4">No Legal Advice</h2>
            <p>
              The information contained on this website is for general informational and educational purposes only.
              It is not intended to be, and should not be construed as, legal advice. No visitor to this website
              should act or refrain from acting on the basis of any information contained herein without seeking
              appropriate professional legal advice.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">No Attorney-Client Relationship</h2>
            <p>
              The use of this website or any communication through it does not create an attorney-client relationship
              between you and MARIVATE & Associates. An attorney-client relationship is only established after we have
              expressly agreed to represent you and you have agreed to our terms of engagement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">Accuracy of Information</h2>
            <p>
              While we endeavour to keep the information on this website accurate and up to date, we make no
              representations or warranties of any kind, express or implied, about the completeness, accuracy,
              reliability, suitability, or availability of the information, products, services, or related graphics
              contained on the website for any purpose.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">Third-Party Content</h2>
            <p>
              This website may contain links to third-party websites or resources. These links are provided for your
              convenience and do not signify that we endorse the content of such websites. We have no control over
              the nature, content, and availability of those sites and accept no responsibility for them.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">Professional Responsibility</h2>
            <p>
              MARIVATE & Associates is a firm of attorneys practising in South Africa. Our services are subject to
              the rules and regulations of the Legal Practice Council and other applicable professional bodies. The
              content of this website does not override our professional obligations or the terms of any engagement
              agreement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">Jurisdiction</h2>
            <p>
              The content and services offered through this website are governed by the laws of the Republic of South
              Africa. Any legal proceedings arising from the use of this website shall be subject to the exclusive
              jurisdiction of the South African courts.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">Changes to This Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective
              immediately upon posting to the website. Your continued use of the website following any changes
              constitutes acceptance of the revised disclaimer.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at{" "}
              <a href="mailto:counsel@marivate.law" className="text-gold hover:underline">counsel@marivate.law</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
