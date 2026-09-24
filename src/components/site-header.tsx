"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/jelovnik", label: "Jelovnik" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-paper"
        >
          100%
          <span className="text-red">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-red" : "text-paper-muted hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-paper-muted md:hidden"
          aria-expanded={open}
          aria-label="Meni"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Zatvori" : "Meni"}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.22em] ${
                  active ? "text-red" : "text-paper-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
