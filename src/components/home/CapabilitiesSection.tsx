import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";
import {
  School,
  BookOpen,
  Brain,
  CreditCard,
  Users,
  LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  forWho: string;
  whyDifferent: string;
  href: string;
}

const pillars: Pillar[] = [
  {
    icon: School,
    title: "School Operations & Governance",
    description:
      "End-to-end management of admissions, attendance, scheduling, and institutional workflows.",
    forWho: "Principals, Administrators, Management Committees",
    whyDifferent:
      "Governance-first design with compliance built in, not bolted on.",
    href: "/product#operations",
  },
  {
    icon: BookOpen,
    title: "Academic Delivery & Assessment",
    description:
      "Curriculum management, lesson planning, continuous assessment, and examination systems.",
    forWho: "Academic Coordinators, Teachers, Examination Teams",
    whyDifferent:
      "Assessment as a learning tool, not just a measurement afterthought.",
    href: "/product#academic",
  },
  {
    icon: Brain,
    title: "Adaptive Learning Intelligence",
    description:
      "Cognitive profiling, personalized learning paths, and intervention recommendations.",
    forWho: "Teachers, Counselors, Students",
    whyDifferent:
      "Learning science meets practical pedagogy. No black-box algorithms.",
    href: "/product/adaptive-learning",
  },
  {
    icon: CreditCard,
    title: "Finance, Fees & Compliance",
    description:
      "Fee management, payment processing, financial reporting, and regulatory compliance.",
    forWho: "Finance Teams, Accountants, Auditors",
    whyDifferent:
      "India-scale compliance readiness with GST, TDS, and state-specific rules.",
    href: "/product#finance",
  },
  {
    icon: Users,
    title: "Parent & Student Experience",
    description:
      "Transparent communication, progress tracking, and meaningful engagement portals.",
    forWho: "Parents, Students, Counselors",
    whyDifferent: "Insights over data dumps. Clarity builds trust.",
    href: "/product#experience",
  },
];

export function CapabilitiesSection() {
  return (
    <Section variant="cream">
      <SectionHeader
        eyebrow="The System"
        title="Capability Pillars"
        description="Alfanumrik organizes school intelligence into five interconnected domains. Each speaks to different stakeholders, unified by one platform."
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* First row - 3 cards */}
        {pillars.slice(0, 3).map((pillar, index) => (
          <PillarCard key={pillar.title} pillar={pillar} index={index} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {/* Second row - 2 cards */}
        {pillars.slice(3).map((pillar, index) => (
          <PillarCard key={pillar.title} pillar={pillar} index={index + 3} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/product"
          className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-charcoal/70 transition-colors"
        >
          Explore the complete system
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
}

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <Link
      href={pillar.href}
      className="group bg-white rounded-3xl p-8 border border-border/50 hover:border-maize transition-all duration-300 hover:shadow-xl hover:shadow-maize/10 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-maize/20 rounded-2xl flex items-center justify-center group-hover:bg-maize transition-colors">
          <pillar.icon className="w-7 h-7 text-charcoal" />
        </div>
        <span className="text-4xl font-bold text-charcoal/5 group-hover:text-maize/30 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-charcoal transition-colors">
        {pillar.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
        {pillar.description}
      </p>

      <div className="space-y-3 pt-6 border-t border-border">
        <div>
          <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wide">
            For
          </span>
          <p className="text-sm text-charcoal mt-1">{pillar.forWho}</p>
        </div>
        <div>
          <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wide">
            Why Different
          </span>
          <p className="text-sm text-charcoal/80 mt-1">{pillar.whyDifferent}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-maize transition-colors">
        Learn more
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
