import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.8)] ring-1 ring-white/10 backdrop-blur-xl sm:p-12 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-violet-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-violet-200 shadow-sm">
            Portfolio-ready UI
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Discover countries with a modern explorer experience.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            World Explorer transforms country search and data browsing into an
            elegant, high-end demo application featuring responsive design,
            polished cards, and intuitive navigation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/countries"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]"
            >
              Start exploring
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Search countries
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-0 lg:w-[420px]">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl shadow-slate-950/50 ring-1 ring-white/10">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-950/95 p-5 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Featured countries
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  24 curated flags, facts, and insights
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Beautiful cards, crisp typography, and a premium exploration
                  experience built for a polished portfolio project.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Data source</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    REST Countries API
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Built with</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Next.js + Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.9)] ring-1 ring-white/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
            Explore
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Browse world data
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Discover flags, capitals, populations, currencies, and more through
            a sleek, data-rich interface.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.9)] ring-1 ring-white/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
            Search
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Instant filtering
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Type any country name and watch results appear immediately with a
            clear and modern search experience.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.9)] ring-1 ring-white/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
            Details
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Beautiful country pages
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Every country has a premium detail screen with maps, stats, and
            currency information for a polished case study.
          </p>
        </article>
      </section>
    </main>
  );
}
