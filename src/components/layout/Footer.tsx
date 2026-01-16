import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Product Overview", href: "/product" },
    { name: "School OS", href: "/product" },
    { name: "Adaptive Learning", href: "/product/adaptive-learning" },
    { name: "School Operations", href: "/product#operations" },
    { name: "Academic Delivery", href: "/product#academic" },
  ],
  audiences: [
    { name: "For Schools", href: "/for-schools" },
    { name: "For Teachers", href: "/for-teachers" },
    { name: "For Parents", href: "/for-parents" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Research & Insights", href: "/research" },
    { name: "Contact", href: "/contact" },
    { name: "Request Demo", href: "/demo" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Banner */}
      <div className="bg-maize py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-1">
                Ready to transform your school?
              </h3>
              <p className="text-charcoal/70">
                Join schools across India leveraging the power of School OS
              </p>
            </div>
            <Link
              href="/demo"
              className="btn-pill btn-pill-secondary px-8 py-4 shrink-0"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-xl text-white">
                  Alfanumrik
                </span>
                <span className="text-xs text-maize font-medium">
                  India&apos;s First School Intelligence OS
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              The School Management Intelligence Platform for Indian K-12 Schools.
              Unifying ERP, LMS, Finance, and Adaptive Learning into one 
              AI-powered operating system.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:Info@Alfanumrik.com"
                className="flex items-center gap-3 text-white/60 hover:text-maize transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Info@Alfanumrik.com
              </a>
              <a
                href="tel:+919315940211"
                className="flex items-center gap-3 text-white/60 hover:text-maize transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 93159 40211
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Noida, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-maize transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">For You</h4>
            <ul className="space-y-3">
              {footerLinks.audiences.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-maize transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-4 mt-8">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-maize transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Insights on school systems, learning design, and educational futures.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-maize transition-colors"
              />
              <button
                type="submit"
                className="w-full btn-pill bg-maize text-charcoal text-sm font-semibold hover:bg-[#FFC854] transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-white/40 text-sm mb-3">Follow us</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/alfanumrik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-maize hover:text-charcoal transition-colors group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Alfanumrik. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/40 hover:text-white/60 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
