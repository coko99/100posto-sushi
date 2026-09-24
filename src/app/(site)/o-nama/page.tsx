import { BrandLogo } from "@/components/BrandLogo";
import { JpMark, PageIntro } from "@/components/JpType";
import Image from "next/image";
import Link from "next/link";

export default function ONamaPage() {
  return (
    <div>
      <section className="bg-seigaiha relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <BrandLogo
            size={96}
            className="mb-8 h-20 w-20 sm:h-24 sm:w-24"
            href={null}
          />
          <PageIntro
            jp="私たち"
            eyebrow="O nama"
            title="100% Sushi Bar"
            watermark="心"
            description="100% je sushi bar posvećen svežini, preciznosti i ukusu. Od hosomakija i uramakija do ramena, bao zemički i toplih jela — svaki tanjir je pažljivo sastavljen."
          />
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-ink/60 sm:text-lg">
            Priču o lokalu, timu i početku brenda dopunićemo zajedno. Ova strana
            je okvir dok se pripremamo.
          </p>
          <Link
            href="/galerija"
            className="mt-8 inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-red transition-opacity hover:opacity-80"
          >
            <span className="font-jp normal-case tracking-normal">写真</span>
            Pogledaj galeriju →
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/gallery/ambijent/COK01642.jpg"
              alt="Unutrašnji ambijent"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <span className="absolute left-4 top-4 font-jp text-sm tracking-[0.2em] text-white/80">
              店 · lokal
            </span>
          </div>
          <div className="absolute -bottom-6 -left-4 w-[48%] overflow-hidden border-[6px] border-white sm:-bottom-8 sm:-left-8">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/gallery/susi/susi-01.jpg"
                alt="Suši"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid sm:mt-16 sm:grid-cols-2">
        <div className="relative aspect-[16/11] sm:aspect-auto sm:min-h-[22rem]">
          <Image
            src="/images/gallery/basta/COK01760.jpg"
            alt="Bašta"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <span className="absolute bottom-5 left-5 font-jp text-sm tracking-[0.25em] text-white">
            庭
          </span>
        </div>
        <div className="relative aspect-[16/11] bg-ink sm:aspect-auto sm:min-h-[22rem]">
          <Image
            src="/images/gallery/hrana/hrana-06.jpg"
            alt="Jelo"
            fill
            className="object-cover opacity-90"
            sizes="50vw"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 to-transparent p-6 sm:p-8">
            <div>
              <JpMark text="百" className="text-4xl text-red/80" />
              <p className="mt-2 max-w-xs font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl">
                Sveže. Pažljivo. <span className="text-red">100%</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
