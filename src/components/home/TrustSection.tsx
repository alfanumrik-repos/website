import { Section, SectionHeader } from "@/components/ui/section";
import { Shield, FlaskConical, Scale } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Compliance-First Mindset",
    description:
      "Built for Indian regulatory requirements from day one. CBSE, state boards, RTE compliance, GST-ready financials, and data privacy by design.",
    highlights: [
      "RTE Act compliance workflows",
      "Board-wise academic standards",
      "GST & TDS automated",
      "Data localization ready",
    ],
  },
  {
    icon: FlaskConical,
    title: "Research-Backed Design",
    description:
      "Every feature is grounded in learning science and operational research. We build on evidence, not assumptions.",
    highlights: [
      "Cognitive load optimization",
      "Formative assessment frameworks",
      "Behavioral learning patterns",
      "Process efficiency studies",
    ],
  },
  {
    icon: Scale,
    title: "India-Scale Readiness",
    description:
      "Designed for the diversity and scale of Indian education. From 300-student schools to 5,000+ student institutions.",
    highlights: [
      "Multi-lingual interfaces",
      "Low-bandwidth optimization",
      "Regional calendar support",
      "Scalable infrastructure",
    ],
  },
];

export function TrustSection() {
  return (
    <Section variant="charcoal">
      <SectionHeader
        eyebrow="Trust Builders"
        title="Why Schools Trust Alfanumrik"
        description="We earn trust through substance, not marketing. Here's what underpins our credibility."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {trustPoints.map((point, index) => (
          <div
            key={point.title}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-maize/30 transition-colors"
          >
            <div className="w-14 h-14 bg-maize rounded-2xl flex items-center justify-center mb-6">
              <point.icon className="w-7 h-7 text-charcoal" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {point.title}
            </h3>

            <p className="text-white/60 leading-relaxed mb-6">
              {point.description}
            </p>

            <ul className="space-y-2">
              {point.highlights.map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <span className="w-1.5 h-1.5 bg-maize rounded-full" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom assurance */}
      <div className="mt-16 pt-12 border-t border-white/10 text-center">
        <p className="text-white/60 max-w-2xl mx-auto">
          We believe trust is earned through consistency, transparency, and
          results.{" "}
          <span className="text-white">
            No feature promises we can&apos;t keep. No timelines we won&apos;t honor.
          </span>
        </p>
      </div>
    </Section>
  );
}
