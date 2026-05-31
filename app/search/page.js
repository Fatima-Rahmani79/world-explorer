import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {
  let filteredCountries = [];
  let loadError = false;

  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch countries: ${res.status}`);
    }

    const data = await res.json();

    const countries = Array.isArray(data) ? data : [];

    filteredCountries = countries
      .filter((country) => country?.name?.common && country?.cca3)
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  } catch (error) {
    console.error(error);
    loadError = true;
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
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300">
          Country search
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Search any country instantly.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
          Find a country by name, view the details, and browse curated results
          in a clean, premium layout.
        </p>
      </section>

      <div className="mt-10">
        <CountrySearch countries={filteredCountries} />
      </div>
    </main>
  );
}
