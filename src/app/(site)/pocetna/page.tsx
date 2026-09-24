import {
  CategoryIcon,
  categoryIconIdForPreview,
} from "@/components/CategoryIcon";
import { FeatureIcon } from "@/components/FeatureIcon";
import { HeroSlider } from "@/components/HeroSlider";
import { JpMark, SectionEyebrow } from "@/components/JpType";
import { homeFoodStrip } from "@/lib/gallery";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Sveže namirnice",
    desc: "Dnevno sveži sastojci",
    jp: "鮮",
    icon: "fresh" as const,
  },
  {
    title: "Autentični ukusi",
    desc: "Japanska preciznost",
    jp: "味",
    icon: "taste" as const,
  },
  {
    title: "Iskusni kuvari",
    desc: "Pažnja u svakom zalogaju",
    jp: "匠",
    icon: "chefs" as const,
  },
  {
    title: "Moderan ambijent",
    desc: "Mesto za uživanje",
    jp: "和",
    icon: "ambiance" as const,
  },
];

const menuPreview = [
  {
    href: "/jelovnik#hosomaki",
    title: "Sushi & Maki",
    jp: "寿司",
    desc: "Klasični i specijal rollovi, hosomaki i futomaki.",
    image: "/images/gallery/susi/susi-02.jpg",
  },
  {
    href: "/jelovnik#ramen",
    title: "Ramen",
    jp: "麺",
    desc: "Bogate japanske supe sa nudlama.",
    image: "/images/gallery/hrana/hrana-08.jpg",
  },
  {
    href: "/jelovnik#bao",
    title: "Bao buns",
    jp: "包",
    desc: "Meke zemičke na pari sa punjenjem.",
    image: "/images/gallery/hrana/hrana-04.jpg",
  },
  {
    href: "/jelovnik#main-dishes",
    title: "Topla jela",
    jp: "温",
    desc: "Teriyaki, kari, katsu i još mnogo toga.",
    image: "/images/gallery/hrana/hrana-06.jpg",
  },
  {
    href: "/jelovnik#soups",
    title: "Supe & Salate",
    jp: "汁",
    desc: "Osvežavajući početak ili lagani obrok.",
    image: "/images/gallery/hrana/hrana-01.jpg",
  },
  {
    href: "/jelovnik#desserts",
    title: "Deserti",
    jp: "甘",
    desc: "Japanski deserti za završetak.",
    image: "/images/gallery/hrana/hrana-11.jpg",
  },
];

export default function PocetnaPage() {
  // Jedan set + duplikat samo za beskonačan loop (manje DOM čvorova)
  const stripSource = homeFoodStrip.slice(0, 8);
  const stripItems = [...stripSource, ...stripSource];

  return (
    <div>
      <HeroSlider />

      <section className="bg-ink py-3">
        <div className="overflow-hidden">
          <div className="food-marquee-track flex gap-2 px-2 sm:gap-3">
            {stripItems.map((item, index) => (
              <Link
                key={`${item.src}-${index}`}
                href="/galerija"
                className="group relative h-32 w-24 shrink-0 overflow-hidden sm:h-44 sm:w-36 md:h-52 md:w-40"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="160px"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-seigaiha-dark relative overflow-hidden px-5 py-20 text-white sm:px-8 sm:py-24">
        <JpMark
          text="百"
          className="absolute -left-6 top-8 text-[8rem] text-white/[0.04] sm:text-[12rem]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map((item) => (
            <div key={item.title} className="relative">
              <span className="font-jp text-3xl text-red/80">{item.jp}</span>
              <div className="mt-4 mb-4 flex h-11 w-11 items-center justify-center text-white/90">
                <FeatureIcon name={item.icon} className="h-9 w-9" />
              </div>
              <h2 className="font-[family-name:var(--font-body)] text-[0.75rem] uppercase tracking-[0.2em]">
                {item.title}
              </h2>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-white/45">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Link
          href="/galerija"
          className="group relative min-h-[28rem] overflow-hidden bg-ink md:min-h-[36rem]"
        >
          <Image
            src="/images/gallery/ambijent/COK01642.jpg"
            alt="Ambijent lokala"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/15" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="font-jp text-sm tracking-[0.2em] text-white/70">店</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl">
              Lokal
            </p>
          </div>
        </Link>
        <Link
          href="/galerija"
          className="group relative min-h-[28rem] overflow-hidden bg-ink md:min-h-[36rem]"
        >
          <Image
            src="/images/gallery/basta/COK01760.jpg"
            alt="Bašta"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/15" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="font-jp text-sm tracking-[0.2em] text-white/70">庭</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl">
              Bašta
            </p>
          </div>
        </Link>
      </section>

      <section className="bg-seigaiha relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
        <JpMark
          text="食"
          className="absolute -right-4 top-10 text-[9rem] text-ink/[0.04] sm:text-[14rem]"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionEyebrow jp="メニュー" label="Meni" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
            Za svaki ukus
          </h2>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {menuPreview.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative block overflow-hidden bg-ink"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                  <span className="absolute right-4 top-4 font-jp text-3xl text-white/25 transition-colors group-hover:text-red/70">
                    {item.jp}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center text-white/80">
                    <CategoryIcon
                      id={categoryIconIdForPreview[item.title] ?? "hosomaki"}
                      className="h-8 w-8"
                    />
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[22rem] lg:min-h-[28rem]">
            <Image
              src="/images/gallery/susi/susi-06.jpg"
              alt="Suši"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="relative flex flex-col justify-center overflow-hidden px-5 py-14 text-white sm:px-10 sm:py-16">
            <JpMark
              text="写真"
              className="absolute -right-2 top-6 text-7xl text-white/[0.06]"
            />
            <SectionEyebrow jp="写真" label="Galerija" light />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Pogledaj lokal i tanjire
            </h2>
            <p className="mt-4 max-w-sm font-[family-name:var(--font-body)] text-base leading-relaxed text-white/55">
              Ambijent, bašta, suši i jela — foto iz našeg prostora.
            </p>
            <Link
              href="/galerija"
              className="mt-8 inline-flex w-fit bg-white px-7 py-3.5 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-90"
            >
              Otvori galeriju →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-seigaiha relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="font-jp text-sm tracking-[0.3em] text-red">予約</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Rezerviši svoj sto i doživi{" "}
              <span className="text-red">100%</span> užitak.
            </h2>
            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-ink/60">
              Javi nam se za rezervaciju ili porudžbinu — adresa i kontakt su na
              stranici Kontakt.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 bg-red px-7 py-3.5 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
          >
            Rezerviši odmah →
          </Link>
        </div>
      </section>
    </div>
  );
}
