"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { ArrowRight, GraduationCap, Code, BarChart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const coreStrengths = [
    {
      icon: <Code size={18} className="text-purple-400" />,
      title: "Frontend Engineering",
      desc: "Creating responsive, clean, and interactive websites using HTML, CSS, JavaScript, and Bootstrap.",
    },
    {
      icon: <BarChart size={18} className="text-cyan-400" />,
      title: "Data Analytics & BI",
      desc: "Building insightful executive dashboards with Power BI, DAX formulas, SQL, and Excel.",
    },
    {
      icon: <GraduationCap size={18} className="text-indigo-400" />,
      title: "Computer Science Foundation",
      desc: "Applying core OOP, Data Structures, and DBMS principles directly to web software.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Muhammad Khuzaima"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Strengths (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <SectionHeading
              eyebrow="About Me"
              title="I'm passionate about creating digital solutions."
              subtitle="Combining modern frontend engineering with data-driven analytical insights."
            />

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I am a Computer Science student at <strong>Punjab University</strong>, currently
                in my 4th semester with a <strong>3.36 CGPA</strong>. My primary focus is
                crafting responsive, accessible, and engaging web interfaces that deliver real-world
                utility.
              </p>
              <p>
                Beyond frontend interfaces, I possess hands-on proficiency in Business
                Intelligence and Data Analytics. By leveraging tools like <strong>Power BI</strong>,
                <strong> SQL</strong>, and <strong>Microsoft Excel</strong>, I transform raw numbers
                into actionable executive dashboards and data stories.
              </p>
              <p className="text-purple-300 font-medium">
                I am actively seeking internship, freelance, or remote opportunities to contribute
                to impactful software and analytical systems.
              </p>
            </div>

            {/* Core Strengths List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreStrengths.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2 hover:border-purple-500/20 transition-colors"
                >
                  <div className="p-2 w-fit rounded-lg bg-slate-800/80 border border-white/10">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 group"
              >
                <span>Let&apos;s build something together</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Factual Metrics Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md relative">
              {/* Subtle top decoration */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={15} /> Academic &amp; Project Profile
                </span>
                <span className="text-xs font-mono text-slate-500">BSCS 2024-2028</span>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-4">
                {portfolio.metrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300 group-hover:from-purple-300 group-hover:to-indigo-300 transition-colors">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-200">
                      {metric.label}
                    </div>
                    {metric.description && (
                      <div className="mt-0.5 text-xs text-slate-400 line-clamp-1">
                        {metric.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 p-4 rounded-xl bg-purple-950/20 border border-purple-800/30 text-xs text-purple-300/90 leading-relaxed">
                Currently actively developing responsive web apps and mastering data architecture at
                Punjab University.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
