import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Teachers | Alfanumrik",
  description:
    "Less admin, more teaching. Alfanumrik respects your time and amplifies your expertise.",
};

const painPoints = [
  {
    icon: Clock,
    problem: "60% of Time on Admin",
    description:
      "Attendance, reports, documentation. The paperwork never ends.",
  },
  {
    icon: FileText,
    problem: "Fragmented Tools",
    description:
      "Jumping between 5 different systems for one simple task.",
  },
  {
    icon: Users,
    problem: "40+ Unique Learners",
    description:
      "Personalizing instruction for each student seems impossible.",
  },
  {
    icon: Calendar,
    problem: "Meeting Overload",
    description:
      "Parent meetings, staff meetings, report deadlines—where's the teaching?",
  },
];

const howWeHelp = [
  {
    icon: Clock,
    title: "Reclaim Your Time",
    description:
      "Automated attendance, instant report generation, and streamlined workflows. Do in minutes what used to take hours.",
    features: [
      "One-click attendance",
      "Automated report card generation",
      "Bulk communication tools",
      "Calendar integration",
    ],
  },
  {
    icon: BookOpen,
    title: "Teach, Don't Document",
    description:
      "Lesson planning tools, ready resources, and curriculum alignment. Focus on pedagogy, not paperwork.",
    features: [
      "Curriculum-aligned lesson templates",
      "Resource library access",
      "Learning outcome tracking",
      "Collaborative planning",
    ],
  },
  {
    icon: Sparkles,
    title: "Personalize at Scale",
    description:
      "Cognitive profiles for each student, intervention recommendations, and differentiated resources. Finally possible.",
    features: [
      "Student cognitive profiles",
      "Recommended interventions",
      "Differentiated resources",
      "Progress monitoring",
    ],
  },
  {
    icon: Heart,
    title: "Professional Respect",
    description:
      "You're the expert. Our system informs and recommends. You decide. Always.",
    features: [
      "Override capabilities",
      "Transparent recommendations",
      "Professional judgment honored",
      "Continuous feedback loop",
    ],
  },
];

const dayInLife = [
  {
    time: "7:30 AM",
    before: "Manually marking attendance, chasing late submissions",
    after: "One-click digital attendance, automated reminders sent",
  },
  {
    time: "9:00 AM",
    before: "Searching for lesson resources across folders",
    after: "Curriculum-aligned resources ready in lesson plan",
  },
  {
    time: "11:00 AM",
    before: "Wondering which students are struggling",
    after: "Dashboard shows at-risk alerts with recommendations",
  },
  {
    time: "2:00 PM",
    before: "Manual progress entry after each assessment",
    after: "Instant digital capture and automatic analysis",
  },
  {
    time: "4:00 PM",
    before: "Hours of report writing ahead",
    after: "Auto-generated reports, personalized comments suggested",
  },
];

const testimonials = [
  {
    quote:
      "I finally have time to actually teach. The admin burden has genuinely reduced.",
    author: "Priya M.",
    role: "Science Teacher, 12 years experience",
  },
  {
    quote:
      "The cognitive profiles helped me understand my students in ways I couldn't before.",
    author: "Rajesh K.",
    role: "Mathematics Coordinator",
  },
  {
    quote:
      "It respects my judgment. Recommendations are helpful, not prescriptive.",
    author: "Anita S.",
    role: "Primary Teacher, 8 years experience",
  },
];

export default function ForTeachersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="charcoal" className="pt-20 lg:pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-maize rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-charcoal" />
                </div>
                <span className="text-sm font-medium text-white/60">
                  For Educators
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Less Admin.
                <br />
                <span className="text-maize">More Teaching.</span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-8">
                You became a teacher to teach. Alfanumrik gives you back the
                time and tools to do what you love—and do it better.
              </p>

              <p className="text-white/50 text-sm leading-relaxed">
                Designed with teachers, for teachers. Your expertise is
                respected, your time is valued.
              </p>
            </div>

            {/* Pain Points */}
            <div className="grid grid-cols-2 gap-4">
              {painPoints.map((point) => (
                <div
                  key={point.problem}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <point.icon className="w-8 h-8 text-maize mb-4" />
                  <h3 className="font-semibold text-white mb-2">
                    {point.problem}
                  </h3>
                  <p className="text-white/50 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* How We Help */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="How We Help"
            title="Designed for Teacher Productivity"
            description="Every feature exists to give you back what matters most—time with your students."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {howWeHelp.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 border border-border/50 hover:border-maize/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-maize/20 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">
                    {item.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-charcoal/80"
                    >
                      <CheckCircle className="w-4 h-4 text-leaf shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* A Day in the Life */}
        <Section variant="white">
          <SectionHeader
            eyebrow="The Difference"
            title="A Day in Your Life—Before & After"
            description="Real scenarios, real time savings."
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dayInLife.map((item, index) => (
                <div
                  key={item.time}
                  className="grid md:grid-cols-[100px_1fr_1fr] gap-4 items-center"
                >
                  <div className="text-lg font-semibold text-charcoal">
                    {item.time}
                  </div>

                  <div className="bg-charcoal/5 rounded-2xl p-4">
                    <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wide block mb-2">
                      Before
                    </span>
                    <p className="text-charcoal/70 text-sm">{item.before}</p>
                  </div>

                  <div className="bg-maize/20 rounded-2xl p-4">
                    <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wide block mb-2">
                      With Alfanumrik
                    </span>
                    <p className="text-charcoal text-sm font-medium">
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="From Teachers"
            title="What Educators Say"
            description="Real feedback from teachers using Alfanumrik."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-border/50"
              >
                <blockquote className="text-charcoal leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-charcoal">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="maize">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              See how Alfanumrik can transform your daily workflow.
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
                Explore the Product
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
