type JpMarkProps = {
  text: string;
  className?: string;
  /** Accessibility: meaning in Serbian/English */
  meaning?: string;
};

/** Large decorative Japanese characters */
export function JpMark({ text, className = "", meaning }: JpMarkProps) {
  return (
    <span
      aria-hidden={!meaning}
      title={meaning}
      className={`jp-watermark ${className}`}
    >
      {text}
    </span>
  );
}

type SectionEyebrowProps = {
  jp: string;
  label: string;
  className?: string;
  light?: boolean;
};

/** Small bilingual section label: 寿司 · MENI */
export function SectionEyebrow({
  jp,
  label,
  className = "",
  light = false,
}: SectionEyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.3em] ${
        light ? "text-white/55" : "text-red"
      } ${className}`}
    >
      <span
        className={`font-jp text-[0.85rem] font-medium tracking-[0.12em] normal-case ${
          light ? "text-red" : "text-ink/40"
        }`}
      >
        {jp}
      </span>
      <span className={`h-px w-6 ${light ? "bg-white/25" : "bg-red/50"}`} />
      <span>{label}</span>
    </p>
  );
}

type PageIntroProps = {
  jp: string;
  eyebrow: string;
  title: string;
  description?: string;
  watermark?: string;
};

export function PageIntro({
  jp,
  eyebrow,
  title,
  description,
  watermark,
}: PageIntroProps) {
  return (
    <div className="relative overflow-hidden">
      {watermark ? (
        <JpMark
          text={watermark}
          className="absolute -right-4 -top-8 text-[clamp(6rem,22vw,12rem)] text-ink/[0.04] sm:-right-2 sm:-top-12"
        />
      ) : null}
      <SectionEyebrow jp={jp} label={eyebrow} />
      <h1 className="relative mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-px w-12 bg-red" />
        <span className="font-jp text-xs tracking-[0.2em] text-ink/30">
          {jp}
        </span>
      </div>
      {description ? (
        <p className="relative mt-6 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-ink/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
