import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "cream" | "maize" | "charcoal" | "white";
  id?: string;
}

export function Section({
  children,
  className,
  variant = "cream",
  id,
}: SectionProps) {
  const variants = {
    cream: "bg-cream text-charcoal",
    maize: "bg-maize text-charcoal",
    charcoal: "bg-charcoal text-white",
    white: "bg-white text-charcoal",
  };

  return (
    <section id={id} className={cn("py-20 lg:py-28", variants[variant], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 bg-maize/30 rounded-full text-sm font-medium text-charcoal mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
