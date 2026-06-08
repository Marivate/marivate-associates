import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — MARIVATE & Associates" },
      { name: "description", content: "MARIVATE & Associates terms of use. The rules and regulations for using our website and services." },
      { property: "og:title", content: "Terms of Use — MARIVATE & Associates" },
      { property: "og:description", content: "The rules and regulations for using our website and services." },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <section className="bg-[var(--navy-deep)] text-ivory">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-28">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">Terms of Use</h1>
        <div className="mt-4 gold-rule" />
        <p className="mt-8 text-ivory/60 text-sm leading-relaxed">
          Last updated: January 2026
        </p>

        <div className="mt-12 space-y-10 text-ivory/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-gold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the MARIVATE & Associates website ("the Site"), you accept and agree
              to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">2. Use of the Site</h2>
            <p className="mb-3">You agree to use the Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Infringe the rights of, or restrict or inhibit the use of the Site by, any third party</li>
              <li>Violate any applicable local, national, or international law or regulation</li>
              <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>Interfere with or disrupt the Site or servers connected to the Site</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">3. Intellectual Property</h2>
            <p>
              All content on the Site, including but not limited to text, graphics, logos, images, and software,
              is the property of MARIVATE & Associates or its content suppliers and is protected by South African
              and international copyright and intellectual property laws. You may not reproduce, modify, distribute,
              or republish any content from this Site without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">4. Legal Disclaimer</h2>
            <p>
              The information provided on this Site is for general informational purposes only and does not
              constitute legal advice. No attorney-client relationship is created by your use of the Site or by
              your submission of information through the Site. For specific legal advice, please contact us directly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, MARIVATE & Associates shall not be liable for any direct,
              indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Site.
              This includes, without limitation, damages for loss of profits, data, or other intangible losses.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">6. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. These links are provided for your convenience only.
              We have no control over the content of these websites and accept no responsibility for them or for any
              loss or damage that may arise from your use of them.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">7. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the Republic
              of South Africa. Any disputes arising under these terms shall be subject to the exclusive jurisdiction
              of the South African courts.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately
              upon posting to the Site. Your continued use of the Site following any changes constitutes acceptance
              of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at{" "}
              <a href="mailto:counsel@marivate.law" className="text-gold hover:underline">counsel@marivate.law</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
