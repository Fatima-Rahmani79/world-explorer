import CountryCard from "@/components/CountryCard";

export default async function CountriesPage() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-ache",
  });

  const countries = await res.json();

  const sortedCountries = countries
    .filter((country) => country?.name?.common && country?.cca3)
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <main clssName="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore Countries
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Browse country flags, capitals, regions, and populations. Open any
          country to see more details.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {sortedCountries.slice(0, 20).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </section>
    </main>
  );
}
