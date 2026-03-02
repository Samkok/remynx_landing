"use client";

import { motion } from "framer-motion";

const segments = [
  {
    label: "Ambitious Students",
    description:
      "You have years of compounding ahead of you. REMYNX helps you spend them with intention — not just scrolling through them.",
    detail:
      "Track study days, personal projects, and growth milestones. See your momentum build across weeks and months.",
  },
  {
    label: "Growth-Focused Employees",
    description:
      "Your career is built day by day. REMYNX gives you the clarity to see whether you're moving forward or standing still.",
    detail:
      "Log what you learned, shipped, or improved. Spot patterns in your most productive periods.",
  },
  {
    label: "Disciplined Founders",
    description:
      "You know that execution is everything. REMYNX keeps you honest about how your days are actually being spent.",
    detail:
      "No distractions, no gamification. Just a clean, honest record of your operational days.",
  },
];

export default function TargetAudience() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            Who It&apos;s For
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            For people who refuse
            <br />
            <span className="text-accent">to drift through life.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="border-t-2 border-accent/30 pt-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {segment.label}
              </h3>
              <p className="text-muted leading-relaxed mb-4 text-sm">
                {segment.description}
              </p>
              <p className="text-xs text-muted/70 leading-relaxed">
                {segment.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
