import { portfolio } from "@/data/portfolio";
import {
  Code2,
  FileCode,
  Layers,
  BarChart3,
  Sheet,
  Database,
  GitBranch,
  Cloud,
  Globe,
} from "lucide-react";
import { GithubIcon } from "./icons";

export function TechStrip() {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "html":
        return <FileCode className="text-orange-400" size={18} />;
      case "css":
        return <Code2 className="text-blue-400" size={18} />;
      case "javascript":
        return <Layers className="text-yellow-400" size={18} />;
      case "bootstrap":
        return <Globe className="text-purple-400" size={18} />;
      case "power bi":
        return <BarChart3 className="text-amber-400" size={18} />;
      case "excel":
        return <Sheet className="text-emerald-400" size={18} />;
      case "sql":
        return <Database className="text-cyan-400" size={18} />;
      case "git":
        return <GitBranch className="text-red-400" size={18} />;
      case "github":
        return <GithubIcon className="text-slate-200" size={18} />;
      case "vercel":
        return <Cloud className="text-indigo-400" size={18} />;
      default:
        return <Code2 className="text-purple-400" size={18} />;
    }
  };

  return (
    <section
      aria-label="Technologies Overview"
      className="py-10 border-y border-white/5 bg-slate-950/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">
          Technologies I Work With
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {portfolio.technologiesStrip.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 hover:bg-slate-900/90 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span className="transition-transform group-hover:scale-110">
                {getIcon(tech.name)}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
