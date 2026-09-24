"use client";

import { siteContact, whatsappUrl } from "@/lib/contact";
import Image from "next/image";
import { useEffect, useId, useState, type ReactNode } from "react";

type DeliveryAction = {
  id: string;
  label: string;
  hint: string;
  href: string;
  logo: string;
  logoAlt: string;
  panelClass: string;
  logoWrapClass: string;
  logoClass: string;
  textClass: string;
  hintClass: string;
  arrowClass: string;
};

type LocalAction = {
  id: string;
  label: string;
  hint: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
  tone: string;
};

const deliveryActions: DeliveryAction[] = [
  {
    id: "dingdong",
    label: "Ding Dong",
    hint: "Naruči dostavu",
    href: siteContact.dingDongHref,
    logo: "/images/brands/dingdong.png",
    logoAlt: "Ding Dong Delivery",
    panelClass: "bg-[#FFD400] border-[#FFD400] text-ink hover:brightness-105",
    logoWrapClass: "bg-black",
    logoClass: "h-10 w-auto object-contain sm:h-11",
    textClass: "text-ink",
    hintClass: "text-ink/55",
    arrowClass: "text-ink/35",
  },
  {
    id: "wolt",
    label: "Wolt",
    hint: "Naruči dostavu",
    href: siteContact.woltHref,
    logo: "/images/brands/wolt.jpg",
    logoAlt: "Wolt",
    panelClass: "bg-[#009DE0] border-[#009DE0] hover:brightness-110",
    logoWrapClass: "bg-[#009DE0]",
    logoClass: "h-12 w-12 object-cover sm:h-14 sm:w-14",
    textClass: "text-white",
    hintClass: "text-white/70",
    arrowClass: "text-white/40",
  },
];

const localActions: LocalAction[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    hint: "Piši nam",
    href: whatsappUrl(),
    external: true,
    icon: <WhatsAppIcon />,
    tone: "bg-[#25D366] text-white",
  },
  {
    id: "call",
    label: "Pozovi",
    hint: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
    icon: <PhoneIcon />,
    tone: "bg-red text-white",
  },
];

export function ContactFab() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

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
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Otvori kontakt"
        onClick={() => setOpen(true)}
        className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-red text-white shadow-[0_8px_28px_rgba(225,6,0,0.45)] transition-all duration-300 hover:scale-105 ${
          open ? "pointer-events-none scale-90 opacity-0" : "opacity-100"
        }`}
      >
        <ChatIcon />
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`fixed inset-0 z-[70] flex flex-col bg-ink text-white transition-all duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-[20%] top-[-10%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.22),transparent_68%)]" />
          <div className="absolute -right-[15%] bottom-[-5%] h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle,rgba(0,157,224,0.12),transparent_70%)]" />
        </div>

        <div className="relative flex items-center justify-between px-5 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
          <div>
            <p className="font-jp text-xs tracking-[0.2em] text-white/35">連絡</p>
            <h2
              id={titleId}
              className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Kontakt
            </h2>
          </div>
          <button
            type="button"
            aria-label="Zatvori"
            onClick={() => setOpen(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-white/35 hover:bg-white/10"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-8 sm:pt-6">
          <section
            className={`transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "60ms" : "0ms" }}
          >
            <SectionHeading
              jp="配達"
              title="Dostava"
              subtitle="Naruči online — stigne do tebe"
            />
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {deliveryActions.map((action) => (
                <li key={action.id}>
                  <DeliveryCard
                    action={action}
                    onNavigate={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </section>

          <section
            className={`transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "140ms" : "0ms" }}
          >
            <SectionHeading
              jp="店"
              title="Lokal"
              subtitle="Javi se direktno"
            />
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {localActions.map((action) => (
                <li key={action.id}>
                  <LocalCard
                    action={action}
                    onNavigate={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </section>

          <p
            className={`mt-auto pt-4 text-center font-[family-name:var(--font-body)] text-xs text-white/35 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: open ? "220ms" : "0ms" }}
          >
            Kosančićeva 25, Kruševac
          </p>
        </div>
      </div>
    </>
  );
}

function SectionHeading({
  jp,
  title,
  subtitle,
}: {
  jp: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-red">
        <span className="font-jp normal-case tracking-normal text-white/30">
          {jp}
        </span>
        {title}
      </p>
      <p className="mt-1.5 font-[family-name:var(--font-body)] text-sm text-white/45">
        {subtitle}
      </p>
    </div>
  );
}

function DeliveryCard({
  action,
  onNavigate,
}: {
  action: DeliveryAction;
  onNavigate: () => void;
}) {
  return (
    <a
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={`flex min-h-[6rem] items-center gap-4 border px-4 py-4 transition-all sm:min-h-[6.75rem] sm:px-5 ${action.panelClass}`}
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-16 ${action.logoWrapClass}`}
      >
        <Image
          src={action.logo}
          alt={action.logoAlt}
          width={160}
          height={100}
          className={action.logoClass}
        />
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`block font-[family-name:var(--font-body)] text-lg font-medium tracking-tight sm:text-xl ${action.textClass}`}
        >
          {action.label}
        </span>
        <span
          className={`mt-0.5 block font-[family-name:var(--font-body)] text-sm ${action.hintClass}`}
        >
          {action.hint}
        </span>
      </span>
      <span aria-hidden className={`text-xl ${action.arrowClass}`}>
        →
      </span>
    </a>
  );
}

function LocalCard({
  action,
  onNavigate,
}: {
  action: LocalAction;
  onNavigate: () => void;
}) {
  return (
    <a
      href={action.href}
      {...(action.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      onClick={onNavigate}
      className="flex min-h-[5.5rem] items-center gap-4 border border-white/10 bg-white/[0.06] px-4 py-4 transition-colors hover:border-white/25 hover:bg-white/[0.1] sm:min-h-[6.25rem] sm:px-5"
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 ${action.tone}`}
      >
        {action.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-[family-name:var(--font-body)] text-lg font-medium tracking-tight text-white sm:text-xl">
          {action.label}
        </span>
        <span className="mt-0.5 block font-[family-name:var(--font-body)] text-sm text-white/45">
          {action.hint}
        </span>
      </span>
      <span aria-hidden className="text-xl text-white/30">
        →
      </span>
    </a>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 18.5 6.2 15A7.5 7.5 0 1 1 9 19.2L5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="12" r="1" fill="currentColor" />
      <circle cx="12.5" cy="12" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.5 3.5h3l1.2 4.2-2 1.2a12 12 0 0 0 5.4 5.4l1.2-2 4.2 1.2v3c0 1.1-.9 2-2.1 1.8C9.3 17.4 6.6 14.7 5.7 5.6c-.2-1.2.7-2.1 1.8-2.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.96.52 3.8 1.44 5.4L2 22l4.92-1.55a9.86 9.86 0 0 0 5.12 1.4h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.75 14.05c-.24.68-1.4 1.25-1.93 1.33-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.15-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.18 0 .41-.06.64.49.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.15.47.12.64-.07.18-.2.74-.86.94-1.15.2-.3.4-.24.67-.14.27.1 1.72.81 2.01.96.3.15.5.22.57.34.08.13.08.74-.16 1.42Z" />
    </svg>
  );
}
