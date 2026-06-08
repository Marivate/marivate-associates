import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MARIVATE & Associates" },
      { name: "description", content: "MARIVATE & Associates privacy policy. How we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy — MARIVATE & Associates" },
      { property: "og:description", content: "How we collect, use, and protect your personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <section className="bg-[var(--navy-deep)] text-ivory">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-28">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">Privacy Policy</h1>
        <div className="mt-4 gold-rule" />
        <p className="mt-8 text-ivory/60 text-sm leading-relaxed">
          Last updated: January 2026
        </p>

        <div className="mt-12 space-y-10 text-ivory/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-gold mb-4">1. Introduction</h2>
            <p>
              MARIVATE & Associates Inc. ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or engage our legal services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or applying for positions.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and pages visited.</li>
              <li><strong>Client Information:</strong> Information necessary to provide legal services, subject to attorney-client privilege and confidentiality obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our legal services</li>
              <li>Communicate with you regarding inquiries and matters</li>
              <li>Process job applications and recruitment</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Protect the security and integrity of our services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">4. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with trusted third-party
              service providers who assist us in operating our website and conducting our business, provided
              they agree to keep this information confidential. We may also disclose information when required
              by law or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">6. Your Rights</h2>
            <p className="mb-3">Under applicable data protection laws, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-gold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
              <a href="mailto:counsel@marivate.law" className="text-gold hover:underline">counsel@marivate.law</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
