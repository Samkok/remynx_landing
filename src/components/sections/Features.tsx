"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Daily Achievement Logging",
    description:
      "Capture one honest achievement at the end of every day — small or significant, it gets recorded.",
    icon: "◆",
  },
  {
    title: "Visual Life Dashboard",
    description:
      "See your months rendered as a visual calendar of productive and rest days at a glance.",
    icon: "◈",
  },
  {
    title: "Adaptive Reminders",
    description:
      "Smart notifications that adapt to your schedule — present when awareness matters, silent when you need focus.",
    icon: "◉",
  },
  {
    title: "Rest Day Mode",
    description:
      "Rest is recognised, not penalised. Rest days are honoured as part of a balanced, intentional life.",
    icon: "◎",
  },
  {
    title: "Privacy First",
    description:
      "Your data stays yours. REMYNX does not sell your information. Full stop.",
    icon: "◍",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Built around awareness.
            <br />
            <span className="text-muted font-normal">Not achievement theatre.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`group relative bg-surface border border-border rounded-2xl p-8 cursor-default transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 ${
                // Make last card span 2 cols on sm to fill grid evenly (5 items in 2-col grid)
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <span className="text-2xl text-accent mb-4 block">{feature.icon}</span>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <h3 className="text-base font-bold text-foreground mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
