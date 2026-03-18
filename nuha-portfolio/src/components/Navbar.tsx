"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-rose-blush/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-charcoal font-light tracking-wide text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NA<span className="text-rose-deep">.</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal-light hover:text-charcoal transition-colors duration-150"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:nuha2003usa@gmail.com"
            className="text-xs bg-charcoal text-cream px-4 py-2 rounded-full hover:bg-charcoal-mid transition-colors duration-150"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
