import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={country.flags?.png || country.flags?.svg}
        alt={country.name?.common || "Country flag"}
        className="h-44 w-full object-cover bg-slate-100"
      />

      <div className="flex h-full flex-col p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {country.name?.common}
        </h2>

        <div className="mt-3 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Capital:</span>{" "}
            {country.capital?.[0] || "No capital"}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Region:</span>{" "}
            {country.region || "Not available"}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Population:</span>{" "}
            {country.population
              ? country.population.toLocaleString()
              : "Not available"}
          </p>
        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-[#001954] transition hover:bg-[#001954] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
