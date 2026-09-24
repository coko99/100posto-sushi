"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Word = { jp: string; sr: string };

const WORD_POOL: Word[] = [
  { jp: "寿司", sr: "Suši" },
  { jp: "新鮮", sr: "Sveže" },
  { jp: "百％", sr: "100%" },
  { jp: "美味", sr: "Ukus" },
  { jp: "一期一会", sr: "Jedan trenutak" },
  { jp: "ラーメン", sr: "Ramen" },
  { jp: "刺身", sr: "Sašimi" },
  { jp: "巻", sr: "Roll" },
  { jp: "和", sr: "Harmonija" },
  { jp: "匠", sr: "Majstor" },
  { jp: "職人", sr: "Zanat" },
  { jp: "情熱", sr: "Strast" },
  { jp: "禅", sr: "Zen" },
  { jp: "桜", sr: "Sakura" },
  { jp: "海", sr: "More" },
  { jp: "魚", sr: "Riba" },
  { jp: "炎", sr: "Plamen" },
  { jp: "心", sr: "Srce" },
  { jp: "絆", sr: "Veza" },
  { jp: "食", sr: "Jelo" },
  { jp: "旨い", sr: "Ukusno" },
  { jp: "乾杯", sr: "Živeli" },
  { jp: "季節", sr: "Sezona" },
  { jp: "伝統", sr: "Tradicija" },
  { jp: "静寂", sr: "Tišina" },
  { jp: "調和", sr: "Ravnoteža" },
  { jp: "夢", sr: "San" },
  { jp: "風", sr: "Vetar" },
  { jp: "水", sr: "Voda" },
  { jp: "火", sr: "Vatra" },
  { jp: "月光", sr: "Mesečina" },
  { jp: "黄金", sr: "Zlato" },
  { jp: "宝", sr: "Blago" },
  { jp: "無限", sr: "Beskonačno" },
  { jp: "食欲", sr: "Apetit" },
  { jp: "満腹", sr: "Sitost" },
  { jp: "酒", sr: "Sake" },
  { jp: "茶", sr: "Čaj" },
  { jp: "丼", sr: "Donburi" },
  { jp: "温度", sr: "Toplina" },
  { jp: "花", sr: "Cvet" },
  { jp: "空", sr: "Nebo" },
  { jp: "土", sr: "Zemlja" },
  { jp: "魂", sr: "Duša" },
  { jp: "瞬間", sr: "Tren" },
  { jp: "芸術", sr: "Umetnost" },
  { jp: "完璧", sr: "Savršeno" },
  { jp: "喜び", sr: "Radost" },
];

const HOLD_FIRST_MS = 420;
const HOLD_NAV_MS = 380;
const FADE_MS = 140;
const EXIT_MS = 420;

function pickWords(count: number, excludeJp?: string): Word[] {
  const pool = [...WORD_POOL];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const picked = pool.filter((w) => w.jp !== excludeJp).slice(0, count);
  while (picked.length < count) {
    const extra = pool.find((w) => !picked.includes(w));
    if (!extra) break;
    picked.push(extra);
  }
  return picked;
}

export function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [runId, setRunId] = useState(0);
  const [holdMs, setHoldMs] = useState(HOLD_FIRST_MS);
  const lastPath = useRef<string | null>(null);
  const lastFirstJp = useRef<string | undefined>(undefined);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    const first = isFirstRun.current;
    isFirstRun.current = false;
    // Prvi ulazak: 2 reči. Prelasci: 1 brza reč.
    const count = first ? 2 : 1;
    const next = pickWords(count, lastFirstJp.current);
    lastFirstJp.current = next[0]?.jp;

    setHoldMs(first ? HOLD_FIRST_MS : HOLD_NAV_MS);
    setWords(next);
    setWordIndex(0);
    setWordVisible(true);
    setExiting(false);
    setVisible(true);
    setRunId((n) => n + 1);
  }, [pathname]);

  useEffect(() => {
    if (!visible || exiting || words.length === 0) return;

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
      }, holdMs);
    };

    cycle();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = prevOverflow;
    };
  }, [visible, exiting, runId, words, holdMs]);

  if (!visible || words.length === 0) return null;

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
            key={`${runId}-${current.jp}`}
            className={`font-jp text-[clamp(3rem,12vw,5.5rem)] font-normal leading-none tracking-[0.06em] transition-all duration-300 ${
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
