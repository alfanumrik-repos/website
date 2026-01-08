import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Alfanumrik - How we collect, use, and protect your data.",
};

const lastUpdated = "January 1, 2026";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Section>

        {/* Content */}
        <Section variant="white" className="py-12">
          <div className="max-w-4xl prose prose-lg prose-charcoal">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Alfanumrik, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our cognitive operating system for
                schools and related services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting the privacy of all our users,
                including school administrators, teachers, parents, and
                students. This policy applies to all information collected
                through our platform, website, and any related services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                1.1 Information You Provide
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you directly provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  phone number, role, and organization details when you create
                  an account
                </li>
                <li>
                  <strong>Profile Information:</strong> Profile photos,
                  biographical information, and preferences
                </li>
                <li>
                  <strong>Educational Data:</strong> Student records, academic
                  performance, attendance, assessments, and learning progress
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, feedback, and
                  correspondence with teachers, parents, and administrators
                </li>
                <li>
                  <strong>Financial Information:</strong> Fee payments,
                  transaction records, and billing information
                </li>
              </ul>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                1.2 Information Collected Automatically
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you access our Services, we automatically collect:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system, browser type, and unique device identifiers
                </li>
                <li>
                  <strong>Log Data:</strong> IP address, access times, pages
                  viewed, and referring URLs
                </li>
                <li>
                  <strong>Usage Data:</strong> Features used, actions taken, and
                  interaction patterns within our platform
                </li>
                <li>
                  <strong>Learning Analytics:</strong> Time spent on tasks,
                  learning patterns, and engagement metrics
                </li>
              </ul>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                1.3 Information from Third Parties
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We may receive information from third parties, including
                integration partners, school information systems, and payment
                processors, in accordance with their privacy policies.
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>
                  Enable adaptive learning features and personalized educational
                  experiences
                </li>
                <li>Process transactions and manage fee collections</li>
                <li>
                  Facilitate communication between schools, teachers, parents,
                  and students
                </li>
                <li>Generate reports, analytics, and insights for schools</li>
                <li>
                  Ensure compliance with educational regulations and standards
                </li>
                <li>
                  Respond to your requests, comments, and questions
                </li>
                <li>
                  Send you technical notices, updates, and administrative
                  messages
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent or unauthorized
                  activities
                </li>
                <li>
                  Comply with legal obligations and enforce our terms of service
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                3. How We Share Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.1 With Your School
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Information is shared with authorized personnel at your
                educational institution as necessary to provide our Services and
                fulfill educational purposes.
              </p>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.2 With Service Providers
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share information with third-party vendors who provide
                services on our behalf, such as hosting, analytics, payment
                processing, and customer support. These providers are bound by
                confidentiality obligations.
              </p>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.3 For Legal Reasons
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose information if required by law, legal process,
                or government request, or to protect the rights, property, and
                safety of Alfanumrik, our users, or others.
              </p>

              <h3 className="text-xl font-medium text-charcoal mb-3">
                3.4 With Consent
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We may share information with your consent or at your direction.
              </p>
            </section>

            {/* Student Data Protection */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                4. Student Data Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are committed to protecting student data. Our practices
                include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  Collecting only information necessary for educational purposes
                </li>
                <li>
                  Never using student data for advertising or marketing purposes
                </li>
                <li>
                  Providing schools with control over their student data
                </li>
                <li>
                  Implementing strict access controls and authentication
                </li>
                <li>
                  Ensuring data portability and deletion upon request
                </li>
                <li>
                  Complying with applicable student privacy laws and
                  regulations
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive to protect your information, no method of
                transmission or storage is 100% secure. We cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                6. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your information for as long as necessary to provide
                our Services and fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you or your school terminates the relationship with us, we
                will delete or anonymize your information in accordance with our
                data retention policies, unless we are required to retain it for
                legal or regulatory purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location and applicable laws, you may have the
                following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing in certain circumstances
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  personal information
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the
                information provided below. We will respond to your request
                within the timeframe required by applicable law.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect
                information about your browsing activities and to improve your
                experience. These include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the platform
                  to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  users interact with our Services
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings.
                However, disabling certain cookies may affect the functionality
                of our Services.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Services are designed for use by educational institutions
                and may include student users under the age of 18. We collect
                student information only with the consent and direction of the
                school, which acts as the agent for parents/guardians.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not knowingly collect personal information directly from
                children without appropriate consent. If you believe we have
                inadvertently collected information from a child without proper
                consent, please contact us immediately.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                10. Data Storage and International Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your information is primarily stored and processed in India. If
                we transfer your information to other countries, we will ensure
                appropriate safeguards are in place to protect your information
                in accordance with this Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We comply with applicable data localization requirements under
                Indian law.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the &quot;Last updated&quot; date. We
                encourage you to review this Privacy Policy periodically for any
                changes.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                12. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-cream rounded-2xl p-6">
                <p className="text-charcoal font-medium">
                  Alfanumrik Privacy Team
                </p>
                <p className="text-muted-foreground">
                  Email: privacy@alfanumrik.com
                </p>
                <p className="text-muted-foreground">
                  Location: Bengaluru, India
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For school-specific data requests, please contact your school
                administrator, who can work with us to address your concerns.
              </p>
            </section>

            {/* Grievance Officer */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                13. Grievance Officer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In accordance with the Information Technology Act, 2000 and
                rules made thereunder, the name and contact details of the
                Grievance Officer are provided below:
              </p>
              <div className="bg-cream rounded-2xl p-6">
                <p className="text-charcoal font-medium">Grievance Officer</p>
                <p className="text-muted-foreground">
                  Email: grievance@alfanumrik.com
                </p>
                <p className="text-muted-foreground">
                  Response Time: Within 30 days of receipt of complaint
                </p>
              </div>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
