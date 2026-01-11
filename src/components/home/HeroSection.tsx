import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingDown, TrendingUp, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Admin workload reduction",
    description: "Automated admissions, fees, payroll & compliance",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Teacher efficiency boost",
    description: "AI-assisted planning, assessment & reporting",
  },
  {
    icon: TrendingUp,
    value: "25%",
    label: "Better learning outcomes",
    description: "Adaptive pathways & 24/7 AI tutoring",
  },
  {
    icon: Zap,
    value: "Zero",
    label: "Data silos",
    description: "Academics, finance, attendance in one system",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-maize overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-charcoal/10 rounded-full animate-float" />
        <div
          className="absolute top-40 right-40 w-6 h-6 border-2 border-charcoal/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-charcoal/10 rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-60 left-40 w-8 h-8 border-2 border-charcoal/10 rounded-lg rotate-12 animate-squiggle" />

        {/* Squiggle decoration */}
        <svg
          className="absolute top-1/4 right-10 w-24 h-24 text-charcoal/10 animate-squiggle"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M10,50 Q30,20 50,50 T90,50" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal text-white rounded-full mb-6 shadow-lg">
              <span className="w-2 h-2 bg-leaf rounded-full animate-pulse" />
              <span className="text-sm font-semibold">
                India&apos;s First School Intelligence OS
              </span>
            </div>

            {/* Main Headline - What */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight mb-4">The Intelligence <span className="highlight-pill">Operating System</span> for Schools</h1>

            {/* Subheadline - For Whom */}
            <h2 className="text-xl lg:text-2xl text-charcoal/80 font-medium leading-relaxed mb-4">
              Built for Indian K-12 schools to unify ERP, LMS, Finance, and
              Adaptive Learning on one AI-driven platform.
            </h2>

            {/* Why Now - Key Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-charcoal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <metric.icon className="w-4 h-4 text-maize" />
                    </div>
                    <span className="text-2xl font-bold text-charcoal">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal mb-0.5">
                    {metric.label}
                  </p>
                  <p className="text-xs text-charcoal/60">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Primary CTA - Single focused action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="flex-1 sm:flex-initial">
                <Button className="btn-pill-secondary text-base px-8 py-6 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all">
                  Request a School Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href="tel:+919315940211"
                className="flex items-center justify-center gap-2 px-6 py-3 text-charcoal font-medium hover:bg-charcoal/10 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 93159 40211</span>
              </a>
            </div>

            {/* Social Proof - Case Study Teaser */}
            <div className="mt-8 pt-6 border-t border-charcoal/10">
              <p className="text-sm text-charcoal/70 mb-3">
                <span className="font-semibold text-charcoal">
                  Trusted by forward-thinking institutions
                </span>{" "}
                across India
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm">
                  <span className="w-2 h-2 bg-leaf rounded-full" />
                  <span className="text-charcoal font-medium">
                    Pilot Schools Live
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm">
                  <span className="w-2 h-2 bg-sky rounded-full" />
                  <span className="text-charcoal font-medium">
                    Case Studies Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-white/30 rounded-[3rem] backdrop-blur-sm border border-white/50 -rotate-3 transition-transform hover:rotate-0 duration-500" />
              <Image
                src="/images/hero-illustration.png"
                alt="Alfanumrik School OS - Connected School Ecosystem showing unified ERP, LMS, Finance, and Adaptive Learning"
                width={600}
                height={600}
                className="relative z-10 drop-shadow-2xl transition-transform hover:scale-105 duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
            fill="#FFFDF5"
          />
        </svg>
      </div>
    </section>
  );
}
