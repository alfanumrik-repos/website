import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  Compass,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Alfanumrik",
  description:
    "The problem we're obsessed with, the principles we build on, and the future we're building toward.",
};

const designPrinciples = [
  {
    icon: Target,
    title: "Outcomes Over Features",
    description:
      "We don't add features to check boxes. Every capability must connect to a measurable outcome for schools.",
  },
  {
    icon: Lightbulb,
    title: "Intelligence Over Automation",
    description:
      "Automation handles the repetitive. Intelligence handles the complex. We build for both.",
  },
  {
    icon: Heart,
    title: "Respect for Practitioners",
    description:
      "Teachers and administrators are experts. Our technology informs; they decide. Always.",
  },
  {
    icon: Compass,
    title: "India-First, Global-Ready",
    description:
      "Built for Indian schools, Indian regulations, Indian realities. But architected for scale beyond.",
  },
];

const timeline = [
  {
    year: "The Problem",
    title: "Fragmented School Systems",
    description:
      "Schools run on 5-10 disconnected tools. Data lives in silos. Teachers drown in admin. Parents get data dumps instead of insights. The gap between what schools need and what technology offers widened every year.",
  },
  {
    year: "The Insight",
    title: "Schools Need Systems, Not Software",
    description:
      "The answer isn't more tools—it's better integration. Not feature lists, but outcome focus. Not automation alone, but intelligence that learns and adapts. Schools need an operating system, not an app store.",
  },
  {
    year: "The Vision",
    title: "The Cognitive School OS",
    description:
      "Alfanumrik was born from this insight. A unified intelligence layer that connects operations, academics, learning science, finance, and stakeholder experience. One platform. One source of truth. One path forward.",
  },
];

const vision = [
  {
    title: "Every School Runs Intelligently",
    description:
      "Not just digitized, but genuinely intelligent. Where decisions are informed by real-time data, interventions happen before crises, and administrative burden genuinely reduces.",
  },
  {
    title: "Every Teacher Teaches",
    description:
      "Educators spending their time on pedagogy, not paperwork. Technology that amplifies expertise rather than constraining it.",
  },
  {
    title: "Every Student Gets Personalization",
    description:
      "Learning that adapts to the learner, not the other way around. Personalization that's practical, not theoretical.",
  },
  {
    title: "Every Parent Has Clarity",
    description:
      "Transparency that builds trust. Insights that inform, not overwhelm. A genuine partnership between school and home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="charcoal" className="pt-20 lg:pt-28">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-maize/20 rounded-full text-sm font-medium text-maize mb-6">
              Our Story
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We&apos;re Obsessed With One Problem
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Schools run 21st-century missions with 20th-century systems. The
              gap between what education needs and what technology offers is
              widening. We exist to close it.
            </p>

            <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
              Alfanumrik isn&apos;t a software company that happened to serve
              schools. We&apos;re a school systems company that happens to build
              software.
            </p>
          </div>
        </Section>

        {/* The Journey */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="The Journey"
            title="From Problem to Platform"
            description="How Alfanumrik came to be."
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-8 items-start">
                <div className="w-32 shrink-0">
                  <span className="inline-block px-4 py-2 bg-maize rounded-full text-sm font-semibold text-charcoal">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Design Principles */}
        <Section variant="white">
          <SectionHeader
            eyebrow="How We Build"
            title="Design Principles"
            description="The non-negotiables that guide every decision we make."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-cream rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-maize/20 rounded-2xl flex items-center justify-center mb-6">
                  <principle.icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Vision */}
        <Section variant="maize">
          <SectionHeader
            eyebrow="The Future"
            title="What We're Building Toward"
            description="The long-term vision that drives daily decisions."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {vision.map((item) => (
              <div
                key={item.title}
                className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm border border-white/50"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* The Team Philosophy */}
        <Section variant="cream">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-maize mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              A Thinking Company
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We&apos;re not just building software. We&apos;re thinking deeply about how
              schools should work, how learning happens, and how technology can
              genuinely help. Every feature is grounded in research. Every
              decision is debated. Every outcome is measured.
            </p>
            <p className="text-muted-foreground">
              The founder&apos;s presence here is intellectual, not celebrity-driven.
              What matters is the work, not the personality behind it.
            </p>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="charcoal">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Know More?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Explore our research, see the product, or start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="btn-pill bg-maize text-charcoal text-base px-8"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/research"
                className="btn-pill border-2 border-white/20 text-white text-base px-8 hover:bg-white/10"
              >
                Read Our Research
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
