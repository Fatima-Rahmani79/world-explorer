import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache",
  });

  const countries = await res.json();

  const filteredCountries = countries
    .filter((country) => country?.name?.common && country?.cca3)
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

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
