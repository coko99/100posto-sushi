import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
  href?: string | null;
};

export function BrandLogo({
  size = 48,
  className = "",
  priority = false,
  href = "/",
}: BrandLogoProps) {
  const image = (
    <Image
      src="/images/logo.jpg"
      alt="100% Sushi Bar"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full object-cover ${className}`}
    />
  );

  if (href === null) return image;

  return (
    <Link href={href} className="inline-flex shrink-0" aria-label="100% Sushi Bar">
      {image}
    </Link>
  );
}
