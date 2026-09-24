"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Academic Education"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="Formal computer science education and foundational analytical training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-purple-950/20"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-800/40 text-purple-400 group-hover:scale-105 transition-transform">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-purple-400">
                        {edu.period}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="pt-2">
                  <h4 className="text-base font-semibold text-slate-200">
                    {edu.institution}
                  </h4>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-slate-500" />
                      {edu.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-purple-300">
                      <Calendar size={12} className="text-purple-400" />
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Score / CGPA Highlight Badge */}
                {edu.cgpaOrMarks && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/30 border border-purple-800/30 text-xs font-mono font-semibold text-purple-300">
                    <span>Performance:</span>
                    <span className="text-white font-bold">{edu.cgpaOrMarks}</span>
                  </div>
                )}

                {/* Key Coursework */}
                {edu.coursework && (
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-purple-400" />
                      Relevant Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/70 border border-white/5 text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
