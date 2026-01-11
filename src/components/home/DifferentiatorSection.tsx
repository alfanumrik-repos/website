import { Section, SectionHeader } from "@/components/ui/section";
import { Check, TrendingDown, TrendingUp, BarChart3, Shield } from "lucide-react";

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
    category: "Alfanumrik School OS",
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
  { 
    icon: TrendingDown,
    value: "40%", 
    label: "Reduction in administrative overhead",
    color: "from-red-500 to-orange-500"
  },
  { 
    icon: BarChart3,
    value: "3x", 
    label: "Faster decision-making with real-time data",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: TrendingUp,
    value: "85%", 
    label: "Teacher satisfaction with workflow tools",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Shield,
    value: "100%", 
    label: "Compliance adherence, automated",
    color: "from-purple-500 to-pink-500"
  },
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
        {differentiators.map((col, colIndex) => (
          <div
            key={col.category}
            className={`rounded-3xl p-8 lg:p-10 ${
              col.highlight
                ? "bg-charcoal text-white shadow-2xl"
                : "bg-muted/50 text-charcoal"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              {/* Category Number Badge - Highly visible */}
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold ${
                col.highlight 
                  ? "bg-maize text-charcoal" 
                  : "bg-charcoal/10 text-charcoal/60"
              }`}>
                {String(colIndex + 1).padStart(2, "0")}
              </span>
              <h3
                className={`text-xl font-semibold ${
                  col.highlight ? "text-maize" : "text-charcoal"
                }`}
              >
                {col.category}
              </h3>
            </div>
            <ul className="space-y-4">
              {col.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      col.highlight ? "bg-maize text-charcoal" : "bg-charcoal/10"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={col.highlight ? "text-white/90" : "text-charcoal/70"}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Outcomes Stats - Now with icons and better contrast */}
      <div className="bg-maize rounded-3xl p-8 lg:p-12 shadow-xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-charcoal mb-2">
            Outcomes, Not Features
          </h3>
          <p className="text-charcoal/70">
            Measurable impact for schools that adopt the Alfanumrik School OS
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-maize" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-charcoal mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal/70 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
