"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Product",
    href: "/product",
    children: [
      { name: "Product Overview", href: "/product" },
      { name: "Adaptive Learning OS", href: "/product/adaptive-learning" },
    ],
  },
  {
    name: "For Schools",
    href: "/for-schools",
  },
  {
    name: "For Teachers",
    href: "/for-teachers",
  },
  {
    name: "For Parents",
    href: "/for-parents",
  },
  { name: "Research", href: "/research" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="bg-charcoal text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919315940211"
              className="flex items-center gap-2 hover:text-maize transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 93159 40211</span>
            </a>
            <span className="text-white/50">|</span>
            <a
              href="mailto:sales@alfanumrik.com"
              className="hover:text-maize transition-colors"
            >
              sales@alfanumrik.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/70">India&apos;s First School Intelligence OS</span>
            <span className="w-2 h-2 bg-leaf rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-cream/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-xl text-charcoal">
                  Alfanumrik
                </span>
                <span className="text-[10px] text-charcoal/60 -mt-1 hidden sm:block">
                  School OS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors rounded-full hover:bg-charcoal/5">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors rounded-full hover:bg-charcoal/5"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded-2xl shadow-xl border border-border/50 py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-charcoal/80 hover:text-charcoal hover:bg-maize/20 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors"
              >
                Contact
              </Link>
              <Link href="/demo">
                <Button className="btn-pill-secondary text-sm px-5 py-2.5 shadow-lg hover:shadow-xl transition-all">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-cream w-full max-w-sm">
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Contact Info */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <a
                      href="tel:+919315940211"
                      className="flex items-center gap-2 text-charcoal font-medium mb-2"
                    >
                      <Phone className="w-5 h-5" />
                      +91 93159 40211
                    </a>
                    <a
                      href="mailto:sales@alfanumrik.com"
                      className="text-charcoal/70 text-sm"
                    >
                      sales@alfanumrik.com
                    </a>
                  </div>

                  <nav className="flex-1 space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <div className="space-y-1">
                            <p className="px-4 py-2 text-sm font-semibold text-charcoal/60">
                              {item.name}
                            </p>
                            {item.children.map((child) => (
                              <SheetClose asChild key={child.name}>
                                <Link
                                  href={child.href}
                                  className="block px-6 py-2.5 text-base text-charcoal hover:bg-maize/20 rounded-lg transition-colors"
                                >
                                  {child.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="block px-4 py-3 text-base font-medium text-charcoal hover:bg-maize/20 rounded-lg transition-colors"
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="border-t border-border pt-6 space-y-3">
                    <SheetClose asChild>
                      <Link href="/contact" className="block">
                        <Button
                          variant="outline"
                          className="w-full rounded-full py-6"
                        >
                          Contact Us
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/demo" className="block">
                        <Button className="w-full btn-pill-secondary py-6">
                          Request Demo
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
