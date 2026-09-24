"use client";

import Image from "next/image";
import { Project } from "@/types";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="group rounded-3xl bg-slate-900/40 border border-white/10 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between">
      <div>
        {/* Project Thumbnail Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Top Overlay Badge Bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-purple-300">
              #{formattedIndex}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 border border-white/5 text-slate-300 font-medium font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors"
          >
            Live Demo
            <ExternalLink size={13} />
          </a>
        ) : (
          <span
            title="Live demo link will be attached once deployed"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-500 bg-slate-950/60 border border-white/5 rounded-xl cursor-not-allowed"
          >
            Live Demo (Upcoming)
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-white/10 transition-colors"
          >
            <GithubIcon size={14} />
            Code
          </a>
        ) : (
          <span
            title="Repository link will be attached soon"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-500 bg-slate-950/60 border border-white/5 rounded-xl cursor-not-allowed"
          >
            <GithubIcon size={14} />
            Code
          </span>
        )}
      </div>
    </article>
  );
}
