import Image from "next/image";

const socials = [
  {
    href: "https://instagram.com/cokoladni.foto",
    label: "Instagram — Čokoladni Foto",
    kind: "instagram" as const,
  },
  {
    href: "https://www.facebook.com/people/%C4%8Cokoladni-FOTO/61581371400843/",
    label: "Facebook — Čokoladni Foto",
    kind: "facebook" as const,
  },
  {
    href: "https://www.tiktok.com/@cokomokoladni",
    label: "TikTok — Čokoladni Foto",
    kind: "tiktok" as const,
  },
];

type CokoladniCreditProps = {
  variant?: "footer" | "splash";
};

export function CokoladniCredit({ variant = "footer" }: CokoladniCreditProps) {
  const isSplash = variant === "splash";

  return (
    <div
      className={
        isSplash
          ? "flex max-w-full flex-col items-center gap-2.5"
          : "flex flex-col items-center gap-2.5 sm:items-end"
      }
    >
      <a
        href="https://cokoladni.photo/"
        target="_blank"
        rel="noopener noreferrer"
        className={
          isSplash
            ? "flex max-w-full flex-col items-center gap-1.5"
            : "flex items-center gap-2"
        }
      >
        <span
          className={
            isSplash
              ? "font-[family-name:var(--font-body)] text-[0.5rem] uppercase tracking-[0.26em] text-paper-muted/80"
              : "font-[family-name:var(--font-body)] text-[0.55rem] uppercase tracking-[0.24em] text-white/35"
          }
        >
          Powered by
        </span>
        <span
          className={
            isSplash
              ? "flex items-center justify-center gap-2"
              : "flex items-center gap-2"
          }
        >
          <Image
            src="/images/cokoladni-logo.png"
            alt=""
            width={isSplash ? 26 : 22}
            height={isSplash ? 26 : 22}
            className={
              isSplash
                ? "h-6 w-6 shrink-0 object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] sm:h-7 sm:w-7"
                : "h-5 w-5 object-contain"
            }
          />
          <span
            className={
              isSplash
                ? "neon-cokoladni font-[family-name:var(--font-mono)] text-[0.7rem] font-medium uppercase tracking-[0.06em] sm:text-sm sm:tracking-[0.1em]"
                : "neon-cokoladni font-[family-name:var(--font-mono)] text-[0.7rem] font-medium uppercase tracking-[0.08em]"
            }
          >
            ČOKOLADNI AJ TI
          </span>
        </span>
      </a>

      <div className="flex items-center gap-3">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={
              isSplash
                ? "text-paper-muted/70 transition-colors hover:text-[#00e5ff]"
                : "text-white/40 transition-colors hover:text-[#00e5ff]"
            }
          >
            <SocialIcon kind={social.kind} />
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({
  kind,
}: {
  kind: "instagram" | "facebook" | "tiktok";
}) {
  const className = "h-4 w-4";

  if (kind === "instagram") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === "facebook") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.6 8.2a5.8 5.8 0 0 1-3.4-1.1v6.5a5.4 5.4 0 1 1-4.6-5.3v2.7a2.7 2.7 0 1 0 1.9 2.6V2.5h2.6a5.8 5.8 0 0 0 3.5 3.4v2.3z" />
    </svg>
  );
}
