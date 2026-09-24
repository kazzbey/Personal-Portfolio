import { Certification } from "@/types";
import { Award, Calendar, CheckCircle } from "lucide-react";

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/30 text-purple-400 group-hover:scale-105 group-hover:bg-purple-900/40 transition-all">
            <Award size={20} />
          </div>
          <span className="flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-950/50 border border-purple-800/30 px-2.5 py-1 rounded-full">
            <CheckCircle size={12} className="text-purple-400" />
            Verified
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
          {cert.title}
        </h3>

        <p className="mt-2 text-sm text-slate-300 font-medium">
          {cert.provider}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-mono">
          <Calendar size={13} className="text-slate-400" />
          {cert.date}
        </span>
        <span className="text-[11px] font-mono text-slate-400">Official Certificate</span>
      </div>
    </div>
  );
}
