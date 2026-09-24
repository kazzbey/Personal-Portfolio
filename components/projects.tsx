"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Some of My Recent Work"
          subtitle="Real-world responsive web applications and business intelligence dashboards designed with precision and utility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
