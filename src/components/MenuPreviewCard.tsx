import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type MenuPreviewItem = {
  href: string;
  title: string;
  jp: string;
  desc: string;
  /** Glavna + 2 sporedne — sve moraju odgovarati kategoriji */
  images: [string, string, string];
};

type Props = {
  item: MenuPreviewItem;
  icon: ReactNode;
};

export function MenuPreviewCard({ item, icon }: Props) {
  const [hero, sideTop, sideBottom] = item.images;

  return (
    <Link
      href={item.href}
      className="group relative block overflow-hidden bg-ink"
    >
      <div className="relative aspect-[4/5]">
        {/* Modern collage: large left + two stacked right */}
        <div className="absolute inset-0 grid grid-cols-[1.35fr_1fr] gap-0.5">
          <div className="relative overflow-hidden">
            <Image
              src={hero}
              alt={item.title}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 40vw, 22vw"
            />
          </div>
          <div className="grid grid-rows-2 gap-0.5">
            <div className="relative overflow-hidden">
              <Image
                src={sideTop}
                alt=""
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 25vw, 14vw"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src={sideBottom}
                alt=""
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 25vw, 14vw"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <span className="absolute right-4 top-4 font-jp text-3xl text-white/30 transition-colors group-hover:text-red/80">
          {item.jp}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center text-white/80">
            {icon}
          </div>
          <h3 className="font-[family-name:var(--font-body)] text-base font-semibold uppercase tracking-[0.1em] text-white">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[18rem] font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/55">
            {item.desc}
          </p>
          <span className="mt-4 inline-block font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.16em] text-red">
            Pogledaj →
          </span>
        </div>
      </div>
    </Link>
  );
}
