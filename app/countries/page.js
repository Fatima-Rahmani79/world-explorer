import CountryCard from "@/components/CountryCard";

export default async function CountriesPage() {
  let sortedCountries = [];
  let loadError = null;

  try {
    // This page can be statically rendered and cached.
    // Request a limited set of fields to reduce payload and improve reliability.
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
          Explore Countries
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Browse country flags, capitals, regions, and populations. Open any
          country to see more details.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sortedCountries.slice(0, 20).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </section>
    </main>
  );
}
