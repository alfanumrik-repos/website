import { Section, SectionHeader } from "@/components/ui/section";
import { AlertTriangle, Clock, Layers, Zap } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented Tools",
    description:
      "Schools juggle 5-10 disconnected systems. Data lives in silos. Nobody sees the full picture.",
  },
  {
    icon: Clock,
    title: "Manual Overload",
    description:
      "Administrators spend 60% of their time on tasks that should be automated. Every minute counts.",
  },
  {
    icon: AlertTriangle,
    title: "Teacher Burnout",
    description:
      "Educators drown in admin work instead of teaching. The profession is losing its best talent.",
  },
  {
    icon: Zap,
    title: "Reactive, Not Proactive",
    description:
      "Schools discover problems after they escalate. Intelligence should prevent, not just report.",
  },
];

export function ProblemSection() {
  return (
    <Section variant="cream">
      <SectionHeader
        eyebrow="The Problem"
        title="Why Schools Are Struggling"
        description="Educational institutions are running 21st-century missions with 20th-century systems. The gap is widening."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
          <div
            key={problem.title}
            className="group relative bg-white rounded-3xl p-8 border border-border/50 hover:border-maize/50 transition-all duration-300 hover:shadow-xl hover:shadow-maize/10"
          >
            {/* Number badge - Now much more visible */}
            <span className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-2xl font-bold bg-charcoal/10 text-charcoal/40 rounded-xl group-hover:bg-maize group-hover:text-charcoal transition-all duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative">
              <div className="w-14 h-14 bg-charcoal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-maize/30 transition-colors">
                <problem.icon className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Transition statement */}
      <div className="mt-16 text-center">
        <p className="text-xl lg:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Schools don&apos;t need more software.{" "}
          <span className="font-semibold text-charcoal">
            They need a School OS — an intelligence layer that unifies everything.
          </span>
        </p>
      </div>
    </Section>
  );
}
