interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold-dim/50 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-ivory">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm md:text-base max-w-2xl leading-relaxed text-ivory/35 ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold-dim/30" />
        <span className="text-gold-dim/30 text-xs">&#10043;</span>
        <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold-dim/30" />
      </div>
    </div>
  );
}
