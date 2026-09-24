"use client";

import { JpMark } from "@/components/JpType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/menu/dragon-roll.jpg",
    alt: "Suši",
    jp: "寿司",
    title: (
      <>
        Sveže. Autentično.
        <br />
        <span className="text-red">100%</span> užitak.
      </>
    ),
    subtitle:
      "Suši, ramen, bao i topla jela — pažljivo pripremljeni japanski ukusi.",
  },
  {
    src: "/images/menu/beef-teriyaki.jpg",
    alt: "Topla jela",
    jp: "温",
    title: (
      <>
        Topla jela.
        <br />
        Pun ukus.
      </>
    ),
    subtitle: "Teriyaki, kari, katsu i još mnogo toga — za svaki apetit.",
  },
  {
    src: "/images/menu/chicken-teriyaki-bao.jpg",
    alt: "Bao buns",
    jp: "包",
    title: (
      <>
        Bao buns.
        <br />
        Mekani zalogaj.
      </>
    ),
    subtitle: "Zemičke na pari sa junetinom, piletinom ili škampima.",
  },
  {
    src: "/images/menu/beef-ramen.jpg",
    alt: "Ramen",
    jp: "麺",
    title: (
      <>
        Ramen.
        <br />
        Bogata čorba.
      </>
    ),
    subtitle: "Japanske supe sa nudlama — junetina, vege i još.",
  },
  {
    src: "/images/gallery/ambijent/COK01642.jpg",
    alt: "Ambijent",
    jp: "和",
    title: (
      <>
        Ambijent
        <br />
        za uživanje.
      </>
    ),
    subtitle: "Moderan lokal sa toplom atmosferom — mesto za druženje.",
  },
  {
    src: "/images/gallery/basta/COK01760.jpg",
    alt: "Bašta",
    jp: "庭",
    title: (
      <>
        Bašta.
        <br />
        Na otvorenom.
      </>
    ),
    subtitle: "Opustite se u našoj bašti uz svež sushi i dobre priče.",
  },
];

const INTERVAL_MS = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];
  const nextIndex = (index + 1) % slides.length;

  return (
    <section
      className="relative min-h-[92svh] overflow-hidden bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Početni slajder"
    >
      {slides.map((s, i) => {
        const active = i === index;
        const preload = i === nextIndex;
        if (!active && !preload && i !== 0) return null;

        return (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!active}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover brightness-[0.5]"
              sizes="100vw"
            />
          </div>
        );
      })}

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,5,5,0.78)_0%,rgba(5,5,5,0.45)_48%,rgba(5,5,5,0.35)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent"
      />

      <JpMark
        key={`jp-${index}`}
        text={slide.jp}
        className="absolute right-[4%] top-[18%] text-[clamp(5rem,18vw,11rem)] text-white/[0.08]"
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
        <div key={index} className="hero-rise max-w-2xl">
          <p className="mb-4 font-jp text-sm tracking-[0.35em] text-red">
            {slide.jp}
            <span className="ml-3 text-white/35">· 100%</span>
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-sm font-[family-name:var(--font-body)] text-base leading-relaxed text-white/70 sm:text-lg">
            {slide.subtitle}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/jelovnik"
            className="bg-red px-7 py-3.5 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
          >
            Pogledaj meni →
          </Link>
          <Link
            href="/kontakt"
            className="border border-white/40 px-7 py-3.5 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Rezerviši sto
          </Link>
        </div>

        <div
          className="mt-10 flex items-center gap-2"
          role="tablist"
          aria-label="Slajdovi"
        >
          {slides.map((s, i) => (
            <button
              key={`dot-${s.src}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slajd ${i + 1}: ${s.alt}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 ${
                i === index
                  ? "w-8 bg-red"
                  : "w-4 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {slide.alt}
      </span>
    </section>
  );
}
