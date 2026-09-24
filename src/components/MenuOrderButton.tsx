"use client";

import { siteContact } from "@/lib/contact";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type MenuOrderButtonProps = {
  itemName: string;
};

export function MenuOrderButton({ itemName }: MenuOrderButtonProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 border border-ink/15 bg-white px-3 py-1.5 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.14em] text-ink transition-colors hover:border-red hover:text-red"
      >
        Poruči
        <span aria-hidden className="text-red">
          →
        </span>
      </button>

      {open ? (
        <div
          id={listId}
          role="menu"
          aria-label={`Poruči ${itemName}`}
          className="absolute right-0 z-20 mt-2 min-w-[13rem] border border-ink/10 bg-white p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        >
          <p className="px-2.5 pb-1.5 pt-1 font-[family-name:var(--font-body)] text-[0.55rem] uppercase tracking-[0.18em] text-ink/40">
            Dostava
          </p>
          <a
            role="menuitem"
            href={siteContact.dingDongHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-2.5 py-2 font-[family-name:var(--font-body)] text-sm text-ink transition-colors hover:bg-[#FFD400]/25"
          >
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden bg-black">
              <Image
                src="/images/brands/dingdong.png"
                alt=""
                width={40}
                height={26}
                className="h-5 w-auto object-contain"
              />
            </span>
            Ding Dong
          </a>
          <a
            role="menuitem"
            href={siteContact.woltHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-2.5 py-2 font-[family-name:var(--font-body)] text-sm text-ink transition-colors hover:bg-[#009DE0]/08"
          >
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden">
              <Image
                src="/images/brands/wolt.jpg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-cover"
              />
            </span>
            Wolt
          </a>
        </div>
      ) : null}
    </div>
  );
}
