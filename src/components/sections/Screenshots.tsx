"use client";

import { motion } from "framer-motion";

const mockups = [
  {
    label: "Life Dashboard",
    description:
      "See your productive days at a glance — a full visual history of your month.",
    gradient: "from-amber-900/40 via-surface to-background",
    accent: "#D97706",
    preview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
        <p className="text-[9px] uppercase tracking-widest text-muted font-semibold">
          October
        </p>
        <div className="grid grid-cols-7 gap-1 w-full">
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-[3px] ${
                [1, 2, 3, 5, 7, 8, 10, 12, 15, 16, 17, 19, 22, 23, 24, 26, 29].includes(i)
                  ? "bg-accent"
                  : "bg-surface-2 border border-border"
              }`}
            />
          ))}
        </div>
        <p className="text-[9px] text-muted">17 days logged</p>
      </div>
    ),
  },
  {
    label: "Achievement Log",
    description:
      "A running timeline of what you accomplished — day by day, word by word.",
    gradient: "from-blue-900/30 via-surface to-background",
    accent: "#60A5FA",
    preview: (
      <div className="w-full h-full flex flex-col gap-2 p-4 pt-6">
        <p className="text-[9px] uppercase tracking-widest text-muted font-semibold mb-1">
          This Week
        </p>
        {[
          "Shipped the onboarding flow",
          "Called 3 leads, closed 1",
          "Published blog post",
          "Gym + 8hrs sleep",
        ].map((entry, i) => (
          <div
            key={i}
            className="flex items-start gap-2 bg-surface-2 rounded-lg px-3 py-2 border border-border"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
            <p className="text-[9px] text-foreground leading-tight">{entry}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Live Activity",
    description:
      "A real-time countdown reminds you — gently — that your day is still in motion.",
    gradient: "from-orange-900/30 via-surface to-background",
    accent: "#F97316",
    preview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
        <p className="text-[9px] uppercase tracking-widest text-muted font-semibold">
          Today remaining
        </p>
        <p className="font-mono text-2xl font-bold text-accent tabular-nums">
          04:37:21
        </p>
        <div className="w-full h-px bg-border" />
        <p className="text-[9px] text-muted text-center">
          What will you do with the time left?
        </p>
        <div className="w-full bg-accent rounded-lg py-2 flex items-center justify-center">
          <p className="text-[9px] font-bold text-background">Log Achievement</p>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            The App
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Designed to be calm.
            <br />
            <span className="text-muted font-normal">Engineered to be honest.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockups.map((mockup, i) => (
            <motion.div
              key={mockup.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Device frame */}
              <div className="relative w-[200px] h-[400px] bg-[#1A1A1A] rounded-[36px] border-[5px] border-[#2C2C2C] shadow-2xl shadow-black/60 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1A1A1A] rounded-b-xl z-10" />

                {/* Screen */}
                <div
                  className={`w-full h-full bg-gradient-to-b ${mockup.gradient} flex flex-col`}
                  role="img"
                  aria-label={`${mockup.label} screen mockup`}
                >
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-4 pt-8 pb-1">
                    <span className="text-[8px] text-muted font-medium">9:41</span>
                    <span className="text-[8px] text-muted">●●●</span>
                  </div>
                  {mockup.preview}
                </div>
              </div>

              {/* Caption */}
              <div className="text-center">
                <p className="text-base font-bold text-foreground mb-1">
                  {mockup.label}
                </p>
                <p className="text-xs text-muted leading-relaxed max-w-[200px]">
                  {mockup.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
