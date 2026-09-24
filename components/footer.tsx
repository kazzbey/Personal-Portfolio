import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "./social-links";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer"
      className="border-t border-white/10 bg-[#02050e] text-slate-400 py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          {/* Brand & Role */}
          <div className="md:col-span-4 space-y-2">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-white font-bold text-lg tracking-tight"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-400 font-mono text-xs">
                &lt;/&gt;
              </span>
              <span>
                {portfolio.person.name}
                <span className="text-purple-500">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-400">
              {portfolio.person.role} • {portfolio.person.location}
            </p>
            <p className="text-xs text-slate-500 max-w-sm">
              Building responsive frontend applications and data analytics solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="md:col-span-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium"
          >
            {portfolio.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-purple-300 transition-colors py-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-4">
            <SocialLinks size="sm" />
            <a
              href="#home"
              title="Back to top"
              aria-label="Scroll back to top"
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-all hover:-translate-y-0.5"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Muhammad Khuzaima. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed &amp; Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
