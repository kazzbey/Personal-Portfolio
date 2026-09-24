"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { SocialLinks } from "./social-links";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction Hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-800/40 text-xs font-semibold uppercase tracking-wider text-purple-300">
              <Sparkles size={13} className="text-purple-400" />
              <span>{portfolio.person.eyebrow}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
                  {portfolio.person.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                {portfolio.person.tagline}
              </p>
            </div>

            {/* Factual Bio from Resume */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {portfolio.person.bio}
            </p>

            {/* Location & Status Line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/60 border border-white/5 px-3 py-1 rounded-full">
                📍 {portfolio.person.location}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-800/30 text-emerald-300 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open to Opportunities
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                View My Work
                <ArrowRight size={16} />
              </a>

              <a
                href={portfolio.person.cvPath}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <Download size={16} className="text-purple-400" />
                Download CV
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1">
                Connect:
              </span>
              <SocialLinks size="md" />
            </div>
          </motion.div>

          {/* Right Column: Profile & Floating Tech Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Decorative Backplate Glow */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 blur-2xl -z-10 animate-pulse" />

            {/* Profile Frame */}
            <div className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-3xl p-1.5 bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-indigo-600/30 shadow-2xl shadow-purple-950/40">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
                <Image
                  src={portfolio.person.profileImage}
                  alt={`Portrait of ${portfolio.person.name}`}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 256px, 320px"
                />
                <div className="absolute inset-x-4 bottom-3 h-px bg-gradient-to-r from-transparent via-purple-400/90 to-transparent" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 border border-purple-400/40 backdrop-blur-md rounded-lg px-2.5 py-1 text-[11px] font-mono font-semibold text-purple-200 shadow-md">
                BSCS @ PU
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
