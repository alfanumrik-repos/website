import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import {
  School,
  BookOpen,
  Brain,
  CreditCard,
  Users,
  ArrowRight,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Overview | Alfanumrik",
  description:
    "Explore Alfanumrik's capability pillars: School Operations, Academic Delivery, Adaptive Learning, Finance & Compliance, and Parent Experience.",
};

const pillars = [
  {
    id: "operations",
    icon: School,
    title: "School Operations & Governance",
    subtitle: "The backbone of institutional efficiency",
    problem:
      "Schools waste countless hours on manual processes, fragmented data, and reactive decision-making. Information lives in silos, and nobody sees the complete picture.",
    solution:
      "Alfanumrik unifies all operational data into a single, intelligent layer. From admissions to alumni, every process is connected, automated, and audit-ready.",
    forWho: [
      "Principals seeking governance clarity",
      "Administrators drowning in spreadsheets",
      "Management committees needing oversight",
    ],
    capabilities: [
      "Admissions pipeline management",
      "Attendance & leave automation",
      "Timetable generation & optimization",
      "Staff management & HR workflows",
      "Asset & inventory tracking",
      "Document management & compliance",
    ],
    whyDifferent:
      "We don't just digitize paper processes. We redesign them for intelligence.",
  },
  {
    id: "academic",
    icon: BookOpen,
    title: "Academic Delivery & Assessment",
    subtitle: "Teaching and learning, reimagined",
    problem:
      "Curriculum management is chaotic. Assessment is an afterthought. Teachers spend more time on documentation than instruction.",
    solution:
      "Alfanumrik treats academics as the core mission, not an add-on. Curriculum, lesson planning, and assessment flow together as one coherent system.",
    forWho: [
      "Academic coordinators managing standards",
      "Teachers planning lessons",
      "Examination teams running assessments",
    ],
    capabilities: [
      "Curriculum mapping to learning outcomes",
      "Lesson planning & resource library",
      "Continuous assessment tools",
      "Question bank management",
      "Report card generation",
      "Board examination workflows",
    ],
    whyDifferent:
      "Assessment informs learning, not just measures it. That's the shift.",
  },
  {
    id: "adaptive",
    icon: Brain,
    title: "Adaptive Learning Intelligence",
    subtitle: "Personalization that actually works",
    problem:
      "One-size-fits-all education fails most students. Teachers can't personalize for 40+ students. Intervention happens too late.",
    solution:
      "Alfanumrik's cognitive layer understands each learner's profile and provides actionable recommendations—not just data, but direction.",
    forWho: [
      "Teachers seeking personalization tools",
      "Counselors identifying at-risk students",
      "Students who learn differently",
    ],
    capabilities: [
      "Learning style profiling",
      "Mastery-based progression",
      "Early intervention alerts",
      "Personalized recommendations",
      "Progress analytics",
      "Remediation pathways",
    ],
    whyDifferent:
      "No black-box AI. Transparent logic that teachers can understand and trust.",
    featured: true,
  },
  {
    id: "finance",
    icon: CreditCard,
    title: "Finance, Fees & Compliance",
    subtitle: "Financial clarity, regulatory peace",
    problem:
      "Fee collection is chaotic. Financial reporting is manual. Compliance deadlines are missed. Audits are stressful.",
    solution:
      "Alfanumrik automates the entire financial lifecycle—from fee structure to final audit—with India-specific compliance built in.",
    forWho: [
      "Finance teams managing collections",
      "Accountants handling books",
      "Auditors needing clean records",
    ],
    capabilities: [
      "Flexible fee structure management",
      "Online payment integration",
      "Automated reminders & receipts",
      "GST & TDS compliance",
      "Financial reporting & MIS",
      "Scholarship & discount management",
    ],
    whyDifferent:
      "Built for Indian schools, Indian regulations, Indian payment systems.",
  },
  {
    id: "experience",
    icon: Users,
    title: "Parent & Student Experience",
    subtitle: "Transparency builds trust",
    problem:
      "Parents receive data dumps, not insights. Communication is one-way. Progress is measured in marks, not growth.",
    solution:
      "Alfanumrik transforms parent communication from reporting to relationship. Students see their journey, not just their grades.",
    forWho: [
      "Parents seeking clarity",
      "Students tracking progress",
      "Counselors building connections",
    ],
    capabilities: [
      "Real-time progress dashboards",
      "Meaningful communication channels",
      "Learning journey visualization",
      "Goal setting & tracking",
      "Parent-teacher meeting scheduling",
      "Achievement portfolios",
    ],
    whyDifferent:
      "We show growth trajectories, not just snapshots. Insight over information.",
  },
];

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="maize" className="pt-20 lg:pt-28">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-charcoal/10 rounded-full text-sm font-medium text-charcoal mb-6">
              Product Overview
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              A System, Not a Collection of Features
            </h1>
            <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl">
              Alfanumrik organizes school intelligence into five interconnected
              capability domains. Each solves specific problems for specific
              people—unified by one platform.
            </p>
          </div>
        </Section>

        {/* Quick Navigation */}
        <Section variant="cream" className="py-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {pillars.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-border hover:border-maize hover:bg-maize/10 transition-colors text-sm font-medium text-charcoal"
              >
                <pillar.icon className="w-4 h-4" />
                {pillar.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </Section>

        {/* Pillars */}
        {pillars.map((pillar, index) => (
          <Section
            key={pillar.id}
            id={pillar.id}
            variant={index % 2 === 0 ? "white" : "cream"}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      pillar.featured ? "bg-charcoal" : "bg-maize/20"
                    }`}
                  >
                    <pillar.icon
                      className={`w-8 h-8 ${
                        pillar.featured ? "text-maize" : "text-charcoal"
                      }`}
                    />
                  </div>
                  {pillar.featured && (
                    <span className="px-3 py-1 bg-maize text-charcoal text-xs font-semibold rounded-full">
                      Core Differentiator
                    </span>
                  )}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  {pillar.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {pillar.subtitle}
                </p>

                {/* Problem */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-charcoal/50 uppercase tracking-wide mb-3">
                    The Problem
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {pillar.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-charcoal/50 uppercase tracking-wide mb-3">
                    How Alfanumrik Helps
                  </h3>
                  <p className="text-charcoal leading-relaxed font-medium">
                    {pillar.solution}
                  </p>
                </div>

                {/* For Who */}
                <div>
                  <h3 className="text-sm font-semibold text-charcoal/50 uppercase tracking-wide mb-3">
                    Built For
                  </h3>
                  <ul className="space-y-2">
                    {pillar.forWho.map((who, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-charcoal/80"
                      >
                        <CheckCircle className="w-4 h-4 text-leaf" />
                        {who}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right - Capabilities */}
              <div className="bg-charcoal rounded-3xl p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Key Capabilities
                </h3>
                <ul className="grid gap-4">
                  {pillar.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="w-6 h-6 rounded-full bg-maize/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-maize rounded-full" />
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-maize mb-2">
                    Why It&apos;s Different
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {pillar.whyDifferent}
                  </p>
                </div>

                {pillar.featured && (
                  <Link
                    href="/product/adaptive-learning"
                    className="mt-6 inline-flex items-center gap-2 text-maize font-medium text-sm hover:underline"
                  >
                    Deep dive into Adaptive Learning
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </Section>
        ))}

        {/* CTA */}
        <Section variant="maize">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to See the System in Action?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Experience how these capabilities work together as one unified
              platform.
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
                href="/for-schools"
                className="btn-pill btn-pill-outline text-base px-8"
              >
                Is Alfanumrik Right for You?
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
