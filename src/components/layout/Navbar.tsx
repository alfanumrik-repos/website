"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    name: "For You",
    href: "#",
    children: [
      { name: "For Schools", href: "/for-schools" },
      { name: "For Teachers", href: "/for-teachers" },
      { name: "For Parents", href: "/for-parents" },
    ],
  },
  { name: "Research", href: "/research" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-maize rounded-xl flex items-center justify-center">
              <span className="font-bold text-charcoal text-xl">α</span>
            </div>
            <span className="font-heading font-semibold text-xl text-charcoal">
              Alfanumrik
            </span>
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
              <Button className="btn-pill-secondary text-sm px-5 py-2.5">
                Request Demo
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
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
