type CategoryIconProps = {
  id: string;
  className?: string;
};

/** Minimal ink-style illustrations — black strokes, red accent */
export function CategoryIcon({ id, className = "h-12 w-12" }: CategoryIconProps) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "starters":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="38" rx="18" ry="8" stroke="currentColor" strokeWidth="2" />
          <path d="M18 36c2-10 8-18 14-22M32 14c6 4 12 12 14 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="28" r="3" fill="#e10600" />
          <path d="M24 34h16M26 38h12" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
        </svg>
      );
    case "salads":
      return (
        <svg {...common}>
          <path d="M14 40c4-14 12-22 18-24 6 2 14 10 18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 40h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 32c4 2 8 2 12 0M28 24c2 4 4 8 2 12" stroke="#e10600" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="40" cy="30" r="2.5" fill="#e10600" />
        </svg>
      );
    case "soups":
      return (
        <svg {...common}>
          <path d="M16 34h32v4c0 8-7 14-16 14s-16-6-16-14v-4Z" stroke="currentColor" strokeWidth="2" />
          <path d="M14 34h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 22c0 4 2 6 2 10M32 20c0 5 1 7 1 12M40 22c0 4-1 6-1 10" stroke="#e10600" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "ramen":
      return (
        <svg {...common}>
          <path d="M12 34h40v2c0 10-9 18-20 18S12 46 12 36v-2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M10 34h44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 28c6 2 10 2 16 0M22 32c8 3 14 2 20-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="28" cy="30" r="3" fill="#e10600" />
          <path d="M44 18l6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bao":
      return (
        <svg {...common}>
          <path d="M16 36c0-12 7-20 16-20s16 8 16 20c0 4-3 8-16 8s-16-4-16-8Z" stroke="currentColor" strokeWidth="2" />
          <path d="M20 34c4 2 8 3 12 3s8-1 12-3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M28 22c1 4 2 8 1 12M36 22c-1 4-1 8 0 12" stroke="#e10600" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "udon":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="42" rx="20" ry="8" stroke="currentColor" strokeWidth="2" />
          <path d="M14 40c2-2 8-4 18-4s16 2 18 4" stroke="currentColor" strokeWidth="2" />
          <path d="M18 34c8-2 20-2 28 1M16 30c10-3 22-2 30 2M20 26c8-2 18-1 24 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="38" cy="28" r="2.5" fill="#e10600" />
        </svg>
      );
    case "noodles":
      return (
        <svg {...common}>
          <path d="M14 44h36l-4 6H18l-4-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 44c2-10 6-18 10-22M28 20c2 6 4 14 4 24M36 22c2 8 4 14 6 22M44 26c0 8 0 14-2 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M22 18c4-4 10-4 14 0" stroke="#e10600" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "hosomaki":
    case "specialty-rolls":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="32" cy="32" r="3.5" fill="#e10600" />
          <path d="M32 16v4M32 44v4M16 32h4M44 32h4" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        </svg>
      );
    case "uramaki-classic":
    case "uramaki-special":
    case "uramaki-fusion":
    case "fusion":
    case "futomaki":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="17" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="32" r="11" stroke="#e10600" strokeWidth="1.8" />
          <circle cx="26" cy="28" r="2.5" fill="currentColor" />
          <circle cx="36" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="37" r="2.2" fill="#e10600" />
          <path d="M20 22c3-2 6-1 8 1M40 42c-2 2-5 2-8 0" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
        </svg>
      );
    case "main-dishes":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="44" rx="18" ry="6" stroke="currentColor" strokeWidth="2" />
          <path d="M16 42c2-12 8-22 16-26 8 4 14 14 16 26" stroke="currentColor" strokeWidth="2" />
          <path d="M24 30h16M26 34h12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <path d="M30 18l2 8M36 20l-1 7" stroke="#e10600" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "set":
      return (
        <svg {...common}>
          <rect x="12" y="20" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="22" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="42" cy="32" r="4" stroke="#e10600" strokeWidth="1.6" />
          <circle cx="22" cy="32" r="1.5" fill="#e10600" />
          <circle cx="32" cy="32" r="1.5" fill="currentColor" />
          <path d="M18 40h28" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
        </svg>
      );
    case "desserts":
      return (
        <svg {...common}>
          <path d="M22 40h20l-2 8H24l-2-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="32" cy="28" rx="12" ry="10" stroke="currentColor" strokeWidth="2" />
          <path d="M24 26c3 2 6 2 8 0M32 26c3 2 6 2 8 0" stroke="#e10600" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="32" cy="22" r="2" fill="#e10600" />
        </svg>
      );
    case "extras":
      return (
        <svg {...common}>
          <path d="M28 14c-8 6-12 14-12 22 0 10 7 16 16 16s16-6 16-16c0-8-4-16-12-22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M28 14c2 8 4 14 4 22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <path d="M30 36c2 2 4 2 6 0" stroke="#e10600" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="34" cy="30" r="2" fill="#e10600" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="32" r="4" fill="#e10600" />
        </svg>
      );
  }
}

export const categoryIconIdForPreview: Record<string, string> = {
  "Sushi & Maki": "hosomaki",
  Ramen: "ramen",
  "Bao buns": "bao",
  "Topla jela": "main-dishes",
  "Supe & Salate": "soups",
  Deserti: "desserts",
};
