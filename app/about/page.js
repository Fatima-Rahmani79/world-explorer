export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#001954]">
          About
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About World Explorer
        </h1>
        <p className="mt-4 text-slate-600">
          World Explorer is a Next.js project that uses real API data to display
          countries around the world.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              What this project does
            </h2>
            <p className="mt-2 text-slate-600">
              It lets users browse countries, open a separate details page for
              each country, and search countries by name.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">API Used</h2>
            <p className="mt-2 text-slate-600">REST Countries API</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Next.js topics practiced
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>App Router</li>
              <li>File-based routing</li>
              <li>Shared layouts</li>
              <li>Server components</li>
              <li>Client components</li>
              <li>Data fetching with async/await</li>
              <li>Static and dynamic rendering</li>
              <li>Caching in Next.js</li>
              <li>Dynamic routes</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
