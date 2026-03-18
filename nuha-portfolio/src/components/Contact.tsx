"use client";

import { useEffect, useRef } from "react";

const links = [
  {
    label: "Email",
    value: "nuha2003usa@gmail.com",
    href: "mailto:nuha2003usa@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "586-344-2424",
    href: "tel:5863442424",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.68 5.68l1.07-1.07a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nuhahmed",
    href: "https://linkedin.com/in/nuhahmed",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/nuha21",
    href: "https://github.com/nuha21",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="reveal mb-16">
        <span
          className="text-xs tracking-[0.2em] uppercase text-rose-deep font-mono mb-3 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Let's connect
        </span>
        <h2
          className="text-5xl md:text-6xl font-light text-charcoal leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Say Hello
        </h2>
        <div className="petal-divider mt-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left — message */}
        <div className="reveal delay-100">
          <div className="bg-rose-light rounded-2xl p-8 border border-rose-blush h-full">
            <p
              className="text-2xl font-light text-charcoal leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "I'm always open to new opportunities, collaborations, and conversations."
            </p>
            <p className="mt-4 text-sm text-charcoal-light leading-relaxed">
              Whether you're building a product team, have a consulting need, or just want to
              chat about tech — I'd love to hear from you.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-charcoal-mid rounded-full animate-pulse" />
              <span className="text-xs text-charcoal-light" style={{ fontFamily: "var(--font-mono)" }}>
                Based in Detroit, MI · Open to remote
              </span>
            </div>
          </div>
        </div>

        {/* Right — links */}
        <div className="reveal delay-200 space-y-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 bg-cream-warm rounded-xl px-5 py-4 border border-rose-blush/30 hover:border-rose-muted hover:bg-rose-light/50 transition-all duration-200 group"
            >
              <span className="text-charcoal-light group-hover:text-rose-deep transition-colors">
                {link.icon}
              </span>
              <div>
                <p className="text-xs text-charcoal-light mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                  {link.label}
                </p>
                <p className="text-sm text-charcoal font-medium group-hover:text-rose-deep transition-colors">
                  {link.value}
                </p>
              </div>
              <span className="ml-auto text-charcoal/20 group-hover:text-rose-muted transition-colors text-lg">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
