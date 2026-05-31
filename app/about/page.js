export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.8)] ring-1 ring-white/10 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-violet-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-violet-200 shadow-sm">
            About this project
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            World Explorer is a showcase-ready data experience.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            This project demonstrates polished UI design, thoughtful information
            architecture, and responsive country data browsing using Next.js and
            the REST Countries API.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Goal
              </p>
              <p className="mt-3 text-slate-200">
                Create a portfolio-quality experience with an elegant global
                data explorer.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Impact
              </p>
              <p className="mt-3 text-slate-200">
                Turn API-driven country data into a compelling and memorable UI
                demonstration.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-900/80 p-8 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold text-white">
            Project highlights
          </h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Architecture
              </p>
              <p className="font-semibold">
                Next.js App Router with dynamic country pages.
              </p>
            </li>
            <li className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                UX
              </p>
              <p className="font-semibold">
                Responsive layout, polished cards, and modern typography.
              </p>
            </li>
            <li className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Data
              </p>
              <p className="font-semibold">
                Live country facts, flags, currency and timezone details.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
