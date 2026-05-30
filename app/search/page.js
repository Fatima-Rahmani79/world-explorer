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
        <div className="rounded-2xl bg-red-50 p-6 text-red-700">
          Failed to load countries.
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Search Countries
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Search by country name and explore matching results instantly.
        </p>
      </section>

      <CountrySearch countries={filteredCountries} />
    </main>
  );
}
