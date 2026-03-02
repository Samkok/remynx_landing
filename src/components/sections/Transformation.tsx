"use client";

import { motion } from "framer-motion";

const days = ["M", "T", "W", "T", "F", "S", "S"];

// Which day indices are highlighted (productive) in the "after" calendar
const productiveDays = new Set([1, 2, 3, 5, 7, 8, 10, 12, 15, 16, 17, 19, 22, 23, 24, 26, 29]);
const totalDays = 31;

function CalendarGrid({
  highlight,
  label,
}: {
  highlight: boolean;
  label: string;
}) {
  return (
    <div className="flex-1">
      <p
        className={`text-xs uppercase tracking-[0.25em] font-semibold mb-4 ${
          highlight ? "text-accent" : "text-muted"
        }`}
      >
        {label}
      </p>
      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 gap-1.5 mb-1.5">
        {days.map((d, i) => (
          <div key={i} className="text-center text-[10px] text-muted font-medium py-1">
            {d}
          </div>
        ))}
      </div>
      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: totalDays }, (_, i) => {
          const isProductiveDay = highlight && productiveDays.has(i);
          return (
            <motion.div
              key={i}
              initial={highlight ? { opacity: 0, scale: 0.6 } : false}
              whileInView={
                highlight
                  ? isProductiveDay
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1 }
                  : {}
              }
              viewport={{ once: true }}
              transition={{
                delay: highlight ? i * 0.025 : 0,
                duration: 0.35,
                ease: "easeOut",
              }}
              className={`aspect-square rounded-sm flex items-center justify-center text-[10px] font-medium transition-colors ${
                isProductiveDay
                  ? "bg-accent text-background"
                  : highlight
                    ? "bg-surface-2 text-muted/40 border border-border"
                    : "bg-surface-2 border border-border text-muted/30"
              }`}
            >
              {i + 1}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Transformation() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            The Shift
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            From invisible days
            <br />
            <span className="text-accent">to a life you can see.</span>
          </h2>
          <p className="mt-6 text-muted max-w-xl mx-auto leading-relaxed">
            REMYNX turns your month into a visual record. Productive days glow.
            Rest days are honoured. Nothing disappears unnoticed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {/* Before */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <CalendarGrid highlight={false} label="Before REMYNX" />
            <p className="mt-6 text-sm text-muted italic">
              &ldquo;I don&apos;t know where the month went.&rdquo;
            </p>
          </div>

          {/* After */}
          <div className="bg-surface border border-accent/30 rounded-2xl p-8 shadow-lg shadow-accent/5">
            <CalendarGrid highlight={true} label="With REMYNX" />
            <p className="mt-6 text-sm text-foreground italic">
              &ldquo;17 days well spent. Visible. Real.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
