"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useLiveCountdown() {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    function calc() {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      const diff = Math.max(0, endOfDay.getTime() - now.getTime());
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTimeLeft({ h, m, s });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const { h, m, s } = useLiveCountdown();

  return (
    <section className="py-24 lg:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
              Live Countdown
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Your day is still
              <br />
              <span className="text-accent">running.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              REMYNX surfaces a real-time end-of-day countdown — not to
              create pressure, but to create{" "}
              <span className="text-foreground font-medium">awareness</span>.
              You still have hours left. What will you do with them?
            </p>
            <p className="text-muted leading-relaxed text-sm">
              As the day closes, REMYNX prompts you to log a single
              achievement — one honest thing you did today. Small or large, it
              counts.
            </p>
          </motion.div>

          {/* iPhone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-[240px] h-[480px] bg-[#1A1A1A] rounded-[40px] border-[6px] border-[#2C2C2C] shadow-2xl shadow-black/60 overflow-hidden flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#1A1A1A] rounded-b-2xl z-10 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2C2C2C]" />
                <div className="w-10 h-1.5 rounded-full bg-[#2C2C2C]" />
              </div>

              {/* Screen content */}
              <div className="flex-1 flex flex-col items-center justify-center p-6 pt-10 gap-4">
                {/* App label */}
                <p className="text-[10px] uppercase tracking-widest text-muted font-semibold">
                  REMYNX
                </p>

                {/* Countdown display */}
                <div className="text-center">
                  <p className="text-[10px] text-muted mb-2 uppercase tracking-widest">
                    Time remaining today
                  </p>
                  <div className="flex items-center gap-1 font-mono">
                    <span className="text-3xl font-bold text-accent tabular-nums">
                      {pad(h)}
                    </span>
                    <span className="text-xl text-muted font-bold">:</span>
                    <span className="text-3xl font-bold text-foreground tabular-nums">
                      {pad(m)}
                    </span>
                    <span className="text-xl text-muted font-bold">:</span>
                    <motion.span
                      key={s}
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold text-foreground tabular-nums"
                    >
                      {pad(s)}
                    </motion.span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border" />

                {/* Log prompt */}
                <div className="w-full">
                  <p className="text-[10px] text-muted mb-2 uppercase tracking-widest text-center">
                    Today&apos;s achievement
                  </p>
                  <div className="bg-surface-2 rounded-xl p-3 border border-border">
                    <p className="text-xs text-muted italic">
                      What&apos;s one thing you did today?
                    </p>
                  </div>
                </div>

                {/* CTA button */}
                <div className="w-full bg-accent rounded-xl py-3 flex items-center justify-center">
                  <p className="text-xs font-bold text-background">
                    Log Today
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
