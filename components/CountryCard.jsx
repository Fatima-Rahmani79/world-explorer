import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-35px_rgba(124,58,237,0.45)]">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/80">
        <img
          src={country.flags?.png || country.flags?.svg}
          alt={country.name?.common || "Country flag"}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-4 py-4 text-slate-100">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
            {country.region || "Region"}
          </p>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            {country.name?.common}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {country.capital?.[0] || "Capital unavailable"}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/70 p-3 ring-1 ring-white/10">
            <p className="text-[0.75rem] uppercase tracking-[0.24em] text-slate-500">
              Population
            </p>
            <p className="mt-2 font-semibold text-white">
              {country.population ? country.population.toLocaleString() : "—"}
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900/70 p-3 ring-1 ring-white/10">
            <p className="text-[0.75rem] uppercase tracking-[0.24em] text-slate-500">
              Capital
            </p>
            <p className="mt-2 font-semibold text-white">
              {country.capital?.[0] || "—"}
            </p>
          </div>
        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
