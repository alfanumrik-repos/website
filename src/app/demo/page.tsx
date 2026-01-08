import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  CheckCircle,
  ArrowRight,
  Users,
  School,
  Video,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo | Alfanumrik",
  description:
    "See Alfanumrik in action. Schedule a personalized demo for your school.",
};

const whatToExpect = [
  {
    icon: Video,
    title: "Personalized Walkthrough",
    description:
      "A demo tailored to your school's specific needs and challenges.",
  },
  {
    icon: Users,
    title: "Q&A Session",
    description:
      "Direct conversation with our team to answer your questions.",
  },
  {
    icon: School,
    title: "Implementation Discussion",
    description: "Understanding of what adoption would look like for you.",
  },
  {
    icon: Clock,
    title: "45-60 Minutes",
    description: "Enough time for depth, respect for your schedule.",
  },
];

const credibilitySignals = [
  "Compliance-first design for Indian schools",
  "Research-backed learning science",
  "Phased implementation approach",
  "Ongoing support partnership",
];

const schoolSizes = [
  { value: "under-500", label: "Under 500 students" },
  { value: "500-1000", label: "500-1,000 students" },
  { value: "1000-2000", label: "1,000-2,000 students" },
  { value: "2000-5000", label: "2,000-5,000 students" },
  { value: "over-5000", label: "Over 5,000 students" },
];

const roles = [
  { value: "principal", label: "Principal / Director" },
  { value: "administrator", label: "Administrator" },
  { value: "management", label: "Management Committee" },
  { value: "coordinator", label: "Academic Coordinator" },
  { value: "it", label: "IT / Technology Lead" },
  { value: "other", label: "Other" },
];

export default function DemoPage() {
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
                  <Calendar className="w-6 h-6 text-maize" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                See Alfanumrik in Action
              </h1>

              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                No pressure. No sales pitch. Just a genuine conversation about
                whether Alfanumrik is right for your school.
              </p>

              {/* What to Expect */}
              <div className="grid grid-cols-2 gap-4">
                {whatToExpect.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/50 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <item.icon className="w-6 h-6 text-charcoal mb-2" />
                    <h3 className="font-semibold text-charcoal text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/60 text-xs">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h2 className="text-2xl font-semibold text-charcoal mb-2">
                Request Your Demo
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your school and we&apos;ll schedule a personalized
                session.
              </p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Full name"
                      className="rounded-xl py-5"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <select
                      id="role"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select role</option>
                      {roles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@school.edu"
                    className="rounded-xl py-5"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    className="rounded-xl py-5"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    placeholder="Your school's name"
                    className="rounded-xl py-5"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      className="rounded-xl py-5"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">School Size *</Label>
                    <select
                      id="size"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select size</option>
                      {schoolSizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">
                    What interests you most about Alfanumrik?
                  </Label>
                  <Textarea
                    id="interests"
                    placeholder="Tell us about your current challenges or what you're hoping to achieve..."
                    className="rounded-xl min-h-[100px]"
                  />
                </div>

                <Button className="w-full btn-pill-secondary py-6 text-base">
                  Submit Demo Request
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We&apos;ll contact you within 24 hours to schedule your demo.
                </p>
              </form>
            </div>
          </div>
        </Section>

        {/* Credibility */}
        <Section variant="cream">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-charcoal mb-8">
              Why Schools Trust Alfanumrik
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {credibilitySignals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border/50"
                >
                  <CheckCircle className="w-4 h-4 text-leaf" />
                  <span className="text-sm text-charcoal">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Not Ready */}
        <Section variant="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Not Ready for a Demo Yet?
            </h2>
            <p className="text-muted-foreground mb-8">
              That&apos;s completely okay. Explore at your own pace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/product"
                className="btn-pill btn-pill-outline text-sm px-6"
              >
                Explore the Product
              </a>
              <a
                href="/for-schools"
                className="btn-pill btn-pill-outline text-sm px-6"
              >
                Is Alfanumrik Right for You?
              </a>
              <a
                href="/research"
                className="btn-pill btn-pill-outline text-sm px-6"
              >
                Read Our Research
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
