"use client";

import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/pocetna", label: "Početna", jp: "ホーム" },
  { href: "/o-nama", label: "O nama", jp: "私たち" },
  { href: "/jelovnik", label: "Jelovnik", jp: "メニュー" },
  { href: "/galerija", label: "Galerija", jp: "写真" },
  { href: "/kontakt", label: "Kontakt", jp: "連絡" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/8 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <Link
            href="/pocetna"
            className="group flex items-center gap-3"
            aria-label="100% Sushi Bar"
          >
            <BrandLogo
              size={52}
              priority
              href={null}
              className="h-11 w-11 sm:h-[52px] sm:w-[52px]"
            />
            <span className="hidden font-jp text-xs tracking-[0.28em] text-ink/35 transition-colors group-hover:text-red sm:inline">
              百パーセント
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-2 transition-colors ${
                    active ? "text-red" : "text-ink/65 hover:text-ink"
                  }`}
                >
                  <span className="block text-center font-jp text-[0.6rem] tracking-[0.08em] opacity-50">
                    {link.jp}
                  </span>
                  <span className="mt-0.5 block font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.18em]">
                    {link.label}
                  </span>
                  {active ? (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-red" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/kontakt"
              className="hidden items-center gap-2 border border-ink px-4 py-2.5 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-red hover:text-red sm:inline-flex"
            >
              <span className="font-jp normal-case tracking-normal text-red">予</span>
              Rezerviši
            </Link>
            <button
              type="button"
              className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Zatvori" : "Meni"}</span>
              <span className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-ink transition-transform duration-300 ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-ink transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-px w-full bg-ink transition-transform duration-300 ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Zatvori meni"
          className={`absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <nav
          id="mobile-nav"
          className={`absolute inset-y-0 left-0 flex w-[min(20rem,86vw)] flex-col bg-ink text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!open}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <BrandLogo size={44} className="h-11 w-11" href="/pocetna" />
              <span className="font-jp text-sm tracking-[0.2em] text-white/40">
                寿司
              </span>
            </div>
            <button
              type="button"
              className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Zatvori
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 px-3 py-6">
            {links.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 transition-colors ${
                      active
                        ? "bg-white/10 text-red"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>
                      <span className="block font-jp text-[0.7rem] tracking-[0.12em] opacity-50">
                        {link.jp}
                      </span>
                      <span className="mt-0.5 block font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.18em]">
                        {link.label}
                      </span>
                    </span>
                    <span
                      className={`h-px w-6 ${active ? "bg-red" : "bg-white/20"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`border-t border-white/10 p-5 transition-all duration-500 ${
              open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
          >
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="block bg-red px-5 py-3.5 text-center font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
            >
              Rezerviši sto →
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
