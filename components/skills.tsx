"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import {
  Layout,
  LineChart,
  Database,
  Terminal,
  Wrench,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend":
        return <Layout className="text-purple-400" size={22} />;
      case "data analytics":
        return <LineChart className="text-amber-400" size={22} />;
      case "databases":
        return <Database className="text-cyan-400" size={22} />;
      case "programming":
        return <Terminal className="text-emerald-400" size={22} />;
      case "tools & workflow":
        return <Wrench className="text-indigo-400" size={22} />;
      default:
        return <Layout className="text-purple-400" size={22} />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Skills"
          title="Technologies I Work With"
          subtitle="Carefully honed competencies across frontend engineering, business intelligence, databases, and developer tooling."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 group-hover:scale-105 group-hover:border-purple-500/40 transition-all">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-500">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges / Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 border border-white/5 text-slate-200 group-hover:border-purple-500/20 group-hover:bg-slate-800/90 transition-all"
                    >
                      <Check size={12} className="text-purple-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>VERIFIED SKILLSET</span>
                <span className="text-purple-400">ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
