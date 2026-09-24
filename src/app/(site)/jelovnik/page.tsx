import { CategoryIcon } from "@/components/CategoryIcon";
import { JpMark, PageIntro } from "@/components/JpType";
import { MenuItemRow } from "@/components/MenuItemRow";
import { MenuSubnav } from "@/components/MenuSubnav";
import { siteContact } from "@/lib/contact";
import { menuCategories } from "@/lib/menu";

const navItems = menuCategories.map((cat) => {
  const needsSubtitle =
    menuCategories.filter((c) => c.title === cat.title).length > 1;
  return {
    id: cat.id,
    label:
      needsSubtitle && cat.subtitle
        ? `${cat.title} · ${cat.subtitle.replace(/^6 pcs · /, "").replace(/^Sushi · /, "")}`
        : cat.title,
  };
});

const categoryJp: Record<string, string> = {
  starters: "前菜",
  salads: "サラダ",
  soups: "汁",
  ramen: "麺",
  bao: "包",
  udon: "うどん",
  noodles: "麺",
  "main-dishes": "主菜",
  hosomaki: "細巻",
  "uramaki-classic": "裏巻",
  fusion: "融合",
  futomaki: "太巻",
  set: "百",
  desserts: "甘味",
};

export default function JelovnikPage() {
  return (
    <div className="bg-seigaiha relative">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <PageIntro
            jp="メニュー"
            eyebrow="Meni"
            title="Jelovnik"
            watermark="食"
            description="Cene u RSD. Pogledaj jelo, pa poruči preko Ding Dong-a ili Wolta."
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={siteContact.dingDongHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFD400] px-4 py-2.5 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-90"
          >
            Poruči na Ding Dong →
          </a>
          <a
            href={siteContact.woltHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#009DE0] px-4 py-2.5 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
          >
            Poruči na Wolt →
          </a>
        </div>

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <MenuSubnav items={navItems} />

          <div className="space-y-16 sm:space-y-20">
            {menuCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-36 lg:scroll-mt-28"
              >
                <div className="mb-6 flex items-start gap-4 border-b border-ink/10 pb-4 sm:mb-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red/10 text-ink">
                    <CategoryIcon id={category.id} className="h-9 w-9" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="font-jp text-xs tracking-[0.2em] text-ink/35">
                        {categoryJp[category.id] ?? "料理"}
                      </p>
                      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                        {category.title}
                      </h2>
                    </div>
                    {category.subtitle ? (
                      <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.2em] text-red">
                        {category.subtitle}
                      </p>
                    ) : null}
                  </div>
                </div>

                <ul>
                  {category.items.map((item) => (
                    <MenuItemRow
                      key={`${category.id}-${item.name}`}
                      item={item}
                    />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>

      <JpMark
        text="寿司"
        className="pointer-events-none fixed bottom-8 left-4 z-0 hidden text-8xl text-ink/[0.03] lg:block"
      />
    </div>
  );
}
