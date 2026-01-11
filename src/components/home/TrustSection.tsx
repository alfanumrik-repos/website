import { Section } from "@/components/ui/section";
import { Shield, FlaskConical, Scale, Award, CheckCircle } from "lucide-react";

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
      {/* Enhanced Header with prominent badge */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        {/* Prominent Trust Builders Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-maize rounded-full mb-6 shadow-lg animate-pulse-slow">
          <Award className="w-6 h-6 text-charcoal" />
          <span className="text-lg font-bold text-charcoal tracking-wide">
            Trust Builders
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-white">
          Why Schools Trust Alfanumrik
        </h2>
        <p className="text-lg text-white/70 leading-relaxed">
          We earn trust through substance, not marketing. Here&apos;s what underpins our credibility.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="group bg-white/10 rounded-3xl p-8 border border-white/20 hover:border-maize/50 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-maize rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <point.icon className="w-8 h-8 text-charcoal" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {point.title}
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              {point.description}
            </p>

            <ul className="space-y-3">
              {point.highlights.map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex items-center gap-3 text-sm text-white/90"
                >
                  <CheckCircle className="w-4 h-4 text-maize shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom assurance */}
      <div className="mt-16 pt-12 border-t border-white/10 text-center">
        <p className="text-white/70 max-w-2xl mx-auto">
          We believe trust is earned through consistency, transparency, and
          results.{" "}
          <span className="text-white font-medium">
            No feature promises we can&apos;t keep. No timelines we won&apos;t honor.
          </span>
        </p>
      </div>
    </Section>
  );
}
