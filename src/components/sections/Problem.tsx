"use client";

import { motion } from "framer-motion";

const problems = [
  {
    stat: "365",
    unit: "days per year.",
    text: "Most people can't recall what they did three days ago. The days blur together — not because life is boring, but because nothing marks them.",
  },
  {
    stat: "Busy ≠ Productive.",
    unit: "",
    text: "You can fill every hour with activity and still feel like the day was wasted. Being busy is easy. Making each day count is different.",
  },
  {
    stat: "Drift is silent.",
    unit: "",
    text: "No single lost day feels catastrophic. But after weeks, months, and years of unmeasured time — the cost is enormous. You don't notice it until it's gone.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Problem() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            You&apos;re not lazy.
            <br />
            <span className="text-muted font-normal">
              You&apos;re just not measuring.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-border rounded-2xl p-8 bg-background"
            >
              <p className="text-3xl sm:text-4xl font-bold text-accent mb-1 leading-none">
                {item.stat}
              </p>
              {item.unit && (
                <p className="text-lg text-foreground font-semibold mb-4">
                  {item.unit}
                </p>
              )}
              <p className="text-muted leading-relaxed text-sm mt-4">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
