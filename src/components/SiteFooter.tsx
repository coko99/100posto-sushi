import { BrandLogo } from "@/components/BrandLogo";
import { CokoladniCredit } from "@/components/CokoladniCredit";
import { JpMark } from "@/components/JpType";
import { siteContact } from "@/lib/contact";
import Link from "next/link";

const nav = [
  { href: "/pocetna", label: "Početna" },
  { href: "/jelovnik", label: "Jelovnik" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-white">
      <JpMark
        text="寿司"
        className="jp-float absolute -bottom-8 -right-4 text-[min(40vw,14rem)] text-white/[0.04]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo size={88} className="h-[72px] w-[72px] ring-1 ring-white/15" />
          <p className="mt-5 font-jp text-2xl tracking-[0.08em] text-white/80">
            百<span className="text-red">％</span>
          </p>
          <p className="mt-2 max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/45">
            100% Sushi Bar — sveže, precizno, autentično.
          </p>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.24em] text-red">
            Navigacija
          </h2>
          <ul className="mt-4 space-y-2.5 font-[family-name:var(--font-body)] text-sm text-white/65">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.24em] text-red">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/65">
            <li>{siteContact.address}</li>
            <li>
              <a href={siteContact.phoneHref} className="hover:text-white">
                {siteContact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteContact.email}`}
                className="hover:text-white"
              >
                {siteContact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.24em] text-red">
            Radno vreme
          </h2>
          <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/65">
            {siteContact.hoursLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-[family-name:var(--font-body)] text-xs text-white/35">
            © 100% Sushi Bar — <span className="font-jp">寿司バー</span>
          </p>
          <CokoladniCredit />
        </div>
      </div>
    </footer>
  );
}
