"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Word = { jp: string; sr: string };

/** Autentični pojmovi — suši, japanska kuhinja, more, kultura (~100) */
const WORD_POOL: Word[] = [
  // Suši & rollovi
  { jp: "寿司", sr: "Suši" },
  { jp: "刺身", sr: "Sašimi" },
  { jp: "握り", sr: "Nigiri" },
  { jp: "巻物", sr: "Maki" },
  { jp: "細巻", sr: "Hosomaki" },
  { jp: "太巻", sr: "Futomaki" },
  { jp: "裏巻", sr: "Uramaki" },
  { jp: "手巻", sr: "Temaki" },
  { jp: "軍艦", sr: "Gunkan" },
  { jp: "ちらし", sr: "Čiraši" },
  { jp: "押し寿司", sr: "Oši-zuši" },
  { jp: "いなり", sr: "Inari" },
  { jp: "海鮮丼", sr: "Kaisen don" },
  { jp: "鉄火巻", sr: "Tekka maki" },
  { jp: "河童巻", sr: "Kapa maki" },
  { jp: "カリフォルニア", sr: "California" },
  { jp: "ドラゴンロール", sr: "Dragon roll" },
  { jp: "レインボー", sr: "Rainbow" },
  // Topla jela & nudle
  { jp: "天ぷら", sr: "Tempura" },
  { jp: "ラーメン", sr: "Ramen" },
  { jp: "うどん", sr: "Udon" },
  { jp: "蕎麦", sr: "Soba" },
  { jp: "豚骨", sr: "Tonkotsu" },
  { jp: "醤油ラーメン", sr: "Šoja ramen" },
  { jp: "塩ラーメン", sr: "Šio ramen" },
  { jp: "つけ麺", sr: "Cukemen" },
  { jp: "焼きそば", sr: "Jakisoba" },
  { jp: "焼きうどん", sr: "Jaki udon" },
  { jp: "丼", sr: "Donburi" },
  { jp: "カツ丼", sr: "Kacu don" },
  { jp: "親子丼", sr: "Ojakodon" },
  { jp: "牛丼", sr: "Gjūdon" },
  { jp: "天丼", sr: "Tendon" },
  { jp: "カレー", sr: "Kari" },
  { jp: "カツカレー", sr: "Kacu kari" },
  { jp: "照り焼き", sr: "Terijaki" },
  { jp: "すき焼き", sr: "Sukijaki" },
  { jp: "しゃぶしゃぶ", sr: "Šabu-šabu" },
  { jp: "お好み焼き", sr: "Okonomijaki" },
  { jp: "たこ焼き", sr: "Takojaki" },
  { jp: "串焼き", sr: "Kušijaki" },
  { jp: "焼き鳥", sr: "Jakitori" },
  { jp: "餃子", sr: "Gjoza" },
  { jp: "包子", sr: "Bao" },
  { jp: "弁当", sr: "Bento" },
  { jp: "定食", sr: "Teišoku" },
  // Supe & predjela
  { jp: "味噌汁", sr: "Miso supa" },
  { jp: "赤味噌", sr: "Aka miso" },
  { jp: "白味噌", sr: "Širo miso" },
  { jp: "出汁", sr: "Daši" },
  { jp: "吸い物", sr: "Suimono" },
  { jp: "茶碗蒸し", sr: "Čavanmuši" },
  { jp: "枝豆", sr: "Edamame" },
  { jp: "わかめ", sr: "Wakame" },
  { jp: "サラダ", sr: "Salata" },
  { jp: "春巻き", sr: "Prolećne rolnice" },
  // Sastojci mora
  { jp: "鮭", sr: "Losos" },
  { jp: "鮪", sr: "Tuna" },
  { jp: "大トロ", sr: "O-toro" },
  { jp: "中トロ", sr: "Ču-toro" },
  { jp: "赤身", sr: "Akami" },
  { jp: "海老", sr: "Škampi" },
  { jp: "鰻", sr: "Unagi" },
  { jp: "穴子", sr: "Anago" },
  { jp: "帆立", sr: "Jakobove kapice" },
  { jp: "いか", sr: "Lignja" },
  { jp: "たこ", sr: "Hobotnica" },
  { jp: "いくら", sr: "Ikura" },
  { jp: "うに", sr: "Uni" },
  { jp: "ほや", sr: "Hoja" },
  { jp: "鯖", sr: "Skuša" },
  { jp: "鯛", sr: "Pagar" },
  { jp: "ハマチ", sr: "Hamači" },
  { jp: "ぶり", sr: "Buri" },
  { jp: "鮎", sr: "Aju" },
  { jp: "しらす", sr: "Širasu" },
  // Riža, začini, prilozi
  { jp: "酢飯", sr: "Suši riža" },
  { jp: "白米", sr: "Beli pirinač" },
  { jp: "醤油", sr: "Šoja" },
  { jp: "わさび", sr: "Wasabi" },
  { jp: "生姜", sr: "Đumbir" },
  { jp: "海苔", sr: "Nori" },
  { jp: "胡麻", sr: "Susam" },
  { jp: "豆腐", sr: "Tofu" },
  { jp: "油揚げ", sr: "Aburaage" },
  { jp: "玉子", sr: "Tamago" },
  { jp: "玉子焼き", sr: "Tamagojaki" },
  { jp: "梅干し", sr: "Umeboši" },
  { jp: "柚子", sr: "Juzu" },
  { jp: "山葵", sr: "Wasabi" },
  // Piće & desert
  { jp: "お茶", sr: "Zeleni čaj" },
  { jp: "抹茶", sr: "Mača" },
  { jp: "酒", sr: "Sake" },
  { jp: "日本酒", sr: "Nišonšu" },
  { jp: "焼酎", sr: "Šoću" },
  { jp: "梅酒", sr: "Umešu" },
  { jp: "餅", sr: "Moči" },
  { jp: "大福", sr: "Daifuku" },
  { jp: "あんみつ", sr: "Anmitsu" },
  { jp: "プリン", sr: "Purin" },
  // Kultura & osećaj
  { jp: "日本", sr: "Japan" },
  { jp: "和食", sr: "Japanska kuhinja" },
  { jp: "旨味", sr: "Umami" },
  { jp: "新鮮", sr: "Sveže" },
  { jp: "旬", sr: "Sezona" },
  { jp: "匠", sr: "Majstor" },
  { jp: "板前", sr: "Itamae" },
  { jp: "職人", sr: "Zanatlija" },
  { jp: "百％", sr: "100%" },
  { jp: "美味", sr: "Ukusno" },
  { jp: "乾杯", sr: "Kanpai" },
  { jp: "一期一会", sr: "Jedan trenutak" },
  { jp: "おもてなし", sr: "Gostoprimstvo" },
  { jp: "海", sr: "More" },
  { jp: "魚", sr: "Riba" },
  { jp: "和", sr: "Wa" },
  { jp: "禅", sr: "Zen" },
  { jp: "心", sr: "Kokoro" },
  { jp: "伝統", sr: "Tradicija" },
  { jp: "完璧", sr: "Savršeno" },
];

