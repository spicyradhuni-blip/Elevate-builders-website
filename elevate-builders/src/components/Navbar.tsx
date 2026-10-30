"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/manpower", label: "Manpower" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Elevate Builders" width={160} height={48} className="h-12 w-auto object-contain" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#quotation"
              className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Request Quotation
            </Link>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="block py-2 text-base font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact#quotation" className="block bg-primary text-white text-center py-3 rounded-md font-medium" onClick={() => setOpen(false)}>
              Request Quotation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}