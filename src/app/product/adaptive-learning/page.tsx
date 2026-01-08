import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Adaptive Learning OS | Alfanumrik",
  description:
    "Discover Alfanumrik's cognitive learning layer. Personalization that teachers trust and students benefit from.",
};

const principles = [
  {
    icon: Eye,
    title: "Transparent Logic",
    description:
      "No black-box algorithms. Teachers understand why recommendations are made and can override them with professional judgment.",
  },
  {
    icon: Target,
    title: "Mastery-Based Progression",
    description:
      "Students advance when they truly understand, not when the calendar says so. Depth over pace.",
  },
  {
    icon: TrendingUp,
    title: "Early Intervention",
    description:
      "The system surfaces at-risk patterns before they become crises. Prevention, not just detection.",
  },
  {
    icon: Users,
    title: "Teacher + Technology",
    description:
      "AI augments teacher expertise, never replaces it. The final word always belongs to educators.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Understand the Learner",
    description:
      "Through ongoing assessment and interaction patterns, the system builds a cognitive profile for each student.",
    details: [
      "Learning style preferences",
      "Pace of concept acquisition",
      "Strength and gap analysis",
      "Engagement patterns",
    ],
  },
  {
    step: "02",
    title: "Intelligence Layer",
    description:
      "The cognitive engine processes inputs to generate actionable recommendations aligned with curriculum goals.",
    details: [
      "Pattern recognition across cohorts",
      "Curriculum alignment mapping",
      "Intervention threshold detection",
      "Resource matching algorithms",
    ],
  },
  {
    step: "03",
    title: "Personalized Pathways",
    description:
      "Students receive tailored learning experiences while teachers get tools to support each child effectively.",
    details: [
      "Adaptive content recommendations",
      "Remediation pathways",
      "Challenge extensions for advanced learners",
      "Progress milestones",
    ],
  },
];

const forTeachers = [
  "Dashboard showing each student's cognitive profile",
  "Intervention recommendations with reasoning",
  "Group formation suggestions for peer learning",
  "Resource recommendations matched to gaps",
  "Professional override capabilities",
];

const forStudents = [
  "Personalized learning journeys",
  "Self-paced mastery progression",
  "Visual progress tracking",
  "Recommended next steps",
  "Achievement recognition",
];

export default function AdaptiveLearningPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="charcoal" className="pt-20 lg:pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-maize/20 rounded-full mb-6">
                <Brain className="w-4 h-4 text-maize" />
                <span className="text-sm font-medium text-maize">
                  Core Differentiator
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Adaptive Learning{" "}
                <span className="text-maize">Intelligence</span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Personalization that works. Not because we claim AI magic, but
                because we respect learning science and trust teacher judgment.
              </p>

              <p className="text-white/50 text-sm leading-relaxed">
                The Adaptive Learning OS is Alfanumrik&apos;s most differentiated
                layer—where technology meets pedagogy in a way that actually
                helps.
              </p>
            </div>

            {/* Conceptual Illustration */}
            <div className="relative">
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-maize rounded-2xl mb-4">
                    <Brain className="w-10 h-10 text-charcoal" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Cognitive Engine
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-xs text-white/60">Inputs</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl mb-2">🧠</div>
                    <div className="text-xs text-white/60">Intelligence</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-xs text-white/60">Outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Principles */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="Our Approach"
            title="Principles, Not Promises"
            description="We don't oversell AI. We build on foundations that teachers can trust and learning science supports."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-white rounded-3xl p-8 border border-border/50 hover:border-maize/50 transition-colors"
              >
                <div className="w-12 h-12 bg-maize/20 rounded-2xl flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* How It Works */}
        <Section variant="white">
          <SectionHeader
            eyebrow="The Process"
            title="How Adaptive Learning Works"
            description="From understanding to action—a transparent pipeline that teachers can see and trust."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-maize to-transparent z-10" />
                )}

                <div className="bg-cream rounded-3xl p-8 h-full">
                  <span className="text-5xl font-bold text-maize/30 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-charcoal/80"
                      >
                        <span className="w-1.5 h-1.5 bg-maize rounded-full mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* For Teachers & Students */}
        <Section variant="cream">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Teachers */}
            <div className="bg-charcoal rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-maize rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  For Teachers
                </h3>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Tools that respect your expertise and amplify your impact.
              </p>
              <ul className="space-y-3">
                {forTeachers.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-maize shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Students */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-maize/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">
                  For Students
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Learning experiences that meet you where you are.
              </p>
              <ul className="space-y-3">
                {forStudents.map((item, i) => (
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
          </div>
        </Section>

        {/* Honesty Section */}
        <Section variant="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              What We Won&apos;t Claim
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Alfanumrik&apos;s Adaptive Learning layer is powerful, but we believe in
              honest communication. Here&apos;s what we won&apos;t pretend:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-cream rounded-2xl">
                <h4 className="font-semibold text-charcoal mb-2">
                  Not a Teacher Replacement
                </h4>
                <p className="text-sm text-muted-foreground">
                  Technology informs; teachers decide. The human element is
                  irreplaceable.
                </p>
              </div>
              <div className="p-6 bg-cream rounded-2xl">
                <h4 className="font-semibold text-charcoal mb-2">
                  Not Magic AI
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our algorithms are grounded in research, transparent, and
                  explainable.
                </p>
              </div>
              <div className="p-6 bg-cream rounded-2xl">
                <h4 className="font-semibold text-charcoal mb-2">
                  Not Instant Transformation
                </h4>
                <p className="text-sm text-muted-foreground">
                  Meaningful change takes time. We support gradual, sustainable
                  adoption.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="maize">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              See Adaptive Learning in Action
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Experience how intelligence meets pedagogy in a way that teachers
              trust.
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
                href="/product"
                className="btn-pill btn-pill-outline text-base px-8"
              >
                Back to Product Overview
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
