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
      currency.symbol
        ? `${currency.name} (${currency.symbol})`
        : currency.name
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
      }
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

  // This page fetches fresh data every time.
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,capital,region,subregion,population,languages,currencies,timezones,maps`,
    {
      cache: "no-store",
    }
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
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/countries"
          className="text-sm font-semibold text-[#001954] hover:underline"
        >
          ← Back to Countries
        </Link>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <img
            src={country.flags?.png || country.flags?.svg}
            alt={country.name?.common || "Country flag"}
            className="h-full w-full rounded-2xl object-cover"
          />
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#001954]">
            Country Details
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {country.name?.common}
          </h1>

          <p className="mt-2 text-slate-600">
            Official Name: {country.name?.official || "Not available"}
          </p>

          <dl className="mt-8 grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Capital
              </dt>
              <dd className="mt-1 text-slate-900">
                {country.capital?.[0] || "No capital"}
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Region
              </dt>
              <dd className="mt-1 text-slate-900">
                {country.region || "Not available"}
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Subregion
              </dt>
              <dd className="mt-1 text-slate-900">
                {country.subregion || "Not available"}
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Population
              </dt>
              <dd className="mt-1 text-slate-900">
                {country.population?.toLocaleString() || "Not available"}
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Languages
              </dt>
              <dd className="mt-1 text-slate-900">
                {formatLanguages(country.languages)}
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Currencies
              </dt>
              <dd className="mt-1 text-slate-900">
                {formatCurrencies(country.currencies)}
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Time Zones
              </dt>
              <dd className="mt-1 text-slate-900">
                {country.timezones?.join(", ") || "Not available"}
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#001954] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2f78]"
            >
              View on Google Maps
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}