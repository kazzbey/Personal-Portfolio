"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ContactCta() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-indigo-950/40 border border-purple-500/20 text-center shadow-2xl shadow-purple-950/30"
        >
          {/* Ambient glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-700/40 text-xs font-semibold uppercase tracking-wider text-purple-300">
              <Sparkles size={13} className="text-purple-400" />
              <span>Let&apos;s Work Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Have a project in mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I am actively seeking internship, freelance, and remote frontend &amp; data analytics
              opportunities. Let&apos;s build clean, reliable digital solutions together.
            </p>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                Let&apos;s Talk
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
