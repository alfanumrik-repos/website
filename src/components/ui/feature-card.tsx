import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "light" | "dark";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "light",
  className,
}: FeatureCardProps) {
  const variants = {
    light: "bg-white text-charcoal",
    dark: "bg-charcoal text-white",
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]",
        variant === "light" && "shadow-xl shadow-charcoal/5 border border-border/50",
        variants[variant],
        className
      )}
    >
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
          variant === "light" ? "bg-maize/20" : "bg-maize"
        )}
      >
        <Icon
          className={cn(
            "w-7 h-7",
            variant === "light" ? "text-charcoal" : "text-charcoal"
          )}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p
        className={cn(
          "leading-relaxed",
          variant === "light" ? "text-muted-foreground" : "text-white/70"
        )}
      >
        {description}
      </p>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-2">
        {value}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  organization,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-8 shadow-xl shadow-charcoal/5 border border-border/50",
        className
      )}
    >
      <blockquote className="text-lg leading-relaxed text-charcoal mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-maize/30 flex items-center justify-center">
          <span className="font-semibold text-charcoal">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold text-charcoal">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {organization}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function PillarCard({
  number,
  title,
  description,
  features,
  className,
}: PillarCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-8 shadow-xl shadow-charcoal/5 border border-border/50 h-full",
        className
      )}
    >
      <span className="inline-flex w-10 h-10 rounded-full bg-maize text-charcoal font-bold text-sm items-center justify-center mb-6">
        {number}
      </span>
      <h3 className="text-xl font-semibold mb-3 text-charcoal">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-charcoal/80">
            <span className="w-1.5 h-1.5 rounded-full bg-maize mt-2 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
