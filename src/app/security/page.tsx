import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Shield,
  Lock,
  Server,
  Eye,
  FileCheck,
  Users,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Alfanumrik protects your data with enterprise-grade security measures.",
};

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption",
    description:
      "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your information is protected at every stage.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Hosted on enterprise-grade cloud infrastructure with multiple layers of security, redundancy, and 99.9% uptime SLA.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description:
      "Role-based access control (RBAC) ensures users only see what they're authorized to see. Multi-factor authentication available.",
  },
  {
    icon: FileCheck,
    title: "Regular Audits",
    description:
      "We conduct regular security assessments, penetration testing, and vulnerability scans to identify and address potential risks.",
  },
  {
    icon: Users,
    title: "Employee Training",
    description:
      "All team members undergo security awareness training. Access to production systems is strictly limited and monitored.",
  },
  {
    icon: Shield,
    title: "Incident Response",
    description:
      "We have documented incident response procedures to quickly detect, respond to, and recover from security incidents.",
  },
];

const certifications = [
  "ISO 27001 Aligned Practices",
  "GDPR Compliance Ready",
  "IT Act 2000 Compliant",
  "SOC 2 Type II (In Progress)",
];

const commitments = [
  {
    title: "Data Ownership",
    description:
      "Your data belongs to you. Schools retain full ownership of all data entered into the system.",
  },
  {
    title: "Data Portability",
    description:
      "Export your data at any time in standard formats. No vendor lock-in, no data hostage situations.",
  },
  {
    title: "Transparent Practices",
    description:
      "We're open about our security practices. Ask us anything about how we protect your data.",
  },
  {
    title: "Breach Notification",
    description:
      "In the unlikely event of a data breach, we will notify affected parties within 72 hours as per regulations.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="charcoal" className="pt-20 lg:pt-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-maize rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-charcoal" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Security You Can Trust
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Educational data is sensitive. We treat it that way. Alfanumrik is
              built with security at its foundation, not as an afterthought.
            </p>

            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80"
                >
                  <CheckCircle className="w-4 h-4 text-leaf" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Security Features */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="Protection"
            title="How We Protect Your Data"
            description="Enterprise-grade security measures that safeguard your institution's information."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 border border-border/50"
              >
                <div className="w-12 h-12 bg-maize/20 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Our Commitments */}
        <Section variant="white">
          <SectionHeader
            eyebrow="Commitments"
            title="Our Security Promises"
            description="These are non-negotiable commitments we make to every institution we serve."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment) => (
              <div
                key={commitment.title}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Student Data */}
        <Section variant="maize">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Special Protection for Student Data
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              We understand that student data requires the highest level of
              protection. Our practices include:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "No advertising or marketing use",
                "Minimal data collection principle",
                "Age-appropriate privacy controls",
                "Parental access and control",
                "School-directed data management",
                "Compliant deletion processes",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-charcoal shrink-0" />
                  <span className="text-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section variant="cream">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Security Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our security team is available to answer questions and provide
              additional documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@alfanumrik.com"
                className="btn-pill btn-pill-secondary text-base px-8"
              >
                security@alfanumrik.com
              </a>
              <a href="/contact" className="btn-pill btn-pill-outline text-base px-8">
                Contact Us
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
