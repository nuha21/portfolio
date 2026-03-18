"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const timer = setTimeout(() => {
      items.forEach((item) => item.classList.add("visible"));
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[480px] h-[480px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #E8C4B8 0%, transparent 70%)",
        }}
      />
      

      {/* Floating petal accents */}
      <div className="absolute top-[18%] left-[12%] text-rose-blush opacity-30 text-4xl select-none animate-float">
        ✿
      </div>
      <div
        className="absolute bottom-[22%] right-[14%] text-rose-muted opacity-25 text-2xl select-none animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        ❋
      </div>
      <div
        className="absolute top-[42%] right-[8%] text-charcoal-mid opacity-10 text-6xl select-none animate-float"
        style={{ animationDelay: "3s" }}
      >
        ◌
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Label pill */}
        <div className="reveal delay-100 inline-flex items-center gap-2 mb-8">
          <span className="petal-divider" />
          <span
            className="text-xs tracking-[0.22em] uppercase font-mono text-charcoal-light px-3 py-1 rounded-full border border-rose-blush/50 bg-cream-warm/60"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Software Engineer & Product Consultant
          </span>
          <span className="petal-divider" />
        </div>

        {/* Name */}
        <h1
          className="reveal delay-200 text-7xl md:text-8xl font-light text-charcoal mb-4 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Nuha
          <br />
          <span className="italic text-rose-deep">Ahmed</span>
        </h1>

        {/* Tagline */}
        <p
          className="reveal delay-300 mt-6 text-lg md:text-xl text-charcoal-light font-light max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          I bridge{" "}
          <span className="text-charcoal font-medium">complex systems</span>{" "}
          and{" "}
          <span className="text-charcoal font-medium">human-centered solutions</span>
          {" "}— from Detroit.
        </p>

        {/* CTA buttons */}
        <div className="reveal delay-400 mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="#experience"
            className="px-6 py-3 rounded-full bg-charcoal text-cream text-sm font-medium tracking-wide hover:bg-charcoal-mid transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-rose-muted text-charcoal text-sm font-medium tracking-wide hover:bg-rose-light/60 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Certifications */}
        <div className="reveal delay-500 mt-12 flex flex-wrap gap-2 justify-center">
          {["AWS Certified Cloud Practitioner", "AWS Certified AI Practitioner"].map(
            (cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-light bg-charcoal-faint px-3 py-1.5 rounded-full border border-charcoal/10"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-muted inline-block" />
                {cert}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-charcoal-light" style={{ fontFamily: "var(--font-mono)" }}>
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-rose-muted to-transparent" />
      </div>
    </section>
  );
}
