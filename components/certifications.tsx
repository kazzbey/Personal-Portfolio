"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { CertificationCard } from "./certification-card";
import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications & Credentials"
      className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning & Credentials"
          subtitle="Accredited coursework and professional certifications in data science, analytics, Power BI, and web development."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
