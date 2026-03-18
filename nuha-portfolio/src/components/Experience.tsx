"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Software Engineering Consultant",
    company: "Ernst & Young",
    location: "Detroit, MI",
    period: "July 2025 – Present",
    color: "bg-rose-light",
    accent: "border-rose-deep",
    tag: "Current",
    bullets: [
      "Owned end-to-end project delivery for concurrent client engagements — from kickoff through launch, coordinating across engineering leads, PMs, and C-suite.",
      "Conducted structured stakeholder interviews surfacing technical challenges, informing product solutions that saved clients $5B+ in annual tax benefits.",
      "Translated complex technical architectures (APIs, databases, cloud) into executive-ready and IRS-ready deliverables.",
      "Managed scope alignment, risk assessment, and deliverables under strict regulatory and compliance frameworks.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Greenlancer",
    location: "Detroit, MI",
    period: "Oct 2024 – Jan 2025",
    color: "bg-cream-warm",
    accent: "border-charcoal-light",
    tag: null,
    bullets: [
      "Managed and integrated thousands of SQL data entries into existing database infrastructure for capacity forecasting across 7,500+ contractors.",
      "Contributed to deployment of a .NET-based project management platform supporting $2.5B+ in commercial and residential solar & EV infrastructure.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Ally Financial",
    location: "Detroit, MI",
    period: "May 2024 – Aug 2024",
    color: "bg-charcoal-faint",
    accent: "border-charcoal-mid",
    tag: null,
    bullets: [
      "Built end-to-end full-stack features with React/TypeScript + Java, coordinating cross-functional partner dependencies to meet deployment milestones.",
      "Participated in all SDLC phases — aligning resources across product, engineering, and QA for on-time releases.",
      "Led team to 1st place in the Ally AI Hackathon, transforming a complex business challenge into a data-driven AI solution.",
    ],
  },
  {
    role: "Activity Facilitator & Program Coordinator",
    company: "C2 Pipeline",
    location: "Detroit, MI",
    period: "Sept 2021 – Present",
    color: "bg-rose-light/50",
    accent: "border-rose-blush",
    tag: null,
    bullets: [
      "Managed program scheduling, curriculum delivery, and operations across 18 schools for underprivileged students in after-school and summer camp settings.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
      id="experience"
      ref={sectionRef}
      className="py-28 px-6 max-w-4xl mx-auto"
    >
      {/* Section header */}
      <div className="reveal mb-16">
        <span
          className="text-xs tracking-[0.2em] uppercase text-rose-deep font-mono mb-3 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Where I've been
        </span>
        <h2
          className="text-5xl md:text-6xl font-light text-charcoal leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Experience
        </h2>
        <div className="petal-divider mt-4" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-rose-blush via-rose-muted to-transparent opacity-40 hidden md:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} md:pl-10 relative`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-rose-muted hidden md:block" />

              <div
                className={`${exp.color} rounded-2xl p-6 border-l-4 ${exp.accent} hover:shadow-sm transition-shadow duration-300`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-xl font-medium text-charcoal"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {exp.role}
                      </h3>
                      {exp.tag && (
                        <span className="text-xs bg-rose-deep text-cream px-2 py-0.5 rounded-full font-mono">
                          {exp.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-charcoal-light text-sm mt-0.5 font-medium">
                      {exp.company}{" "}
                      <span className="font-normal opacity-70">· {exp.location}</span>
                    </p>
                  </div>
                  <span
                    className="text-xs text-charcoal-light bg-white/50 px-3 py-1.5 rounded-full border border-charcoal/10 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-charcoal-mid leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-muted flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
