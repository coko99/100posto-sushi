export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-ink text-rice">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 anim-drift"
      >
        <div className="absolute -left-[20%] top-[-10%] h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,rgba(122,154,58,0.22),transparent_68%)] anim-pulse" />
        <div className="absolute -right-[15%] bottom-[-20%] h-[80vmin] w-[80vmin] rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.16),transparent_70%)]" />
        <div className="absolute left-[30%] top-[40%] h-[50vmin] w-[50vmin] rounded-full bg-[radial-gradient(circle,rgba(196,92,62,0.1),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay anim-grain"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(243,239,230,0.35) 2px, rgba(243,239,230,0.35) 3px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="flex items-center justify-between px-6 pt-7 sm:px-10 sm:pt-9">
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.35em] text-rice-muted anim-rise">
            Sushi Bar
          </p>
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.35em] text-gold-soft anim-rise anim-rise-delay-1">
            Coming soon
          </p>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-10 text-center sm:px-10">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,18vw,11rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-rice anim-rise anim-rise-delay-1">
            100%
          </h1>

          <div className="mt-5 h-px w-24 origin-left bg-gradient-to-r from-wasabi-bright via-gold to-transparent anim-line sm:w-32" />

          <p className="mt-7 max-w-md font-[family-name:var(--font-body)] text-lg leading-relaxed text-rice-muted sm:text-xl anim-rise anim-rise-delay-2">
            Sveže. Precizno. Uskoro otvaramo.
          </p>

          <p className="mt-10 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.28em] text-gold-soft anim-rise anim-rise-delay-3">
            Stay tuned
          </p>
        </section>

        <footer className="px-6 pb-8 text-center sm:px-10">
          <p className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-rice-muted/70">
            100% Sushi Bar
          </p>
        </footer>
      </div>
    </main>
  );
}
