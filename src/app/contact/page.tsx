import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Alfanumrik",
  description: "Get in touch with the Alfanumrik team. We're here to help.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "For general inquiries",
    value: "hello@alfanumrik.com",
    href: "mailto:hello@alfanumrik.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri, 9am-6pm IST",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit us",
    value: "Bengaluru, India",
    href: "#",
  },
];

const inquiryTypes = [
  { value: "demo", label: "Request a Demo" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "support", label: "Support Request" },
  { value: "press", label: "Press & Media" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section variant="cream" className="pt-20 lg:pt-28">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-maize/30 rounded-full text-sm font-medium text-charcoal mb-6">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              Whether you&apos;re exploring Alfanumrik for your school, seeking
              partnership opportunities, or have questions—we&apos;re here to help.
            </p>
          </div>
        </Section>

        {/* Contact Methods */}
        <Section variant="white" className="py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-maize/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-maize transition-colors">
                  <method.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {method.description}
                </p>
                <p className="font-medium text-charcoal group-hover:text-maize transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </Section>

        {/* Contact Form */}
        <Section variant="cream">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50">
              <h2 className="text-2xl font-semibold text-charcoal mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="rounded-xl py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="rounded-xl py-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-xl py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    placeholder="School or organization name"
                    className="rounded-xl py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <select
                    id="inquiryType"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    className="rounded-xl min-h-[150px]"
                  />
                </div>

                <Button className="w-full btn-pill-secondary py-6 text-base">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <div className="bg-charcoal rounded-3xl p-8 lg:p-10 mb-8">
                <MessageCircle className="w-10 h-10 text-maize mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Looking for a Demo?
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  If you&apos;re interested in seeing Alfanumrik in action, our demo
                  request page provides a more tailored experience.
                </p>
                <a
                  href="/demo"
                  className="inline-flex items-center gap-2 text-maize font-medium hover:underline"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-maize/20 rounded-3xl p-8">
                <Clock className="w-10 h-10 text-charcoal mb-6" />
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  Response Time
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We aim to respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
