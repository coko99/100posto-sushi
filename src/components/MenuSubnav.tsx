"use client";

import { CategoryIcon } from "@/components/CategoryIcon";
import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

export function MenuSubnav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav
        aria-label="Podkategorije jelovnika"
        className="sticky top-[57px] z-30 -mx-5 mb-10 border-y border-ink/10 bg-white/95 backdrop-blur-md lg:hidden"
      >
        <ul className="flex gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "bg-red text-white"
                      : "bg-paper text-ink/70 hover:text-red"
                  }`}
                >
                  <CategoryIcon
                    id={item.id}
                    className={`h-4 w-4 ${isActive ? "text-white" : "text-ink"}`}
                  />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav
        aria-label="Podkategorije jelovnika"
        className="sticky top-28 hidden max-h-[calc(100dvh-8rem)] overflow-y-auto lg:block"
      >
        <p className="mb-4 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.28em] text-red">
          Kategorije
        </p>
        <ul className="space-y-1 border-l border-ink/15">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-2.5 border-l-2 py-2 pl-4 font-[family-name:var(--font-body)] text-[0.8rem] uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "-ml-px border-red text-red"
                      : "border-transparent text-ink/55 hover:text-ink"
                  }`}
                >
                  <CategoryIcon id={item.id} className="h-4 w-4 shrink-0" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
