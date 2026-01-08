import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-leaf rounded-full animate-pulse" />
              <span className="text-sm font-medium text-charcoal">
                Reimagining School Systems
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight mb-6">
              The Operating System for <span className="highlight-pill">Modern</span> Schools
            </h1>

            <p className="text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-lg">
              Not just ERP, not just LMS. Alfanumrik is an intelligence layer
              for modern schools — designed for governance, built for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo">
                <Button className="btn-pill-secondary text-base px-8 py-6 w-full sm:w-auto">
                  Request a School Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/product">
                <Button className="btn-pill-outline text-base px-8 py-6 w-full sm:w-auto">
                  Explore the System
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-charcoal/10">
              <p className="text-sm text-charcoal/60 mb-4">
                Trusted by forward-thinking institutions
              </p>
              <div className="flex items-center gap-8 opacity-60">
                {/* Placeholder for school logos */}
                <div className="h-8 w-24 bg-charcoal/20 rounded" />
                <div className="h-8 w-20 bg-charcoal/20 rounded" />
                <div className="h-8 w-28 bg-charcoal/20 rounded" />
              </div>
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-white/30 rounded-[3rem] backdrop-blur-sm border border-white/50 -rotate-3 transition-transform hover:rotate-0 duration-500" />
              <Image
                src="/images/hero-illustration.png"
                alt="Alfanumrik Connected School Ecosystem"
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
