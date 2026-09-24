import { GalleryExplorer } from "@/components/GalleryExplorer";
import { JpMark } from "@/components/JpType";
import { galleryCategories } from "@/lib/gallery";
import Image from "next/image";

export default function GalerijaPage() {
  const cover = galleryCategories[0].images[0];

  return (
    <div>
      <section className="relative h-[52vh] min-h-[22rem] overflow-hidden bg-ink sm:h-[58vh]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25"
        />
        <JpMark
          text="写真"
          className="absolute right-[6%] top-[22%] text-[clamp(4rem,14vw,9rem)] text-white/[0.1]"
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
          <p className="flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.3em] text-red">
            <span className="font-jp text-sm tracking-[0.15em] normal-case text-white/50">
              写真
            </span>
            <span className="h-px w-6 bg-red/60" />
            Galerija
          </p>
          <h1 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Atmosfera i jela
          </h1>
          <p className="mt-4 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/65 sm:text-base">
            Suši, jela, lokal i bašta — u jednom toku.
          </p>
        </div>
      </section>

      <div className="bg-seigaiha mx-auto max-w-6xl px-5 pb-20 pt-2 sm:px-8 sm:pb-28">
        <GalleryExplorer categories={galleryCategories} />
      </div>
    </div>
  );
}
