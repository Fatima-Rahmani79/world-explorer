"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="grid gap-5">
      <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5">
        <input
          type="text"
          placeholder="Search for a country like Afghanistan, Japan, or Germany..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#001954] focus:ring-4 focus:ring-[#001954]/10"
        />
      </div>

      <p className="text-sm text-slate-600">
        {query
          ? `${filteredCountries.length} result(s) found`
          : "Start typing to search countries"}
      </p>

      <div className="grid gap-4">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <article
              key={country.cca3}
              className="grid gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:grid-cols-[110px_1fr]"
            >
              <img
                src={country.flags?.png || country.flags?.svg}
                alt={country.name?.common || "Country flag"}
                className="h-28 w-full rounded-2xl object-cover bg-slate-100 sm:h-full sm:w-[110px]"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-lg font-semibold text-slate-900">
                  {country.name?.common}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Capital: {country.capital?.[0] || "No capital"} | Region:{" "}
                  {country.region || "Not available"}
                </p>
                <Link
                  href={`/countries/${country.cca3}`}
                  className="mt-3 inline-flex w-fit text-sm font-semibold text-[#001954] hover:underline"
                >
                  Open details
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="rounded-2xl bg-white p-4 text-slate-600 shadow-sm ring-1 ring-slate-200">
            No countries found.
          </p>
        )}
      </div>
    </section>
  );
}
