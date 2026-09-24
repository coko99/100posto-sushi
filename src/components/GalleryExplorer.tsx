"use client";

import type { GalleryCategory } from "@/lib/gallery";
import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  categories: GalleryCategory[];
};

export function GalleryExplorer({ categories }: Props) {
  const [active, setActive] = useState<string>(categories[0]?.id ?? "all");

  const images = useMemo(() => {
    const list =
      active === "all"
        ? categories.flatMap((c) =>
            c.images.map((img) => ({ ...img, category: c.label })),
          )
        : (categories
            .find((c) => c.id === active)
            ?.images.map((img) => ({
              ...img,
              category: categories.find((c) => c.id === active)!.label,
            })) ?? []);

    return list;
  }, [active, categories]);

  return (
    <div>
      <div className="sticky top-[4.25rem] z-30 -mx-5 border-y border-ink/8 bg-white/90 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <FilterChip
            label="Sve"
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {categories.map((cat) => (
            <FilterChip
              key={cat.id}
              label={cat.label}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-12 md:gap-3">
        {images.map((img, i) => {
          const spot = tileClass(i, active !== "all");
          return (
            <figure
              key={`${img.src}-${i}`}
              className={`group relative overflow-hidden bg-ink ${spot}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading={i < 4 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-white/90">
                  {img.category}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-4 py-2 font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.18em] transition-colors ${
        active
          ? "bg-ink text-white"
          : "bg-transparent text-ink/50 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}

/** Asymmetric bento rhythm */
function tileClass(index: number, filtered: boolean): string {
  const i = filtered ? index % 5 : index % 7;

  if (filtered) {
    switch (i) {
      case 0:
        return "col-span-2 aspect-[5/4] md:col-span-8 md:aspect-[16/10]";
      case 1:
        return "aspect-[3/4] md:col-span-4 md:aspect-[4/5]";
      case 2:
        return "aspect-[4/5] md:col-span-4 md:aspect-[3/4]";
      case 3:
        return "aspect-[3/4] md:col-span-4 md:aspect-[3/4]";
      default:
        return "col-span-2 aspect-[16/10] md:col-span-4 md:aspect-[3/4]";
    }
  }

  switch (i) {
    case 0:
      return "col-span-2 aspect-[5/4] md:col-span-8 md:aspect-[16/10]";
    case 1:
      return "aspect-[3/4] md:col-span-4 md:aspect-[4/5]";
    case 2:
      return "aspect-[3/4] md:col-span-4 md:aspect-[3/4]";
    case 3:
      return "aspect-[4/5] md:col-span-4 md:aspect-[3/4]";
    case 4:
      return "col-span-2 aspect-[16/11] md:col-span-8 md:aspect-[21/9]";
    case 5:
      return "aspect-[3/4] md:col-span-6 md:aspect-[4/3]";
    default:
      return "aspect-[4/5] md:col-span-6 md:aspect-[4/3]";
  }
}
