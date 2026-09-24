type FeatureIconProps = {
  name: "fresh" | "taste" | "chefs" | "ambiance";
  className?: string;
};

export function FeatureIcon({
  name,
  className = "h-10 w-10",
}: FeatureIconProps) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "fresh":
      // fish
      return (
        <svg {...common}>
          <path
            d="M10 32c8-10 18-14 28-12 6 1 10 4 14 8-4 4-8 7-14 8-10 2-20-2-28-12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="42" cy="30" r="2" fill="#e10600" />
          <path
            d="M10 32c4 2 8 2 12 0M48 28l8-6M48 36l8 6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "taste":
      // steaming bowl
      return (
        <svg {...common}>
          <path
            d="M14 34h36v3c0 9-8 16-18 16s-18-7-18-16v-3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 34h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M24 22c0 4 2 6 2 10M32 20c0 5 1 7 1 12M40 22c0 4-1 6-1 10"
            stroke="#e10600"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chefs":
      // chef hat
      return (
        <svg {...common}>
          <path
            d="M20 44h24v4H20v-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M18 44c0-6 2-10 6-12-2-8 2-14 8-14s10 6 8 14c4 2 6 6 6 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="28" r="2.5" fill="#e10600" />
        </svg>
      );
    case "ambiance":
      // torii gate
      return (
        <svg {...common}>
          <path
            d="M12 18h40M16 18v28M48 18v28M14 28h36"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M10 16c6 4 14 4 22 4s16 0 22-4"
            stroke="#e10600"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
