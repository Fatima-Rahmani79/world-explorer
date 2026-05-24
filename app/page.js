import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="gris gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:grid-cols-2 lg:p-10">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#001954]">
            World Explorer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Explore countries around the world
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Learn about flags, capitals, populations, currencies, languages,
            time zones, and maps with real data from the REST Countries API.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/countries"
              className="inline-flex items-center justify-center rounded-full bg-[#001954] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2f78]"
            >
              Explore Countries
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#001954] hover:text-[#001954]"
            >
              Search Countries
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">
            What you can do
          </h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Browse countries</li>
            <li>Open details page</li>
            <li>Search by country name</li>
            <li>See maps and country facts</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
