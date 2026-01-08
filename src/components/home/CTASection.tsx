import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <Section variant="maize" className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-charcoal/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-charcoal/10 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-charcoal/10 rotate-45" />

        <svg
          className="absolute bottom-20 left-20 w-16 h-16 text-charcoal/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M10,50 Q30,20 50,50 T90,50" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/10 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-charcoal" />
          <span className="text-sm font-medium text-charcoal">
            Ready to Transform?
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
          The Decision to Request a Demo
          <br />
          Should Feel{" "}
          <span className="relative inline-block">
            Inevitable
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-charcoal/30"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0,4 Q50,8 100,4 T200,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          , Not Pushed
        </h2>

        <p className="text-lg lg:text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Schools arrive curious. Stay informed. Leave convinced.{" "}
          <span className="text-charcoal font-medium">
            Let us show you what&apos;s possible.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo">
            <Button className="btn-pill-secondary text-base px-10 py-7 w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/product">
            <Button className="btn-pill-outline text-base px-10 py-7 w-full sm:w-auto">
              Continue Exploring
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-charcoal/50">
          No commitment required. Experience the system firsthand.
        </p>
      </div>
    </Section>
  );
}
