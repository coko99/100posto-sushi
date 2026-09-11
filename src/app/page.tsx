import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-ink text-paper">
      {/* Atmosphere — black dominates, red as subtle heat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 anim-drift"
      >
        <div className="absolute -left-[25%] top-[-15%] h-[75vmin] w-[75vmin] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.14),transparent_68%)] anim-pulse" />
        <div className="absolute -right-[20%] bottom-[-25%] h-[85vmin] w-[85vmin] rounded-full bg-[radial-gradient(circle,rgba(139,0,0,0.12),transparent_72%)]" />
        <div className="absolute left-[35%] top-[45%] h-[40vmin] w-[40vmin] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay anim-grain"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,245,245,0.3) 2px, rgba(245,245,245,0.3) 3px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="flex items-center justify-between px-6 pt-7 sm:px-10 sm:pt-9">
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.35em] text-paper-muted anim-rise">
            Sushi Bar
          </p>
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.35em] text-red anim-rise anim-rise-delay-1">
            Coming soon
          </p>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-10 text-center sm:px-10">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,18vw,11rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-paper anim-rise anim-rise-delay-1">
            100%
          </h1>

          <div className="mt-5 h-px w-24 origin-left bg-gradient-to-r from-red via-red-soft to-transparent anim-line sm:w-32" />

          <p className="mt-7 max-w-md font-[family-name:var(--font-body)] text-lg leading-relaxed text-paper-muted sm:text-xl anim-rise anim-rise-delay-2">
            Sveže. Precizno. Uskoro otvaramo.
          </p>

          <p className="mt-10 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.28em] text-red anim-rise anim-rise-delay-3">
            Stay tuned
          </p>
        </section>

        <footer className="flex flex-col items-center gap-5 px-6 pb-8 sm:px-10">
          <p className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-paper-muted/70">
            100% Sushi Bar
          </p>
          <a
            href="https://cokoladni.photo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2.5"
          >
            <span className="font-[family-name:var(--font-body)] text-[0.55rem] uppercase tracking-[0.32em] text-paper-muted/80">
              Powered by
            </span>
            <span className="flex items-center gap-2.5">
              <Image
                src="/images/cokoladni-logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.55)]"
              />
              <span className="neon-cokoladni font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.12em] sm:text-base">
                ČOKOLADNI AJ TI
              </span>
            </span>
          </a>
        </footer>
      </div>
    </main>
  );
}
