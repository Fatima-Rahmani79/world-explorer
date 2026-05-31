import Link from "next/link";
import { notFound } from "next/navigation";

function formatLanguages(languages) {
  if (!languages) return "Not available";
  return Object.values(languages).join(", ");
}

function formatCurrencies(currencies) {
  if (!currencies) return "Not available";

  return Object.values(currencies)
    .map((currency) =>
      currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name,
    )
    .join(", ");
}

export async function generateMetadata({ params }) {
  const { code } = await params;

  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return {
        title: "Country Details | World Explorer",
      };
    }

    const data = await res.json();
    const country = Array.isArray(data) ? data[0] : data;

    return {
      title: `${country?.name?.common || "Country"} | World Explorer`,
      description: `Details about ${country?.name?.common || "Country"}`,
    };
  } catch {
    return {
      title: "Country Details | World Explorer",
    };
  }
}

export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,capital,region,subregion,population,languages,currencies,timezones,maps`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const country = Array.isArray(data) ? data[0] : data;

  if (!country) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/countries"
          className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-900"
        >
          ← Back to Countries
        </Link>
      </div>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.8)] ring-1 ring-white/10">
          <img
            src={country.flags?.png || country.flags?.svg}
            alt={country.name?.common || "Country flag"}
            className="h-[420px] w-full object-cover"
          />
          <div className="space-y-3 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-violet-300">
              Flag preview
            </p>
            <p className="text-base leading-7 text-slate-300">
              Explore the authentic national flag and discover more about this
              country in the interactive details panel.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.8)] ring-1 ring-white/10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-violet-300">
              Country details
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {country.name?.common}
            </h1>
            <p className="text-slate-400">
              Official name: {country.name?.official || "Not available"}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Capital",
                value: country.capital?.[0] || "No capital",
              },
              { label: "Region", value: country.region || "Not available" },
              {
                label: "Subregion",
                value: country.subregion || "Not available",
              },
              {
                label: "Population",
                value: country.population?.toLocaleString() || "Not available",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Languages
              </p>
              <p className="mt-3 text-base text-slate-200">
                {formatLanguages(country.languages)}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Currencies
              </p>
              <p className="mt-3 text-base text-slate-200">
                {formatCurrencies(country.currencies)}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Timezones
            </p>
            <p className="mt-3 text-base text-slate-200">
              {country.timezones?.join(", ") || "Not available"}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              View on Google Maps
            </a>
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Search more countries
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
