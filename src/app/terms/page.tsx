import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Alfanumrik - The Cognitive Operating System for Future-Ready Schools.",
};

const lastUpdated = "January 1, 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="cream" className="pt-20 lg:pt-28 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-maize/30 rounded-full text-sm font-medium text-charcoal mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Section>

        {/* Content */}
        <Section variant="white" className="py-12">
          <div className="max-w-4xl prose prose-lg prose-charcoal">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using Alfanumrik&apos;s services, website, or
                platform (collectively, the &quot;Services&quot;), you agree to be bound
                by these Terms of Service (&quot;Terms&quot;). If you disagree with any
                part of the terms, you may not access the Services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms apply to all visitors, users, and others who access
                or use the Services, including school administrators, teachers,
                parents, students, and any other stakeholders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                2. Description of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alfanumrik provides a cognitive operating system for educational
                institutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>School operations and governance management</li>
                <li>Academic delivery and assessment tools</li>
                <li>Adaptive learning intelligence systems</li>
                <li>Finance, fees, and compliance management</li>
                <li>Parent and student experience portals</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The specific features and capabilities available to you depend
                on your subscription plan and role within your organization.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                3. User Accounts
              </h2>
              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.1 Account Creation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features of the Services, you must create an
                account. You agree to provide accurate, current, and complete
                information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.2 Account Security
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for safeguarding the password that you use
                to access the Services and for any activities or actions under
                your password. You agree not to disclose your password to any
                third party and to notify us immediately upon becoming aware of
                any breach of security or unauthorized use of your account.
              </p>
              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.3 Account Termination
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account if
                any information provided proves to be inaccurate, not current,
                or incomplete, or if you violate any provision of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use the Services only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  Use the Services in any way that violates any applicable
                  national or international law or regulation
                </li>
                <li>
                  Transmit any material that is defamatory, obscene, or
                  otherwise objectionable
                </li>
                <li>
                  Impersonate or attempt to impersonate another user or person
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone&apos;s use
                  or enjoyment of the Services
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  Services or any other systems or networks
                </li>
                <li>
                  Use any robot, spider, or other automatic device to access
                  the Services
                </li>
                <li>
                  Introduce any viruses, trojan horses, worms, or other
                  malicious code
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Services and their original content, features, and
                functionality are and will remain the exclusive property of
                Alfanumrik and its licensors. The Services are protected by
                copyright, trademark, and other laws of India and foreign
                countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our trademarks and trade dress may not be used in connection
                with any product or service without the prior written consent
                of Alfanumrik.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                6. User Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain ownership of any content you submit, post, or display
                on or through the Services (&quot;User Content&quot;). By submitting User
                Content, you grant Alfanumrik a worldwide, non-exclusive,
                royalty-free license to use, reproduce, modify, and display such
                content solely for the purpose of providing the Services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You represent and warrant that you own or have the necessary
                rights to use and authorize the use of your User Content, and
                that it does not violate any third-party rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                7. Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For paid subscriptions, you agree to pay all fees associated
                with your selected plan. Fees are non-refundable except as
                required by law or as explicitly stated in your subscription
                agreement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify our pricing at any time. Any
                price changes will be communicated to you in advance and will
                apply to subsequent billing periods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All payments are subject to applicable taxes as per Indian tax
                laws, including GST where applicable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                8. Data Protection and Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your use of the Services is also governed by our Privacy Policy,
                which is incorporated into these Terms by reference. Please
                review our{" "}
                <a href="/privacy" className="text-charcoal underline">
                  Privacy Policy
                </a>{" "}
                to understand our practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting student data and complying with
                applicable data protection laws, including the Information
                Technology Act, 2000 and associated rules in India.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                9. Service Level and Availability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to maintain high availability of our Services but do
                not guarantee uninterrupted access. We may occasionally need to
                perform maintenance or updates that may temporarily affect
                service availability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will make reasonable efforts to notify you in advance of any
                scheduled maintenance that may significantly impact your use of
                the Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, Alfanumrik
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability for any claims arising from or related to
                these Terms or the Services shall not exceed the amount you paid
                us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                11. Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless Alfanumrik and
                its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses (including reasonable attorney
                fees) arising from your use of the Services, your violation of
                these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                12. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to its conflict of law
                provisions. Any disputes arising from these Terms shall be
                subject to the exclusive jurisdiction of the courts in
                Bengaluru, Karnataka, India.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days&apos; notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                14. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="bg-cream rounded-2xl p-6 mt-4">
                <p className="text-charcoal font-medium">Alfanumrik</p>
                <p className="text-muted-foreground">Email: legal@alfanumrik.com</p>
                <p className="text-muted-foreground">Location: Bengaluru, India</p>
              </div>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
