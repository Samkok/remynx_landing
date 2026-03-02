"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 px-6 bg-surface relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold"
        >
          Start Today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          Start tracking your days.
          <br />
          <span className="text-muted font-normal">Not just your tasks.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Your days are already happening. REMYNX just makes sure you
          notice them — and remember them.
        </motion.p>

        {/* Download badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* App Store */}
          <motion.a
            href="#"
            aria-label="Download on the App Store"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-foreground hover:bg-white text-background px-6 py-3.5 rounded-xl transition-colors min-w-[164px] shadow-lg shadow-black/30"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.79M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
            </svg>
            <div className="text-left leading-none">
              <p className="text-[9px] uppercase tracking-wider opacity-70 font-medium">Download on the</p>
              <p className="text-sm font-bold mt-0.5">App Store</p>
            </div>
          </motion.a>

          {/* Google Play */}
          <motion.a
            href="#"
            aria-label="Get it on Google Play"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-surface-2 hover:bg-border border border-border text-foreground px-6 py-3.5 rounded-xl transition-colors min-w-[164px] shadow-lg shadow-black/30"
          >
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-xs text-muted"
        >
          No pressure. No gamification. Just clarity.
        </motion.p>
      </div>
    </section>
  );
}
