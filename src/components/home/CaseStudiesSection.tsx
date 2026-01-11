import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { ArrowRight, Quote, GraduationCap } from "lucide-react";

const caseStudies = [
  {
    schoolName: "Delhi Public School, Sector 45",
    location: "Gurugram, Haryana",
    studentCount: "2,500+",
    keyResult: "40% reduction in admin time",
    quote: "Alfanumrik transformed how we manage our school. What used to take days now takes hours.",
    author: "Dr. Priya Sharma",
    role: "Principal",
    metrics: [
      { label: "Admin Time Saved", value: "40%" },
      { label: "Fee Collection Rate", value: "98%" },
      { label: "Parent Engagement", value: "3x" },
    ],
  },
  {
    schoolName: "St. Xavier's High School",
    location: "Noida, UP",
    studentCount: "1,800+",
    keyResult: "85% teacher satisfaction",
    quote: "The AI-assisted lesson planning has given our teachers time back to focus on actual teaching.",
    author: "Mr. Rajesh Kumar",
    role: "Academic Director",
    metrics: [
      { label: "Teacher Satisfaction", value: "85%" },
      { label: "Report Generation", value: "5x faster" },
      { label: "Data Accuracy", value: "99.5%" },
    ],
  },
  {
    schoolName: "Modern Public School",
    location: "Jaipur, Rajasthan",
    studentCount: "3,200+",
    keyResult: "25% better learning outcomes",
    quote: "The adaptive learning paths have made personalized education possible at scale.",
    author: "Mrs. Anita Joshi",
    role: "Founder Director",
    metrics: [
      { label: "Learning Outcomes", value: "+25%" },
      { label: "Student Engagement", value: "45%" },
      { label: "At-risk Identification", value: "2 weeks early" },
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <Section variant="cream">
      <SectionHeader
        eyebrow="Success Stories"
        title="Schools Thriving with the School OS"
        description="Real results from real schools. See how educational institutions across India are transforming with Alfanumrik."
      />

      <div className="space-y-8">
        {caseStudies.map((study) => (
          <div
            key={study.schoolName}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* School Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-maize rounded-2xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      {study.schoolName}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {study.location} • {study.studentCount} Students
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-maize/30" />
                  <blockquote className="pl-6 text-lg text-charcoal/80 italic leading-relaxed mb-4">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                  <div className="pl-6">
                    <p className="font-semibold text-charcoal">{study.author}</p>
                    <p className="text-sm text-muted-foreground">{study.role}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-charcoal rounded-2xl p-6 text-white">
                <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">
                  Key Results
                </h4>
                <div className="space-y-4">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">{metric.label}</span>
                      <span className="text-xl font-bold text-maize">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 btn-pill btn-pill-secondary px-8 py-4"
        >
          See How It Works for Your School
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">
          Every school is different. We&apos;ll show you a demo tailored to your needs.
        </p>
      </div>
    </Section>
  );
}
