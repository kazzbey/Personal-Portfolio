"use client";

import { useState, useEffect } from "react";
import { portfolio } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SocialLinks } from "./social-links";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = portfolio.navigation.map((item) =>
        item.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-950/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-white font-bold text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-400 group-hover:bg-purple-600/30 group-hover:border-purple-400 transition-all font-mono text-sm">
              &lt;/&gt;
            </span>
            <span className="text-white group-hover:text-purple-300 transition-colors">
              Khuzaima<span className="text-purple-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm"
          >
            {portfolio.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    isActive
                      ? "text-white bg-purple-600/20 border border-purple-500/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full shadow-lg shadow-purple-900/25 transition-all duration-300 hover:shadow-purple-700/40 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              Let&apos;s Talk
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[65px] bg-[#030712]/95 backdrop-blur-xl border-t border-white/10 z-40 lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="space-y-2 py-4">
            {portfolio.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "text-purple-300 bg-purple-950/40 border border-purple-800/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-900/30"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </a>
            <div className="flex justify-center pt-2">
              <SocialLinks size="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
