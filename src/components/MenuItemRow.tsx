import { MenuOrderButton } from "@/components/MenuOrderButton";
import { formatPrice, type MenuItem } from "@/lib/menu";
import Image from "next/image";

type MenuItemRowProps = {
  item: MenuItem;
};

export function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <li className="group grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-ink/10 py-5 last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:gap-5 sm:py-6">
      {item.image ? (
        <div className="relative aspect-square w-full overflow-hidden bg-ink/[0.04]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 88px, 120px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div aria-hidden className="aspect-square w-full bg-ink/[0.03]" />
      )}

      <div className="min-w-0 sm:contents">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-[family-name:var(--font-body)] text-base font-medium text-ink sm:text-lg">
              {item.name}
            </h3>
            {item.note ? (
              <span className="font-[family-name:var(--font-body)] text-xs text-ink/40">
                {item.note}
              </span>
            ) : null}
          </div>
          <p className="mt-1 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-ink/55">
            {item.description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 sm:hidden">
            <p className="font-[family-name:var(--font-mono)] text-sm tabular-nums text-red">
              {formatPrice(item.price)}
            </p>
            <MenuOrderButton itemName={item.name} />
          </div>
        </div>

        <div className="hidden shrink-0 flex-col items-end gap-3 sm:flex">
          <p className="font-[family-name:var(--font-mono)] text-base tabular-nums text-red">
            {formatPrice(item.price)}
          </p>
          <MenuOrderButton itemName={item.name} />
        </div>
      </div>
    </li>
  );
}
