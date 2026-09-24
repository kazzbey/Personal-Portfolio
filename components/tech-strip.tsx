import { portfolio } from "@/data/portfolio";

const categoryStyles: Record<string, { badge: string; chip: string }> = {
  Languages: {
    badge: "bg-cyan-950/60 text-cyan-300 border border-cyan-800/40",
    chip: "bg-cyan-950/40 text-cyan-200 border border-cyan-800/30",
  },
  Frontend: {
    badge: "bg-violet-950/60 text-violet-300 border border-violet-800/40",
    chip: "bg-violet-950/40 text-violet-200 border border-violet-800/30",
  },
  Backend: {
    badge: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/40",
    chip: "bg-emerald-950/40 text-emerald-200 border border-emerald-800/30",
  },
  Database: {
    badge: "bg-amber-950/60 text-amber-300 border border-amber-800/40",
    chip: "bg-amber-950/40 text-amber-200 border border-amber-800/30",
  },
  Deployment: {
    badge: "bg-indigo-950/60 text-indigo-300 border border-indigo-800/40",
    chip: "bg-indigo-950/40 text-indigo-200 border border-indigo-800/30",
  },
  "API Tools": {
    badge: "bg-pink-950/60 text-pink-300 border border-pink-800/40",
    chip: "bg-pink-950/40 text-pink-200 border border-pink-800/30",
  },
};

export function TechStrip() {
  return (
    <section
      aria-label="Technical Arsenal"
      className="py-12 border-y border-white/5 bg-slate-950/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.28em] text-slate-500 uppercase mb-8">
          Technical Arsenal
        </p>

        <div className="space-y-8">
          {portfolio.techArsenal.map((group) => {
            const styles = categoryStyles[group.title] ?? {
              badge: "bg-slate-900/80 text-slate-300 border border-white/10",
              chip: "bg-slate-900/70 text-slate-200 border border-white/10",
            };

            return (
              <div key={group.title} className="space-y-3">
                <div className="flex justify-center">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${styles.badge}`}>
                    {group.title}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center rounded-xl px-3 py-2 text-xs sm:text-sm font-medium ${styles.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
