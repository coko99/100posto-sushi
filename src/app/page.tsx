import { CokoladniCredit } from "@/components/CokoladniCredit";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-dvh max-h-dvh flex-col overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[35%] top-[-18%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.14),transparent_68%)]" />
        <div className="absolute -right-[30%] bottom-[-22%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(139,0,0,0.1),transparent_72%)]" />
      </div>

      <div className="relative z-10 flex h-full min-h-0 flex-col px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-10 sm:pb-6 sm:pt-8">
        <header className="flex shrink-0 items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-paper-muted sm:text-[0.7rem] sm:tracking-[0.3em]">
            Sushi Bar
          </p>
          <p className="text-right font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-red sm:text-[0.7rem] sm:tracking-[0.3em]">
            Coming soon
          </p>
        </header>

        <section className="flex min-h-0 flex-1 flex-col items-center justify-center px-1 text-center">
          <Image
            src="/images/logo.jpg"
            alt="100% Sushi Bar"
            width={280}
            height={280}
            priority
            className="h-[clamp(9rem,38vmin,16rem)] w-[clamp(9rem,38vmin,16rem)] rounded-full object-cover"
          />

          <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-red to-transparent sm:mt-5 sm:w-28" />

          <p className="mt-4 max-w-[17rem] font-[family-name:var(--font-body)] text-[0.95rem] leading-snug text-paper-muted sm:mt-5 sm:max-w-md sm:text-xl sm:leading-relaxed">
            Sveže. Precizno. Uskoro otvaramo.
          </p>

          <p className="mt-4 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.2em] text-red sm:mt-6 sm:text-sm sm:tracking-[0.26em]">
            Stay tuned
          </p>
        </section>

        <footer className="flex shrink-0 flex-col items-center gap-2.5 pb-1 sm:gap-3 sm:pb-2">
          <CokoladniCredit variant="splash" />
        </footer>
      </div>
    </main>
  );
}
