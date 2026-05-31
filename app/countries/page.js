import CountryCard from "@/components/CountryCard";

export default async function CountriesPage() {
  let sortedCountries = [];
  let loadError = null;

  try {
    const url =
      "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region,population";

    const res = await fetch(url, {
      cache: "force-cache",
      headers: {
        Accept: "application/json",
        "User-Agent": "world-explorer/1.0 (+https://example.com)",
      },
    });

    if (!res.ok) {
      let body = "";
      try {
        body = await res.text();
      } catch (err) {
        body = "<unable to read body>";
      }

      throw new Error(
        `Failed to fetch countries: ${res.status} ${res.statusText} - ${body}`,
      );
    }

    const data = await res.json();

    const countries = Array.isArray(data) ? data : [];

    sortedCountries = countries
      .filter((country) => country?.name?.common && country?.cca3)
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  } catch (error) {
    console.error(error);
    loadError = error;
  }

  if (loadError) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-[2rem] bg-red-950/90 p-6 text-red-300 ring-1 ring-red-500/20">
          Failed to load countries.
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.8)] ring-1 ring-white/10 backdrop-blur-xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-violet-300">
              Country explorer
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Explore countries with premium detail cards.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
              Browse the world with beautifully styled cards that show flags,
              capitals, regions, and populations at a glance.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4 sm:mt-0">
            <div className="rounded-3xl bg-slate-900/80 px-5 py-4 text-center ring-1 ring-white/10">
              <p className="text-sm text-slate-400">Countries loaded</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {sortedCountries.length}
              </p>
            </div>
            <div className="rounded-3xl bg-violet-500/10 px-5 py-4 text-center ring-1 ring-violet-500/20">
              <p className="text-sm text-violet-200">UI style</p>
              <p className="mt-2 text-2xl font-semibold text-white">Modern</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {sortedCountries.slice(0, 24).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </section>
    </main>
  );
}
