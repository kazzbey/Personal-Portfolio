interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto" : ""} max-w-2xl`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-purple-400 uppercase rounded-full bg-purple-950/40 border border-purple-800/30">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
