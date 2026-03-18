"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Product & Strategy",
    icon: "✦",
    color: "bg-rose-light border-rose-blush",
    tagColor: "bg-rose-blush/60 text-rose-deep",
    skills: [
      "Product Sense",
      "End-to-End Delivery",
      "Discovery to Launch",
      "User Research",
      "Customer Pain Point Analysis",
      "Prioritization",
      "Growth Opportunity Identification",
      "Cross-Functional Collaboration",
      "Stakeholder Influence",
    ],
  },
  {
    category: "Technical",
    icon: "◈",
    color: "bg-charcoal-faint border-charcoal/20",
    tagColor: "bg-charcoal/10 text-charcoal",
    skills: [
      "React",
      "TypeScript",
      "Java",
      ".NET",
      "SQL",
      "API Design",
      "AWS (Cloud + AI)",
      "SDLC",
      "Data Analysis",
      "Agile",
    ],
  },
  {
    category: "Operations & Comms",
    icon: "❋",
    color: "bg-cream-warm border-rose-muted/40",
    tagColor: "bg-charcoal-mid/10 text-charcoal-mid",
    skills: [
      "Capacity Planning",
      "Deployment Scheduling",
      "Business–Technical Translation",
      "Executive Communication",
      "Data-Driven Decision Making",
      "Global Project Coordination",
    ],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-28 px-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="reveal mb-16">
        <span
          className="text-xs tracking-[0.2em] uppercase text-rose-deep font-mono mb-3 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          What I bring
        </span>
        <h2
          className="text-5xl md:text-6xl font-light text-charcoal leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Skills
        </h2>
        <div className="petal-divider mt-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className={`reveal delay-${(i + 1) * 100} ${group.color} border rounded-2xl p-6`}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-rose-deep text-lg">{group.icon}</span>
              <h3
                className="text-base font-medium text-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className={`${group.tagColor} text-xs px-2.5 py-1 rounded-full`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education strip */}
      <div className="reveal delay-400 mt-10 bg-charcoal rounded-2xl p-6 text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest uppercase text-rose-blush mb-1" style={{ fontFamily: "var(--font-mono)" }}>
            Education
          </p>
          <h4 className="text-xl font-light" style={{ fontFamily: "var(--font-display)" }}>
            B.S. Computer Science{" "}
            <span className="italic opacity-70">· Minor in Business Admin</span>
          </h4>
          <p className="text-sm text-cream/60 mt-1">Wayne State University, Detroit, MI</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-rose-deep/30 text-rose-light px-3 py-1.5 rounded-full border border-rose-blush/20" style={{ fontFamily: "var(--font-mono)" }}>
            AWS Cloud Practitioner
          </span>
          <span className="text-xs bg-rose-deep/30 text-rose-light px-3 py-1.5 rounded-full border border-rose-blush/20" style={{ fontFamily: "var(--font-mono)" }}>
            AWS AI Practitioner
          </span>
        </div>
      </div>
    </section>
  );
}
