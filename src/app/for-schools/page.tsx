import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import {
  School,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Schools | Alfanumrik",
  description:
    "Is Alfanumrik right for your school? Discover our implementation philosophy and who benefits most.",
};

const whySchoolsChoose = [
  {
    icon: Shield,
    title: "Governance Clarity",
    description:
      "Real-time visibility into every aspect of school operations. Make decisions with confidence, not guesswork.",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    description:
      "Automate the repetitive. Free your team to focus on what matters—students and teaching.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description:
      "From 300 to 5,000+ students, the system grows with you. No painful migrations or rebuilds.",
  },
  {
    icon: Target,
    title: "Outcome Focus",
    description:
      "Every feature is designed around measurable outcomes, not feature checklists.",
  },
];

const shouldAdopt = [
  "Schools ready to move beyond spreadsheet chaos",
  "Institutions seeking governance-level visibility",
  "Schools planning controlled, sustainable growth",
  "Management teams valuing long-term partnerships",
  "Institutions committed to teacher empowerment",
  "Schools ready to invest in proper implementation",
];

const shouldNotAdopt = [
  "Schools seeking a quick fix without process change",
  "Institutions not ready to train staff properly",
  "Schools wanting the cheapest possible solution",
  "Management unwilling to commit implementation time",
  "Institutions expecting magic without effort",
];

const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    duration: "Weeks 1-4",
    description:
      "Core setup, data migration, and administrative processes. Get the basics running smoothly.",
    includes: [
      "System configuration",
      "Data migration & validation",
      "Admin team training",
      "Core workflow activation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    duration: "Weeks 5-8",
    description:
      "Academic modules, teacher onboarding, and parent portal. Extend to full stakeholder coverage.",
    includes: [
      "Academic module setup",
      "Teacher training sessions",
      "Parent portal launch",
      "Communication workflows",
    ],
  },
  {
    phase: "Phase 3",
    title: "Intelligence",
    duration: "Weeks 9-12",
    description:
      "Adaptive learning activation, analytics dashboards, and advanced reporting. Unlock the full system.",
    includes: [
      "Adaptive learning configuration",
      "Custom analytics setup",
      "Advanced training",
      "Continuous optimization",
    ],
  },
];

const scaleOptions = [
  {
    size: "Small Schools",
    students: "300-800 students",
    focus: "Foundation first",
    description:
      "Start with core operations and academics. Add intelligence layers as you grow.",
  },
  {
    size: "Mid-Size Schools",
    students: "800-2,000 students",
    focus: "Full implementation",
    description:
      "Deploy all capability pillars with phased rollout. Maximize operational efficiency.",
  },
  {
    size: "Large Institutions",
    students: "2,000-5,000+ students",
    focus: "Enterprise configuration",
    description:
      "Multi-campus support, advanced governance, and custom integrations.",
  },
];

export default function ForSchoolsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="maize" className="pt-20 lg:pt-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center">
                <School className="w-6 h-6 text-maize" />
              </div>
              <span className="text-sm font-medium text-charcoal/60">
                For Decision Makers
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Is Alfanumrik Right for Your School?
            </h1>

            <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl">
              We believe in honest conversations. Not every school is ready for
              Alfanumrik, and that&apos;s okay. Here&apos;s how to know if we&apos;re the right
              fit.
            </p>
          </div>
        </Section>

        {/* Why Schools Choose */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="Value Proposition"
            title="Why Schools Choose Alfanumrik"
            description="Four core reasons decision-makers partner with us."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySchoolsChoose.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-3xl p-8 border border-border/50 hover:border-maize/50 transition-colors"
              >
                <div className="w-12 h-12 bg-maize/20 rounded-2xl flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Fit Assessment */}
        <Section variant="white">
          <SectionHeader
            eyebrow="Honest Assessment"
            title="Who Should (and Shouldn&apos;t) Adopt Alfanumrik"
            description="We'd rather turn away the wrong fit than overpromise to the right one."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Should Adopt */}
            <div className="bg-cream rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-leaf" />
                <h3 className="text-xl font-semibold text-charcoal">
                  Alfanumrik Is For You If...
                </h3>
              </div>
              <ul className="space-y-4">
                {shouldAdopt.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-charcoal/80"
                  >
                    <CheckCircle className="w-5 h-5 text-leaf shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Should Not Adopt */}
            <div className="bg-charcoal rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-destructive" />
                <h3 className="text-xl font-semibold text-white">
                  Alfanumrik May Not Be Right If...
                </h3>
              </div>
              <ul className="space-y-4">
                {shouldNotAdopt.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-white/10 text-white/50 text-sm">
                This isn&apos;t about capability. It&apos;s about readiness. Every school
                can get there—just at different times.
              </p>
            </div>
          </div>
        </Section>

        {/* Implementation Philosophy */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="Implementation"
            title="Phased, Non-Disruptive Rollout"
            description="We don't believe in big-bang deployments. Sustainable change happens gradually."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {implementationPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-3xl p-8 border border-border/50 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-6xl font-bold text-maize/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-maize/20 rounded-full text-sm font-medium text-charcoal mb-4">
                    {phase.phase} • {phase.duration}
                  </span>

                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <ul className="space-y-2">
                    {phase.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-charcoal/80"
                      >
                        <span className="w-1.5 h-1.5 bg-maize rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Scale Options */}
        <Section variant="white">
          <SectionHeader
            eyebrow="Scalability"
            title="From 300 to 5,000+ Students"
            description="Alfanumrik scales with your institution. Here's how configuration differs."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {scaleOptions.map((option) => (
              <div
                key={option.size}
                className="bg-cream rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-charcoal" />
                  <span className="text-sm text-muted-foreground">
                    {option.students}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {option.size}
                </h3>

                <span className="inline-block px-3 py-1 bg-maize/20 rounded-full text-sm font-medium text-charcoal mb-4">
                  {option.focus}
                </span>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="maize">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to Have the Conversation?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              No pressure. Let&apos;s discuss if Alfanumrik is the right fit for your
              school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="btn-pill btn-pill-secondary text-base px-8"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn-pill btn-pill-outline text-base px-8"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
