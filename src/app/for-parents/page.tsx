import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import {
  Users,
  Eye,
  MessageCircle,
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Calendar,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Parents | Alfanumrik",
  description:
    "Clarity, not clutter. See your child's growth journey, not just their marks.",
};

const whatParentsWant = [
  {
    icon: Eye,
    title: "Visibility",
    description: "Know what's happening at school without chasing updates.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Understand growth over time, not just isolated test scores.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Easy, meaningful dialogue with teachers when needed.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Confidence that the school is doing right by your child.",
  },
];

const whatYouGet = [
  {
    icon: BarChart3,
    title: "Real-Time Progress Dashboard",
    description:
      "See your child's academic journey at a glance. Attendance, assessments, achievements—all in one place.",
    highlights: [
      "Daily attendance updates",
      "Assessment results as they happen",
      "Subject-wise performance trends",
      "Learning milestone tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth, Not Just Grades",
    description:
      "Alfanumrik shows trajectory, not just snapshots. See how your child is developing over time.",
    highlights: [
      "Progress over time visualization",
      "Strength and growth area identification",
      "Comparative context (without competition)",
      "Learning style insights",
    ],
  },
  {
    icon: MessageCircle,
    title: "Meaningful Communication",
    description:
      "Two-way channels with teachers. Share concerns, celebrate wins, stay connected.",
    highlights: [
      "Direct messaging with teachers",
      "Announcement feeds",
      "Event notifications",
      "Homework and assignment updates",
    ],
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Book parent-teacher meetings, view school calendar, and stay on top of important dates.",
    highlights: [
      "PTM booking system",
      "School calendar integration",
      "Event reminders",
      "Holiday schedules",
    ],
  },
];

const notDataDumps = [
  {
    wrong: "A PDF report card once a term",
    right: "Continuous visibility into learning progress",
  },
  {
    wrong: "Raw marks without context",
    right: "Insights into what the numbers mean",
  },
  {
    wrong: "One-way announcements",
    right: "Two-way communication channels",
  },
  {
    wrong: "Chasing teachers for updates",
    right: "Information when you need it",
  },
  {
    wrong: "Comparison with other children",
    right: "Focus on your child's individual growth",
  },
];

const faq = [
  {
    question: "How often is information updated?",
    answer:
      "Most information updates in real-time. Attendance is marked at the start of each session, and assessment results appear as soon as teachers record them.",
  },
  {
    question: "Can I communicate directly with teachers?",
    answer:
      "Yes. The parent portal includes messaging features for appropriate communication with your child's teachers, with response time expectations set by the school.",
  },
  {
    question: "Is my child's data private?",
    answer:
      "Absolutely. You only see your own child's information. Data privacy is a core design principle, and we comply with all relevant regulations.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer:
      "The interface is designed for clarity, not complexity. Most parents are comfortable within minutes. Schools also provide orientation sessions.",
  },
];

export default function ForParentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="maize" className="pt-20 lg:pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-maize" />
                </div>
                <span className="text-sm font-medium text-charcoal/60">
                  For Parents
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Clarity, Not Clutter
              </h1>

              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                You want to know how your child is doing. Not through data
                dumps, but through meaningful insights. Alfanumrik gives you
                exactly that.
              </p>

              <p className="text-charcoal/50 text-sm leading-relaxed">
                Insightful progress, not raw marks. Growth trajectories, not
                just snapshots.
              </p>
            </div>

            {/* What Parents Want */}
            <div className="grid grid-cols-2 gap-4">
              {whatParentsWant.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-charcoal mb-4" />
                  <h3 className="font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* What You Get */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="Your Portal"
            title="What You'll Have Access To"
            description="Everything you need to stay connected with your child's education."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {whatYouGet.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 border border-border/50"
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

                <ul className="space-y-3">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-charcoal/80"
                    >
                      <CheckCircle className="w-4 h-4 text-leaf shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Not Data Dumps */}
        <Section variant="white">
          <SectionHeader
            eyebrow="The Difference"
            title="Insights Over Information"
            description="Here's how Alfanumrik changes the parent experience."
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {notDataDumps.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-4 items-center"
                >
                  <div className="bg-charcoal/5 rounded-2xl p-5 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center shrink-0">
                      ✗
                    </span>
                    <span className="text-charcoal/60">{item.wrong}</span>
                  </div>

                  <div className="bg-maize/20 rounded-2xl p-5 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-maize flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <span className="text-charcoal font-medium">
                      {item.right}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section variant="cream">
          <SectionHeader
            eyebrow="Questions"
            title="Frequently Asked"
            description="Common questions from parents."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-border/50"
              >
                <h3 className="font-semibold text-charcoal mb-3">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="charcoal">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Child&apos;s School Using Alfanumrik?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              If your school uses Alfanumrik, you already have access to the
              parent portal. Ask your school administration for login details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-pill bg-maize text-charcoal text-base px-8"
              >
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/for-schools"
                className="btn-pill border-2 border-white/20 text-white text-base px-8 hover:bg-white/10"
              >
                Recommend to Your School
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
