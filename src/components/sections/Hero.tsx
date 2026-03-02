"use client";

import { motion } from "framer-motion";

const calendarDays = Array.from({ length: 35 }, (_, i) => i);
const productiveDays = new Set([1, 2, 4, 6, 7, 9, 11, 14, 15, 16, 18, 21, 22, 23, 25, 28]);

function AppStoreBadge() {
  return (
    <motion.a
      href="#"
      aria-label="Download on the App Store"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 bg-foreground hover:bg-white text-background px-5 py-3 rounded-xl transition-colors min-w-[160px]"
    >
      {/* Apple logo */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.79M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
      </svg>
      <div className="text-left leading-none">
        <p className="text-[9px] uppercase tracking-wider opacity-70 font-medium">Download on the</p>
        <p className="text-sm font-bold mt-0.5">App Store</p>
      </div>
    </motion.a>
  );
}

function GooglePlayBadge() {
  return (
    <motion.a
      href="#"
      aria-label="Get it on Google Play"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.72 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 bg-surface-2 hover:bg-border border border-border text-foreground px-5 py-3 rounded-xl transition-colors min-w-[160px]"
    >
      {/* Play triangle icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5c.5.3.5 1.2 0 1.5L4.5 21c-.5.33-1.5.33-1.5-.5z" fill="#34A853"/>
        <path d="M3 3.5l8.5 8.5L3 20.5V3.5z" fill="#4285F4"/>
        <path d="M11.5 12L3 20.5l9-5.3 2.5-1.5-3-1.7z" fill="#FBBC04"/>
        <path d="M11.5 12L3 3.5l9 5.3 2.5 1.5-3 1.7z" fill="#EA4335"/>
      </svg>
      <div className="text-left leading-none">
        <p className="text-[9px] uppercase tracking-wider text-muted font-medium">Get it on</p>
        <p className="text-sm font-bold mt-0.5">Google Play</p>
      </div>
    </motion.a>
  );
}

function HeroPhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center"
    >
      {/* Ambient glow behind phone */}
      <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

      {/* Continuous float */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Phone shell */}
        <div className="relative w-[260px] sm:w-[280px] h-[540px] sm:h-[580px] bg-[#111111] rounded-[48px] border-[6px] border-[#2A2A2A] shadow-2xl shadow-black/70">

          {/* Side buttons */}
          <div className="absolute -left-[7px] top-20 w-[5px] h-8 bg-[#2A2A2A] rounded-l-full" />
          <div className="absolute -left-[7px] top-32 w-[5px] h-12 bg-[#2A2A2A] rounded-l-full" />
          <div className="absolute -left-[7px] top-48 w-[5px] h-12 bg-[#2A2A2A] rounded-l-full" />
          <div className="absolute -right-[7px] top-28 w-[5px] h-14 bg-[#2A2A2A] rounded-r-full" />

          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
            <div className="w-10 h-1.5 rounded-full bg-[#1A1A1A]" />
          </div>

          {/* Screen */}
          <div className="w-full h-full rounded-[42px] overflow-hidden bg-[#0D0D0D] flex flex-col">

            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-1 shrink-0">
              <span className="text-[11px] text-muted font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-[2px] items-end h-3">
                  {[3, 5, 7, 9].map((h, i) => (
                    <div key={i} className="w-[3px] bg-foreground/60 rounded-sm" style={{ height: h }} />
                  ))}
                </div>
                <svg viewBox="0 0 16 12" className="w-4 h-3 fill-foreground/60"><path d="M8 2.4C10.7 2.4 13.1 3.6 14.7 5.5L16 4C14 1.7 11.2 0 8 0S2 1.7 0 4l1.3 1.5C2.9 3.6 5.3 2.4 8 2.4zm0 2.4c2 0 3.7.9 4.9 2.3L14.2 6C12.6 4.2 10.4 3 8 3S3.4 4.2 1.8 6L3.1 7.1C4.3 5.7 6 4.8 8 4.8zm0 2.4c1.2 0 2.3.5 3.1 1.3L12.5 9c-1.1-1.2-2.7-2-4.5-2S3.6 7.8 2.5 9l1.4 1.5C4.7 9.7 5.8 9.2 8 9.2z"/><circle cx="8" cy="12" r="1.5"/></svg>
                <div className="flex items-center gap-0.5">
                  <div className="w-5 h-2.5 rounded-sm border border-foreground/40 p-px">
                    <div className="h-full w-3/4 bg-foreground/70 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* App header */}
            <div className="px-5 pt-2 pb-3 shrink-0">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">REMYNX</p>
            </div>

            {/* Month label */}
            <div className="px-5 mb-2 shrink-0 flex items-center justify-between">
              <p className="text-sm font-bold text-foreground">October 2025</p>
              <p className="text-[10px] text-accent font-semibold">{productiveDays.size} days logged</p>
            </div>

            {/* Calendar grid */}
            <div className="px-4 shrink-0">
              <div className="grid grid-cols-7 gap-[3px] mb-[3px]">
                {["M","T","W","T","F","S","S"].map((d, i) => (
                  <div key={i} className="text-center text-[8px] text-muted font-semibold py-0.5">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-[3px]">
                {Array.from({ length: 31 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.02, duration: 0.3, ease: "easeOut" }}
                    className={`aspect-square rounded-[4px] flex items-center justify-center text-[9px] font-semibold ${
                      productiveDays.has(i)
                        ? "bg-accent text-background"
                        : "bg-[#1C1C1C] text-muted/50 border border-[#252525]"
                    }`}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-4 my-3 h-px bg-border/50 shrink-0" />

            {/* Today's countdown */}
            <div className="px-5 shrink-0">
              <p className="text-[9px] uppercase tracking-widest text-muted mb-1.5 font-semibold">Today remaining</p>
              <div className="bg-[#161616] rounded-2xl p-3 border border-border/50">
                <p className="font-mono text-xl font-bold text-accent tabular-nums">07:22:44</p>
                <p className="text-[9px] text-muted mt-1">Log before the day ends</p>
              </div>
            </div>

            {/* Log button */}
            <div className="px-4 mt-3 shrink-0">
              <div className="bg-accent rounded-2xl py-3 flex items-center justify-center">
                <p className="text-[11px] font-bold text-background tracking-wide">+ Log Today&apos;s Achievement</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-16"
    >
      {/* Animated calendar grid background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="grid grid-cols-7 gap-2 opacity-[0.05] w-[560px]">
          {calendarDays.map((day) => (
            <motion.div
              key={day}
              className="aspect-square rounded-sm bg-foreground"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 4,
                delay: (day * 0.15) % 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-background/60 to-background pointer-events-none" />

      {/* Main content — two-column on large screens */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8">

        {/* Left: text + CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.3em] text-accent mb-5 font-semibold"
          >
            Time Awareness System
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight mb-5"
          >
            Every day counts.
            <br />
            <span className="text-accent">Most people forget.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base sm:text-lg text-muted max-w-md leading-relaxed mb-8"
          >
            REMYNX is not another to-do app. It&apos;s a system that keeps you
            aware of your time — so each day you live becomes a day you
            remember.
          </motion.p>

          {/* Download badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>

          {/* Secondary CTA */}
          <motion.a
            href="#how-it-works"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            See how it works ↓
          </motion.a>
        </div>

        {/* Right: phone mockup */}
        <HeroPhoneMockup />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
