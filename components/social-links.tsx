import { portfolio } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SocialLinks({
  className = "",
  size = "md",
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 22,
  };

  const links = [
    {
      name: "GitHub",
      href: portfolio.links.github,
      icon: <GithubIcon size={iconSizes[size]} />,
      hoverColor: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-950/30",
    },
    {
      name: "LinkedIn",
      href: portfolio.links.linkedin,
      icon: <LinkedinIcon size={iconSizes[size]} />,
      hoverColor: "hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-950/30",
    },
    {
      name: "X",
      href: portfolio.links.x,
      icon: <XIcon size={iconSizes[size]} />,
      hoverColor: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-950/30",
    },
    {
      name: "Instagram",
      href: portfolio.links.instagram,
      icon: <InstagramIcon size={iconSizes[size]} />,
      hoverColor: "hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-950/30",
    },
    {
      name: "Email",
      href: portfolio.links.email,
      icon: <Mail size={iconSizes[size]} />,
      hoverColor: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-950/30",
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={item.name}
          className={`flex items-center justify-center rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${sizeClasses[size]} ${item.hoverColor}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
