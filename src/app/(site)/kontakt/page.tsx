import { JpMark, PageIntro } from "@/components/JpType";
import { siteContact, whatsappUrl } from "@/lib/contact";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <div className="bg-seigaiha relative overflow-hidden">
      <JpMark
        text="連絡"
        className="absolute -right-4 top-10 text-[clamp(5rem,20vw,11rem)] text-ink/[0.035]"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <PageIntro
          jp="連絡"
          eyebrow="Kontakt"
          title="Rezerviši ili nam se javi"
          description="Piši, zovi ili naruči dostavu — tu smo."
        />

        <dl className="mt-14 space-y-10 font-[family-name:var(--font-body)]">
          <div>
            <dt className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-red">
              <span className="font-jp text-sm tracking-normal text-ink/30">
                住所
              </span>
              Adresa
            </dt>
            <dd className="mt-2 text-lg text-ink">{siteContact.address}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-red">
              <span className="font-jp text-sm tracking-normal text-ink/30">
                電話
              </span>
              Telefon
            </dt>
            <dd className="mt-2 text-lg text-ink">
              <a href={siteContact.phoneHref} className="hover:text-red">
                {siteContact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-red">
              <span className="font-jp text-sm tracking-normal text-ink/30">
                メール
              </span>
              Email
            </dt>
            <dd className="mt-2 text-lg text-ink">
              <a href={`mailto:${siteContact.email}`} className="hover:text-red">
                {siteContact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-red">
              <span className="font-jp text-sm tracking-normal text-ink/30">
                営業
              </span>
              Radno vreme
            </dt>
            <dd className="mt-2 space-y-1 text-lg text-ink">
              {siteContact.hoursLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          <a
            href={siteContact.phoneHref}
            className="border border-ink/15 bg-white px-5 py-4 transition-colors hover:border-red"
          >
            <p className="font-jp text-xs text-ink/35">電話</p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.14em]">
              Pozovi · {siteContact.phoneDisplay}
            </p>
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/15 bg-white px-5 py-4 transition-colors hover:border-red"
          >
            <p className="font-jp text-xs text-ink/35">チャット</p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.14em]">
              WhatsApp
            </p>
          </a>
          <a
            href={siteContact.dingDongHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/15 bg-white px-5 py-4 transition-colors hover:border-red"
          >
            <p className="font-jp text-xs text-ink/35">配達</p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.14em]">
              Ding Dong
            </p>
          </a>
          <a
            href={siteContact.woltHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/15 bg-white px-5 py-4 transition-colors hover:border-red"
          >
            <p className="font-jp text-xs text-ink/35">配達</p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.14em]">
              Wolt
            </p>
          </a>
        </div>

        <Link
          href="/jelovnik"
          className="mt-10 inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.18em] text-red"
        >
          <span className="font-jp normal-case tracking-normal">メニュー</span>
          Pogledaj meni →
        </Link>
      </div>
    </div>
  );
}
