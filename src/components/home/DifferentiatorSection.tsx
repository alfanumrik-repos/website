import { Section, SectionHeader } from "@/components/ui/section";
import { Check } from "lucide-react";

const differentiators = [
  {
    category: "Traditional Systems",
    items: [
      "Disconnected ERP and LMS",
      "Feature-first approach",
      "Reactive reporting",
      "One-size-fits-all",
      "Vendor lock-in",
    ],
    highlight: false,
  },
  {
    category: "Alfanumrik OS",
    items: [
      "Unified intelligence layer",
      "Outcomes-first design",
      "Proactive insights",
      "Adaptive to each school",
      "Open, extensible architecture",
    ],
    highlight: true,
  },
];

const outcomes = [
  { value: "40%", label: "Reduction in administrative overhead" },
  { value: "3x", label: "Faster decision-making with real-time data" },
  { value: "85%", label: "Teacher satisfaction with workflow tools" },
  { value: "100%", label: "Compliance adherence, automated" },
];

export function DifferentiatorSection() {
  return (
    <Section variant="white">
      <SectionHeader
        eyebrow="The Difference"
        title="What Makes Alfanumrik Different"
        description="We don't sell features. We deliver outcomes. Here's how we think differently."
      />

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {differentiators.map((col) => (
          <div
            key={col.category}
            className={`rounded-3xl p-8 lg:p-10 ${
              col.highlight
                ? "bg-charcoal text-white"
                : "bg-muted/50 text-charcoal"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-6 ${
                col.highlight ? "text-maize" : "text-charcoal"
              }`}
            >
              {col.category}
            </h3>
            <ul className="space-y-4">
              {col.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      col.highlight ? "bg-maize text-charcoal" : "bg-charcoal/10"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                  <span
                    className={col.highlight ? "text-white/80" : "text-charcoal/70"}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Outcomes Stats */}
      <div className="bg-maize rounded-3xl p-8 lg:p-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-charcoal mb-2">
            Outcomes, Not Features
          </h3>
          <p className="text-charcoal/70">
            Measurable impact for schools that adopt Alfanumrik
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-charcoal mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