const WORDS_PER_RUN = 3;
/** Ukupno ~2s: 3×hold + 2×fade + exit */
const HOLD_MS = 480;
const FADE_MS = 160;
const EXIT_MS = 400;
const RECENT_KEY = "100posto-preloader-recent";
const RECENT_MAX = 40;

function readRecent(): string[] {
  try {
    const raw = sessionStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

function writeRecent(jpList: string[]) {
  try {
    const next = [...jpList, ...readRecent()]
      .filter((v, i, arr) => arr.indexOf(v) === i)
      .slice(0, RECENT_MAX);
    sessionStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

function pickWords(count: number): Word[] {
  const recent = new Set(readRecent());
  const fresh = WORD_POOL.filter((w) => !recent.has(w.jp));
  const pool = [...(fresh.length >= count ? fresh : WORD_POOL)];

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const picked = pool.slice(0, count);
  writeRecent(picked.map((w) => w.jp));
  return picked;
}

/** Remount na svaku rutu — garantuje preloader pri svakom prelasku */
export function Preloader() {
  const pathname = usePathname();
  return <PreloaderRun key={pathname} />;
}

function PreloaderRun() {
  const [words] = useState(() => pickWords(WORDS_PER_RUN));
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let cancelled = false;
    let index = 0;
    const timers: number[] = [];

    const later = (fn: () => void, ms: number) => {
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) fn();
        }, ms),
      );
    };

    const finish = () => {
      setExiting(true);
      later(() => {
        setVisible(false);
        document.body.style.overflow = prevOverflow;
      }, EXIT_MS);
    };

    const cycle = () => {
      later(() => {
        if (index >= words.length - 1) {
          finish();
          return;
        }
        setWordVisible(false);
        later(() => {
          index += 1;
          setWordIndex(index);
          setWordVisible(true);
          cycle();
        }, FADE_MS);
      }, HOLD_MS);
    };

    cycle();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = prevOverflow;
    };
  }, [words.length]);

  if (!visible) return null;

  const current = words[wordIndex] ?? words[0];
  if (!current) return null;
  const hasPercent = current.jp.includes("％");

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-ink text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exiting ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={exiting}
      role="presentation"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[25%] top-[-15%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.18),transparent_68%)]" />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-6">
        <p className="mb-6 font-[family-name:var(--font-body)] text-[0.6rem] uppercase tracking-[0.32em] text-white/30">
          100% Sushi Bar
        </p>

        <div className="relative flex h-[6.5rem] items-center justify-center sm:h-[8rem]">
          <p
            key={current.jp}
            className={`font-jp text-[clamp(2.6rem,11vw,5rem)] font-normal leading-none tracking-[0.06em] transition-all duration-300 ${
              wordVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-95 opacity-0"
            }`}
          >
            <span className="text-white">
              {hasPercent ? current.jp.replace("％", "") : current.jp}
            </span>
            {hasPercent ? <span className="text-red">％</span> : null}
          </p>
        </div>

        <p
          className={`mt-4 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.28em] text-red transition-opacity duration-200 ${
            wordVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {current.sr}
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-2 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3">
        <span className="font-[family-name:var(--font-body)] text-[0.5rem] uppercase tracking-[0.28em] text-white/35">
          Powered by
        </span>
        <div className="flex items-center gap-2">
          <Image
            src="/images/cokoladni-logo.png"
            alt=""
            width={22}
            height={22}
            className="h-5 w-5 object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.45)]"
            priority
          />
          <span className="neon-cokoladni font-[family-name:var(--font-mono)] text-[0.7rem] font-medium uppercase tracking-[0.1em]">
            ČOKOLADNI AJ TI
          </span>
        </div>
      </div>
    </div>
  );
}
